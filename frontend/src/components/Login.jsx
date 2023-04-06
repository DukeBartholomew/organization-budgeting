import { useState } from 'react';
import axios from 'axios';
const user = {
  "id": 1,
  "first": "Duke",
  "last": "Bartholomew",
  "username": "dukeBartholomew",
  "password": "123",
  "age": 21,
  "admin" : true
}
const url = 'http://localhost:8000'

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    axios.post(url + '/logIn', { username, password })
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => {
        console.log(err.res.data)
      });
  };

  return (
    <>
      <div className="login-info">
        <h2>Username</h2>
        <input type="text" className="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <h2>Password</h2>
        <input type="password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type="button" className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className="clear"></div>
      {message && <p>{message}</p>}
    </>
  );
};