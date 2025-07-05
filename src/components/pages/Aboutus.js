import React from 'react';
import './About.css';

function Aboutus() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Coding Platform</strong> – your one-stop destination to learn programming and build real-world skills!
        Whether you're just starting your coding journey or looking to deepen your knowledge, we offer structured content to support your growth.
      </p>
      <p>
        Our website provides:
      </p>
      <ul>
        <li><strong>Programming Language Notes:</strong> Easy-to-understand PDFs covering essential concepts in Python, Java, C++, SQL, and more.</li>
        <li><strong>Video Tutorials:</strong> Curated playlists and beginner-friendly courses to help you grasp coding fundamentals with visual explanations.</li>
        <li><strong>Project Ideas:</strong> Practical project suggestions in multiple languages that you can build to apply your learning.</li>
      </ul>
      <p>
        Our goal is to empower students, hobbyists, and self-learners by delivering clear, useful, and accessible resources.
        No matter your background or experience level, <strong>Coding Platform</strong> is here to help you code with confidence.
      </p>
    </div>
  );
}

export default Aboutus;
