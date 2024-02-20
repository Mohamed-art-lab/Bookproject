import { useState } from "react";
import "./Search.css";

function BookSearch({ books }) {
  const [book, setBook] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState("");

  function handleSearch(event) {
    setBook(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const result = books.find((book) => book.title.toLowerCase() === book.toLowerCase());
    if (result) {
      setSearchResult(result);
      setError("");
    } else {
      setSearchResult(null);
      console.log('Book Not Found');
      setError("Oops! The book you are looking for is not found. Please try again later.");
    }
  }

  return (
    <div className="searchbar-btn">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} placeholder="Book..." />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {searchResult && (
        <div className="results-container">
          <h2>{searchResult.title}</h2>
          <p>Author: {searchResult.author}</p>
          <p>Genre: {searchResult.genre}</p>
          {/* Add more book details as needed */}
          <img src={searchResult.cover} alt="book cover" />
          <p>Description: {searchResult.description}</p>
          <ul>
            <h4>Chapters</h4>
            {searchResult.chapters.map((chapter, index) => (
              <li key={index}>{chapter}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookSearch;
