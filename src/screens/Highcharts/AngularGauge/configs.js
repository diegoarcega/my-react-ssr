//http://api.highcharts.com/highcharts

const fixedConfigs = {
  chart: {
    renderTo: 'container-angulargauge',
    type: 'gauge',
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
    endAngle: 150,
    background: [{
      backgroundColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, '#FFF'],
          [1, '#333']
        ]
      },
      borderWidth: 0,
      outerRadius: '109%'
    }, {
      backgroundColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1
        },
        stops: [
          [0, '#333'],
          [1, '#FFF']
        ]
      },
      borderWidth: 1,
      outerRadius: '107%'
    }, {
      // default background
    }, {
      backgroundColor: '#DDD',
      borderWidth: 0,
      outerRadius: '105%',
      innerRadius: '103%'
    }]
  },
  yAxis: {
    min: 0,
    max: 200,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 10,
    minorTickPosition: 'inside',
    minorTickColor: '#666',

    tickPixelInterval: 30,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    labels: {
      step: 2,
      rotation: 'auto'
    },
    title: {
      text: 'km/h'
    },
    plotBands: [{
      from: 0,
      to: 120,
      color: '#55BF3B' // green
    }, {
      from: 120,
      to: 160,
      color: '#DDDF0D' // yellow
    }, {
      from: 160,
      to: 200,
      color: '#DF5353' // red
    }]
  },
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
  title: {
    text: 'Gauge'
  },
  series: [{
    enableMouseTracking: false,
    name: 'Speed',
    data: [80],
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:' +
        'black' + '">{y}</span><br/>' +
        '<span style="font-size:12px;color:silver">km/h</span></div>'
    },
    tooltip: {
      enabled: false,
      valueSuffix: ' km/h'
    }
  }]
}

module.exports = fixedConfigs
