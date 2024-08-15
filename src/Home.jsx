import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const QUOTE_API_KEY = '673f5a9e11msh24a4990886ea827p17c2f8jsn720d1b5fd529';
const QUOTE_API_HOST = 'random-quote-api3.p.rapidapi.com';
const PEXELS_API_KEY = 'OFvdICiiQdaGgXBLLN18PoPJ3Ki7rAOqjOgRTvvMAB7ESImRUlllz31H';

const INITIAL_LOAD_COUNT = 8; // Increased to 8 items as Pexels API is more stable

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dialogQuote, setDialogQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuotesAndImages();
  }, []);

  const fetchQuotesAndImages = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedQuotes = await fetchQuotes();
      const fetchedImages = await fetchImages();
      setQuotes(fetchedQuotes);
      setImages(fetchedImages);
    } catch (err) {
      console.error('Error fetching quotes and images:', err);
      setError('Failed to fetch some content. Displaying available items.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchQuotes = async () => {
    const fetchedQuotes = [];
    for (let i = 0; i < INITIAL_LOAD_COUNT; i++) {
      try {
        const response = await fetch('https://random-quote-api3.p.rapidapi.com/', {
          headers: {
            'x-rapidapi-host': QUOTE_API_HOST,
            'x-rapidapi-key': QUOTE_API_KEY
          }
        });
        if (!response.ok) {
          console.error('Quote API response not OK:', response.status, response.statusText);
          fetchedQuotes.push({ quote: "Temporary quote unavailable", author: "System" });
        } else {
          const data = await response.json();
          fetchedQuotes.push(data);
        }
      } catch (err) {
        console.error('Error fetching quote:', err);
        fetchedQuotes.push({ quote: "Error fetching quote", author: "System" });
      }
    }
    return fetchedQuotes;
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=inspirational&per_page=${INITIAL_LOAD_COUNT}`, {
        headers: {
          Authorization: PEXELS_API_KEY
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch images from Pexels');
      }
      const data = await response.json();
      return data.photos.map(photo => photo.src.medium);
    } catch (err) {
      console.error('Error fetching images from Pexels:', err);
      return Array(INITIAL_LOAD_COUNT).fill('https://via.placeholder.com/300?text=Image+Unavailable');
    }
  };

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const openQuoteDialog = (quote, index) => {
    setDialogQuote({ ...quote, imageUrl: images[index] });
  };

  const closeQuoteDialog = () => {
    setDialogQuote(null);
  };

  if (isLoading) return <div className="loading">Loading quotes and images...</div>;

  return (
    <div className="home-container">
      <h1>Welcome to The Inspiring Companion</h1>

      <div className="nav-links">
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/quotes" className="nav-link">Quotes</Link>
        <Link to="/community" className="nav-link">Community</Link>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="quotes-matrix">
        {quotes.map((quote, index) => (
          <div 
            key={index} 
            className="quote-cell" 
            onClick={() => openQuoteDialog(quote, index)}
            style={{backgroundImage: `url(${images[index]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
            <div className="quote-overlay">
              {quote.quote.slice(0, 30)}...
            </div>
          </div>
        ))}
      </div>

      {quotes.length > 0 && (
        <div className="current-quote" style={{backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="quote-overlay">
            <p>{quotes[currentIndex].quote}</p>
            <p>- {quotes[currentIndex].author}</p>
          </div>
        </div>
      )}

      <div className="quote-navigation">
        <button onClick={prevQuote} className="nav-button">Previous</button>
        <button onClick={nextQuote} className="nav-button">Next</button>
      </div>

      <button onClick={fetchQuotesAndImages} className="refresh-button">Refresh Quotes & Images</button>

      {dialogQuote && (
        <div className="dialog-overlay" onClick={closeQuoteDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()} style={{backgroundImage: `url(${dialogQuote.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="quote-overlay">
              <p>{dialogQuote.quote}</p>
              <p>- {dialogQuote.author}</p>
            </div>
            <button onClick={closeQuoteDialog} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;