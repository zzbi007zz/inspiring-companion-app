import React, { useState } from "react";

function Quotes() {
  const [currentQuote, setCurrentQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  });

  const getNewQuote = () => {
    // In a real app, this would fetch from an API or database
    setCurrentQuote({
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    });
  };

  return (
    <div className="quotes">
      <h1>Daily Inspiration</h1>
      <div className="quote-box">
        <p className="quote-text">{currentQuote.text}</p>
        <p className="quote-author">- {currentQuote.author}</p>
      </div>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  );
}

export default Quotes;
