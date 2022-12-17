import React from 'react';
import './card.css';

// All react functional components must start with a capital letter
// React components only returns one jsx element

// We get the props we sent from the App js component here, destructured
// Note that the variable are exact same thing as what we used to store it in the App js file
export default function SingleCard({name}) {
  return (
    <>
    <div className="card">
<h2> My name is {name}</h2>
<p>body</p>
<footer>footer</footer>
    </div>


    </>
  )
}
