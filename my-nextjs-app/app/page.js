"use client"
import React from 'react';
import Home from './Home';

// Render the Home component into the root element
export default function Page(){
  return (
    <>
      <div className="star-container">
        <Home />
      </div>

      <div className='navbar'>
        <a>blog</a>
      </div>
    </>
  )
}
