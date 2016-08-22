import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import random from 'lodash/random'
import isEqual from 'lodash/isEqual'
import request from 'axios'

import GridCell from './components/GridCell'
import DataSet from './dataset'
import successMatch from './successMatch'


class TicTacToe extends Component{

  constructor(props){
    super(props)
    this.updateGrid = this.updateGrid.bind(this)
    this.restart = this.restart.bind(this)
    this.update = this.update.bind(this)
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
    this.update()
  }
  update(){
    setInterval(() => {
      console.log('updating');
      request('/api/tictactoe/get/current').then(response => {
        this.setState({
          grid: response.data.grid,
          currentPlayer: response.data.currentPlayer
        })
      })
    }, 2000)
  }

  winner(){
    const player1 = this.state.grid.filter(grid => grid.player === this.player1).map(cell => cell.id)
    const player2 = this.state.grid.filter(grid => grid.player === this.player2).map(cell => cell.id)
    const winner1 = successMatch.some(match => match.every(matchValue => player1.includes(matchValue)))
    const winner2 = successMatch.some(match => match.every(matchValue => player2.includes(matchValue)))
    const turns = this.state.grid.filter(cell => cell.player !== 'none').length
    const tie = !winner1 && !winner2 && turns === 9
    if(winner1) this.setState({alert: `${this.player1} wins!`, gameOver: true})
    if(winner2) this.setState({alert: `${this.player2} wins!`, gameOver: true})
    if(tie) this.setState({alert: 'Tie, nobody wins!', gameOver: true})
    return winner1 || winner2 || tie
  }

  // randomValidMove(){
  //   const promise = new Promise(resolve => {
  //     const state = Object.assign({}, this.state)
  //     let autoCellId;
  //     let isCellMarked;
  //
  //     randomMove()
  //     resolve(autoCellId)
  //
  //     function randomMove(){
  //       autoCellId = random(1,9);
  //       isCellMarked = state.grid.some(cell => cell.id === autoCellId && cell.player !== 'none')
  //       while(isCellMarked) randomMove()
  //     }
  //   })
  //
  //   return promise
  // }

  // secondPlayerMove(){
  //   this.randomValidMove().then(cellId => {
  //     setTimeout(()=> this.updateGrid(cellId, this.player2), 100)
  //   })
  // }
  // nextPlayer(player){
  //   if(player === this.player1) this.secondPlayerMove()
  //   return
  // }


  playerMove(cellId){
    const turns = this.state.grid.filter(cell => cell.player !== 'none').length
    if(turns % 2 === 1) this.currentPlayer = this.player1
    else this.currentPlayer = this.player2

    this.updateGrid(cellId, this.currentPlayer)
  }

  updateGrid(clickedCell, player){
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
      request.post('/api/tictactoe/set', {
        grid: newGrid,
        currentPlayer: this.currentPlayer
      })
      this.setState({
        grid: newGrid,
        currentPlayer: this.currentPlayer
      }, () => {
        this.winner()
      })
    }
  }

  restart(){
    this.setState({
      grid: DataSet.get(),
      gameOver: false,
      alert: ''
    })
  }

	render(){
		return(
			<div>
        <h1>TicTacToe</h1>
        <h3 className="mui--text-center">{this.state.alert}</h3>
        <div className="mui-row">
          {this.state.grid.map((cell, index) =>(
            <GridCell
            key={index}
            id={cell.id}
            player={cell.player}
            onCellClick={() => this.playerMove(cell.id)}
            />
          ))}
        </div>
        <div className="mui-row">
          <div className="mui-col-xs-12">
            {this.state.gameOver ? <RaisedButton label="Play Again!" primary={true} onClick={this.restart} fullWidth={true} /> : ''}
          </div>
        </div>
			</div>
			)
	}
}

export default TicTacToe
