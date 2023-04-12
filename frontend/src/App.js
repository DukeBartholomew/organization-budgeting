import "./App.css";


import { Font } from "./components/Font";
import { Routes, Route } from "react-router-dom";
import { CreateAccount } from "./components/CreateAccount";
import Landing from "./views/Landing";
import Home from "./views/Home";



function App() {
  
  
  return <>
    <div className="App">
      <Font />

      <Routes>
        <Route path='/' element={<CreateAccount/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    
    </div>
    </>;
}

export default App;
