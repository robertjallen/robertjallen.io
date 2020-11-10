import React, {useState} from 'react';

import './App.css';

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';


function App() {

  const [open, setOpen] = useState("open");


  // function myNavOpen() {
  //   document.getElementById("my-nav").style.width = "100%";
  //   $("body").addClass("overflo");
  // }

  // function closeNav() {
  //   document.getElementById("my-nav").style.width = "0%";
  //   $("body").removeClass("overflo");
  // }

  return (
    <div className={`body-${open}`}>
      <Header />
      <About/>
      <Skills/>
      <Portfolio open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
