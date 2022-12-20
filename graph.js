function graph(nodes, links, svgNode)
{
  const g = new dagreD3.graphlib.Graph().setGraph({});
  for (const [node, id, label] of nodes)
  {
    node.rx = 5;
    node.ry = 5;
    node.label = label;
    g.setNode(id, node);
  }
  for (const [source, target, label] of links)
  {
    g.setEdge(source.id, target.id, {label});
  }

  const render = new dagreD3.render();
  const svg = d3.select(svgNode).attr("width", svgNode.clientWidth);
  const inner = svg.append("g");
  const zoom = d3.zoom()
      .on("zoom", function() {
        inner.attr("transform", d3.event.transform);
      });
  svg.call(zoom);
  render(inner, g);
  
  // inner.selectAll("g.node")
    // .attr("title", function(v) { return styleTooltip(v, g.node(v).description) })
    // .each(function(v) { $(this).tipsy({ gravity: "w", opacity: 1, html: true }); });
  
  // center the graph
  // console.log(`${svg} width svg ${svg.style("width")} graph ${g.graph().width}`)
  const initialScale = 0.75;
  svg.call(zoom.transform, d3.zoomIdentity.translate((svg.attr("width") - g.graph().width * initialScale) / 2, 20).scale(initialScale));
  svg.attr('height', g.graph().height * initialScale + 40);
}