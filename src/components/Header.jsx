import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
<div className="fixed  w-full h-16 z-50">
<nav className="bg-zinc-200 nav">
  <div className="">
    <div className="relative flex h-16 items-center justify-between">

      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

        <div className=" sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-800 hover:bg-gray-700 hover:text-white" --> */}
            <Link to="/" className="rounded-md py-2 text-xl font-medium text-gray-800 
              hover:bg-gray-300 hover:text-gray-700 hover:text">HOME
            </Link>
            {/* <!-- <a href="{{ url('/rules') }}" class="rounded-md px-3 py-2 text-xl font-medium text-gray-800 
              hover:bg-gray-300 hover:text-gray-700 " id="league-rules">LEAGUE RULES
              </a> --> */}
            <Link to="/about" className="rounded-md px-3 py-2 text-xl font-medium text-gray-800 
              hover:bg-gray-300 hover:text-gray-700 ">ABOUT
            </Link>
            {/* <!-- <a href="{{ url('/info') }}" class="rounded-md px-3 py-2 text-xl font-medium text-gray-800 
              hover:bg-gray-300 hover:text-gray-700 " id="general-info">GENERAL INFO
            </a> --> */}
            <Link to="/contact" className="rounded-md px-3 py-2 text-xl font-medium text-gray-800 
              hover:bg-gray-300 hover:text-gray-700 ">CONTACT
            </Link>
            {/* <!-- <a href="{{ url('/register') }}" class="rounded-md px-3 py-2 text-xl font-medium text-gray-800 
              hover:bg-gray-300 hover:text-gray-700 ">REGISTER
            </a> --> */}


          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        </div>
      </div>
    </div>
</nav>
</div>

    );
}

export default Header;