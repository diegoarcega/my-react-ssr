import React, { Component } from 'react'
import Gauge from './solidGauge/gauge.vanilla'
import widget from './widget'
import widgets from './widgets'


class Highcharts extends Component{
	render(){
		return (
			<div>
				<Gauge widget={widget} widgets={widgets}/>
			</div>
	)
	}
}

export default Highcharts
