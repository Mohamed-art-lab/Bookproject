import React, { useState, useEffect } from 'react';
import "./Featured.css";
import { NavLink } from 'react-router-dom';

const FeaturedBook = () => {
  const [featuredBook, setFeaturedBook] = useState(null);
  const apiURL = 'https://your-book-api-url'; // Replace with your book API URL

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomBook = data[randomIndex];
          setFeaturedBook(randomBook);
        } else {
          console.error('Invalid:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="featured-book-container">
      <h2 className="featured-book-title">Featured Book</h2>
      {featuredBook ? (
        <div className="featured-book">
          <div className="book-details">
            <h2>Our Featured Book of the Week</h2>
            <h3 className="book-title">{featuredBook.title}</h3>
            <p className="book-description">Author: {featuredBook.author}</p>
            <p className="book-description">Genre: {featuredBook.genre}</p>
            {/* Add more book details as needed */}
            <p className='book-button'>
              <NavLink to={`/books/${featuredBook.id}`}>View Book</NavLink>
            </p>
          </div>
          <img
            src={featuredBook.cover} 
            alt={featuredBook.title}
            className="book-cover"
          />
        </div>
      ) : (
        <p>Loading featured book...</p>
      )}
    </div>
  );
};

export default FeaturedBook;
