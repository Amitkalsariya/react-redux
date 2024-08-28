import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minus, plus } from './countSlice'

const ClickButton = () => {
    const data=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{data}</h1>
      <button onClick={()=>dispatch(plus())}>For +++</button>
      <button onClick={()=>dispatch(minus())}>For ---</button>
    </div>
  )
}

export default ClickButton
