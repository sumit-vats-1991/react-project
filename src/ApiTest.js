import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function ApiTest() {
  const [users, setUsers] = useState([]);    // State to store fetched data
  const [error, setError] = useState(null);  // State to store any error

  useEffect(() => {
    // Making the API request when the component mounts
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // If the request is successful, store the data in state
        setUsers(response.data);
      })
      .catch(error => {
        // If there's an error, update the error state
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if present */}
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
