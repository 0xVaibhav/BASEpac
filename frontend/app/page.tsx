'use client';
import React, { useState } from 'react';
const HomePage = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);
  
  const handleButtonClick = () => {
    setIsGlowing(true);
    setShowPlusOne(true);

    // Reset the state after 200ms for glowing effect
    setTimeout(() => {
      setIsGlowing(false);
    }, 200);

    // Hide the "+1" animation after 1 second
    setTimeout(() => {
      setShowPlusOne(false);
    }, 200);
  };


  return (
    <div className="relative flex flex-col items-center min-h-full bg-transparent border-spacing-0 text-white">
      <h1 className="text-6xl font-bold mb-4 z-10 pt-4 pb-8">Welcome to BASEpac</h1>
      <p className="text-2xl font-bold mb-6 z-10">Tap to earn and have fun!</p>
      
      <div className="relative">
        <button
          className={`transform transition duration-300 rounded-full ${isGlowing ? 'scale-90' : ''}`}
          onClick={handleButtonClick}
        >
          <img src="/BASEpaclogo__1_-removebg-preview.png" alt="BASEpac Logo" width={500} />
        </button>
        {showPlusOne && (
          <span className="plus-one-animation absolute top-0 left-1/2 transform -translate-x-1/2 text-3xl text-white">
            +1
          </span>
        )}
      </div>
    </div>
  );  
};


export default HomePage;
