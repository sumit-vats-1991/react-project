import React from 'react'
import "./Css/Custom.css";
import Header from './Components/Header';
// import RightSideBar from './Components/RightSideBar';

export default function App() {
 
  return (
    <>
      <Header 
        
      />
      
    </>
    
  )
}



// import React, { useState } from "react";
// import { Button, Table } from "react-bootstrap";
// import ApiTest from "./ApiTest";


// function App() {
//   let grades = [
//     {name: 'John', age: 8, gender: 'M'},
//     {name: 'Sarah', age: 12, gender: 'F'},
//     {name: 'Bob', age: 16, gender: 'M'},
//     {name: 'Johnny', age: 2, gender: 'M'},
//     {name: 'Ethan', age: 4, gender: 'M'},
//     {name: 'Paula', age: 18, gender: 'F'},
//     {name: 'Donald', age: 5, gender: 'M'},
//     {name: 'Jennifer', age: 13, gender: 'F'},
//     {name: 'Courtney', age: 15, gender: 'F'}, 
//     {name: 'Jane', age: 9, gender: 'F'}
//   ]
//   const [status, setStatus]=useState(true)
//   return(
//     <div className="container mt-3">
//       <ApiTest />
//       <Button onClick={()=>setStatus(true)} variant="success" style={{marginRight:"20px"}}>Show</Button>
//       <Button onClick={()=>setStatus(false)} variant="warning" style={{marginRight:"20px"}}>Hide</Button>
//       <Button onClick={()=>setStatus(!status)} variant="warning">Toggle</Button>
//       <br></br>
//       <br></br>
      
//       {status ? <Table striped bordered hover border={1}>
//         <thead>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </thead>
//         <tbody>
//             {
//             grades.map((items)=>{
//               return(
//                 <tr>
//                   <td>{items.name}</td>
//                   <td>{items.age}</td>
//                   <td>{items.gender}</td>
//                 </tr>
                
//               )
//             })
//           }
//         </tbody>
//       </Table> : <div className="text-center">
//         <h1>Table Hide.</h1>
//       </div>
// }
      
//     </div>
//   )
// }
// export default App;

