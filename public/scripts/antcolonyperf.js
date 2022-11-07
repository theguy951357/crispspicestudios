google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Agents', 'Seconds'],
    [2, 0.0666932], [3, 0.0249426], [4, 0.0597229], [5, 0.0263879], [6, 0.0757757], [7, 0.0352781],[8,0.0249847]]);

  var options = {
    title: 'Ant Colony Performance',
    hAxis: {title: 'Agents'},
    vAxis: {title: 'Average seconds (3000 dives)'},
    trendlines: { 0: {
      type: 'exponential',
      color: 'orange',
      visibleInLegend: true,
    } }    // Draw a trendline for data series 0.
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('antcolony_speed_div'));
  chart.draw(data, options);
}