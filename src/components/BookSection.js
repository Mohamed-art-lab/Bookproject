import React from 'react';
import Search from "./Search";
import BookFilter from "./BookFilter"; // Assuming you've named the book filter component accordingly

function BookSection({ books }) {

    return ( 
        <div>
            <Search books={books}/>
            <BookFilter books={books}/>
        </div>
    );
}

export default BookSection;
