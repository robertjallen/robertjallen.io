import React, {useState} from 'react';
import styles from './pagination.css'


const AwardsPagination = ({active, setActive, awardsPerPage, totalAwards, paginate }) => {
const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAwards / awardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const someFunct = (number) => {
    setActive(number)
    paginate(number)
    console.log("sumfunc active", active)
  }

  return (
    <nav >
      <h4>More Awards</h4>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} onClick={() => someFunct(number)}  className={active == number ? 'active page-item' : 'page-item'}>
            <a href="#more-awards" >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AwardsPagination;