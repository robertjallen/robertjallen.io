import React, {useState} from 'react';

import './App.css';

import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio';


function App() {
  

  const [open, setOpen] = useState(false);
  console.log(open)


  

  return (
    <div className={open ? 'overflo' : 'false'}>
      <Header />
      <About/>
      <Skills/>
      <Portfolio open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
