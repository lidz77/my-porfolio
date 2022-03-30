import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectAllTodos} from '../features/todos/todosSlice'
import {removeTodo, changeStatus} from '../features/todos/todosSlice';

const TodosList = (props) => {
  const dispatch = useDispatch();
  const todosList = useSelector(selectAllTodos);

  const handleRemove = (id) => {
    dispatch(removeTodo({
      id: id
    }))
  }
  const handleChangeStatus = (id) => {
    dispatch(changeStatus({
      id: id
    }))
  }
  return (
    <section className="todos-list">
      <ul>
      </ul>
      {Object.values(todosList).map((item, index) => {
        return (
          <li key={index}>
            {item.contents}
            <button className="remove" onClick={()=>handleRemove(item.id)}>Remove</button>
            <button className="done" onClick={() => handleChangeStatus(item.id)}>Done</button>
          </li>
        ) })}
    </section>
  )
}


export default TodosList
