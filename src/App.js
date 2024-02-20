import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookHome from './components/Bookhome'; 
import ReadBook from './components/ReadBook';
import AddBook from './components/AddBook'; 
import BookFooter from './components/BookFooter'; 
import BookNavBar from './components/BookNavbar'; 

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books') 
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [books]);

  const bookCovers = books.map((book) => book.cover);

  return (
    <BrowserRouter>
      <BookNavBar />
      <Routes>
        <Route exact path='/' element={<BookHome bookCovers={bookCovers} />} />
        <Route exact path='/books/:id' element={<ReadBook />} />
        <Route path='/books' element={<BookSection books={books} />} />
        <Route path='/add-book' element={<AddBook books={books} setBooks={setBooks} />} />
      </Routes>
      <BookFooter />
    </BrowserRouter>
  );
}

export default App;
