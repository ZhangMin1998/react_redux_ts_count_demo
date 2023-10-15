import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

export type TodoItemType = {
  id: string
  title: string
  completed: boolean
}

const INIT_STATE: TodoItemType[] = [
  {
    id: nanoid(5),
    title: '玩游戏',
    completed: false
  },
  {
    id: nanoid(5),
    title: '睡觉',
    completed: false
  }
]

const todoListSlice = createSlice({
  name: 'todoList', // 模块名唯一

  // 初始数据
  initialState: INIT_STATE,

  reducers: {
    add (state: TodoItemType[], action: PayloadAction<TodoItemType>) {
      // return state.concat(action.payload) // 把最新的添加到最后
      return [
        action.payload,
        ...state
      ]
    },
    remove (state: TodoItemType[], action: PayloadAction<{id: string}>) {
      return state.filter(item => item.id !== action.payload.id)
    },
    toggle (state: TodoItemType[], action: PayloadAction<{id: string}>) {
      return state.map(item => {
        if (item.id !== action.payload.id) return item
        return {
          ...item,
          completed: !item.completed
        }
      })
    }
  }
})
const todoListReducer = todoListSlice.reducer

export const { add, remove, toggle } = todoListSlice.actions

export default todoListReducer