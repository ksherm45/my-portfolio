import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar.jsx';
import { Route, Routes} from "react-router-dom";
import React from 'react';



function App() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry)
  //     if(entry.isIntersecting){
  //       entry.target.classList.add('.show');
  //     }else {entry.target.classList.remove('.show')}
  //   })
  // })

  // const hiddenElements = document.querySelectorAll('.hidden');
  // hiddenElements.forEach((el) => observer.observe(el));

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
