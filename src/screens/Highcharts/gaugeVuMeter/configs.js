//http://api.highcharts.com/highcharts

const fixedConfigs = {
  chart: {
    renderTo: 'container-gaugeVuMeter',
    type: 'gauge',
    plotBorderWidth: 1,
    plotBackgroundColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      },
      stops: [
        [0, '#FFF4C6'],
        [0.3, '#FFFFFF'],
        [1, '#FFF4C6']
      ]
    },
    plotBackgroundImage: null,
    height: 200
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
  pane: [{
    startAngle: -45,
    endAngle: 45,
    background: null,
    center: ['25%', '145%'],
    size: 300
  }, {
    startAngle: -45,
    endAngle: 45,
    background: null,
    center: ['75%', '145%'],
    size: 300
  }],
  yAxis: [{
    min: -20,
    max: 6,
    minorTickPosition: 'outside',
    tickPosition: 'outside',
    labels: {
      rotation: 'auto',
      distance: 20
    },
    plotBands: [{
      from: 0,
      to: 6,
      color: '#C02316',
      innerRadius: '100%',
      outerRadius: '105%'
    }],
    pane: 0,
    title: {
      text: 'VU<br/><span style="font-size:8px">Channel A</span>',
      y: -40
    }
  }, {
    min: -20,
    max: 6,
    minorTickPosition: 'outside',
    tickPosition: 'outside',
    labels: {
      rotation: 'auto',
      distance: 20
    },
    plotBands: [{
      from: 0,
      to: 6,
      color: '#C02316',
      innerRadius: '100%',
      outerRadius: '105%'
    }],
    pane: 1,
    title: {
      text: 'VU<br/><span style="font-size:8px">Channel B</span>',
      y: -40
    }
  }],
  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false
      },
      dial: {
        radius: '100%'
      }
    }
  },

}

const variableConfigs = {
  series: [{
    name: 'Channel A',
    data: [-20],
    yAxis: 0
  }, {
    name: 'Channel B',
    data: [-20],
    yAxis: 1
  }]
}

export {
  fixedConfigs,
  variableConfigs
}
