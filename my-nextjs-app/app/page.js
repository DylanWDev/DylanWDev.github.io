"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars';

// Render the Home component into the root element
export default function Home(){
  return (
    <>
      <div className="star-container">
        <Stars />
      </div>
    </>
  )
}
