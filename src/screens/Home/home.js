import React, { Component } from 'react'
import GridCell from './components/GridCell'
import gridData from './components/gridData'

class Home extends Component{

  constructor(props){
    super(props)
    this.updateGrid = this.updateGrid.bind(this)
  }

  componentWillMount(){
    this.setState({
      grid: gridData
    })
  }

  updateGrid(clickedCell){
    const newGrid = this.state.grid.map(cell => {

      if(cell.id === clickedCell.id && cell.player === 'none'){
        cell.player = 'player1';
        return cell
      }

      return cell
    })

    this.setState({
      grid: newGrid
    })
  }

	render(){
		return(
			<div>
        <h1>TicTacToe</h1>
        <div className="mui-row">
          {this.state.grid.map((cell, index) =>(
            <GridCell
            key={index}
            id={cell.id}
            player={cell.player}
            onCellClick={() => this.updateGrid(cell)}
            />
          ))}
        </div>
			</div>
			)
	}
}

export default Home
