(() => {
  'use strict';

  const KG = window.KNOWLEDGE_GRAPH;
  if (!KG) throw new Error('window.KNOWLEDGE_GRAPH 未加载');

  const appShell = document.querySelector('.app-shell');
  KG.width = 22000;
  const laneLayout = { top: 160, minHeight: 360, bottom: 240, padding: 42, stackGap: 24 };
  KG.lanes.forEach((lane, index) => {
    lane._height = laneLayout.minHeight;
    lane.y = laneLayout.top + laneLayout.minHeight / 2 + index * laneLayout.minHeight;
  });
  KG.height = laneLayout.top + KG.lanes.length * laneLayout.minHeight + laneLayout.bottom;

  const svg = document.getElementById('graphSvg');
  const viewport = document.getElementById('viewport');
  const layers = {
    stage: document.getElementById('stageLayer'),
    lane: document.getElementById('laneLayer'),
    axis: document.getElementById('axisLayer'),
    link: document.getElementById('linkLayer'),
    node: document.getElementById('nodeLayer')
  };

  const byId = new Map(KG.nodes.map(n => [n.id, n]));
  const lanes = new Map(KG.lanes.map(l => [l.id, l]));
  const stages = new Map(KG.stages.map(s => [s.id, s]));
  const groups = new Map(KG.groups.map(g => [g.id, g]));
  const typeNames = KG.typeNames || KG.typeLabels || {};
  const relationNames = KG.relationNames || KG.relationLabels || {};

  const margin = { left: 360, right: 160, top: 78, bottom: 120 };
  const state = {
    scale: 0.22,
    tx: 40,
    ty: 20,
    dragging: false,
    dragStart: null,
    selectedId: null,
    highlightMode: 'direct',
    visibleNodes: new Set(),
    visibleLinks: new Set(),
    filter: {
      text: '',
      types: new Set(), lanes: new Set(), stages: new Set(), relations: new Set(),
      yearMin: KG.time.start,
      yearMax: KG.time.end
    }
  };

  const els = {
    nodeCount: document.getElementById('nodeCount'), linkCount: document.getElementById('linkCount'), yearRange: document.getElementById('yearRange'),
    statusText: document.getElementById('statusText'), searchBox: document.getElementById('searchBox'), yearMin: document.getElementById('yearMin'), yearMax: document.getElementById('yearMax'),
    typeFilter: document.getElementById('typeFilter'), laneFilter: document.getElementById('laneFilter'), stageFilter: document.getElementById('stageFilter'), relationFilter: document.getElementById('relationFilter'),
    legendTypes: document.getElementById('legendTypes'), detailType: document.getElementById('detailType'), detailTitle: document.getElementById('detailTitle'), detailSubtitle: document.getElementById('detailSubtitle'),
    detailMeta: document.getElementById('detailMeta'), detailBody: document.getElementById('detailBody'), relatedBox: document.getElementById('relatedBox'),
    zoomIn: document.getElementById('zoomIn'), zoomOut: document.getElementById('zoomOut'), fitAll: document.getElementById('fitAll'), resetView: document.getElementById('resetView'), latestView: document.getElementById('latestView'),
    frontierOnly: document.getElementById('frontierOnly'), foundationOnly: document.getElementById('foundationOnly'), clearFilters: document.getElementById('clearFilters'),
    showPredecessors: document.getElementById('showPredecessors'), showSuccessors: document.getElementById('showSuccessors'), clearHighlight: document.getElementById('clearHighlight'),
    toggleTopbar: document.getElementById('toggleTopbar'), toggleTopbarInline: document.getElementById('toggleTopbarInline'),
    fullscreenMap: document.getElementById('fullscreenMap'), fullscreenMapInline: document.getElementById('fullscreenMapInline'),
    leftSplitter: document.getElementById('leftSplitter'), rightSplitter: document.getElementById('rightSplitter')
  };

  const nodeEls = new Map();
  const linkEls = new Map();
  const tooltip = makeTooltip();

  function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }

  function createSvg(tag, attrs = {}) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }

  function makeTooltip() {
    const t = document.createElement('div');
    t.className = 'tooltip';
    t.style.display = 'none';
    document.body.appendChild(t);
    return t;
  }

  function showTooltip(html, event) {
    tooltip.innerHTML = html;
    tooltip.style.left = `${event.clientX + 14}px`;
    tooltip.style.top = `${event.clientY + 14}px`;
    tooltip.style.display = 'block';
  }
  function hideTooltip(){ tooltip.style.display = 'none'; }

  function yearToX(year) {
    const y = Number(year || KG.time.start);
    const span = KG.time.end - KG.time.start;
    return margin.left + (y - KG.time.start) / span * (KG.width - margin.left - margin.right);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function estimateNodeSize(n) {
    const r = n._r;
    if (n.type === 'person') return { w: (r + 5) * 2 + 22, h: (r + 5) * 2 + 22 };
    if (n.type === 'event') return { w: (r + 18) * 2 + 24, h: (r + 10) * 2 + 24 };
    if (n.type === 'paper') return { w: (r + 18) * 2 + 24, h: (r + 12) * 2 + 22 };
    if (n.type === 'bottleneck') return { w: (r + 22) * 2 + 24, h: (r + 18) * 2 + 24 };
    if (n.type === 'theory') return { w: (r + 18) * 2 + 24, h: (r + 12) * 2 + 22 };
    const w = Math.max(92, 74 + (n.name || '').length * 3.4);
    const h = n.subtitle ? 48 : 38;
    return { w: w + 24, h: h + 22 };
  }

  function constrainNode(n) {
    n._x = clamp(n._x, n._w / 2 + 24, KG.width - n._w / 2 - 20);
    const lane = lanes.get(n.lane);
    const laneHeight = lane?._height || laneLayout.minHeight;
    const laneMin = lane ? lane.y - laneHeight / 2 + n._h / 2 + laneLayout.padding : margin.top + n._h / 2 + 10;
    const laneMax = lane ? lane.y + laneHeight / 2 - n._h / 2 - laneLayout.padding : KG.height - margin.bottom - n._h / 2 - 10;
    n._y = clamp(n._y, Math.max(margin.top + n._h / 2 + 10, laneMin), Math.min(KG.height - margin.bottom - n._h / 2 - 10, laneMax));
  }

  function separateOverlaps(nodes) {
    const gapX = 4;
    const gapY = 4;
    const maxYearDrift = 900;
    for (let iter = 0; iter < 1200; iter += 1) {
      let moved = false;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i], b = nodes[j];
          let dx = b._x - a._x;
          let dy = b._y - a._y;
          if (dx === 0 && dy === 0) {
            const angle = ((i * 37 + j * 17) % 360) * Math.PI / 180;
            dx = Math.cos(angle) || 1;
            dy = Math.sin(angle) || 1;
          }
          const overlapX = (a._w + b._w) / 2 + gapX - Math.abs(dx);
          const overlapY = (a._h + b._h) / 2 + gapY - Math.abs(dy);
          if (overlapX <= 0 || overlapY <= 0) continue;

          moved = true;
          const sx = dx < 0 ? -1 : 1;
          const sy = dy < 0 ? -1 : 1;
          const xPressure = overlapX / ((a._w + b._w) / 2 + gapX);
          const yPressure = overlapY / ((a._h + b._h) / 2 + gapY);
          if (a.lane === b.lane || xPressure <= yPressure * 1.15) {
            const push = overlapX / 2 + 0.8;
            a._x -= sx * push;
            b._x += sx * push;
          } else {
            const push = overlapY / 2 + 0.8;
            a._y -= sy * push;
            b._y += sy * push;
          }
          constrainNode(a);
          constrainNode(b);
        }
      }
      if (!moved) break;
      nodes.forEach(n => {
        const preferredX = n._preferredX || n._targetX;
        n._x = clamp(n._x + (preferredX - n._x) * 0.02, n._targetX - maxYearDrift, n._targetX + maxYearDrift);
        constrainNode(n);
      });
    }
  }

  function computeLayout() {
    const buckets = new Map();
    KG.nodes.forEach(n => {
      const baseX = yearToX(n.year);
      n._r = 16 + Math.max(0, (n.importance || 3) - 3) * 4;
      const size = estimateNodeSize(n);
      n._w = size.w;
      n._h = size.h;
      n._targetX = baseX;
      const key = `${n.lane}|${Number(n.year)}`;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(n);
    });

    const requiredByLane = new Map(KG.lanes.map(l => [l.id, laneLayout.minHeight]));
    buckets.forEach(nodes => {
      const stackHeight = nodes.reduce((sum, n) => sum + n._h, 0) + Math.max(0, nodes.length - 1) * laneLayout.stackGap;
      const needed = stackHeight + laneLayout.padding * 2;
      requiredByLane.set(nodes[0].lane, Math.max(requiredByLane.get(nodes[0].lane) || laneLayout.minHeight, needed));
    });

    let y = laneLayout.top;
    KG.lanes.forEach(lane => {
      lane._height = requiredByLane.get(lane.id) || laneLayout.minHeight;
      lane.y = y + lane._height / 2;
      y += lane._height;
    });
    KG.height = y + laneLayout.bottom;

    KG.nodes.forEach(n => {
      const lane = lanes.get(n.lane) || KG.lanes[0];
      n._targetY = Number.isFinite(n.y) ? n.y : lane.y + (n.dy || 0);
    });

    buckets.forEach(nodes => {
      nodes.sort((a, b) => (b.importance || 3) - (a.importance || 3) || String(a.id).localeCompare(String(b.id)));
      const stackHeight = nodes.reduce((sum, n) => sum + n._h, 0) + Math.max(0, nodes.length - 1) * laneLayout.stackGap;
      let yCursor = (lanes.get(nodes[0].lane)?.y || nodes[0]._targetY) - stackHeight / 2;
      nodes.forEach(n => {
        n._x = n._targetX;
        n._y = yCursor + n._h / 2;
        yCursor += n._h + laneLayout.stackGap;
        constrainNode(n);
      });
    });
  }

  function linkPath(source, target, link) {
    const dx = Math.max(80, Math.abs(target._x - source._x) * 0.45);
    const curvature = (source.lane === target.lane ? 0 : 0.18) * (target._y - source._y);
    const c1x = source._x + dx, c1y = source._y + curvature;
    const c2x = target._x - dx, c2y = target._y - curvature;
    return `M ${source._x} ${source._y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${target._x} ${target._y}`;
  }

  function renderScaffold() {
    layers.stage.innerHTML = '';
    layers.lane.innerHTML = '';
    layers.axis.innerHTML = '';
    KG.stages.forEach(s => {
      const x = yearToX(s.start);
      const w = yearToX(s.end) - x;
      const rect = createSvg('rect', { x, y: 18, width: Math.max(20, w), height: KG.height - 42, class: 'stage-bg', fill: s.color || '#f8fafc', rx: 18 });
      rect.addEventListener('mousemove', e => showTooltip(`<b>${esc(s.name)}</b><br>${esc(s.start)}–${esc(s.end)}<br>${esc(s.description)}`, e));
      rect.addEventListener('mouseleave', hideTooltip);
      layers.stage.appendChild(rect);
      layers.stage.appendChild(createSvg('text', { x: x + 16, y: 44, class: 'stage-label' })).textContent = s.name;
      const desc = createSvg('text', { x: x + 16, y: 62, class: 'stage-desc' });
      desc.textContent = `${s.start}–${s.end}`;
      layers.stage.appendChild(desc);
    });

    KG.lanes.forEach(l => {
      const laneHeight = l._height || laneLayout.minHeight;
      const band = createSvg('rect', { x: 40, y: l.y - laneHeight / 2 + 18, width: KG.width - 80, height: laneHeight - 36, class: 'lane-band', rx: 22 });
      layers.lane.appendChild(band);
      layers.lane.appendChild(createSvg('line', { x1: 40, x2: KG.width - 40, y1: l.y, y2: l.y, class: 'lane-line' }));
      layers.lane.appendChild(createSvg('rect', { x: 48, y: l.y - 24, width: 138, height: 48, rx: 16, class: 'lane-label-bg' }));
      const text = createSvg('text', { x: 66, y: l.y + 5, class: 'lane-label' });
      text.textContent = l.name;
      layers.lane.appendChild(text);
    });

    for (let year = KG.time.start; year <= KG.time.end; year += KG.time.tickInterval) {
      const x = yearToX(year);
      const major = year % 10 === 0;
      layers.axis.appendChild(createSvg('line', { x1: x, x2: x, y1: 78, y2: KG.height - 70, class: major ? 'tick-line tick-major' : 'tick-line' }));
      const top = createSvg('text', { x, y: 92, class: 'tick-text', 'text-anchor': 'middle' });
      top.textContent = year;
      layers.axis.appendChild(top);
      const bottom = createSvg('text', { x, y: KG.height - 42, class: 'tick-text', 'text-anchor': 'middle' });
      bottom.textContent = year;
      layers.axis.appendChild(bottom);
    }
  }

  function renderLinks() {
    layers.link.innerHTML = '';
    linkEls.clear();
    KG.links.forEach((l, i) => {
      const s = byId.get(l.source), t = byId.get(l.target);
      if (!s || !t) return;
      const path = createSvg('path', { d: linkPath(s, t, l), class: `link ${l.type || ''}`, 'data-link-id': i });
      path.addEventListener('mousemove', e => showTooltip(`<b>${esc(relationNames[l.type] || l.label || l.type)}</b><br>${esc(s.name)} → ${esc(t.name)}<br>${esc(l.description || '')}`, e));
      path.addEventListener('mouseleave', hideTooltip);
      layers.link.appendChild(path);
      linkEls.set(i, path);
    });
  }

  function nodeShape(n) {
    const r = n._r;
    if (n.type === 'person') return createSvg('circle', { cx: 0, cy: 0, r: r + 5, class: 'shape' });
    if (n.type === 'event') return createSvg('path', { d: `M0 ${-r-10} L${r+18} 0 L0 ${r+10} L${-r-18} 0 Z`, class: 'shape' });
    if (n.type === 'paper') return createSvg('path', { d: `M${-r-18} ${-r-10} H${r+8} L${r+18} ${-r} V${r+12} H${-r-18} Z M${r+8} ${-r-10} V${-r} H${r+18}`, class: 'shape' });
    if (n.type === 'bottleneck') return createSvg('path', { d: `M0 ${-r-18} L${r+22} ${r+18} H${-r-22} Z`, class: 'shape' });
    if (n.type === 'theory') return createSvg('path', { d: `M${-r-18} 0 L${-r-8} ${-r-12} H${r+8} L${r+18} 0 L${r+8} ${r+12} H${-r-8} Z`, class: 'shape' });
    const w = Math.max(92, 74 + (n.name || '').length * 3.4), h = n.subtitle ? 48 : 38;
    return createSvg('rect', { x: -w/2, y: -h/2, width: w, height: h, rx: n.type === 'trend' ? 20 : 14, class: 'shape' });
  }

  function splitLabel(text, max = 12) {
    const s = String(text || '');
    if (s.length <= max) return [s];
    const parts = [];
    let buf = '';
    for (const ch of s) {
      buf += ch;
      if (buf.length >= max) { parts.push(buf); buf = ''; }
    }
    if (buf) parts.push(buf);
    return parts.slice(0, 2);
  }

  function renderNodes() {
    layers.node.innerHTML = '';
    nodeEls.clear();
    KG.nodes.forEach(n => {
      const g = createSvg('g', { transform: `translate(${n._x},${n._y})`, class: `node type-${n.type} importance-${n.importance || 3}`, 'data-id': n.id, tabindex: 0 });
      const halo = createSvg('circle', { cx: 0, cy: 0, r: Math.max(40, n._r + 28), class: 'halo' });
      g.appendChild(halo);
      g.appendChild(nodeShape(n));
      const lines = splitLabel(n.name, n.importance >= 5 ? 13 : 11);
      lines.forEach((line, idx) => {
        const y = (lines.length === 1 ? 4 : -2 + idx * 14);
        const text = createSvg('text', { x: 0, y, class: 'node-label', 'text-anchor': 'middle' });
        text.textContent = line;
        g.appendChild(text);
      });
      if (n.subtitle) {
        const sub = createSvg('text', { x: 0, y: lines.length === 1 ? 20 : 28, class: 'node-subtitle', 'text-anchor': 'middle' });
        sub.textContent = String(n.subtitle).slice(0, 26);
        g.appendChild(sub);
      }
      g.addEventListener('click', e => { e.stopPropagation(); selectNode(n.id, 'direct'); });
      g.addEventListener('keydown', e => { if (e.key === 'Enter') selectNode(n.id, 'direct'); });
      g.addEventListener('mousemove', e => showTooltip(`<b>${esc(n.name)}</b><br>${esc(typeNames[n.type] || n.type)} · ${esc(n.year)}<br>${esc(n.summary || n.definition || '')}`, e));
      g.addEventListener('mouseleave', hideTooltip);
      layers.node.appendChild(g);
      nodeEls.set(n.id, g);
    });
  }

  function populateFilters() {
    els.nodeCount.textContent = KG.nodes.length;
    els.linkCount.textContent = KG.links.length;
    els.yearRange.textContent = `${KG.time.start}–${KG.time.end}`;
    els.yearMin.value = KG.time.start;
    els.yearMax.value = KG.time.end;

    const types = [...new Set(KG.nodes.map(n => n.type))].sort();
    fillSelect(els.typeFilter, types, v => typeNames[v] || v);
    fillSelect(els.laneFilter, KG.lanes.map(l => l.id), v => lanes.get(v)?.name || v);
    fillSelect(els.stageFilter, KG.stages.map(s => s.id), v => stages.get(v)?.name || v);
    const rels = [...new Set(KG.links.map(l => l.type))].sort();
    fillSelect(els.relationFilter, rels, v => relationNames[v] || v);
    els.legendTypes.innerHTML = types.map(t => `<div class="legend-item"><span class="legend-swatch" style="background:var(--node-${esc(t)})"></span>${esc(typeNames[t] || t)}</div>`).join('');
  }
  function fillSelect(select, values, labeler) {
    select.innerHTML = values.map(v => `<option value="${esc(v)}">${esc(labeler(v))}</option>`).join('');
  }

  function selectValues(select) { return new Set([...select.selectedOptions].map(o => o.value)); }

  function applyFilterInputs() {
    state.filter.text = els.searchBox.value.trim().toLowerCase();
    state.filter.types = selectValues(els.typeFilter);
    state.filter.lanes = selectValues(els.laneFilter);
    state.filter.stages = selectValues(els.stageFilter);
    state.filter.relations = selectValues(els.relationFilter);
    state.filter.yearMin = Number(els.yearMin.value || KG.time.start);
    state.filter.yearMax = Number(els.yearMax.value || KG.time.end);
    updateVisibility();
  }

  function nodeSearchText(n) {
    const linkText = KG.links.filter(l => l.source === n.id || l.target === n.id).map(l => `${l.label} ${l.type} ${l.description}`).join(' ');
    return JSON.stringify(n) + ' ' + (stages.get(n.stage)?.name || '') + ' ' + (lanes.get(n.lane)?.name || '') + ' ' + linkText;
  }

  function passesNode(n) {
    const f = state.filter;
    if (Number(n.year) < f.yearMin || Number(n.year) > f.yearMax) return false;
    if (f.types.size && !f.types.has(n.type)) return false;
    if (f.lanes.size && !f.lanes.has(n.lane)) return false;
    if (f.stages.size && !f.stages.has(n.stage)) return false;
    if (f.text && !nodeSearchText(n).toLowerCase().includes(f.text)) return false;
    return true;
  }

  function updateVisibility() {
    state.visibleNodes = new Set(KG.nodes.filter(passesNode).map(n => n.id));
    state.visibleLinks = new Set();
    KG.links.forEach((l, i) => {
      const visible = state.visibleNodes.has(l.source) && state.visibleNodes.has(l.target) && (!state.filter.relations.size || state.filter.relations.has(l.type));
      if (visible) state.visibleLinks.add(i);
    });
    nodeEls.forEach((el, id) => el.classList.toggle('invisible', !state.visibleNodes.has(id)));
    linkEls.forEach((el, i) => el.classList.toggle('invisible', !state.visibleLinks.has(i)));
    els.statusText.textContent = `显示 ${state.visibleNodes.size}/${KG.nodes.length} 个节点，${state.visibleLinks.size}/${KG.links.length} 条关系`;
    applyHighlight();
  }

  function selectNode(id, mode = 'direct') {
    state.selectedId = id;
    state.highlightMode = mode;
    els.showPredecessors.disabled = false;
    els.showSuccessors.disabled = false;
    els.clearHighlight.disabled = false;
    renderDetail(byId.get(id));
    applyHighlight();
  }

  function clearHighlight() {
    state.selectedId = null;
    state.highlightMode = 'direct';
    els.showPredecessors.disabled = true;
    els.showSuccessors.disabled = true;
    els.clearHighlight.disabled = true;
    nodeEls.forEach(el => el.classList.remove('dim','selected','neighbor','path'));
    linkEls.forEach(el => el.classList.remove('highlight','pre-path','post-path'));
    els.relatedBox.innerHTML = '';
  }

  function graphTraversal(startId, direction) {
    const seenNodes = new Set([startId]);
    const seenLinks = new Set();
    const q = [startId];
    while (q.length) {
      const id = q.shift();
      KG.links.forEach((l, i) => {
        const forward = direction === 'successor' && l.source === id;
        const backward = direction === 'predecessor' && l.target === id;
        if (forward || backward) {
          const next = forward ? l.target : l.source;
          seenLinks.add(i);
          if (!seenNodes.has(next)) { seenNodes.add(next); q.push(next); }
        }
      });
    }
    return { nodes: seenNodes, links: seenLinks };
  }

  function directNeighborhood(id) {
    const ns = new Set([id]), ls = new Set();
    KG.links.forEach((l, i) => {
      if (l.source === id || l.target === id) { ls.add(i); ns.add(l.source); ns.add(l.target); }
    });
    return { nodes: ns, links: ls };
  }

  function applyHighlight() {
    nodeEls.forEach(el => el.classList.remove('dim','selected','neighbor','path'));
    linkEls.forEach(el => el.classList.remove('highlight','pre-path','post-path'));
    const id = state.selectedId;
    if (!id) return;
    let result = directNeighborhood(id);
    if (state.highlightMode === 'predecessor') result = graphTraversal(id, 'predecessor');
    if (state.highlightMode === 'successor') result = graphTraversal(id, 'successor');

    nodeEls.forEach((el, nid) => {
      if (!state.visibleNodes.has(nid)) return;
      if (!result.nodes.has(nid)) el.classList.add('dim');
      if (nid === id) el.classList.add('selected');
      else if (result.nodes.has(nid)) el.classList.add(state.highlightMode === 'direct' ? 'neighbor' : 'path');
    });
    linkEls.forEach((el, i) => {
      if (!state.visibleLinks.has(i)) return;
      if (result.links.has(i)) {
        el.classList.add('highlight');
        if (state.highlightMode === 'predecessor') el.classList.add('pre-path');
        if (state.highlightMode === 'successor') el.classList.add('post-path');
      }
    });
    updateRelatedBox(id, result.links);
  }

  function renderDetail(n) {
    if (!n) return;
    const stage = stages.get(n.stage), lane = lanes.get(n.lane), group = groups.get(n.group);
    els.detailType.textContent = typeNames[n.type] || n.type;
    els.detailTitle.textContent = n.name;
    els.detailSubtitle.textContent = n.subtitle || n.summary || '';
    els.detailMeta.innerHTML = [
      ['年份/时期', n.year], ['历史阶段', stage?.name || n.stage], ['技术泳道', lane?.name || n.lane], ['路线/群组', group?.name || n.group], ['重要性', '★'.repeat(n.importance || 3)]
    ].map(([k,v]) => `<div class="meta"><b>${esc(k)}</b><span>${esc(v ?? '—')}</span></div>`).join('');

    const keysByType = {
      person: [['江湖地位 / 学术地位', 'status'], ['看家本领', 'mastery'], ['核心贡献', 'contribution'], ['代表理论/模型/论文', 'representativeWorks'], ['人物关系', 'relation'], ['后续影响', 'influence']],
      paper: [['发生背景', 'background'], ['核心贡献', 'contribution'], ['里程碑意义', 'whyMilestone'], ['连接关系', 'relation'], ['影响', 'influence']],
      event: [['发生背景', 'background'], ['主要贡献/事件', 'contribution'], ['里程碑意义', 'whyMilestone'], ['连接关系', 'relation'], ['影响', 'influence']],
      bottleneck: [['定义', 'definition'], ['产生原因', 'cause'], ['影响对象', 'affectedNodes'], ['开放问题', 'openProblems'], ['连接关系', 'relation']],
      trend: [['定义', 'definition'], ['核心思想', 'principle'], ['解决问题', 'problem'], ['开放问题', 'openProblems'], ['后续影响', 'influence']],
      system: [['定义', 'definition'], ['核心思想', 'principle'], ['解决问题', 'problem'], ['工程路线', 'relation'], ['影响', 'influence']],
      company: [['定义', 'definition'], ['产业位置', 'status'], ['核心路线', 'principle'], ['解决问题', 'problem'], ['不确定性', 'uncertainty']],
      stage: [['阶段定义', 'definition'], ['核心问题/主流方法', 'principle'], ['解决的问题/遗留瓶颈', 'problem'], ['阶段影响', 'influence'], ['阶段转移逻辑', 'relation']],
      default: [['定义', 'definition'], ['核心思想', 'principle'], ['解决了什么问题', 'problem'], ['前置依赖', 'prerequisites'], ['后续影响', 'influence'], ['与同系列区别', 'difference'], ['关系说明', 'relation']]
    };
    const rows = keysByType[n.type] || keysByType.default;
    const html = [];
    if (n.summary) html.push(`<p><b>摘要：</b>${esc(n.summary)}</p>`);
    rows.forEach(([label, key]) => {
      const val = n[key];
      if (val == null || val === '' || (Array.isArray(val) && !val.length)) return;
      const body = Array.isArray(val) ? `<ul>${val.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : `<p>${esc(val)}</p>`;
      const cls = key === 'uncertainty' ? ' class="uncertain"' : '';
      html.push(`<h3>${esc(label)}</h3><div${cls}>${body}</div>`);
    });
    const shownKeys = new Set(rows.map(row => row[1]).concat(['summary', 'subtitle', 'name', 'id', 'type', 'year', 'stage', 'lane', 'group', 'importance', 'x', 'y', 'dx', 'dy', 'sources', 'uncertainty']));
    const extraLabels = {
      coreProblem: '核心问题', mainMethods: '主流方法', representatives: '代表节点', solved: '解决了什么', remainingBottlenecks: '遗留瓶颈', transitionLogic: '阶段转移逻辑',
      affectedNodes: '影响对象', openProblems: '开放问题', background: '背景', authors: '作者', contribution: '贡献', whyMilestone: '里程碑意义'
    };
    Object.keys(extraLabels).forEach(key => {
      if (shownKeys.has(key)) return;
      const val = n[key];
      if (val == null || val === '' || (Array.isArray(val) && !val.length)) return;
      const body = Array.isArray(val) ? `<ul>${val.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : `<p>${esc(val)}</p>`;
      html.push(`<h3>${esc(extraLabels[key])}</h3><div>${body}</div>`);
    });
    if (n.uncertainty && n.type !== 'company') html.push(`<h3>不确定性说明</h3><div class="uncertain">${esc(n.uncertainty)}</div>`);
    if (n.sources?.length) {
      html.push(`<h3>公开资料来源</h3><ul class="source-list">${n.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noreferrer">${esc(s.name || s.url)}</a></li>`).join('')}</ul>`);
    }
    els.detailBody.innerHTML = html.join('') || '<p>暂无更多结构化说明。</p>';
  }

  function updateRelatedBox(id, linkSet) {
    const links = [...linkSet].map(i => ({ i, ...KG.links[i] })).filter(l => state.visibleLinks.has(l.i)).slice(0, 14);
    els.relatedBox.innerHTML = `<h3>图中相关关系</h3>` + (links.length ? links.map(l => {
      const s = byId.get(l.source), t = byId.get(l.target);
      return `<div class="related-item"><b>${esc(relationNames[l.type] || l.label || l.type)}</b>：${esc(s?.name)} → ${esc(t?.name)}<br>${esc(l.description || '')}</div>`;
    }).join('') : '<p class="hint">当前筛选条件下没有可见关系。</p>');
  }

  function setTransform() { viewport.setAttribute('transform', `translate(${state.tx},${state.ty}) scale(${state.scale})`); }

  function fitAll(mode = 'all') {
    const rect = svg.getBoundingClientRect();
    const target = mode === 'latest'
      ? { x: yearToX(2019), y: 40, w: yearToX(KG.time.end) - yearToX(2019), h: KG.height - 40 }
      : { x: 0, y: 0, w: KG.width, h: KG.height };
    const sx = rect.width / (target.w + 180), sy = rect.height / (target.h + 140);
    state.scale = Math.min(1.4, Math.max(0.16, Math.min(sx, sy)));
    state.tx = (rect.width - target.w * state.scale) / 2 - target.x * state.scale;
    state.ty = (rect.height - target.h * state.scale) / 2 - target.y * state.scale;
    setTransform();
  }

  function zoomAt(factor, cx, cy) {
    const rect = svg.getBoundingClientRect();
    const x = cx == null ? rect.width / 2 : cx - rect.left;
    const y = cy == null ? rect.height / 2 : cy - rect.top;
    const wx = (x - state.tx) / state.scale;
    const wy = (y - state.ty) / state.scale;
    state.scale = Math.max(0.08, Math.min(2.8, state.scale * factor));
    state.tx = x - wx * state.scale;
    state.ty = y - wy * state.scale;
    setTransform();
  }

  function refreshLayoutButtons() {
    const topbarCollapsed = appShell.classList.contains('topbar-collapsed');
    const fullscreen = appShell.classList.contains('map-fullscreen');
    [els.toggleTopbar, els.toggleTopbarInline].filter(Boolean).forEach(btn => {
      btn.textContent = topbarCollapsed ? '显示顶部' : '隐藏顶部';
      btn.setAttribute('aria-pressed', String(topbarCollapsed));
    });
    [els.fullscreenMap, els.fullscreenMapInline].filter(Boolean).forEach(btn => {
      btn.textContent = fullscreen ? '退出全屏' : '地图全屏';
      btn.setAttribute('aria-pressed', String(fullscreen));
    });
  }

  function scheduleFit(mode = 'all') {
    requestAnimationFrame(() => fitAll(mode));
  }

  function setTopbarCollapsed(collapsed) {
    appShell.classList.toggle('topbar-collapsed', collapsed);
    refreshLayoutButtons();
    scheduleFit('all');
  }

  function setMapFullscreen(enabled) {
    appShell.classList.toggle('map-fullscreen', enabled);
    refreshLayoutButtons();
    scheduleFit(enabled ? 'latest' : 'all');
    if (enabled && appShell.requestFullscreen && !document.fullscreenElement) {
      appShell.requestFullscreen().catch(() => {});
    } else if (!enabled && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  function syncFullscreenState() {
    if (document.fullscreenElement || !appShell.classList.contains('map-fullscreen')) return;
    appShell.classList.remove('map-fullscreen');
    refreshLayoutButtons();
    scheduleFit('all');
  }

  function setPanelWidth(side, width) {
    const value = `${Math.round(width)}px`;
    appShell.style.setProperty(side === 'left' ? '--left-panel-width' : '--right-panel-width', value);
  }

  function getPanelWidth(side) {
    const prop = side === 'left' ? '--left-panel-width' : '--right-panel-width';
    const raw = getComputedStyle(appShell).getPropertyValue(prop);
    return Number.parseFloat(raw) || (side === 'left' ? 320 : 360);
  }

  function initSplitter(splitter, side) {
    if (!splitter) return;
    let startX = 0;
    let startWidth = 0;
    const min = side === 'left' ? 220 : 260;
    const max = side === 'left' ? 520 : 560;
    const move = e => {
      const dx = e.clientX - startX;
      const next = side === 'left' ? startWidth + dx : startWidth - dx;
      setPanelWidth(side, clamp(next, min, max));
    };
    const stop = () => {
      document.body.classList.remove('layout-dragging');
      splitter.classList.remove('dragging');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', stop);
      scheduleFit('all');
    };
    splitter.addEventListener('mousedown', e => {
      e.preventDefault();
      startX = e.clientX;
      startWidth = getPanelWidth(side);
      document.body.classList.add('layout-dragging');
      splitter.classList.add('dragging');
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', stop);
    });
    splitter.addEventListener('keydown', e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const step = e.shiftKey ? 48 : 16;
      const direction = e.key === 'ArrowRight' ? 1 : -1;
      const next = side === 'left'
        ? getPanelWidth(side) + direction * step
        : getPanelWidth(side) - direction * step;
      setPanelWidth(side, clamp(next, min, max));
      scheduleFit('all');
    });
  }

  function initLayoutControls() {
    refreshLayoutButtons();
    [els.toggleTopbar, els.toggleTopbarInline].filter(Boolean).forEach(btn => {
      btn.addEventListener('click', () => setTopbarCollapsed(!appShell.classList.contains('topbar-collapsed')));
    });
    [els.fullscreenMap, els.fullscreenMapInline].filter(Boolean).forEach(btn => {
      btn.addEventListener('click', () => setMapFullscreen(!appShell.classList.contains('map-fullscreen')));
    });
    initSplitter(els.leftSplitter, 'left');
    initSplitter(els.rightSplitter, 'right');
    document.addEventListener('fullscreenchange', syncFullscreenState);
  }

  function initEvents() {
    initLayoutControls();
    ['input','change'].forEach(ev => {
      els.searchBox.addEventListener(ev, applyFilterInputs);
      els.yearMin.addEventListener(ev, applyFilterInputs); els.yearMax.addEventListener(ev, applyFilterInputs);
    });
    [els.typeFilter, els.laneFilter, els.stageFilter, els.relationFilter].forEach(s => s.addEventListener('change', applyFilterInputs));
    els.zoomIn.addEventListener('click', () => zoomAt(1.22));
    els.zoomOut.addEventListener('click', () => zoomAt(1/1.22));
    els.fitAll.addEventListener('click', () => fitAll('all'));
    els.resetView.addEventListener('click', () => { state.scale = 0.22; state.tx = 40; state.ty = 20; setTransform(); });
    els.latestView.addEventListener('click', () => fitAll('latest'));
    els.frontierOnly.addEventListener('click', () => { els.yearMin.value = 2020; els.yearMax.value = KG.time.end; applyFilterInputs(); fitAll('latest'); });
    els.foundationOnly.addEventListener('click', () => { els.yearMin.value = KG.time.start; els.yearMax.value = 2005; applyFilterInputs(); fitAll('all'); });
    els.clearFilters.addEventListener('click', () => {
      els.searchBox.value = ''; els.yearMin.value = KG.time.start; els.yearMax.value = KG.time.end;
      [els.typeFilter, els.laneFilter, els.stageFilter, els.relationFilter].forEach(sel => [...sel.options].forEach(o => o.selected = false));
      applyFilterInputs();
    });
    els.showPredecessors.addEventListener('click', () => { if (state.selectedId) { state.highlightMode = 'predecessor'; applyHighlight(); }});
    els.showSuccessors.addEventListener('click', () => { if (state.selectedId) { state.highlightMode = 'successor'; applyHighlight(); }});
    els.clearHighlight.addEventListener('click', clearHighlight);

    svg.addEventListener('wheel', e => { e.preventDefault(); zoomAt(e.deltaY < 0 ? 1.12 : 1/1.12, e.clientX, e.clientY); }, { passive: false });
    svg.addEventListener('mousedown', e => {
      if (e.target.closest && e.target.closest('.node')) return;
      state.dragging = true;
      state.dragStart = { x: e.clientX, y: e.clientY, tx: state.tx, ty: state.ty };
      svg.classList.add('dragging');
    });
    window.addEventListener('mousemove', e => {
      if (!state.dragging) return;
      state.tx = state.dragStart.tx + (e.clientX - state.dragStart.x);
      state.ty = state.dragStart.ty + (e.clientY - state.dragStart.y);
      setTransform();
    });
    window.addEventListener('mouseup', () => { state.dragging = false; svg.classList.remove('dragging'); });
    svg.addEventListener('dblclick', e => { if (!e.target.closest || !e.target.closest('.node')) clearHighlight(); });
    svg.addEventListener('click', e => { if (e.target === svg) clearHighlight(); });
    window.addEventListener('resize', () => fitAll('all'));
  }

  function boot() {
    computeLayout();
    renderScaffold();
    renderLinks();
    renderNodes();
    populateFilters();
    initEvents();
    applyFilterInputs();
    requestAnimationFrame(() => fitAll('all'));
  }

  boot();
})();
