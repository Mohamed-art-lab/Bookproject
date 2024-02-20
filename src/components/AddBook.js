import React, { useState } from 'react';
import "./AddBook.css" // Update the CSS file name accordingly
import { useNavigate } from 'react-router-dom'

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    id: 0, 
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    pages: 0,
    coverImage: '',
    synopsis: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://your-api-endpoint.com/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Book posted successfully:', data);
      })
      .catch((error) => {
        console.error('Error posting book:', error);
      })
      navigate('/books')
  };

  return (
    <div>
      <h2 className='book-heading'>Add Book</h2>
      <form className='book-form' onSubmit={handleSubmit}>
        <label className='form-label'>
          Title:
          <input className='form-input' type="text" name="title" value={book.title} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Author:
          <input className='form-input' type="text" name="author" value={book.author} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Genre:
          <input className='form-input' type="text" name="genre" value={book.genre} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Publication Year:
          <input className='form-input' type="text" name="publicationYear" value={book.publicationYear} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Pages:
          <input className='form-input' type="number" name="pages" value={book.pages} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Cover Image URL:
          <input className='form-input' type="text" name="coverImage" value={book.coverImage} onChange={handleInputChange} required />
        </label><br/>
        <label className='form-label'>
          Synopsis:
          <textarea className='form-input' name="synopsis" value={book.synopsis} onChange={handleInputChange} required />
        </label><br/>
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
