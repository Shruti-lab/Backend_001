import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

export default function Page1(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
        .then(res=>{setUsers(res.data)})
        .catch(err=>{
            console.log(err);
          })
        
        console.log(users);
      }, []);
    return(
        <div>
            <h1>Users (using cors)</h1>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
        </div>
      ))
      }

        </div>

    )
}