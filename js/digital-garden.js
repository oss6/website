function nodeClickHandler(e) {
  window.location.href = '/digital-garden/' + e.data.node.id;
}

var g = {
  nodes: digitalGardenGraph.nodes.map(n => ({
    id: n.fileSlug,
    label: n.title,
    x: Math.random(),
    y: Math.random(),
    size: 5,
    color: 'rgb(217, 119, 6)'
  })),
  edges: digitalGardenGraph.edges.map(e => ({
    id: e.from + '_' + e.to,
    source: e.from,
    target: e.to,
    size: 2,
    color: '#ccc'
  }))
};

var s = new sigma({
  graph: g,
  container: 'digital-garden-graph'
});

s.configNoverlap({
  nodeMargin: 3.0,
  scaleNodes: 1.3
});

s.startNoverlap();

var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);

dragListener.bind('drag',function(){
  setTimeout(function () {
    s.unbind('clickNode');
  });
});

dragListener.bind('dragend',function(){
  setTimeout(function(){
    s.bind('clickNode', nodeClickHandler);
  }, 250);
});
