import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { getDetails } from '../../services/swp-api';
import { Link } from 'react-router-dom';

const StarshipDetails = () => {
  const location = useLocation()

  return (
    <>
    <div className='starship-detail'>
      NAME: {location.state.starship.name}
      <br />
      MODEL: {location.state.starship.model}
      <br />
      <Link key={location.state.starship.name}  to='/starship-list'>
        <div className="return-div">
          Return
        </div>
      </Link>
    </div>
    </>
  );
}

export default StarshipDetails