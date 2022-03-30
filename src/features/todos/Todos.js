import React from 'react'
import PropTypes from 'prop-types'
import CreateTodoForm from '../../components/CreateTodoForm';
import TodosList from '../../components/TodosList'

const Todos = (props) => {
  return (
    <div className="todos-container">
      <CreateTodoForm />
      <TodosList />
    </div>
  )
}
Todos.propTypes = {

}

export default Todos
