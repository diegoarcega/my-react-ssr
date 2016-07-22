import React, { Component } from 'react'
import 'highcharts'
import ReactHighcharts from 'react-highcharts'
import chartsData from './chartsData'


if(!Highcharts){
  global.highcharts = require('react-highcharts/src/fakeHighcharts.js');
}


class Highcharts extends Component{
	render(){
		return (
			<div className="mui-row">
				<div className="mui-col-md-6">
					<ReactHighcharts config={chartsData.donuts}></ReactHighcharts>
				</div>
        <div className="mui-col-md-6">
					<ReactHighcharts config={chartsData.area}></ReactHighcharts>
				</div>
        <div className="mui-col-md-6">
					<ReactHighcharts config={chartsData.bar}></ReactHighcharts>
				</div>
        <div className="mui-col-md-6">
					<ReactHighcharts config={chartsData.pie}></ReactHighcharts>
				</div>
        <div className="mui-col-md-6">
					<ReactHighcharts config={chartsData.scatter}></ReactHighcharts>
				</div>
			</div>
	)
	}
}

export default Highcharts
