// This file displays a list of chapters and allows the user to click on them
// and navigate to the content of a certain chapter

import React from 'react';
import { Link } from 'react-router-dom';

const chapters = [
  { id: 1, title: 'Chapter 1: Introduction' },
  { id: 2, title: 'Chapter 2: Application Layer' },
  { id: 3, title: 'Chapter 3: Transport Layer' },
  // Add more chapters as needed
];

const Home = () => {
  return (
    <div>
      <h1>A Top-Down Approach to Computer Networking</h1>
      <h2>Chapters</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>{chapter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;