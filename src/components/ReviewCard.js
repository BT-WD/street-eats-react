import React from 'react';
import './css/Review.css';

const ReviewCard = (props) => {
	return(
		<div className="col-4 Review">
			<div className="card text-center mb-3r">
			  <div className="card-header">

			  </div>
			  <div className="card-body">
					<h5 className="card-title"></h5>
					<p className="card-text"></p>
					<p className="card-text"></p>
					<a href="#" className="btn btn-warning">Full Review</a>
			  </div>
			  <div className="card-footer text-muted">

			  </div>
			</div>
		</div>
	);
};

export default ReviewCard;
