import React from 'react';
import styles from './pagination.css'

const RecsPagination = ({ recsPerPage, totalRecs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecs / recsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav >
      <h4>More Recommendations</h4>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a href="#more-recs" onClick={() => paginate(number)}  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RecsPagination;