/* ==========================================================================
   Jeong · K-food kitchen — recipes, servings scaling, grocery notes
   ========================================================================== */
(function () {
  'use strict';
  const J = window.J;
  const $ = J.$;
  const RECIPES = window.JEONG_RECIPES;
  const AISLE = window.JEONG_AISLE_PHRASES;

  const state = {
    id: RECIPES[0].id,
    servings: 2,
    checked: new Set()
  };

  const WHERE = {
    korean: { label: 'Korean mart', cls: 'korean' },
    asian: { label: 'Asian mart', cls: 'asian' },
    any: { label: 'Any supermarket', cls: 'any' }
  };

  function current() {
    return RECIPES.find((r) => r.id === state.id) || RECIPES[0];
  }

  /* amount formatting: 0.25 -> ¼, 1.5 -> 1½ … */
  function fmtQty(value, unit) {
    if (value === null || value === undefined) return 'to taste';
    let v = value;
    if (unit === 'g') v = v >= 100 ? Math.round(v / 5) * 5 : Math.round(v);
    else if (unit === 'ml') v = Math.round(v / 10) * 10;
    else if (unit === 'ea' || unit === 'block' || unit === 'sheet' || unit === 'bowl') v = Math.round(v * 2) / 2;
    else v = Math.round(v * 4) / 4;

    const whole = Math.floor(v + 1e-9);
    const rem = v - whole;
    const map = [
      [0.25, '¼', 0.125, 0.375],
      [0.5, '½', 0.375, 0.625],
      [0.75, '¾', 0.625, 0.875]
    ];
    let frac = '';
    for (const [val, glyph, lo, hi] of map) {
      if (rem >= lo && rem < hi) { frac = glyph; break; }
    }
    let text;
    if (whole === 0 && frac) text = frac;
    else if (!frac) text = String(Math.round(v));
    else text = String(whole) + frac;
    if (v === 0) text = 'a pinch';
    const labels = { ea: '', block: 'block', bowl: 'bowl', sheet: 'sheet' };
    let label = labels[unit] !== undefined ? labels[unit] : unit;
    if (label && v > 1 && !['g', 'ml', 'tbsp', 'tsp'].includes(unit)) label += 's';
    return `${text} ${label}`.trim();
  }

  function scaleQty(ing) {
    if (ing.qty === null || ing.qty === undefined) return null;
    const v = (ing.qty * state.servings) / current().base;
    return fmtQty(v, ing.unit);
  }

  function renderChips() {
    const wrap = $('#recipeChips');
    wrap.innerHTML = RECIPES.map(
      (r) => `<button class="chip" type="button" data-id="${r.id}" aria-pressed="${r.id === state.id}"><span class="kr" lang="ko">${r.ko}</span><span>${r.en}</span></button>`
    ).join('');
    wrap.querySelectorAll('.chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.id = btn.dataset.id;
        state.servings = current().base;
        renderChips();
        renderRecipe();
      });
    });
  }

  function shopNotes(r) {
    const tips = r.ingredients.filter((i) => i.tip).slice(0, 3);
    if (!tips.length) return '';
    return `<div class="shop-notes">${tips
      .map(
        (t) => `<div class="shop-note"><span class="mark">·</span><span><b style="font-weight:400;font-family:var(--kr-serif)" lang="ko">${J.escapeHtml(t.ko)}</b> — ${J.escapeHtml(t.tip)}</span></div>`
      )
      .join('')}</div>`;
  }

  function renderRecipe() {
    const r = current();
    const body = $('#recipeBody');
    const ingHtml = r.ingredients
      .map((ing, i) => {
        const key = r.id + ':' + i;
        const checked = state.checked.has(key);
        const w = WHERE[ing.where] || WHERE.any;
        return `<li class="ing">
          <input type="checkbox" id="ing-${r.id}-${i}" data-key="${key}" ${checked ? 'checked' : ''}>
          <label class="box" for="ing-${r.id}-${i}" aria-label="check ${J.escapeHtml(ing.en)}"></label>
          <span class="nm">
            <span class="kr" lang="ko">${J.escapeHtml(ing.ko)}</span><span class="ro">${J.escapeHtml(ing.ro)}</span>
            <span class="en">${J.escapeHtml(ing.en)}${ing.note ? ' · ' + J.escapeHtml(ing.note) : ''}<span class="where ${w.cls}">${w.label}</span></span>
          </span>
          <span class="qty">${scaleQty(ing)}</span>
        </li>`;
      })
      .join('');

    body.innerHTML = `
      <div class="recipe-head">
        <div>
          <h3 class="recipe-title" lang="ko">${r.ko}<em>${r.ro}</em></h3>
          <p class="recipe-tagline">${r.tag}</p>
          <p class="recipe-intro">${r.intro}</p>
        </div>
        <div class="recipe-meta">
          <span class="pill solid">${r.time}</span>
          <span class="pill">${r.level}</span>
          <span class="pill">${r.ingredients.length} ingredients</span>
        </div>
      </div>

      <div class="servings">
        <span class="label">Cooking for</span>
        <div class="stepper">
          <button type="button" data-step="-1" aria-label="fewer servings">−</button>
          <span class="val"><b>${state.servings}</b> ${state.servings === 1 ? 'person' : 'people'}</span>
          <button type="button" data-step="1" aria-label="more servings">+</button>
        </div>
        <span class="scale-note">${state.servings === r.base ? `the original ${r.base}-serving recipe` : `re-measured from the ${r.base}-serving recipe`}</span>
      </div>

      <div class="recipe-cols">
        <div>
          <div class="col-title"><span>Ingredients</span><button class="btn btn-outline btn-sm" type="button" id="btnCopyList">Copy shopping list</button></div>
          <ul class="ing-list">${ingHtml}</ul>
          <div class="aisle">
            <div class="col-title"><span>Reading the shelf</span></div>
            ${AISLE.map(
              (a) => `<div class="aisle-row">
                <span class="ko" lang="ko">${a.ko}</span>
                <span><span class="ro">${a.ro}</span><span class="en">${a.en} <span class="muted">· ${a.note}</span></span></span>
              </div>`
            ).join('')}
          </div>
        </div>
        <div>
          <div class="col-title"><span>Method</span><span class="muted" style="font-size:10px">${state.servings} ${state.servings === 1 ? 'serving' : 'servings'}</span></div>
          <ol class="steps">${r.steps.map((s) => `<li><span>${s}</span></li>`).join('')}</ol>
          <div class="aisle">
            <div class="col-title"><span>At the shop</span></div>
            ${shopNotes(r)}
          </div>
          <div class="kitchen-foot">
            <a class="btn btn-outline btn-sm" href="https://www.youtube.com/@KFoodFarmKitchen" target="_blank" rel="noopener noreferrer">Watch it cooked on YouTube</a>
            <span class="muted" style="font-size:11.5px">Ingredients are what a Korean kitchen actually keeps.</span>
          </div>
        </div>
      </div>`;

    body.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener('change', () => {
        if (cb.checked) state.checked.add(cb.dataset.key);
        else state.checked.delete(cb.dataset.key);
      });
    });
    body.querySelectorAll('[data-step]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dir = Number(btn.dataset.step);
        state.servings = Math.min(4, Math.max(1, state.servings + dir));
        renderRecipe();
      });
    });
    const copyBtn = body.querySelector('#btnCopyList');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const lines = [`${r.ko} ${r.ro} — shopping list for ${state.servings}`];
        r.ingredients.forEach((ing) => {
          const w = WHERE[ing.where] || WHERE.any;
          lines.push(`• ${ing.ko} (${ing.ro}) — ${scaleQty(ing)}  [${w.label}]`);
        });
        lines.push('', 'From jeong · a little Korea, every day');
        const ok = await J.copyText(lines.join('\n'));
        J.toast(ok ? 'Shopping list copied.' : 'Could not copy the list.');
      });
    }
  }

  renderChips();
  renderRecipe();
})();
