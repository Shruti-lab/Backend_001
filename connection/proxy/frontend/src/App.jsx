import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get('/api/users')
    .then(res=>{
      setUsers(res.data)
    }).catch(err=>{
      console.log(err);
    })
    console.log(users)
  },[])

  return (
    <div>
      <h1>Users (using proxy)</h1>
      <div>
        {
          users.map(user=>(
            <div key={user.id}>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
              </div>
          ))
}
      </div>
    </div>
  )
}

export default App
