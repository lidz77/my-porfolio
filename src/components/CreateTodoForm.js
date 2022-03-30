import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {addTodo} from '../features/todos/todosSlice'

const CreateTodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      id: uuid(),
      contents: todo,
      status: false,
      color: "ffffff"
    }))
    setTodo('');
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label forhtml="todo-input">What's on your mind today?</label>
      <input type="text"
        placeholder="Do something"
        value={todo}
        onChange={(e) => {setTodo(e.target.value)}}
        />
    </form>
  )
}


export default CreateTodoForm
