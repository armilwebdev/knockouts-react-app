import React from 'react'

function Register(){

  return(
    <div className="bg-gray-500" id="registerSection">
      <div className="pt-24 p-4  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-blue-200">
  <div className="">
    <h1 className="text-3xl text-center uppercase sriracha-font">Register Here!</h1>
  </div>
  <div className="flex items-center justify-center p-12">
    {/* <!-- Author: FormBold Team --> */}
    <div className="mx-auto w-full max-w-[650px] bg-white px-8 pt-10 pb-4 shadow-md rounded-md">
        <form>

{/* <!-- NAME --> */}
            <div className="mb-5">
                <h2 className="mb-12 font-bold text-center text-xl">Strike Up Fun, Join the League!</h2>
                <h3 className="mb-3 uppercase font-bold">Your Information</h3>

                <label htmlFor="first_name" className="mb-1 block text-base font-medium text-[#07074D]">
                    First Name
                </label>
                <input type="text" name="first_name" id="first_name" placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
                <label htmlFor="last_name" className="mb-1 block text-base font-medium text-[#07074D]">
                    First Name
                </label>
                <input type="text" name="last_name" id="last_name" placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

{/* <!-- DOB -->             */}
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-1 block text-base font-medium text-[#07074D]">
                            DOB
                        </label>
                        <input type="date" name="date" id="dob" min='1899-01-01' max='2000-13-13'
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

{/* <!-- PHONE -->               */}
            <div className="mb-5">
                <label htmlFor="phone" className="mb-1 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

{/* <!-- EMAIL -->               */}
            <div className="mb-5">
                <label htmlFor="email" className="mb-1 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

{/* <!-- TEAM NUMBER --> */}
{/* <h3 className="mb-3 mt-10 uppercase font-bold">Your Team's Information</h3>
<div className="bg-gray-100 py-2 px-2 mb-12 drop-shadow  border border-1 border-double border-gray-300 rounded-md">
    <div className="mb-5 w-full px-3">
        <label htmlFor="bowlers" className="mb-1 block text-base font-medium text-[#07074D]">
            How many will be on your Team? <br />
            <span className="text-sm italic text-gray-600">If it's just yourself, enter 1</span>
        </label>
        <input type="number" name="bowlers" id="bowlers" placeholder="1" value="1" min="1"
        className="bowlers text-center w-14 rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
    </div> */}

{/* <!-- TEAMMATES --> */}
    {/* <div id="teammates_info" className="hidden">
        <div id="teammates_container"> */}
{/* <!-- Teammate inputs will be dynamically added here --> */}
        {/* </div>
    </div>
</div> */}


{/* <!-- REGULAR LEAGUE MEMBER -->               */}
            {/* <div className="mb-5 w-full mt-10">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                  Will you be a regular league member?<br />
              </label>
              <div className="flex items-center ">
                
                <input type="radio" name="regular_member" id="regular_member_yes" placeholder="" value="Yes"
                className="w-8 text-center rounded-md border border-[#e0e0e0] bg-white py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] " />
                <label htmlFor="regular_member_yes" className="mtext-base font-medium text-[#07074D] mr-4">
                  Yes <br />
                  </label>
                  
                  <input type="radio" name="regular_member" id="regular_member_no" placeholder="" value="No"
                  className="w-8 text-center rounded-md border border-[#e0e0e0] bg-white py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] " />
                  <label htmlFor="regular_member_no" className="mtext-base font-medium text-[#07074D]">
                    No <br />
                  </label>
                </div>
            </div> */}
{/* <!-- SUBSTITUTE -->               */}
            {/* <div className="mb-5 w-full ">
              <label className="mb-1 block text-base font-medium text-[#07074D]">
                  Are you going to be a temporary substitute?<br />
              </label>
              <div className="flex items-center ">
                
                <input type="radio" name="temporary_substitute" id="temporary_substitute_yes" placeholder="" value="Yes"
                className="w-8 text-center rounded-md border border-[#e0e0e0] bg-white py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] " />
                <label htmlFor="temporary_substitute_yes" className="mtext-base font-medium text-[#07074D] mr-4">
                  Yes <br />
                  </label>
                  
                  <input type="radio" name="temporary_substitute" id="temporary_substitute_no" placeholder="" value="No"
                  className="w-8 text-center rounded-md border border-[#e0e0e0] bg-white py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] " />
                  <label htmlFor="temporary_substitute_no" className="mtext-base font-medium text-[#07074D]">
                    No <br />
                  </label>
                </div>
            </div> */}
{/* <!-- FUN FACTS -->               */}
            {/* <div className="mb-5 mt-12">
                <label htmlFor="email" className="mb-1 block text-base font-medium text-[#07074D]">
                    Let us know some fun facts about you and why you want to join our league.
                </label>
                <textarea  type="textbox" name="funfacts" id="funfacts" placeholder="Let's hear it!" rows="4"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
            </div>
            <div>
                <button
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    REGISTER
                </button>
            </div> */}
        </form>
    </div>
</div>
</div>
    </div>
  );
}

export default Register