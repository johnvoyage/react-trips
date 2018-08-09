import React from 'react';
import { Link } from 'react-router-dom';


const TripListItem = ({ dispatch, id, country }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{ country }</h3>
    </Link>

  </div>
);

export default TripListItem;