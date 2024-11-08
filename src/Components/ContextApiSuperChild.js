import React, { useContext } from 'react'
import { UserContext } from './MyContext'

export default function ContextApiSuperChild() {
    const { data, setData } = useContext(UserContext)
    return (
      <div>
          <p>Content from context api page:{data}</p>
        <h1>This is Context Api Super Child page</h1>
        <button onClick={()=>setData(data+1)}>Add</button>
        <button onClick={()=>setData(data-1)}>Sub</button>
      </div>
    )
}
