import React, {useState} from 'react'
import styles from './recommendation.css'
import Recommendation from './Rec'
import Animation from '../animation/Animation'
import data from './data'
import RecsPagination from '../pagination/RecsPagination'


export default function Recommendations() {
  const [active, setActive] = useState('')
  const [recs, setRecs] = useState(data)
  const [recsPerPage, setRecsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  // Get current recs
  const indexOfLastRec = currentPage * recsPerPage;
  const indexOfFirstRec = indexOfLastRec - recsPerPage;
  const currentRecs = recs.slice(indexOfFirstRec, indexOfLastRec);

     // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="recommendation-container">
      <Animation/>
      <h1 id="more-recs" className="sections">Recommendations</h1>
      <hr className="hrs"/>
        {currentRecs.map(rec => {
          return <Recommendation rec={rec}/>
        })}

        <RecsPagination
        recsPerPage={recsPerPage}
        totalRecs={recs.length}
        paginate={paginate}
        active={active}
        setActive={setActive}
      />      
    </div>
  )
}
