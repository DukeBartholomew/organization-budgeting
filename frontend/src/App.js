import "./App.css";


import { Font } from "./components/Font";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";

function App() {
  
  
  return (
    <div className="App">
      <Font />

      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
