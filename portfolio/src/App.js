import React, {useState} from 'react';

import './App.css';

import recsData from './components/recommendations/data'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/projects/Portfolio';
import PortfolioModal from './components/projects/PortfolioModal';
import Footer from './components/footer/Footer'
import Awards from './components/awards/Awards'
import Recommendations from './components/recommendations/Recs';
import ProjectsPagination from './components/pagination/ProjectsPagination'

function App() {

  const [open, setOpen] = useState(false);
  
  
  const [recs, setAwards] = useState(recsData)
  const [recsPerPage, setRecsPerPage] = useState(5)
  const [loading, setLoading] = useState(false)
 
  const [currentRecPage, setCurrentRecPage] = useState(1)
  const [selected, setSelected] = useState({})

  console.log(open)

  


  return (
    <div className={open ? 'overflo' : 'false'}>
      <Header />
      <About/>
      <Skills/>
      <Portfolio open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} loading={loading} />
      <PortfolioModal selected={selected} open={open} setOpen={setOpen}/>
      <Awards />
      <Recommendations />
      <Footer/>
    </div>
  );
}

export default App;
