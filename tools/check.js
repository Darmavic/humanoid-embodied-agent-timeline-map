#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const errors = [];
const warnings = [];
function fail(msg){ errors.push(msg); }
function warn(msg){ warnings.push(msg); }
function read(p){ return fs.readFileSync(path.join(root,p),'utf8'); }

const requiredFiles = ['index.html','css/styles.css','js/data.js','js/app.js','tools/serve.js','tools/check.js','README.md','.nojekyll','.gitignore'];
requiredFiles.forEach(f => { if (!fs.existsSync(path.join(root,f))) fail(`缺少文件：${f}`); });

let graph;
try {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(read('js/data.js'), sandbox, { filename: 'data.js' });
  graph = sandbox.window.KNOWLEDGE_GRAPH;
} catch (e) { fail(`data.js 无法执行：${e.message}`); }

if (graph) {
  if (!Array.isArray(graph.nodes) || graph.nodes.length === 0) fail('nodes 为空');
  if (!Array.isArray(graph.links) || graph.links.length === 0) fail('links 为空');
  if (!Array.isArray(graph.lanes) || graph.lanes.length < 4) fail('lanes 数量过少');
  if (!Array.isArray(graph.stages) || graph.stages.length < 4) fail('stages 数量过少');
  const ids = new Set();
  graph.nodes.forEach((n, i) => {
    if (!n.id) fail(`第 ${i} 个节点缺少 id`);
    if (ids.has(n.id)) fail(`重复节点 id：${n.id}`);
    ids.add(n.id);
    if (!n.name) fail(`节点 ${n.id} 缺少 name`);
    if (typeof n.year !== 'number') fail(`节点 ${n.id} year 不是数字`);
    if (!graph.lanes.some(l => l.id === n.lane)) fail(`节点 ${n.id} lane 不存在：${n.lane}`);
    if (!graph.stages.some(s => s.id === n.stage)) fail(`节点 ${n.id} stage 不存在：${n.stage}`);
  });
  graph.links.forEach((l, i) => {
    if (!ids.has(l.source)) fail(`关系 ${i} source 不存在：${l.source}`);
    if (!ids.has(l.target)) fail(`关系 ${i} target 不存在：${l.target}`);
    if (!l.type) fail(`关系 ${i} 缺少 type`);
  });
  const byYear = graph.nodes.map(n => n.year).filter(Number.isFinite);
  if (Math.min(...byYear) < graph.time.start || Math.max(...byYear) > graph.time.end) warn('存在节点年份超出 time.start/time.end');
}

try {
  const html = read('index.html');
  ['graphSvg','viewport','searchBox','typeFilter','laneFilter','stageFilter','relationFilter','showPredecessors','showSuccessors'].forEach(id => {
    if (!html.includes(`id="${id}"`)) fail(`index.html 缺少交互元素 id=${id}`);
  });
} catch {}

try {
  const app = read('js/app.js');
  const markers = ['yearToX','selectNode','graphTraversal','showPredecessors','showSuccessors','wheel','mousedown','fitAll'];
  markers.forEach(m => { if (!app.includes(m)) fail(`app.js 缺少功能标记：${m}`); });
  if (/selectNode[\s\S]{0,260}(fitAll|zoomAt|state\.tx|state\.ty)/.test(app)) warn('selectNode 附近出现视图操作，请人工确认点击节点不会移动视图。');
} catch {}

if (warnings.length) {
  console.log('Warnings:');
  warnings.forEach(w => console.log('  - ' + w));
}
if (errors.length) {
  console.error('Check failed:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
}
console.log('Check passed.');
if (graph) console.log(`Nodes: ${graph.nodes.length}; Links: ${graph.links.length}; Years: ${graph.time.start}-${graph.time.end}; Stages: ${graph.stages.length}; Lanes: ${graph.lanes.length}`);
