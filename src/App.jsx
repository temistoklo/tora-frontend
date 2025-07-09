
import React, { useState } from 'react'
import { ethers } from 'ethers'

const icoContractAddress = "0x4782d1765dEC4e3fD98Ed6A15Aced434Bbd40AD3"
const toraTokenAddress = "0x2c02C83d0984182717F4252679Cfb697a0611748"

const abi = [
  {
    "inputs": [],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]

function App() {
  const [account, setAccount] = useState(null)
  const [ethAmount, setEthAmount] = useState("0.01")

  const connectWallet = async () => {
    const [selected] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    setAccount(selected)
  }

  const buyTokens = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const icoContract = new ethers.Contract(icoContractAddress, abi, signer)

    const tx = await icoContract.buyTokens({ value: ethers.parseEther(ethAmount) })
    await tx.wait()

    // Dodaj TORA token u novčanik
    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: toraTokenAddress,
          symbol: "TORA",
          decimals: 18,
          image: "https://tora.global/logo.png" // možeš kasnije promijeniti
        }
      }
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-4xl font-bold">TORA Token ICO</h1>
      <button onClick={connectWallet} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
        {account ? `Wallet: ${account.slice(0,6)}...${account.slice(-4)}` : "Connect Wallet"}
      </button>
      <input
        className="text-black p-2 rounded"
        type="number"
        value={ethAmount}
        onChange={e => setEthAmount(e.target.value)}
      />
      <button onClick={buyTokens} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
        Buy TORA
      </button>
    </div>
  )
}

export default App
