import React, { Component } from 'react'
import 'highcharts'
import 'highcharts-more'

import ReactHighcharts from 'react-highcharts'
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts-more'
import HighchartsExporting from 'highcharts-exporting'
import SolidGauge from  'highcharts/modules/solid-gauge'





var gaugeOptions = {
  chart: {
    type: 'solidgauge',
  },
  title: null,
  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc'
    }
  },

  tooltip: {
    enabled: false
  },

  // the value axis
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

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  },


};

class Gauge extends Component {
  componentDidMount(){
    HighchartsMore(ReactHighcharts.Highcharts)
    HighchartsExporting(ReactHighcharts.Highcharts)
    SolidGauge(ReactHighcharts.Highcharts)

    this.solidgauge = this.refs.solidgauge

  }
  render() {
    return (
      <div>
        <ReactHighcharts config={gaugeOptions} ref="solidgauge"></ReactHighcharts>
      </div>
    )
  }
}

export default Gauge
