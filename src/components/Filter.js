import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Filter.css";

function BookFilter({ books }) {
    const [genreFilter, setGenreFilter] = useState('All');

    const handleChange = (genre) => {
        setGenreFilter(genre);
    };

    // Filter books based on the genre
    const filteredBooks = genreFilter === 'All' ? books : books.filter(book => book.genre === genreFilter);

    return (
        <div>
            <div className='genre-filter'>
                <button className={genreFilter === 'All' ? 'active' : ''} onClick={() => handleChange('All')}>All</button>
                <button className={genreFilter === 'Fiction' ? 'active' : ''} onClick={() => handleChange('Fiction')}>Fiction</button>
                <button className={genreFilter === 'Non-Fiction' ? 'active' : ''} onClick={() => handleChange('Non-Fiction')}>Non-Fiction</button>
                {/* Add more genres as needed */}
            </div>
            <div className='book-container'>
                {filteredBooks.map((book) => (
                    <div key={book.id} className='book-item'>
                        <h3 className='book-title'>{book.title}</h3>
                        <img 
                            src={book.cover} 
                            alt={book.title}
                            className='book-cover' 
                        />
                        <p className='book-description'>Author: {book.author}</p>
                        <p className='book-description'>Genre: {book.genre}</p>
                        {/* Add more book details as needed */}
                        <p>
                            <NavLink className='book-link-button' to={`/books/${book.id}`}>View Book</NavLink>  
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookFilter;
