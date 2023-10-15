import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../store/count'
import type { StateType } from '../store/index'

const Count:FC = () => {
  // 使用redux的数据
  const count:any = useSelector<StateType>(state => state.countStore)

  // 得到dispatch方法
  const dispatch = useDispatch()

  return (
    <div>
      <p>count:{count}</p>
      <div>
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(decrease())}>-</button>
      </div>
    </div>
  )
}
export default Count