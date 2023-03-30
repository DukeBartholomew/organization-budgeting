import './App.css';
import axios from 'axios';
import { MantineProvider } from '@mantine/core';
import { Login } from './components/Login';
import { Font } from './components/Font';


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
    "id": 1,
    "first": "Duke",
    "last": "Bartholomew",
    "username": "dukeBartholomew",
    "password": "123",
    "age": 21,
    "admin" : true
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
        <Font/>
        
        <h1 class="header">Budget Mania</h1>
        <body>

        <Login/>
        {/* <button onClick={checkAPI}>Check API</button>
        <button onClick={sendJSON}>Send JSON</button>
        <button onClick={sendUser}>Send User to DB</button>
        <button onClick={getUsers}>Get Users from DB</button>
        <button onClick={clearUsers}>Clear Users in DB</button> */}

        
        </body>
      </div>
      
  );


}





export default App;