import React, {useEffect, useState} from 'react'
import PortfolioCard from './PortfolioCard'
import styles from './portfolio.css'
import Animation from '../animation/Animation'
import data from './data'
import Pagination from '../pagination/ProjectsPagination'

export default function Portfolio(props) {

  const [active, setActive] = useState('')
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


  console.log(props, "portfolio props")
  return (
      <div className='portfolio' id='portfolio'>
        <Animation/>
		    <h1 id="more-projects" className="sections">Projects and Experience</h1>
        <hr className="hrs"/>
        {currentProjects.map(project => {
          return (
            <>
              <PortfolioCard project={project} open={props.open} setOpen={props.setOpen} selected={props.selected} setSelected={props.setSelected}/>
            </>
          ) 
        })}
       <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
        active={active}
        setActive={setActive}
      />
      </div>
  )
}
