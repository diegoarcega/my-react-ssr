import React from 'react'

const Todo = ({ toggleFn, deleteFn, id, text, completed } ) => (
  <li
    style={{textDecoration: completed ? 'line-through': 'none'}}
    >
    {text}
      <button onClick={toggleFn}>Toggle</button>
      <button onClick={deleteFn}>Delete</button>
    </li>
)

export default Todo
