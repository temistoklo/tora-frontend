import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="header">
        <a href="https://x.com/bullcapital2024" target="_blank" rel="noopener noreferrer">
          🧠 X
        </a>
        <a href="https://www.bullcapital.biz" target="_blank" rel="noopener noreferrer">
          🌐 Website
        </a>
      </div>

      <div className="card">
        <h1>
          🚀 TORA Global Token
        </h1>
        <p className="tagline">
          The future of borderless, stable, and fair money.
        </p>

        <a
          href="https://sepolia.etherscan.io/address/0x4782d1765dEC4e3fD98Ed6A15Aced434Bbd40AD3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="buy-button">BUY TORA Global</button>
        </a>

        <div className="description">
          <h2>🌍 What is TORA Global?</h2>
          <p>
            TORA is a next-generation cryptocurrency created to replace meme coins and
            unstable tokens. Designed for real-world use, investor rewards, and long-term
            stability. ICO price: <strong>$0.05</strong>. Join now before the rocket lifts off! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

