import React from 'react';
import styles from './pagination.css'

const AwardsPagination = ({ awardsPerPage, totalAwards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAwards / awardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav >
      <h4>More Awards</h4>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href="#more-awards" onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AwardsPagination;