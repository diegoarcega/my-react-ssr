export default {
  donuts: {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: 'Countries\'<br> share',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0px 1px 2px black'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Country\'s share',
      innerSize: '50%',
      data: [
        ['Brazil', 30.38],
        ['USA', 16.33],
        ['Australia', 24.03],
        ['UK', 14.77],
        ['Japan', 10.91], {
          name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false
          }
        }
      ]
    }]
  }

}
