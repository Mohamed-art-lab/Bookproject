import React from 'react';
import "./bookFooter.css";

export default function BookFooter() {
   return (
    <div className="footer">
        <div className="footer-section">
            <p className="title">BookCorner.com</p>
            <p>Explore the world of literature with BookCorner, where words come to life. 
            We are dedicated to bringing you the best in books, from classics to modern masterpieces.</p>
            <p>&copy; 2024 | All Rights Reserved </p>
        </div>
        <div className="footer-section">
            <p className="title">Contact Us</p>
            <p>bookcorner@gmail.com</p>
            <p>+254 784803430</p>
            <p>600 S, Brookhurst, Anaheim</p>
        </div>
        <div className="footer-section">
            <p className="title">BookCorner.com</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
         </div>
    </div>
   )
}
