import React, { Component } from 'react'
import SolidGauge from './solidGauge/component'
import AngularGauge from './angularGauge/component'
import GaugeDualAxes from './gaugeDualAxes/component'
import GaugeVuMeter from './gaugeVuMeter/component'
import GaugeClock from './gaugeClock/component'
import widget from './widget'
import widgets from './widgets'


class Highcharts extends Component{
	render(){
		return (
			<div className="mui-row">
				<div className="mui-col-sm-6">
					<SolidGauge widget={widget} widgets={widgets}/>
    		</div>
				<div className="mui-col-sm-6">
					<AngularGauge widget={widget} widgets={widgets}/>
    		</div>
				<div className="mui-col-sm-6">
					<GaugeDualAxes widget={widget} widgets={widgets}/>
    		</div>
				<div className="mui-col-sm-6">
					<GaugeVuMeter widget={widget} widgets={widgets}/>
    		</div>
				<div className="mui-col-sm-6">
					<GaugeClock widget={widget} widgets={widgets}/>
    		</div>
			</div>
	)
	}
}

export default Highcharts
