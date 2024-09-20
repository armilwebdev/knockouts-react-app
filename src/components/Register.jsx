import React, {useState} from 'react'
import Button from '../components/Button'; 

function Register(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const name =(firstName+` `+lastName);

        const userData = {
            firstName,
            lastName,
            userEmail
        };
        console.log(userData);

        fetch('http://localhost:8080/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (response.ok) {
                console.log("User registered successfully!");
                // Optionally clear the form
                setFirstName('');
                setLastName('');
                setUserEmail('');
            } else {
                console.error("Registration failed");
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', userData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    };

  return(
    <div className="bg-gray-500" id="registerSection">
      <div className="pt-24 p-4  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-blue-200">
  <div className="">
    <h1 className="text-3xl text-center uppercase sriracha-font">Register Here!</h1>
  </div>
  <div className="flex items-center justify-center p-12">
    {/* <!-- Author: FormBold Team --> */}
    <div className="mx-auto w-full max-w-[650px] bg-white px-8 pt-10 pb-4 shadow-md rounded-md">
        <form onSubmit={handleSubmit}>
            <div className="mb-5">
                <h2 className="mb-12 font-bold text-center text-xl">Strike Up Fun, Join the League!</h2>
                <h3 className="mb-3 uppercase font-bold">Your Information</h3>

                <label htmlFor="first_name" className="mb-1 block text-base font-medium text-[#07074D]">
                    First Name
                </label>
                <input  type="text" 
                        name="first_name" 
                        id="first_name" 
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => (setFirstName(e.target.value))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                        font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div className="mb-5">
                <label htmlFor="last_name" className="mb-1 block text-base font-medium text-[#07074D]">
                    Last Name
                </label>
                <input  type="text" 
                        name="last_name" 
                        id="last_name" 
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e)=>(setLastName(e.target.value))}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                        font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            
            <div className="mb-5">
                <label htmlFor="email" className="mb-1 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input  type="email" 
                        name="email" id="email" 
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => {setUserEmail(e.target.value)}}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                        text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] 
                        focus:shadow-md" />
            </div>
            <Button type="submit">REGISTER</Button>
        </form>
    </div>
</div>
</div>
    </div>
  );
}

export default Register