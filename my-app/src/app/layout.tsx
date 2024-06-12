import React from 'react';
import '../../styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'PACMAN Site',
  description: 'A simple PACMAN site with animation',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-light-blue-500">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
