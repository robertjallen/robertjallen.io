import React, {useEffect, useState} from 'react';

import './App.css';
import data from './data'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/projects/Portfolio';
import PortfolioModal from './components/projects/PortfolioModal';
import Footer from './components/footer/Footer'
import Awards from './components/awards/Awards'
import Animation from './components/animation/Animation'
import Recommendations from './components/recommendations/Recs';
import Pagination from './components/pagination/Pagination'

function App() {

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(data)
  const [projectsPerPage, setProjectsPerPage] = useState(6)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState({})

  console.log(open)

  // Get current posts
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

     // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={open ? 'overflo' : 'false'}>
      <Header />
      <Animation/>
      <About/>
      <Animation/>
      <Skills/>
      <Animation/>
      <Portfolio open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} projects={currentProjects} loading={loading} />
      <PortfolioModal selected={selected} open={open} setOpen={setOpen}/>
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
      />
      <Animation/>
      <Awards />
      <Animation/>
      <Recommendations />
      <Footer/>
    </div>
  );
}

export default App;
