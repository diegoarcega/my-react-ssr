import React, { Component } from 'react'
import GridCell from './components/GridCell'
import gridData from './gridData'
import successMatch from './successMatch'
import random from 'lodash/random'
import isEqual from 'lodash/isEqual'


class Home extends Component{

  constructor(props){
    super(props)
    this.updateGrid = this.updateGrid.bind(this)
    this.player1 = 'player1'
    this.player2 = 'player2'
  }

  componentWillMount(){
    this.setState({
      grid: [...gridData]
    })
  }

  updateGrid(clickedCell, player){
    if(this.state.gameOver) return
    let alreadyChosen = false;
    const newGrid = this.state.grid.map(cell => {
      if(cell.id === clickedCell && cell.player === 'none'){
        cell.player = player;
        this.setState({alert: ''})
        alreadyChosen = false;
        return cell
      }else if(cell.id === clickedCell && cell.player !== 'none'){
        this.setState({alert: 'Cell already talken, choose another option'})
        alreadyChosen = true;
        return cell
      }
      return cell
    })

    if(alreadyChosen === false){
      this.setState({
        grid: newGrid
      }, () => {
        if(!this.winner()) this.nextPlayer(player)
      })
    }

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
    const turns = this.state.grid.filter(cell => cell.player !== 'none').length
    const tie = !winner1 && !winner2 && turns === 9
    if(winner1) this.setState({alert: `${this.player1} wins`, gameOver: true})
    if(winner2) this.setState({alert: `${this.player2} wins`, gameOver: true})
    if(tie) this.setState({alert: 'Tie, nobody wins', gameOver: true})
    return winner1 || winner2 || tie
  }

  randomValidMove(){
    const promise = new Promise(resolve => {
      const state = Object.assign({}, this.state)
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
      setTimeout(()=> this.updateGrid(cellId, this.player2), 100)
    })
  }

  firstPlayerMove(cellId){
    this.updateGrid(cellId, this.player1)
  }

	render(){
		return(
			<div>
        <h1>TicTacToe</h1>
        <h3 className="mui--text-center">
          {this.state.alert}
        </h3>
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
