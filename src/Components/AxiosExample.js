import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function AxiosExample() {
    const [users, setUsers] = useState([]);    // State to store fetched data
    const [error, setError] = useState(null);  // State to store any error
    const [loading, setLoading] = useState(true);  // State to store any error
  
    useEffect(() => {
      // Making the API request when the component mounts
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // If the request is successful, store the data in state
          setUsers(response.data);
          setLoading(false);
        })
        .catch(error => {
          // If there's an error, update the error state
          setError(error.message);
        });
    }, []);
  
    return (
      <div className='col-md-12'>
        <h2>User List using Axios.</h2>
        
        {error && <p style={{ color: 'red' }}>{error}</p>} 
        <Table striped bordered>
          <thead>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Phone</th>
            <th>Website</th>
          </thead>
          <tbody>
          {loading && <h1 style={{position:'absolute',top:'180px',left:'40%'}}>Loading............</h1>} 
              {
  
              users.map((items)=>(
                <tr>
                  <td>{items.name}</td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td>{items.address.street}</td>
                  <td>{items.phone}</td>
                  <td>{items.website}</td>
                </tr>
                
              ))
              }
          </tbody>
          
        </Table>
      </div>
    );
}
