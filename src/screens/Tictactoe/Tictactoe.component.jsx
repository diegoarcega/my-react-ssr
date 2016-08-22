import React, { Component } from 'react'
import random from 'lodash/random'
import isEqual from 'lodash/isEqual'

import GridCell from './components/GridCell'
import DataSet from './dataset'
import successMatch from './successMatch'


class TicTacToe extends Component{

  constructor(props){
    super(props)
    this.updateGame = this.updateGame.bind(this)
    this.restart = this.restart.bind(this)
    this.updateData = this.updateData.bind(this)
    this.player1 = 'player1'
    this.player2 = 'player2'
    this.currentPlayer = 'none'
  }

  componentWillMount(){
    this.setState({
      grid: DataSet.get(),
      currentPlayer: 'none'
    })
  }

  componentDidMount(){
    this.updateData()
  }

  // loop to update data across browser tabs
  updateData(){
    setInterval(() => {
      let state = JSON.parse(localStorage.getItem('state')) || this.state
      this.setState(state)
    }, 1500)
  }

  // checks if we already have a winner on each turn
  winner(){
    const player1 = this.state.grid.filter(grid => grid.player === this.player1).map(cell => cell.id)
    const player2 = this.state.grid.filter(grid => grid.player === this.player2).map(cell => cell.id)
    const winner1 = successMatch.some(match => match.every(matchValue => player1.includes(matchValue)))
    const winner2 = successMatch.some(match => match.every(matchValue => player2.includes(matchValue)))
    const turns = this.state.grid.filter(cell => cell.player !== 'none').length
    const tie = !winner1 && !winner2 && turns === 9
    if(winner1) {
      let state = {grid: this.state.grid, alert: `${this.player1} wins!`, gameOver: true, start: true}
      this.setState(state)
      localStorage.setItem('state', JSON.stringify(state))
    }
    if(winner2){
      let state = {grid: this.state.grid, alert: `${this.player2} wins!`, gameOver: true, start: true}
      this.setState(state)
      localStorage.setItem('state', JSON.stringify(state))
    }
    if(tie){
      let state = {grid: this.state.grid, alert: 'Tie, nobody wins!', gameOver: true, start: true}
      this.setState(state)
      localStorage.setItem('state', JSON.stringify(state))
    }
    return winner1 || winner2 || tie
  }

  computerRandomMove(){
    const promise = new Promise(resolve => {
      const state = Object.assign({}, this.state)
      const winner = this.winner
      let autoCellId;
      let isCellMarked;

      randomMove()
      resolve(autoCellId)

      function randomMove(){
        const allCellsMarked = state.grid.every(cell => cell.player !== 'none')
        if(allCellsMarked) return
        autoCellId = random(1,9);
        isCellMarked = state.grid.some(cell => cell.id === autoCellId && cell.player !== 'none')
        while(isCellMarked) randomMove()
      }
    })
    return promise
  }

  // computer moves
  computerMove(){
    this.computerRandomMove().then(cellId => {
      setTimeout(()=> this.updateGame(cellId, this.player2), 100)
    })
  }

  // my moves or a second human player(different tab) moves
  playerMove(cellId){
    const turns = this.state.grid.filter(cell => cell.player !== 'none').length
    if(turns % 2 === 0) this.currentPlayer = this.player1
    else this.currentPlayer = this.player2

    this.updateGame(cellId, this.currentPlayer)
  }

  nextPlayer(currentPlayer){
    if(currentPlayer === this.player1) this.computerMove()
    return
  }


  // main method of the game, it upgrades the state of the game
  updateGame(clickedCell, player){
    if(this.state.gameOver) return
    let alreadyChosen = false;
    const newGrid = this.state.grid.map(cell => {
      if(cell.id === clickedCell && cell.player === 'none'){
        cell.player = player;
        this.setState({alert: ''})
        alreadyChosen = false
        return cell
      }else if(cell.id === clickedCell && cell.player !== 'none'){
        this.setState({alert: 'Cell already talken, choose another option'})
        alreadyChosen = true
        this.currentPlayer === this.player1 ? this.currentPlayer = this.player2 : this.currentPlayer = this.player1
        return cell
      }
      return cell
    })

    if(alreadyChosen === false){
      localStorage.setItem('state', JSON.stringify({
        alert: '',
        grid: newGrid,
        currentPlayer: this.currentPlayer,
        start: true,
        gameOver: false,
      }))
      this.setState({
        alert: '',
        grid: newGrid,
        currentPlayer: this.currentPlayer,
        start: true,
        gameOver: false,
      })
      this.winner()
      if(this.playAgainstComputer) this.nextPlayer(player)
    }
  }

  // restart the game
  restart(){
    localStorage.removeItem('state')
    this.setState({
      grid: DataSet.get(),
      gameOver: false,
      alert: '',
      start: true
    })
  }

	render(){
		return(
			<div>
        <h2>TicTacToe</h2>

        <h3 className="mui--text-center">{this.state.alert}</h3>
        <div className="mui-row">
          {this.state.start ? this.state.grid.map((cell, index) =>(
            <GridCell
            key={index}
            id={cell.id}
            player={cell.player}
            onCellClick={() => this.playerMove(cell.id)}
            />
          )): ''}
        </div>

        {this.state.gameOver ?
          <div className="mui-row">
            <div className="mui-col-xs-12">
              <hr/>
              <button className="mui-btn mui-btn--accent" onClick={this.restart}>Play Again! </button>
              <hr/>
            </div>
          </div>
        : ''}

        {!this.state.start || this.state.gameOver ?
        <div>
          <div>
            <button className="mui-btn mui-btn--primary" onClick={()=> {
              this.playAgainstComputer = true
              this.restart()
            }} >Play against a dumb computer</button>
          </div>
          <hr/>
          <div>
            <button className="mui-btn mui-btn--primary" onClick={()=> {
              this.playAgainstComputer = false
              this.restart()
            }} >2 players mode</button>
          </div>
        </div>
        : ''}

			</div>
			)
	}
}

export default TicTacToe
