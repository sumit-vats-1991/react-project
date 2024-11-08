import React, { useState } from "react"
import ContextApiChild from "./ContextApiChild";
import { UserContext } from "./MyContext";

export default function ContextApi(){
    const [data,setData]=useState(0)
    console.log('dataaaaa',data);
    return(
        <div className="text-center">
            <h1>Context Api page.</h1>
            <hr></hr>
           <UserContext.Provider value={{data,setData}}>
                <ContextApiChild></ContextApiChild>

           </UserContext.Provider>
            
        </div>
    )
}