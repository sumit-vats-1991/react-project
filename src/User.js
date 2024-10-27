import React from 'react'

export default function User(props) {
  return (
    <div>
      <h1>This is users component</h1>
      <button onClick={()=>props.countStatus()}>add</button>
    </div>
  )
}
