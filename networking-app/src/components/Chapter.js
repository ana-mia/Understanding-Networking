
// This component will show the content of each chapter based on the chapter ID from the URL.
import React from 'react';
import { useParams } from 'react-router-dom';

const chaptersContent = {
  1: { title: 'Chapter 1: Introduction', content: 'Introduction to networking concepts.' },
  2: { title: 'Chapter 2: Application Layer', content: 'Details about the application layer protocols.' },
  3: { title: 'Chapter 3: Transport Layer', content: 'Understanding transport layer functionalities.' },
  // Add more content as needed
};

const Chapter = () => {
  const { id } = useParams(); // Access the chapter ID from the URL
  const chapter = chaptersContent[id];

  if (!chapter) {
    return <h2>Chapter not found!</h2>;
  }

  return (
    <div>
      <h1>{chapter.title}</h1>
      <p>{chapter.content}</p>
      {/* You can add more detailed content, images, or visualizations here */}
    </div>
  );
};

export default Chapter;