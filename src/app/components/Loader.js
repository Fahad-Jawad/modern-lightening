// components/Loader.js
import React from 'react';

const Loader = () => (
  <div className="flex justify-center items-center w-full h-64">
    <div className="animate-spin rounded-full border-t-4 border-primary w-32 h-32"></div>
  </div>
);

export default Loader;
