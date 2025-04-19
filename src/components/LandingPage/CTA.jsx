import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="text-center my-20">
      <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          to="/register" 
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded transition duration-300"
        >
          Register
        </Link>
        <Link 
          to="/login" 
          className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-700 font-bold py-3 px-8 rounded transition duration-300"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default CTA;