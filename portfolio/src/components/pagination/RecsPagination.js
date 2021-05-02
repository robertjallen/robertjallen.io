import React from 'react';
import styles from './pagination.css'

const RecsPagination = ({active, setActive, recsPerPage, totalRecs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecs / recsPerPage); i++) {
    pageNumbers.push(i);
  }
  const someFunct = (number) => {
    setActive(number)
    paginate(number)
    console.log("sumfunc active", number, active)
  }

  return (
    <nav >
      <h4>More Recommendations</h4>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} onClick={() => someFunct(number)}  className={active == number ? 'active page-item' : 'page-item'}>
            <a href="#more-recs"  className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RecsPagination;