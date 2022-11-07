
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["agent", "time"],
    [1, 0.791862], [2, 0.472123], [3, 0.270663], [4, 0.220704], [5,0.250421],[6,0.241252],[7,0.153011],[8,0.145401]
  ]);

  var options = {
    title: 'Monte Carlo Performance',
    hAxis: {title: 'Agents', minValue: '1'},
    vAxis: {title: 'Average seconds (3000 dives)'},
    trendlines: {
      0: {
        type: 'exponential',
        color: 'green',
        visibleInLegend: true,
      }
    },
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('montecarlo_speed_div'));
  chart.draw(data, options);
}