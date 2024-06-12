import React from 'react';
import PacmanLogo from './components/PacmanLogo';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PacmanLogo />
      <h1 className="text-3xl font-bold mt-4">Click the PACMAN</h1>
    </div>
  );
};

export default Home;
