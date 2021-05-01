import React, {useState} from 'react'
import data from './data'
import Award from './Award'
import styles from './awards.css'
import Animation from '../animation/Animation'
import AwardsPagination from '../pagination/AwardsPagination'


export default function Awards() {

  const [awards, setAwards] = useState(data)
  const [awardsPerPage, setAwardsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  // Get current Awards
  const indexOfLastAward = currentPage * awardsPerPage;
  const indexOfFirstAward = indexOfLastAward - awardsPerPage;
  const currentAwards = awards.slice(indexOfFirstAward, indexOfLastAward);

     // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  return (
    <div className="awards-container">
      <Animation/>
      <h1 id="more-awards" className="sections">Awards</h1>
      <hr className="hrs"/>
      {currentAwards.map(award => {
        return <Award award={award}/>
      })}

      <AwardsPagination
        awardsPerPage={awardsPerPage}
        totalAwards={awards.length}
        paginate={paginate}
      />      
    </div>
  )
}
