import React from 'react';
import { FullCircle } from '../../css/style';
import { isPlural } from '../../helper/helper';
import * as _ from 'underscore';

const ReviewList = ({ reviews }) => (
  <div>
    {reviews.map(({ 
      _id,
      username,
      location,
      contributions,
      rating,
      title,
      review,
      dateOfReview,
      dateofTrip,
      tripType,
      helpful 
    }) => (
      <div key={_id}>
        <p>{username} wrote a review {dateOfReview}</p>
        <p>
          &#x1F4CD; {location} 
          <span> &#8226; </span>
          {contributions} contribution{isPlural(contributions)}
          <span> &#8226; </span>
          {helpful} helpful vote{isPlural(helpful)}
        </p>
        <p>{_.range(0, rating).map((val) => <span><FullCircle /> </span>)}</p>
        <p><b>{title}</b></p>
        <p>{review}</p>
        <p><b>Date of experience: </b>{dateofTrip}</p>
        <p>{helpful} helpful vote{isPlural(helpful)}</p>
        <p>&#x1F44D; Helpful &#x1F4E8;	Share</p>
        <hr />
      </div>
    ))}
  </div>
);

export default ReviewList;
