import React from 'react';
import './landing.css'
import { NavLink } from 'react-router-dom';

export default () => (
       
    <div className="landing-page">
        <h1>Climbing Journal</h1>
        <form>
            <input className="landing-page-input" type="text" placeholder="Enter City or Zip Code"/>
        </form>
        <div className="search-btn-wrapper">
            <NavLink to ='/results' className="search-btn">Seach Locations</NavLink>
        </div>
    </div>
)