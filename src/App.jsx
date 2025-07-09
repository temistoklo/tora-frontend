import React from 'react';
import './App.css';
import background from './assets/background.jpg'; // obavezno pravilno uploadaj sliku

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '2rem',
          borderRadius: '20px',
          maxWidth: '700px',
          width: '100%',
          boxShadow: '0 0 25px rgba(0,0,0,0.6)',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          🚀 TORA Global Token
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#ccc' }}>
          The future of borderless, stable, and fair money.
        </p>
        <a
          href="https://example.com/buy" // 🔁 OVDE STAVI PRAVI LINK ZA KUPOVINU
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'linear-gradient(90deg, #ff416c, #ff4b2b)',
            padding: '0.75rem 2rem',
            color: '#fff',
            borderRadius: '30px',
            fontSize: '1.1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s',
          }}
        >
          BUY TORA Global
        </a>

        <h2
          style={{
            marginTop: '2rem',
            fontSize: '1.6rem',
            color: '#00e5ff',
          }}
        >
          🌍 What is TORA Global?
        </h2>
        <p style={{ marginTop: '0.5rem', fontSize: '1rem', color: '#ddd' }}>
          TORA is a next-generation cryptocurrency created to replace meme coins and unstable tokens. 
          Designed for real-world use, investor rewards, and long-term stability. ICO price: <strong>$0.05</strong>. 
          Join now before the rocket lifts off! 🚀
        </p>
      </div>
    </div>
  );
}

export default App;
