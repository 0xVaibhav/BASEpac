'use client'; // Ensure this directive is at the top

import React, { useState } from 'react';
import Image from 'next/image';

const PacmanLogo: React.FC = () => {
  const [glow, setGlow] = useState(false);

  const handleClick = () => {
    setGlow(true);
    setTimeout(() => setGlow(false), 500);
  };

  return (
    <div className={`logo-container ${glow ? 'glow' : ''}`} onClick={handleClick}>
      <Image src="/logo.jpg" alt="Logo" width={200} height={200} />
      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: box-shadow 0.3s ease-in-out;
        }
        .logo-container.glow {
          box-shadow: 0 0 20px rgba(0, 0, 255, 0.7);
        }
      `}</style>
    </div>
  );
};

export default PacmanLogo;
