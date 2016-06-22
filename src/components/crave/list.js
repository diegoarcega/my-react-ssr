import React from 'react'
import boxImage from 'assets/img/box.png'

const List = ({list}) => (
  <div>{list.map((item, index) =>(
		<div className="col-xs-3" key={index}>
			<div className="card text-xs-center">
				 <img className="card-img-top img-fluid" src={boxImage}  alt={item.name}/>
				<div className="card-block">
			    <h4 className={item.name == 'Vertical' ? `text-primary`: `'card-title'`} >{item.name}</h4>
			    <p className="card-text">{item.dimensions}</p>
			  </div>
			</div>
		</div>
		))}
	</div>
)

export default List
