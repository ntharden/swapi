import React, { useState, useEffect } from 'react';
import { getStarship } from '../../services/swp-api';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarship()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  
  return (
    <>
      <div>
        <div className="starship-container">
          {starships.map(starship =>
            <Link key={starship.name} state={{ starship }} to='/starship-detail'>
              <div className="starship-div">
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default StarshipPage