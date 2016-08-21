import React from 'react'

const GridCell = ({id, player, onCellClick}) => {
  return (
    <div
      style={cellStyle}
      className="mui-col-xs-4"
      onClick={onCellClick}
      >
        {player === 'player1' ? <span style={markStylePlayer1}>x</span> : ''}
        {player === 'player2' ? <span style={markStylePlayer2}>o</span> : ''}
    </div>
  )
}

// react-css-modules doesnt work on universal app (found out now 21/08)
const cellStyle = {
  background:' #eee',
  minHeight: '100px',
  border: '1px solid #ddd',
  textAlign: 'center'
}

const markStylePlayer1 = {
  fontSize: '460%',
  color: '#1976d2'
}

const markStylePlayer2 = {
  fontSize: '460%',
  color: '#f44336'
}

export default GridCell
