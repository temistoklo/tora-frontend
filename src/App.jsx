import React from "react";
import "./App.css";
import background from "./assets/background.jpg";

function App() {
  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <header className="header">
        <a href="https://www.bullcapital.biz" target="_blank" rel="noopener noreferrer">
          🌐 bullcapital.biz
        </a>
        <a href="https://x.com/bullcapital2024" target="_blank" rel="noopener noreferrer">
          🐦 @bullcapital2024
        </a>
      </header>

      <div className="app-wrapper">
        <div className="card">
          <h1>🚀 TORA Global Token</h1>
          <p className="subtitle">The future of borderless, stable, and fair money.</p>
          <a
            href="https://sepolia.etherscan.io/address/0x4782d1765dEC4e3fD98Ed6A15Aced434Bbd40AD3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="buy-button">BUY TORA Global</button>
          </a>
          <div className="info">
            <h2>🌍 What is TORA Global?</h2>
            <p>
              TORA is a next-generation cryptocurrency created to replace meme coins and unstable tokens.
              Designed for real-world use, investor rewards, and long-term stability.
              ICO price: <strong>$0.05</strong>. Join now before the rocket lifts off! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

