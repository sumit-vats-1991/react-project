
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Container, Nav, Navbar } from 'react-bootstrap'
// import RightSideBar from './RightSideBar'
import AxiosExample from './AxiosExample'
import FetchExample from './FetchExample'



export default function Header(props) {
  return (
    <div className=''>
      <Router>
      <Navbar bg="dark" varient="dark">
        <Container>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/axios">Axios</Link>
            <Link to="/fetch">Fetch</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path="/" exact  element={<Home /> } />
        <Route path="/about"  element={<About /> } />
        <Route path="/contact"  element={<Contact /> } />
        <Route path="/axios"  element={<AxiosExample /> } />
        <Route path="/fetch"  element={<FetchExample /> } />
      </Routes>
    </Router>
    {/* <RightSideBar></RightSideBar> */}
    </div>
  )
}
