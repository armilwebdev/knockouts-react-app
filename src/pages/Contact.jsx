import React from 'react'

function Contact(){

  return(
    <div className="bg-white dark:bg-gray-900 rounded-md drop-shadow my-24 mx-4">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got questions? Suggestions? Concerns? Need more information? Let us know.</p>
        <p className="mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">info@knockoutschicagoleague</p>
        <p className="mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">312-361-4157</p>
  
        <form action="#" className="space-y-8">
            <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required />
            </div>
            <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@domain.com" required />
            </div>
            <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
            </div>
            <div className="text-right">
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center rounded-md text-gray-900 bg-gray-300 w-full sm:w-fit hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 uppercase">Send</button>
            </div>
        </form>
    </div>
  </div>
  )
}

export default Contact