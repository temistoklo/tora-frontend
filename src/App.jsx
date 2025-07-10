import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const TORA_TOKEN_ADDRESS = "0x2c02C83d0984182717F4252679Cfb697a0611748";
const ICO_ADDRESS = "0x4782d1765dEC4e3fD98Ed6A15Aced434Bbd40AD3";
const AGGREGATORV3_ADDRESS = "0x6A9e955499c37f7e725060bfDB00257010E95b41";
const AGGREGATORV3_ABI = [
  "function latestRoundData() public view returns (uint80, int256, uint256, uint256, uint80)"
];
const TORA_ABI = [
  "function balanceOf(address) view returns (uint256)"
];
const ICO_ABI = [
  "function buyTokens() external payable"
];

function App() {
  const [account, setAccount] = useState(null);
  const [ethPrice, setEthPrice] = useState(null);
  const [amount, setAmount] = useState(1);
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        setAccount(userAddress);

        const tokenContract = new ethers.Contract(TORA_TOKEN_ADDRESS, TORA_ABI, provider);
        const balance = await tokenContract.balanceOf(userAddress);
        setUserBalance(ethers.utils.formatUnits(balance, 18));

        const priceFeed = new ethers.Contract(AGGREGATORV3_ADDRESS, AGGREGATORV3_ABI, provider);
        const roundData = await priceFeed.latestRoundData();
        const ethUSD = parseFloat(ethers.utils.formatUnits(roundData[1], 8));
        setEthPrice(ethUSD);
      }
    };
    init();
  }, []);

  const handleBuyClick = async () => {
    if (!account) {
      alert("Please connect your wallet!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const icoContract = new ethers.Contract(ICO_ADDRESS, ICO_ABI, signer);

    try {
      const tx = await icoContract.buyTokens({
        value: ethers.utils.parseEther((amount * 0.05).toString())
      });
      await tx.wait();
      alert("Purchase successful!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    }
  };

  return (
    <div className="app-wrapper">
      <div className="header-links">
        <a href="https://x.com/bullcapital2024" target="_blank" rel="noopener noreferrer">🧠 X</a>
        <a href="https://www.bullcapital.biz" target="_blank" rel="noopener noreferrer">🌐 Website</a>
        {account && <span className="wallet-status">🦊 {account.slice(0, 6)}...{account.slice(-4)}</span>}
      </div>

      <div className="card">
        <img src="./assets/background.jpg" alt="crypto" className="hero-img" />
        <h1 className="title">🚀 TORA Global Token</h1>
        <p className="subtitle">Decentralized. Resilient. Built for the future.</p>

        <div className="buy-section">
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="token-input"
          />
          <span className="token-price">≈ ${(amount * 0.05).toFixed(2)} USD | {ethPrice ? `~ ${(amount * 0.05 / ethPrice).toFixed(6)} ETH` : ""}</span>
          <button className="buy-button" onClick={handleBuyClick}>BUY {amount} TORA</button>
        </div>

        <div className="description">
          <h2>🌍 Why TORA?</h2>
          <p>
            TORA is a digital asset designed to restore trust in the crypto market.
            Real value, real purpose – not just hype. Join our revolution today.
          </p>
          <p>
            {userBalance > 0 ? `✅ You already own ${userBalance} TORA!` : `👋 You don’t own any TORA yet.`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
