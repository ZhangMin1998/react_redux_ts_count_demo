import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

export type StateType = {
  countStore: number
}

export default configureStore({
  reducer: {
    // 注册子模块
    countStore: countReducer
    // 还可以扩展其他模块
  }
})