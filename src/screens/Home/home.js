import React, { Component } from 'react'
import GridCell from './components/GridCell'
import gridData from './components/gridData'
import successMatch from './components/successMatch'
import random from 'lodash/random'
import isEqual from 'lodash/isEqual'


class Home extends Component{

  constructor(props){
    super(props)
    this.updateGrid = this.updateGrid.bind(this)
    this.player1 = 'player1'
    this.player2 = 'automaticPlayer'
  }

  componentWillMount(){
    this.setState({
      grid: gridData
    })
  }

  updateGrid(clickedCell, player){
    const newGrid = this.state.grid.map(cell => {
      if(cell.id === clickedCell && cell.player === 'none'){
        cell.player = player;
        return cell
      }
      return cell
    })

    this.setState({
      grid: newGrid
    }, () => {
      if(!this.winner()) this.nextPlayer(player)
    })
  }

  nextPlayer(player){
    if(player === this.player1) this.secondPlayerMove()
    return
  }

  winner(){
    const player1 = this.state.grid.filter(grid => grid.player === this.player1).map(cell => cell.id)
    const player2 = this.state.grid.filter(grid => grid.player === this.player2).map(cell => cell.id)
    const winner1 = successMatch.some(match => match.every(matchValue => player1.includes(matchValue)))
    const winner2 = successMatch.some(match => match.every(matchValue => player2.includes(matchValue)))
    if(winner1) alert('player1 wins')
    if(winner2) alert('player2 wins')
    return winner1 || winner2
  }

  randomValidMove(){
    const promise = new Promise(resolve => {
      const state = this.state
      let autoCellId;
      let isCellMarked;
      randomMove()

      resolve(autoCellId)

      function randomMove(){
        autoCellId = random(1,9);
        isCellMarked = state.grid.some(cell => cell.id === autoCellId && cell.player !== 'none')
        while(isCellMarked) randomMove()
      }
    })

    return promise
  }

  secondPlayerMove(){
    this.randomValidMove().then(cellId => {
      setTimeout(()=> this.updateGrid(cellId, this.player2), 500)
    })
  }

  firstPlayerMove(cellId){
    if(!this.winner()) this.updateGrid(cellId, this.player1)
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
            onCellClick={() => this.firstPlayerMove(cell.id)}
            />
          ))}
        </div>
			</div>
			)
	}
}

export default Home
