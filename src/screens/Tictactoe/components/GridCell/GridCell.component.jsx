import React from 'react'

const cellStyle = {
  background:' #eee',
  minHeight: '100px',
  border: '1px solid #ddd',
  textAlign: 'center'
}

const markStyle = {
  fontSize: '460%',
  color: '#1976d2'
}

const GridCell = ({id, player, onCellClick}) => {
  return (
    <div
      style={cellStyle}
      className="mui-col-xs-4"
      onClick={onCellClick}
      >
      <span style={markStyle}>
        {player === 'player1' ? 'x' : ''}
        {player === 'player2' ? 'o' : ''}
      </span>
    </div>
  )
}


export default GridCell
