import React from 'react'
import Register from '../components/Register';
import Button from '../components/Button'; // Adjust the import path as necessary

function Home(){

 function handleRegisterClick(){
    const registerSection =document.getElementById("registerSection");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
  }
  };

  return(
<div>
  <div className="m-0 p-0 overflow-hidden">
      <div className="relative w-screen h-screen bg-cover bg-center" style={{   backgroundImage: 'url(/images/lanes.jpg)'}}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <h1 className="text-3xl font-bold text-center uppercase ">Register for the <span className="winter-font">Winter Season!</span></h1>
              <p className="text-xl font-medium text-center mt-4 italic">November 4th @ 7:30PM!</p>
              <p className="text-xl font-medium text-center italic">Bowlero River Grove</p>


              <Button  onClick={handleRegisterClick}>REGISTER</Button>
    
        </div>
      </div>
  </div>
  <Register />
</div>
  );
}

export default Home