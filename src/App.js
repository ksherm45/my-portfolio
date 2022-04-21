import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar.jsx';
import { Route, Routes} from "react-router-dom";
import React from 'react';

function App() {
  return (
    
<div>

<Navbar/>

<Routes>
<Route path="/" element={<Homepage/> } />
<Route path="/Projects" element={<Projects/>} />
<Route path="/Contact" element={<Contact/>} />

</Routes>

</div>
    
  );
}

export default App;
