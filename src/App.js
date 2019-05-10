import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Testimonials from './components/Testimonials'
import ReviewCard from './components/ReviewCard';
import reviews from './review_data';
import './App.css';

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <Navbar/>
        <Splash/>
        <Testimonials/>
        <div className = "container">
          <div className="row">

          </div>
        </div>
      </div>
    )
  }

  return component
}

export default App;
