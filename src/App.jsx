import React from 'react';
import Footer from './Footer';
import './App.css'; // Tailwind CSS

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          {/* Logo */}
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-14 w-auto mb-2 sm:mb-0"
          />

          {/* Title & Address */}
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">
              Pak Tyre & Rubber Factory
            </h1>
            <p className="text-sm text-gray-600">
              Jhang Road, Faisalabad
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center p-4">
        <video
          controls
          className="w-full max-w-3xl rounded shadow-lg"
        >
          <source src="/V2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
