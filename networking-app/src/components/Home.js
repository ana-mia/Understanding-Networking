// This file displays a list of chapters and allows the user to click on them
// and navigate to the content of a certain chapter

import React from 'react';
import { Link } from 'react-router-dom';

const chapters = [
  { id: 1, title: 'Chapter 1: Introduction' },
  { id: 2, title: 'Chapter 2: Application Layer' },
  { id: 3, title: 'Chapter 3: Transport Layer' },
  //{ id: 10, title: 'Chapter 10: Wireshark' },
  // Add more chapters as needed
];

const Home = () => {
  return (
    <div>
      <h1>Ana's Understanding of Computer Networking</h1>
      <h3>Honorable mention: "Computer Networking: A Top Down Approach"</h3>
      <h4>Book by Jim Kurose and Keith W. Ross</h4>
      <h2>Chapters</h2>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link to={`/chapter/${chapter.id}`}>{chapter.title}</Link>
          </li>
        ))}
        <li>
            <Link to="/wireshark">Chapter 10: Wireshark</Link>  {/* Link to the Wireshark chapter */}
        </li>
      </ul>
    </div>
  );
};

export default Home;