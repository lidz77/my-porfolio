import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {selectAllTodos} from '../features/todos/todosSlice'
import {removeTodo, changeStatus} from '../features/todos/todosSlice';
import './TodosList.css'

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
    <section >
      <ul className="todos-list">
        {Object.values(todosList).map((item, index) => {
          return (
            <li key={index} className="todo">
              {item.contents}
              <div className="btn-control">
                <button className="btn remove" onClick={()=>handleRemove(item.id)}>Remove</button>
                <button className="btn done" onClick={() => handleChangeStatus(item.id)}>Done</button>
              </div>
            </li>
          ) })}
      </ul>
    </section>
  )
}


export default TodosList
