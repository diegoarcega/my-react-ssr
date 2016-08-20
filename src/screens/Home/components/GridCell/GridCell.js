import React from 'react'

const style = {
  background:' #ccc',
  minHeight: '100px',
  border: '1px solid blue'
}

const GridCell = ({id, player, onCellClick}) => {
  return (
    <div
      style={style}
      className="mui-col-xs-4"
      onClick={onCellClick}
      >
      {id}
      {player}
    </div>
  )
}


export default GridCell
