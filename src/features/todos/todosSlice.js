import {createSlice} from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {},
  reducers:{
    addTodo: (state, action) => {
      return {
        ...state,
        ...{
          [action.payload.id]: {
            id: action.payload.id,
            contents: action.payload.contents,
            status: action.payload.status,
            color: action.payload.color
          }
        }
      }
    },
    removeTodo: (state, action) => {
      delete state[action.payload.id];
    },
    changeStatus: (state, action) => {
      state[action.payload.id].status = true;
    }
  }
})


export const {addTodo, removeTodo, changeStatus} = todosSlice.actions;

export const selectAllTodos = (state) => {
  return state.todos;
}

export default todosSlice.reducer
