import React from 'react'

function Footer(){

  const currentYear = new Date().getFullYear();

  return(
<footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="mb-4 md:mb-0">
                    <p className="text-center md:text-left">&copy; {currentYear} Your Company. All rights reserved.</p>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <a href="/" className="text-center md:text-left hover:underline mb-2 md:mb-0">Home</a>
                    <a href="/about" className="text-center md:text-left hover:underline mb-2 md:mb-0">About</a>
                    <a href="/contact" className="text-center md:text-left hover:underline">Contact</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer