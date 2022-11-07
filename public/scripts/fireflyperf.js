google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Agents', 'Seconds'],
    [2, 0.454791], [3, 0.310591], [4, 0.289977], [5, 0.321643], [6, 0.29044], [7, 0.23226], [8, .19802]]);

  var options = {
    title: 'Firefly Performance',
    hAxis: {title: 'Agents'},
    vAxis: {title: 'Average seconds (3000 dives)'},
    trendlines: { 0: {
      type: 'exponential',
        color: 'blue',
        visibleInLegend: true,
    } }    // Draw a trendline for data series 0.
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('firefly_speed_div'));
  chart.draw(data, options);
}