import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/count'
import todoListReducer, { TodoItemType } from './modules/todoList'

export type StateType = {
  countStore: number,
  todoListStore: TodoItemType
}

export default configureStore({
  reducer: {
    // 注册子模块
    countStore: countReducer,
    // 还可以扩展其他模块
    todoListStore: todoListReducer
  }
})