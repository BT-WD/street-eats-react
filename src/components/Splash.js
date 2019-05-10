import React, { Component } from 'react';
import './css/Splash.css';

const Splash = () => {
	return(
		<div className="Splash">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="primary-text">We Eat Street Meat</h1>
					</div>
				</div>
				<div className="row profile">
					<div className="col-4">
						<img className="food-test" src="https://pbs.twimg.com/media/CLQ0sOlWwAAeyUj.jpg" alt="food"/>
					</div>
					<div className="col-8">
						<h1 className="secondary-text">Not all street meat is created equal</h1>
						<p className="paragraph-text">Here at We Eat Street Meat we know not all street meat was created equal. That is why we've gone out and tested food from carts and trucks around the city to let our users know which meat to eat and which to avoid. We've put our stomachs on the line for our users, so they won't have to.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Splash
