import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE: number = 100

const countSlice = createSlice({
  name: 'count', // 模块名唯一

  // 初始数据
  initialState: INIT_STATE,

  reducers: {
    increase (state: number) {
      return state + 1
    },
    decrease (state: number) {
      return state - 1
    }
  }
})
const countReducer = countSlice.reducer

export const { increase, decrease } = countSlice.actions

export default countReducer