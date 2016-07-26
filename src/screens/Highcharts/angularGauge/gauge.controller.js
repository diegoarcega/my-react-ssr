// solid_gauge, 
const Gauge = (function() {
  let rawData = []
  let formatedData = []
  let gaugeOptions = {}
  let result = {}

  function setRawData(data) {
    rawData = data || []
    return this
  }

  function getRawData() {
    return rawData
  }

  function formatData() {
    let tempRawData = getRawData()
    let objID = Object.keys(tempRawData)
    result = tempRawData[objID].data_result[0]
    setGaugeOptions()
    return this
  }

  function getFormatedData() {
    return gaugeOptions
  }

  function setGaugeOptions(){
    gaugeOptions.chart = {}
    gaugeOptions.title = {}
    gaugeOptions.chart.renderTo = 'container-gauge'
    gaugeOptions.chart.type = 'solidgauge'
    gaugeOptions.title.text = 'solidgauge'
    gaugeOptions.pane = {
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
    }
    gaugeOptions.yAxis = {
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
    }
    gaugeOptions.tooltip = {}
    gaugeOptions.tooltip.enabled = false
    gaugeOptions.series = [{
      data: [80],
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
          'black' + '">{y}</span><br/>' +
          '<span style="font-size:12px;color:silver">'+ result. unit +'</span></div>'
      }
    }]

    gaugeOptions.series[0].data = [result.value]

    gaugeOptions.plotOptions = {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  }


  return {
    getRawData: getRawData,
    getFormatedData: getFormatedData,
    setRawData: setRawData,
    formatData: formatData
  }
}())


export default Gauge
