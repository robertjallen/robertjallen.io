import React from 'react';
import styles from './pagination.css'





const Pagination = ({active, setActive, projectsPerPage, totalProjects, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  const someFunct = (number) => {
    setActive(number)
    paginate(number)
    console.log("sumfunc active", active)
  }

  return (
    <nav >
      <h4>More Projects</h4>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} onClick={() => someFunct(number)}  className={active == number ? 'active page-item' : 'page-item'}>
            <a href="#more-projects" >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;