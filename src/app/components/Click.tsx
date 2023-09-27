'use client';
 
import React from 'react';
 
export default function Click() {

  function handleClick(){
    console.log('Hello');
  }
 
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}