import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">

      {/* Gornji desni linkovi */}
      <div className="header-links">
        <a href="https://x.com/bullcapital2024" target="_blank" rel="noopener noreferrer">
          🧠 X
        </a>
        <a href="https://www.bullcapital.biz" target="_blank" rel="noopener noreferrer">
          🌐 Website
        </a>
      </div>

      {/* Glavni sadržaj */}
      <div className="card">
        <h1 className="title">🚀 TORA Global Token</h1>
        <p className="subtitle">A new era of borderless, secure and fair money.</p>

        <a
          href="https://basescan.org/address/0x4782d1765dEC4e3fD98Ed6A15Aced434Bbd40AD3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="buy-button">BUY TORA Global</button>
        </a>

        <h2 className="info-title">🌍 What is TORA?</h2>
        <p className="info-text">
          TORA is a revolutionary digital currency designed to eliminate useless meme tokens
          and unstable assets. Built for real-world adoption, it offers long-term value,
          investor rewards, and transparency. Be among the first to join – ICO price: <strong>$0.05</strong>.
        </p>
      </div>
    </div>
  );
}

export default App;
