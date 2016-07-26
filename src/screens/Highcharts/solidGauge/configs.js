//http://api.highcharts.com/highcharts

const fixedConfigs = {
  chart: {
    renderTo: 'container-solidgauge',
    type: 'solidgauge',
  },
  title: {
    text: null
  },
  exporting:{
    enabled: false
  },
  credits:{
    enabled: false
  },
  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: '#ccc',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },
  yAxis: {
    stops: [
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'] // red
    ],
    lineWidth: 0,
    minorTickInterval: null,
    tickPixelInterval: 400,
    tickWidth: 0,
    title: {
      y: -70
    },
    labels: {
      y: 16
    }
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
