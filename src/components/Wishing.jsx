import React from 'react';
import { Link } from 'react-router-dom';

const Wishing = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <h1 className=" text-2xl text-red-500">
        Wishing everyone a great day!
      </h1>
      <Link to="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">Next</Link>
    </div>
  );
}

export default Wishing;
