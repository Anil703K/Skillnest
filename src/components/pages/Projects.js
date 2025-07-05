import React from 'react'
import './ProjectsCard.css';


function Projects() {
  return (
    <div className="project-main">

        <div className="project-card">
            <h3>Python</h3>
            <ol>
                <li>To-Do List App (Console or Tkinter GUI)</li>
                <li>Quiz Application</li>
                <li>Currency Converter</li>
                <li>Weather App using OpenWeatherMap API</li>
                <li>Web Scraper using BeautifulSoup</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>Java</h3>
            <ol>
                <li>Student Management System</li>
                <li>Banking Application (CLI-based)</li>
                <li>Library Management System</li>
                <li>Tic Tac Toe Game (JavaFX)</li>
                <li>Basic Chat App using Sockets</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>C</h3>
            <ol>
                <li>Simple Calculator</li>
                <li>Voting System</li>
                <li>Student Record System</li>
                <li>Number Guessing Game</li>
                <li>Tic Tac Toe Game (Terminal-based)</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>C++</h3>
            <ol>
                <li>Hospital Management System</li>
                <li>Bank Management System</li>
                <li>Snake Game (graphics.h)</li>
                <li>Simple Compiler (Tokenizer)</li>
                <li>ATM Simulator</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>HTML & CSS</h3>
            <ol>
                <li>Portfolio Website</li>
                <li>Product Landing Page</li>
                <li>Responsive Blog Layout</li>
                <li>Restaurant Website</li>
                <li>Login Page Clone</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>JavaScript</h3>
            <ol>
                <li>To-Do List (Dynamic DOM)</li>
                <li>Stopwatch / Timer</li>
                <li>Weather App using Fetch API</li>
                <li>Calculator</li>
                <li>Typing Speed Test</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>React.js</h3>
            <ol>
                <li>Movie Search App (TMDB API)</li>
                <li>Notes App with LocalStorage</li>
                <li>Quiz App</li>
                <li>Recipe Finder App</li>
                <li>E-commerce Product Page</li>
            </ol>
        </div>

        <div className="project-card">
            <h3>SQL</h3>
            <ol>
                <li>Library Database Schema</li>
                <li>College Admission System</li>
                <li>Online Store Inventory System</li>
                <li>Hospital Patient Database</li>
                <li>Employee Management System</li>
            </ol>
        </div>

    </div>
  );
}

export default Projects;
