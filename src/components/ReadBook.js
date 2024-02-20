import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ReadBook.css"; // Adjust the CSS file name accordingly

function ReadBook() {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://your-book-api-url/${id}`) // Replace with your book API URL
            .then((res) => res.json())
            .then((data) => setBook(data))
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [id]);

    if (!book) return <h2>Loading...</h2>;

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="view-book-container">
                <h2>{book.title}</h2>
                <img src={book.cover} alt="book cover" />
                <div className="book-details-container">
                    <div className="book-feature">
                        <p>Author: {book.author}</p>
                    </div>
                    <div className="book-feature">
                        <p>Genre: {book.genre}</p>
                    </div>
                    {/* Add more book details as needed */}
                </div>
                <p>{book.description}</p>
                <ul>
                    <h4>Chapters</h4>
                    {book.chapters.map((chapter, index) => (
                        <li key={index}>{chapter}</li>
                    ))}
                </ul>
                <button onClick={handleBack}>Back to Books Page</button>
            </div>
        </>
    );
}

export default ReadBook;
