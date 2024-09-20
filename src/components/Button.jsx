import React from 'react';



const Button = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold py-2 mt-4
                  px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:ring-opacity-50 text-lg 
                  ${className}`}
                  disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
