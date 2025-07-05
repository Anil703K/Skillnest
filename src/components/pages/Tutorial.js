import React from 'react'
import { Link } from 'react-router-dom';
import './TutorialCard.css';


function Tutorial() {
  return (
    <div className='maincard'>
        <div className='card'>
          <h3>Python</h3>
          <p>Beginner-friendly Python tutorial series by CodeWithHarry.</p>
          <Link to="https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"> Watch Now </Link>
         </div>
         <div className='card'>
        <h3>JavaScript</h3>
        <p>Full beginner JavaScript course by freeCodeCamp, covering core programming concepts.</p>
        <Link to="https://www.youtube.com/watch?v=PkZNo7MFNFg"> Watch Now </Link>
         </div>

         <div className='card'>
        <h3>SQL</h3>
        <p>SQL tutorial for beginners by Programming with Mosh - learn queries and databases.</p>
        <Link to="https://www.youtube.com/watch?v=7S_tz1z_5bA"> Watch Now </Link>
         </div>

         <div className='card'>
        <h3>Java</h3>
        <p>Java full course by BroCode - complete beginner to advanced programming concepts.</p>
        <Link to="https://www.youtube.com/watch?v=xk4_1vDrzzo"> Watch Now </Link>
         </div>

         <div className='card'>
        <h3>C++</h3>
        <p>Complete C++ course by Apna College with explanations of basics, OOP, and STL in Hindi.</p>
        <Link to=" https://www.youtube.com/watch?v=ZzaPdXTrSb8"> Watch Now </Link>
         </div>

         <div className='card'>
        <h3>HTML&CSS</h3>
        <p>HTML and CSS full course by freeCodeCamp — perfect for frontend beginners.</p>
        <Link to=" https://www.youtube.com/watch?v=mU6anWqZJcc"> Watch Now </Link>
         </div>

         <div className='card'>
        <h3>React.Js</h3>
        <p>React.js tutorial series by Codevolution — from basics to advanced components.</p>
        <Link to="https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> Watch Now </Link>
         </div>

         <div className='card'>
        <h3>C programming</h3>
        <p>C language full course by CodeWithHarry with hands-on coding and concepts in Hindi.</p>
        <Link to="https://www.youtube.com/watch?v=irqbmMNs2Bo"> Watch Now </Link>
         </div>
    </div>
  )
}

export default Tutorial;
