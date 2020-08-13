import React from 'react';
import './css/Review.css';

function ReviewCard(props) {
  return(
    <div className="col-4 Review">
      <div className="card text-center mb-3r">
        <div className="card-header">

        </div>
        <div className="card-body">
          <h5 className="card-title">PLACE HEADING HERE</h5>
          <p className="card-text">PLACE SUMMARY HERE</p>
          <p className="card-text">PLACE STARS HERE</p>
          <button className="btn btn-warning">Full Review</button>
        </div>
        <div className="card-footer text-muted">
          place date posted here
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
