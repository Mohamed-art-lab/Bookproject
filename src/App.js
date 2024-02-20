import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookHome from './components/Bookhome'; // Adjust the component names accordingly
import ReadBook from './components/ReadBook';
import AddBook from './components/AddBook'; // Assuming you have an AddBook component
import BookFooter from './components/BookFooter'; // Assuming you have a BookFooter component
import BookNavBar from './components/BookNavbar'; // Assuming you have a BookNavBar component

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://your-book-api-url/books') // Replace with your actual book API URL
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
