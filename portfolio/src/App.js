import React, {useState} from 'react';

import './App.css';
import data from './data'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/projects/Portfolio';
import PortfolioModal from './components/projects/PortfolioModal';
import Footer from './components/Footer'
import Awards from './components/awards/Awards'

function App() {

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(data)
  const [selected, setSelected] = useState({})

  console.log(open)

  return (
    <div className={open ? 'overflo' : 'false'}>
      <Header />
      <About/>
      <Skills/>
      <Portfolio open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} projects={projects}/>
      <PortfolioModal selected={selected} open={open} setOpen={setOpen}/>
      <Awards />
      <Footer/>
    </div>
  );
}

export default App;
