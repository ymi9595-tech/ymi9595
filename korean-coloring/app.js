/* =========================================================
   Danbi Lab · free Korean coloring pages — coloring table
   Vanilla JS, no dependencies, no network after first paint.
   ========================================================= */
(function () {
  'use strict';

  var SAMPLES = [
    { slug: 'jangdokdae', title: 'Jangdokdae jars', img: 'img/jangdokdae.webp' },
    { slug: 'hanok-tea', title: 'Hanok tea table', img: 'img/hanok-tea.webp' },
    { slug: 'ricefield', title: 'Golden rice field', img: 'img/ricefield.webp' }
  ];

  var PALETTE = [
    '#FFFFFF', '#F7E4CB', '#F0CE95', '#E3B25E', '#D79163', '#C4715A',
    '#AC5A45', '#8A4A3B', '#F6CFCC', '#EFAFAE', '#DB8C99', '#B06B7C',
    '#CBD8C2', '#A5BE9B', '#7E9C74', '#55745A', '#BCD8D5', '#8DBFBD',
    '#6D9EA8', '#4E7C9B', '#CFD4E8', '#9C9BC2', '#8E7A68', '#4A423B'
  ];

  var BARRIER = 205;          // luminance (0-255) below this stops a fill
  var TOL = 14;               // colour tolerance when re-filling a region
  var MAX_PIXEL_ACTION = 320000;

  var db = {
    W: 0, H: 0,
    line: null, lctx: null,
    color: null, cctx: null,
    view: null, vctx: null,
    mask: null, visited: null, stack: null,
    imgs: [],
    cur: 0,
    tool: 'fill',
    paint: '#E3B25E',
    size: 22,
    drawing: false,
    stroke: null,
    loaded: false,
    works: SAMPLES.map(function () { return { actions: [], redo: [] }; })
  };

  var el = {};
  var toastTimer = null;
  var tapStart = null;   // touch tapping to fill

  /* ------------------------------------------------------ helpers */
  function $(id) { return document.getElementById(id); }

  function hexToU32(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var r = parseInt(h.slice(0, 2), 16);
    var g = parseInt(h.slice(2, 4), 16);
    var b = parseInt(h.slice(4, 6), 16);
    return (255 << 24) | (b << 16) | (g << 8) | r;
  }

  function toast(msg) {
    if (!el.toast) return;
    el.toast.textContent = msg;
    el.toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.toast.classList.remove('is-on'); }, 2600);
  }

  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.decoding = 'async';
      img.onload = function () { resolve(img); };
      img.onerror = function () { reject(new Error('could not load ' + src)); };
      img.src = src;
    });
  }

  /* ------------------------------------------------------ canvas */
  function setupLayers(img) {
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    if (db.W === w && db.H === h) return;

    db.W = w; db.H = h;

    db.line = document.createElement('canvas');
    db.line.width = w; db.line.height = h;
    db.lctx = db.line.getContext('2d', { willReadFrequently: true });

    db.color = document.createElement('canvas');
    db.color.width = w; db.color.height = h;
    db.cctx = db.color.getContext('2d', { willReadFrequently: true });

    db.view.width = w; db.view.height = h;
    db.vctx = db.view.getContext('2d');

    db.mask = new Uint8Array(w * h);
    db.visited = new Uint8Array(w * h);
    db.stack = new Int32Array(w * h);
  }

  function computeMask() {
    var w = db.W, h = db.H;
    var data = db.lctx.getImageData(0, 0, w, h).data;
    var mask = db.mask;
    for (var i = 0, p = 0; i < data.length; i += 4, p++) {
      // line art is greyscale; the red channel carries it
      mask[p] = data[i] < BARRIER ? 1 : 0;
    }
  }

  function compose() {
    var v = db.vctx, w = db.W, h = db.H;
    v.save();
    v.globalCompositeOperation = 'source-over';
    v.clearRect(0, 0, w, h);
    v.fillStyle = '#ffffff';
    v.fillRect(0, 0, w, h);
    v.drawImage(db.color, 0, 0);
    v.globalCompositeOperation = 'multiply';
    v.drawImage(db.line, 0, 0);
    v.restore();
  }

  /* ------------------------------------------------------ fill */
  function floodFill(sx, sy, hex) {
    var w = db.W, h = db.H, mask = db.mask;
    if (sx < 0 || sy < 0 || sx >= w || sy >= h) return null;
    var start = sy * w + sx;
    if (mask[start]) return null;

    var imgData = db.cctx.getImageData(0, 0, w, h);
    var u32 = new Uint32Array(imgData.data.buffer);
    var target = u32[start];
    var nc = hexToU32(hex);
    if (target === nc) return null;

    var tA = target >>> 24, tR = target & 255, tG = (target >>> 8) & 255, tB = (target >>> 16) & 255;
    var same;
    if (tA === 0) {
      same = function (v) { return v === 0; };
    } else {
      same = function (v) {
        if ((v >>> 24) === 0) return false;
        if (Math.abs((v & 255) - tR) > TOL) return false;
        if (Math.abs(((v >>> 8) & 255) - tG) > TOL) return false;
        if (Math.abs(((v >>> 16) & 255) - tB) > TOL) return false;
        return true;
      };
    }

    var visited = db.visited, stack = db.stack;
    visited.fill(0);
    var sp = 0;
    stack[sp++] = start;
    visited[start] = 1;

    var out = new Int32Array(4096);
    var n = 0;
    var x, q;

    while (sp > 0) {
      var p = stack[--sp];
      if (mask[p]) continue;
      if (!same(u32[p])) continue;

      if (n === out.length) {
        var grown = new Int32Array(out.length * 2);
        grown.set(out);
        out = grown;
      }
      out[n++] = p;

      x = p % w;
      if (x > 0) { q = p - 1; if (!visited[q]) { visited[q] = 1; stack[sp++] = q; } }
      if (x < w - 1) { q = p + 1; if (!visited[q]) { visited[q] = 1; stack[sp++] = q; } }
      if (p >= w) { q = p - w; if (!visited[q]) { visited[q] = 1; stack[sp++] = q; } }
      if (p < w * (h - 1)) { q = p + w; if (!visited[q]) { visited[q] = 1; stack[sp++] = q; } }
    }

    if (!n) return null;

    for (var i = 0; i < n; i++) u32[out[i]] = nc;
    db.cctx.putImageData(imgData, 0, 0);
    return { idx: out.slice(0, n), n: n };
  }

  function paintRegion(sx, sy, hex, record) {
    var r = floodFill(sx, sy, hex);
    if (!r) return false;
    if (record) {
      var work = db.works[db.cur];
      var action = r.n <= MAX_PIXEL_ACTION
        ? { type: 'fill', idx: r.idx, color: hex }
        : { type: 'fill', x: sx, y: sy, color: hex };
      pushAction(work, action);
    }
    compose();
    return true;
  }

  function pushAction(work, action) {
    work.actions.push(action);
    work.redo.length = 0;
    if (work.actions.length > 80) work.actions.shift();
  }

  /* ------------------------------------------------------ strokes */
  function strokeProps(ctx, a) {
    ctx.globalCompositeOperation = a.erase ? 'destination-out' : 'source-over';
    ctx.strokeStyle = a.color;
    ctx.fillStyle = a.color;
    ctx.lineWidth = a.w;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }

  function drawStroke(a) {
    var c = db.cctx;
    var pts = a.pts;
    c.save();
    strokeProps(c, a);
    if (pts.length === 1) {
      c.beginPath();
      c.arc(pts[0][0], pts[0][1], Math.max(a.w / 2, 1), 0, Math.PI * 2);
      c.fill();
    } else {
      c.beginPath();
      c.moveTo(pts[0][0], pts[0][1]);
      for (var i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
      c.stroke();
    }
    c.restore();
  }

  function drawSegment(a, p0, p1) {
    var c = db.cctx;
    c.save();
    strokeProps(c, a);
    c.beginPath();
    c.moveTo(p0[0], p0[1]);
    c.lineTo(p1[0], p1[1]);
    c.stroke();
    c.restore();
  }

  /* ------------------------------------------------------ history */
  function replay(a) {
    if (a.type === 'fill') {
      if (a.idx) {
        var imgData = db.cctx.getImageData(0, 0, db.W, db.H);
        var u32 = new Uint32Array(imgData.data.buffer);
        var nc = hexToU32(a.color);
        for (var i = 0; i < a.idx.length; i++) u32[a.idx[i]] = nc;
        db.cctx.putImageData(imgData, 0, 0);
      } else {
        floodFill(a.x, a.y, a.color);
      }
    } else if (a.type === 'stroke') {
      drawStroke(a);
    } else if (a.type === 'clear') {
      db.cctx.clearRect(0, 0, db.W, db.H);
    }
  }

  function rebuild() {
    var work = db.works[db.cur];
    db.cctx.clearRect(0, 0, db.W, db.H);
    for (var i = 0; i < work.actions.length; i++) replay(work.actions[i]);
    compose();
    updateHistoryButtons();
  }

  function undo() {
    var work = db.works[db.cur];
    if (!work.actions.length) return;
    work.redo.push(work.actions.pop());
    rebuild();
  }

  function redo() {
    var work = db.works[db.cur];
    if (!work.redo.length) return;
    var a = work.redo.pop();
    work.actions.push(a);
    replay(a);
    compose();
    updateHistoryButtons();
  }

  function clearPage() {
    var work = db.works[db.cur];
    if (!work.actions.length) { toast('The page is already blank.'); return; }
    pushAction(work, { type: 'clear' });
    db.cctx.clearRect(0, 0, db.W, db.H);
    compose();
    updateHistoryButtons();
    toast('A fresh page.');
  }

  function updateHistoryButtons() {
    var work = db.works[db.cur];
    el.undo.disabled = !work.actions.length;
    el.redo.disabled = !work.redo.length;
  }

  /* ------------------------------------------------------ pointer */
  function pointFromEvent(e, round) {
    var r = db.view.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width * db.W;
    var y = (e.clientY - r.top) / r.height * db.H;
    x = Math.max(0, Math.min(db.W - 1, round ? Math.floor(x) : x));
    y = Math.max(0, Math.min(db.H - 1, round ? Math.floor(y) : y));
    return [x, y];
  }

  function brushWidthInImage() {
    var r = db.view.getBoundingClientRect();
    var scale = r.width ? db.W / r.width : 1;
    return Math.max(2, db.size * scale);
  }

  function onDown(e) {
    if (!db.loaded) return;
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();

    if (e.pointerType === 'touch' && el.brushCursor) el.brushCursor.hidden = true;

    if (db.tool === 'fill') {
      if (e.pointerType === 'mouse') {
        fillAt(e);
      } else {
        // on touch, wait for the release so a swipe can still scroll the page
        tapStart = { x: e.clientX, y: e.clientY, id: e.pointerId };
      }
      return;
    }

    try { db.view.setPointerCapture(e.pointerId); } catch (err) { /* older browsers */ }

    var q = pointFromEvent(e, false);
    db.drawing = true;
    db.stroke = {
      type: 'stroke',
      pts: [q],
      w: brushWidthInImage(),
      color: db.paint,
      erase: db.tool === 'eraser'
    };
    drawStroke(db.stroke);
    compose();
  }

  function onMove(e) {
    if (!db.loaded) return;
    if (!db.drawing) { moveCursor(e); return; }
    e.preventDefault();

    var events = (e.getCoalescedEvents && e.getCoalescedEvents().length) ? e.getCoalescedEvents() : [e];
    var pts = db.stroke.pts;
    for (var i = 0; i < events.length; i++) {
      var q = pointFromEvent(events[i], false);
      var last = pts[pts.length - 1];
      if (Math.abs(q[0] - last[0]) < 0.6 && Math.abs(q[1] - last[1]) < 0.6) continue;
      drawSegment(db.stroke, last, q);
      pts.push(q);
    }
    compose();
    moveCursor(e);
  }

  function fillAt(e) {
    var p = pointFromEvent(e, true);
    if (paintRegion(p[0], p[1], db.paint, true)) updateHistoryButtons();
  }

  function onUp(e) {
    if (tapStart) {
      var moved = Math.hypot(e.clientX - tapStart.x, e.clientY - tapStart.y);
      var samePointer = e.pointerId === undefined || e.pointerId === tapStart.id;
      tapStart = null;
      if (samePointer && moved < 14) fillAt(e);
      return;
    }
    if (!db.drawing) return;
    db.drawing = false;
    var work = db.works[db.cur];
    if (db.stroke && db.stroke.pts.length) pushAction(work, db.stroke);
    db.stroke = null;
    updateHistoryButtons();
    try { db.view.releasePointerCapture(e.pointerId); } catch (err) { /* noop */ }
  }

  function moveCursor(e) {
    if (!el.brushCursor) return;
    if (e.pointerType !== 'mouse' || db.tool === 'fill') { el.brushCursor.hidden = true; return; }
    var frame = el.frame.getBoundingClientRect();
    var r = db.view.getBoundingClientRect();
    var size = Math.max(6, brushWidthInImage() / db.W * r.width);
    el.brushCursor.hidden = false;
    el.brushCursor.style.width = size + 'px';
    el.brushCursor.style.height = size + 'px';
    el.brushCursor.style.left = (e.clientX - frame.left) + 'px';
    el.brushCursor.style.top = (e.clientY - frame.top) + 'px';
  }

  /* ------------------------------------------------------ samples */
  function ensureImage(i) {
    if (db.imgs[i]) return Promise.resolve(db.imgs[i]);
    return loadImage(SAMPLES[i].img).then(function (img) {
      db.imgs[i] = img;
      return img;
    });
  }

  function showSample(i) {
    var img = db.imgs[i];
    if (!img) return;
    db.cur = i;
    db.loaded = false;
    el.loading.hidden = false;

    setupLayers(img);
    db.lctx.clearRect(0, 0, db.W, db.H);
    db.lctx.drawImage(img, 0, 0, db.W, db.H);
    computeMask();
    rebuild();

    db.loaded = true;
    el.loading.hidden = true;
    el.pad.setAttribute('aria-label',
      'Coloring page: ' + SAMPLES[i].title + '. Tap a region to fill it, or use the brush to paint.');

    Array.prototype.forEach.call(el.tabs, function (t) {
      var on = Number(t.dataset.i) === i;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });

    var hint = db.tool === 'fill'
      ? 'Tap a region to fill it.'
      : (db.tool === 'brush' ? 'Drag to paint.' : 'Drag to rub paint away.');
    el.stageHint.textContent = hint;
    updateToolUI();
    updateHistoryButtons();
  }

  function switchTo(i) {
    if (i === db.cur && db.loaded) return;
    if (db.imgs[i]) { showSample(i); return; }
    el.loading.hidden = false;
    ensureImage(i).then(function () { showSample(i); }).catch(function () {
      el.loading.hidden = true;
      toast('That page could not be loaded. Please check your connection.');
    });
  }

  /* ------------------------------------------------------ tools & palette */
  function setTool(tool) {
    db.tool = tool;
    updateToolUI();
    el.stageHint.textContent = tool === 'fill' ? 'Tap a region to fill it.'
      : tool === 'brush' ? 'Drag to paint.' : 'Drag to rub paint away.';
    if (tool === 'fill' && el.brushCursor) el.brushCursor.hidden = true;
    el.pad.classList.toggle('is-brush', tool !== 'fill');
    el.pad.classList.toggle('is-fill', tool === 'fill');
    el.sizeWrap.classList.toggle('is-off', tool === 'fill');
  }

  function updateToolUI() {
    [el.toolFill, el.toolBrush, el.toolEraser].forEach(function (b) {
      var on = b.dataset.tool === db.tool;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function setPaint(hex) {
    db.paint = hex;
    Array.prototype.forEach.call(el.palette.children, function (s) {
      s.classList.toggle('is-active', s.dataset.color && s.dataset.color.toLowerCase() === hex.toLowerCase());
    });
    if (db.tool === 'eraser') setTool('brush');
  }

  function buildPalette() {
    PALETTE.forEach(function (hex) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'swatch';
      b.dataset.color = hex;
      b.style.background = hex;
      b.setAttribute('aria-label', 'Color ' + hex);
      b.title = hex;
      b.addEventListener('click', function () { setPaint(hex); });
      el.palette.appendChild(b);
    });
    setPaint(db.paint);
  }

  /* ------------------------------------------------------ save & print */
  function savePng() {
    if (!db.loaded) return;
    var W = db.W, H = db.H;
    var foot = Math.round(W * 0.085);
    var c = document.createElement('canvas');
    c.width = W; c.height = H + foot;
    var x = c.getContext('2d');
    x.fillStyle = '#FFFCF6';
    x.fillRect(0, 0, c.width, c.height);
    x.drawImage(db.view, 0, 0);
    x.fillStyle = '#8A7B66';
    x.textAlign = 'center';
    x.font = '500 ' + Math.round(W * 0.021) + 'px "Plus Jakarta Sans", system-ui, sans-serif';
    x.fillText('Cozy Korean Countryside Coloring Book', W / 2, H + foot * 0.52);
    x.fillStyle = '#B0A492';
    x.font = '500 ' + Math.round(W * 0.015) + 'px "Plus Jakarta Sans", system-ui, sans-serif';
    x.fillText('free sample  ·  ymi9595-tech.github.io/ymi9595/korean-coloring/', W / 2, H + foot * 0.52 + W * 0.032);

    var name = 'danbi-lab-' + SAMPLES[db.cur].slug + '-my-coloring.png';
    if (c.toBlob) {
      c.toBlob(function (blob) {
        if (blob) downloadBlob(blob, name);
        else downloadDataUrl(c.toDataURL('image/png'), name);
      }, 'image/png');
    } else {
      downloadDataUrl(c.toDataURL('image/png'), name);
    }
    toast('Saved to your downloads.');
  }

  function downloadBlob(blob, name) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
  }

  function downloadDataUrl(url, name) {
    var a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function printPages(list) {
    var sheet = el.printSheet;
    sheet.innerHTML = '';
    var pending = list.length;

    list.forEach(function (i) {
      var page = document.createElement('div');
      page.className = 'print-page';
      var img = document.createElement('img');
      img.alt = SAMPLES[i].title + ' — free coloring page from Cozy Korean Countryside Coloring Book';
      var credit = document.createElement('div');
      credit.className = 'print-credit';
      credit.textContent = 'Cozy Korean Countryside Coloring Book  ·  Free sample  ·  Danbi Lab  ·  ymi9595-tech.github.io/ymi9595/korean-coloring/';
      img.onload = img.onerror = function () { if (--pending <= 0) go(); };
      img.src = SAMPLES[i].img;
      page.appendChild(img);
      page.appendChild(credit);
      sheet.appendChild(page);
    });

    var fired = false;
    function go() {
      if (fired) return;
      fired = true;
      setTimeout(function () { window.print(); }, 150);
    }
    setTimeout(go, 1200);
  }

  /* ------------------------------------------------------ init */
  function init() {
    el.pad = $('pad');
    el.frame = $('frame');
    el.loading = $('loading');
    el.tabs = document.querySelectorAll('.tab');
    el.palette = $('palette');
    el.customColor = $('customColor');
    el.sizeRange = $('sizeRange');
    el.sizeWrap = $('sizeWrap');
    el.sizePreview = $('sizePreview');
    el.toolFill = $('tool-fill');
    el.toolBrush = $('tool-brush');
    el.toolEraser = $('tool-eraser');
    el.undo = $('btn-undo');
    el.redo = $('btn-redo');
    el.clear = $('btn-clear');
    el.save = $('btn-save');
    el.print = $('btn-print');
    el.printAll = $('btn-print-all');
    el.stageHint = $('stageHint');
    el.brushCursor = $('brushCursor');
    el.printSheet = $('printSheet');
    el.toast = $('toast');

    db.view = el.pad;
    db.vctx = el.pad.getContext('2d');

    buildPalette();
    setTool('fill');

    el.undo.addEventListener('click', undo);
    el.redo.addEventListener('click', redo);
    el.clear.addEventListener('click', clearPage);
    el.save.addEventListener('click', savePng);
    el.print.addEventListener('click', function () { printPages([db.cur]); });
    if (el.printAll) el.printAll.addEventListener('click', function () { printPages([0, 1, 2]); });

    el.toolFill.addEventListener('click', function () { setTool('fill'); });
    el.toolBrush.addEventListener('click', function () { setTool('brush'); });
    el.toolEraser.addEventListener('click', function () { setTool('eraser'); });

    el.customColor.addEventListener('input', function () { setPaint(el.customColor.value); });

    el.sizeRange.addEventListener('input', function () {
      db.size = Number(el.sizeRange.value);
      el.sizePreview.style.width = Math.max(4, Math.min(22, db.size * 0.45)) + 'px';
      el.sizePreview.style.height = el.sizePreview.style.width;
      if (db.tool === 'fill') { /* size only matters for the brush */ }
    });

    Array.prototype.forEach.call(el.tabs, function (t) {
      t.addEventListener('click', function () { switchTo(Number(t.dataset.i)); });
    });

    el.pad.addEventListener('pointerdown', onDown);
    el.pad.addEventListener('pointermove', onMove);
    el.pad.addEventListener('pointerup', onUp);
    el.pad.addEventListener('pointercancel', function (e) { tapStart = null; onUp(e); });
    el.pad.addEventListener('pointerleave', function () { if (el.brushCursor) el.brushCursor.hidden = true; });
    el.pad.addEventListener('contextmenu', function (e) { e.preventDefault(); });

    document.addEventListener('keydown', function (e) {
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) redo(); else undo();
      }
    });

    window.addEventListener('resize', function () {
      if (el.brushCursor) el.brushCursor.hidden = true;
    });

    el.loading.hidden = false;
    ensureImage(0)
      .then(function () { showSample(0); })
      .catch(function () {
        el.loading.hidden = true;
        toast('The page could not be loaded. Please check your connection.');
      })
      .then(function () {
        // warm the other two pages once the first one is usable
        var warm = function () { ensureImage(1).then(function () { ensureImage(2); }).catch(function () {}); };
        if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 4000 });
        else setTimeout(warm, 2500);
      });

    window.__coloringReady = true;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
