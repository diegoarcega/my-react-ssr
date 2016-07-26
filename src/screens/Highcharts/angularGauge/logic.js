const AngularGauge = (function() {

  let fixedConfigs = require('./configs') //gets the fixed configurations for solidGauge
  let gaugeOptions = fixedConfigs //sets the fixed configurations into gaugeOptions
  let rawData = [] //what comes from the http request/this.props.widgets
  let result = {} //the rawData after being processed. It will be used to setGaugeOptions

  //receives raw data from the http request/this.props.widgets and sets gaugeOptions ready to be used
  function setRawData(data) {
    rawData = data || []
    result = prepareData(rawData)
    setGaugeOptions()
  }

  //receives the rawData and returns the result which will be used to populate gaugeOptions
  function prepareData(rawData) {
    let tempRawData = rawData
    let objID = Object.keys(tempRawData)
    let dataResult = tempRawData[objID].data_result[0]
    return dataResult
  }

  //returns gaugeOptions to be used by Highcharts
  function getGaugeOptions() {
    return gaugeOptions
  }

  //uses the result to populate gaugeOptions
  function setGaugeOptions(){
    gaugeOptions.series = [{
      data : [result.value],
      dataLabels : {
        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
          'black' + '">{y}</span><br/>' +
          '<span style="font-size:12px;color:silver">'+ result.unit +'</span></div>'
      }
    }]
  }

  //only these methods are public and can be reached
  return {
    getGaugeOptions: getGaugeOptions,
    setRawData: setRawData
  }

}())


export default AngularGauge
