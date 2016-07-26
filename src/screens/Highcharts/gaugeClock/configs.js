//http://api.highcharts.com/highcharts
import Highcharts from 'highcharts'

function getNow() {
  var now = new Date();

  return {
    hours: now.getHours() + now.getMinutes() / 60,
    minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
    seconds: now.getSeconds() * 12 / 60
  };
}
const fixedConfigs = {
  chart: {
    renderTo: 'container-gaugeClock',
    type: 'gauge',
    plotBackgroundColor: null,
    plotBackgroundImage: null,
    plotBorderWidth: 0,
    plotShadow: false,
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
  pane: {
    background: [{
      // default background
    }, {
      // reflex for supported browsers
      backgroundColor: Highcharts.svg ? {
        radialGradient: {
          cx: 0.5,
          cy: -0.4,
          r: 1.9
        },
        stops: [
          [0.5, 'rgba(255, 255, 255, 0.2)'],
          [0.5, 'rgba(200, 200, 200, 0.2)']
        ]
      } : null
    }]
  },
  tooltip: {
    formatter: function() {
      return this.series.chart.tooltipText;
    }
  },
  yAxis: {
    labels: {
      distance: -20
    },
    min: 0,
    max: 12,
    lineWidth: 0,
    showFirstLabel: false,

    minorTickInterval: 'auto',
    minorTickWidth: 1,
    minorTickLength: 5,
    minorTickPosition: 'inside',
    minorGridLineWidth: 0,
    minorTickColor: '#666',

    tickInterval: 1,
    tickWidth: 2,
    tickPosition: 'inside',
    tickLength: 10,
    tickColor: '#666',
    title: {
      text: 'Powered by<br/>Highcharts',
      style: {
        color: '#BBB',
        fontWeight: 'normal',
        fontSize: '8px',
        lineHeight: '10px'
      },
      y: 10
    }
  },


}

const variableConfigs = {
  series: [{
    data: [{
      id: 'hour',
      y: getNow().hours,
      dial: {
        radius: '60%',
        baseWidth: 4,
        baseLength: '95%',
        rearLength: 0
      }
    }, {
      id: 'minute',
      y: getNow().minutes,
      dial: {
        baseLength: '95%',
        rearLength: 0
      }
    }, {
      id: 'second',
      y: getNow().seconds,
      dial: {
        radius: '100%',
        baseWidth: 1,
        rearLength: '20%'
      }
    }],
    animation: false,
    dataLabels: {
      enabled: false
    }
  }]
}

export {
  fixedConfigs,
  variableConfigs
}
