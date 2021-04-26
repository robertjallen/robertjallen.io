import React from 'react';
import styles from './pagination.css'

const Pagination = ({ projectsPerPage, totalProjects, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav id="more-projects">
      <h4>More Projects</h4>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href="#more-projects" onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;