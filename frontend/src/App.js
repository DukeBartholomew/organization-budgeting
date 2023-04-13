import "./App.css";


import { Font } from "./components/Font";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import { CreateAccount } from "./components/CreateAccount";
import CreateOrg from "./views/CreateOrg";



function App() {
  
  
  return <>
    <div className="App">
      <Font />

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<CreateAccount/>} />
        <Route path='/create-org' element={<CreateOrg/>} />
      </Routes>
      
    
    </div>
    </>;
}

export default App;
