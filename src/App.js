import './App.css';
import Base from './Base/base'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [token,setToken] = useState() 
  useEffect(() => {
      axios.post('http://10.89.189.108/laravelapp4/public/api/login', {
          email: 'umair@gmail.com',
          password: 123456
      }).then(res => {
          setToken(res.data.access_token)
      })
          .catch(err => {
              console.log(err)
          })
  }, [])

  localStorage.setItem('token',token)
  
  return (
    <div>
      <BrowserRouter>
        <Base />
      </BrowserRouter>

    </div>
  );
}

export default App;
