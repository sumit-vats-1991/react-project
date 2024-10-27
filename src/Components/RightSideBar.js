
// import React, { Component } from 'react'

// export default class RightSideBar extends Component {
//     render() {
//         console.log('propssss', this.props);
//         return (
//             <div>
//                 <ul>
//                     <li onClick={() => this.props.toggleVisibility(true)}>Axios</li>
//                 </ul>

//             </div>
//         )
//     }
// }


import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import AxiosExample from './AxiosExample'

export default function RightSideBar(props) {
    // console.log(toggleVisibility);
    return (
        <div className='rightSideBar col-md-2'>
            <Router>
                <ul>
                    <li><Link to="/axios">Axios</Link></li>
                    {/* <li onClick={() => props.isAxiosStatus(true)}>Axios</li> */}
                    <Routes>
                    <Route path="/axios"  element={<AxiosExample/> } />
                    </Routes>
                </ul>
            </Router>
            
            
        </div>

    )
}
