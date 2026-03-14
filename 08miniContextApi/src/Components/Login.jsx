import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // receive the value provided by UserContext.Provider
  const { setUser } = useContext(UserContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})   // in which format it will store in user variable 
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />

      <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        password='password' />
<br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
