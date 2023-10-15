import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove, toggle } from '../store/modules/todoList'
import type { StateType } from '../store/index'
import { nanoid } from 'nanoid'
import type { TodoItemType } from '../store/modules/todoList'

const Count:FC = () => {
  // 使用redux的数据
  const todoList:any = useSelector<StateType>(state => state.todoListStore) as TodoItemType

  // 得到dispatch方法
  const dispatch = useDispatch()

  // 删除
  const del = (id: string) => {
    const action = remove({id})
    dispatch(action)
  }
  // 切换
  const tol = (id:string) => {
    const action = toggle({id})
    dispatch(action)
  }
  // 添加
  function addd(){
    const id = nanoid(5)
    const newTodo = {
      id,
      title: `todo-${id}`,
      completed: false
    }
    const action = add(newTodo)
    dispatch(action)
  }

  return (
    <>
      <div>
        <button onClick={addd}>添加</button>
      </div>
      <ul>
        {
          todoList.map((item: any) => {
            return <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : '' }}>
              <span onClick={() => tol(item.id)}>{item.title}</span>
              &nbsp;
              <button onClick={() => del(item.id)}>删除</button>
            </li>
          })
        }
      </ul>
    </>
  )
}
export default Count