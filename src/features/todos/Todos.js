import React from 'react'
import CreateTodoForm from '../../components/CreateTodoForm';
import TodosList from '../../components/TodosList'
import './Todos.css'

const Todos = () => {
  return (
    <div className="todos-container">
      <CreateTodoForm />
      <TodosList />
    </div>
  )
}


export default Todos
