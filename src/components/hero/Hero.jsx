import  { useState, useEffect } from 'react';
import Web3 from 'web3';

const HeroSection = ({ onAddNewItem }) => {
  const [account, setAccount] = useState(null);
  const [blockNumber, setBlockNumber] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            }
        };
    }, []);

    const handleAccountsChanged = (accounts) => {
          if (accounts.length === 0) {
            setIsConnected(false);
            setAccount(null);
        } else {
            setAccount(accounts[0]);
            setIsConnected(true);
        }
    };

    const handleChainChanged = () => {
        window.location.reload();
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              handleAccountsChanged(accounts);
              const web3 = new Web3(window.ethereum);
              await window.ethereum.enable();
              const latestBlockNumber = await web3.eth.getBlockNumber();
              setBlockNumber(latestBlockNumber);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('');
        }
    };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500">
    <div className="container mx-auto px-4 py-12 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Discover Unique ITEMs
        </h1>
        <p className="text-lg text-white mb-8">
          Explore, buy, and sell unique digital assets on our ITEM marketplace.
        </p>
        <div className="flex justify-center">
          <button
            onClick={connectWallet}
            className="bg-white text-purple-500 hover:bg-purple-400 hover:text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </button>
          &nbsp;
          <button
            onClick={onAddNewItem}
            className="bg-white text-purple-500 hover:bg-purple-400 hover:text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Add New Item
          </button>
        </div>
        {isConnected && (
          <div className="mt-4">
            <p className="text-white mb-8">Account: {account}</p>
            <p className="text-white">Latest Block Number: {blockNumber !== null ? blockNumber : 'Loading...'} </p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
