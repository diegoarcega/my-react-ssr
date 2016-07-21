import React, { Component } from 'react'
import 'highcharts'
import ReactHighcharts from 'react-highcharts'
import chartsData from './chartsData'



if(!Highcharts){
  global.highcharts = require('react-highcharts/src/fakeHighcharts.js');
}


class Highcharts extends Component{
	render(){
    const plotOptions = [
      'area',
      'bar',
      'pie',
      'scatter',
    ]

		return (
			<div className="mui-row">
				{plotOptions.map((item, index) => (
					<div className="mui-col-md-6" key={index}>
						<h1></h1>
						<h1></h1>
						<ReactHighcharts config={{
							chart: {
								type: item
							},
							title: {
								text: item
							},
							xAxis: {
								categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
							},
							series: [{
								data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
							}]
						}}></ReactHighcharts>
	    		</div>
				)
				)}
				<div className="mui-col-md-6">
					<ReactHighcharts config={chartsData.donuts}></ReactHighcharts>
				</div>
	  	</div>
	)
	}
}

export default Highcharts
