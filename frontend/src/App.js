import './App.css';
import axios from 'axios';
import { MantineProvider } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

function App() {

  const url = 'http://localhost:8000'

  const checkAPI = () => {
    axios.get(url + '/').then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const user = {
    "first": "Duke",
    "last": "Bartholomew",
    "age": 21,
    "admin": true
  }

  const sendJSON = () => {
    console.log(user)

    axios.put(url + '/parse', user).then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const sendUser = () => {
    axios.post(url + '/user', user).then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const getUsers = () => {
    axios.get(url + '/users').then((res) => {
      alert(JSON.stringify(res.data))
    }).catch((err) => {
      console.log(err)
    })
  }

  const clearUsers = () => {
    axios.put(url + '/users/clear').then((res) => {
      alert(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    
    
      <div className="App">
        <Login/>
        <h1 class="header">Budget Mania</h1>
        <button onClick={checkAPI}>Check API</button>
        <button onClick={sendJSON}>Send JSON</button>
        <button onClick={sendUser}>Send User to DB</button>
        <button onClick={getUsers}>Get Users from DB</button>
        <button onClick={clearUsers}>Clear Users in DB</button>

        
      </div>
      
  );


}

export const Login = () => {
  return(
    <>
      <div class="login-info">
      <h2>Username</h2>
      <textarea class="username"></textarea>
      <h2>Password</h2>
      <textarea class="password"></textarea>
      <br></br>
      <button type="button" class="login-button">Login</button>
      </div>
      <div class="clear"></div>
    </>
  );
}



export default App;