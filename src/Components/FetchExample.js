import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
export default function FetchExample() {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => (
                setUser(data)

            ))
            .catch((error) => console.error("Fetch error:", error));
    }, [])
    console.log('user--------------', user);
    return (
        <div>
            <h2>User Data</h2>
            <Table striped bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {
                        user ?
                            Object.entries(user).map(([key, value]) =>
                                typeof value === "object" ? (
                                    <tr>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.website}</td>
                                        <td><ul>
                                            {
                                                Object.entries(value.address).map(([subkey, subvalue]) =>
                                                    typeof subvalue === "object" ? (
                                                        <li>
                                                            {Object.entries(subvalue).map(([subkey1, subvalue1]) =>
                                                                typeof subvalue1 === "object" ? (
                                                                    <li><b>{subkey1} : {subvalue1}</b></li>
                                                                ) : (
                                                                    <li><b>{subkey1}</b> : {subvalue1}</li>
                                                                )
                                                            )
                                                }
                                                        </li>
                                                    ) : (
                                                        <li><b>{subkey}</b> : {subvalue}</li>
                                                    )
                                                )

                                            }
                                        </ul>
                                        </td>

                                    </tr>
                                ) : (
                                    <tr>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.website}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                )
                            )
                            : <h1 style={{ position: 'absolute', top: '180px', left: '40%' }}>Loading............</h1>
                    }
                </tbody>
            </Table>

        </div>
    )
}