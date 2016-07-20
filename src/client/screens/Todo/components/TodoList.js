import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleItem, deleteItem }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo
        key={index}
        {...todo}
        toggleFn={ ()=> toggleItem(todo.id) }
        deleteFn={ ()=> deleteItem(todo.id) }
        />
    ))}
  </ul>
)

export default TodoList
