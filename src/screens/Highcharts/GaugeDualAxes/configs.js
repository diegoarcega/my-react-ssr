//http://api.highcharts.com/highcharts

const fixedConfigs = {
  chart: {
    renderTo: 'container-gaugeDualAxes',
    type: 'gauge',
    alignTicks: false,
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false
  },
  title: {
    text: null
  },
  exporting: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  pane: {
    startAngle: -150,
    endAngle: 150
  },
  yAxis: [{
    min: 0,
    max: 200,
    lineColor: '#339',
    tickColor: '#339',
    minorTickColor: '#339',
    offset: -25,
    lineWidth: 2,
    labels: {
      distance: -20,
      rotation: 'auto'
    },
    tickLength: 5,
    minorTickLength: 5,
    endOnTick: false
  }, {
    min: 0,
    max: 124,
    tickPosition: 'outside',
    lineColor: '#933',
    lineWidth: 2,
    minorTickPosition: 'outside',
    tickColor: '#933',
    minorTickColor: '#933',
    tickLength: 5,
    minorTickLength: 5,
    labels: {
      distance: 12,
      rotation: 'auto'
    },
    offset: -20,
    endOnTick: false
  }],
  tooltip: {
    enabled: false
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  }

}

const variableConfigs = {
  series: [{
    enableMouseTracking: false,
    name: 'Speed',
    data: [80],
    dataLabels: {
      formatter: function() {
        var kmh = this.y,
          mph = Math.round(kmh * 0.621);
        return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
          '<span style="color:#933">' + mph + ' mph</span>';
      },
      backgroundColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, '#DDD'],
          [1, '#FFF']
        ]
      }
    },
    tooltip: {
      valueSuffix: ' km/h'
    }
  }]
}

export {
  fixedConfigs,
  variableConfigs
}
