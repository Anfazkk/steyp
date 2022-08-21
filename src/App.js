import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from './Components/Screens/Dash'
import Skills from './Components/Screens/Skills';


window.alert("New content uploaded");

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
