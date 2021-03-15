import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Full Name', width: 230 },
    { field: 'username', headerName: 'User Name', width: 230 },
    { field: 'email', headerName: 'Email', width: 230 },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function UserTabla2() {
    const [apiData,setApiData] = useState()
    const [token,setToken] = useState() 
    useEffect(() => {
        axios.post('http://10.89.189.108/laravelapp4/public/api/login', {
            email: 'umair@gmail.com',
            password: 123456
        }).then(res => {
            setToken(res.data.access_token)
            
        })
            .catch(err => {
                console.log('eerrr')
            })
    }, [])

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    

    useEffect(()=>{
        axios.get('http://10.89.189.108/laravelapp4/public/api/projects',config).then(res=>{
            console.log(res.data.projects)
            setApiData(res.data)
        })
    },[])
    return (
        <div style={{ height: 780, width: '100%' }}>
            <DataGrid rows={apiData} columns={columns} pageSize={5} />
        </div>
    );
}
