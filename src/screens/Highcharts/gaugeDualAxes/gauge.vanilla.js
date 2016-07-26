import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsMore from 'highcharts-more'
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge'
import Gauge from './gauge.controller'


class GaugeComponent extends Component {
  componentDidMount(){
    HighchartsExporting(Highcharts)
    HighchartsMore(Highcharts)
    HighchartsSolidGauge(Highcharts)

    Gauge.setRawData(this.props.widgets).formatData()

    new Highcharts.Chart(Gauge.getFormatedData(),
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
        <div id="container-gauge"></div>
      </div>
    )
  }
}

export default GaugeComponent

//
// {
//   chart: {
//       renderTo: 'container-gauge',
//       type: 'solidgauge',
//   },
//   title: {
//       text: 'Gauge'
//   },
//   pane: {
//        center: ['50%', '85%'],
//        size: '140%',
//        startAngle: -90,
//        endAngle: 90,
//        background: {
//            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
//            innerRadius: '60%',
//            outerRadius: '100%',
//            shape: 'arc'
//        }
//    },
//   yAxis: {
//        stops: [
//            [0.1, '#55BF3B'], // green
//            [0.5, '#DDDF0D'], // yellow
//            [0.9, '#DF5353'] // red
//        ],
//        lineWidth: 0,
//        minorTickInterval: null,
//        tickPixelInterval: 400,
//        tickWidth: 0,
//        title: {
//            y: -70
//        },
//        labels: {
//            y: 16
//        }
//    },
//    tooltip:{
//      enabled: false
//    },
//    series: [{
//         name: 'Speed',
//         data: [80],
//         dataLabels: {
//             format: '<div style="text-align:center"><span style="font-size:25px;color:' +
//                 ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
//                    '<span style="font-size:12px;color:silver">km/h</span></div>'
//         },
//         tooltip: {
//             enabled: false,
//             valueSuffix: ' km/h'
//         }
//     }],
//     plotOptions: {
//          solidgauge: {
//              dataLabels: {
//                  y: 5,
//                  borderWidth: 0,
//                  useHTML: true
//              }
//          }
//      }
//
// }
