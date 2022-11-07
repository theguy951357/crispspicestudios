google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Agents', 'Seconds'],
    [2, 0.464338], [3, 0.276858], [4, 0.300368], [5, 0.255859], [6, 0.237454], [7, 0.199526],[8, 0.23004]]);

  var options = {
    title: 'Cuckoo Bird Performance',
    hAxis: {title: 'Agents'},
    vAxis: {title: 'Average seconds (3000 dives)'},
    trendlines: { 0: {
      type: 'exponential',
        color: 'red',
        visibleInLegend: true,
    } }    // Draw a trendline for data series 0.
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('cuckoobird_speed_div'));
  chart.draw(data, options);
}