import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsMore from 'highcharts-more'
import Logic from './logic'


class GaugeClockComponent extends Component {
  componentDidMount(){
    HighchartsExporting(Highcharts)
    HighchartsMore(Highcharts)

    Logic.setRawData(this.props.widgets)

    new Highcharts.Chart(Logic.getGaugeOptions(),
    function(chart) {
        setInterval(function() {
            var point = chart.series[0].points[0],
                newVal, inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);

        }, 3000)

    })
  }

  render() {
    return (
      <div>
        <div id="container-gaugeClock"></div>
      </div>
    )
  }
}

export default GaugeClockComponent
