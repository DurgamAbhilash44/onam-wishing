import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">Welcome to My Website</h1>
        <p className="text-lg text-white mt-2">Explore, Learn, and Enjoy</p>
      </header>

      {/* Main Content */}
      <main className="text-center">
        <p className="text-white text-lg mb-5">
          This is the home page. You can navigate to different sections from here.
        </p>
        <button
          className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-full transition duration-300"
          onClick={() => alert('Button clicked!')}
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Home;
