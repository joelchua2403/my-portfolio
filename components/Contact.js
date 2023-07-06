
    import React from "react";

    export default function Contact() {
      return (
        <section>
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              Contact
            </h1>
          </div>


          <div className="relative z-10 rounded-md shadow-md bg-[#023d4a] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
                <header>
                  <h1 className="text-gray-50 font-semibold text-2xl">
                    Get in touch, let's talk.
                  </h1>
                  <p className="font-light text-base text-gray-200 mt-2">
                    Fill in the details and I'll get back to you as soon as I can.
                  </p>
                </header>


                <div className="flex">
                    <div className="mt-20 flex-auto">
                    <h3 className="text-gray-50 font-semibold text-xl">
                        Phone Number:
                    </h3>
                    <p className="text-gray-50 font-light text-sm">
                      +65 96869922
                    </p>
                  <h3 className="text-gray-50 font-semibold text-xl mt-10">
                        Email:
                    </h3>
                    <p className="text-gray-50 font-light text-sm">
                      joel.chua.mingyi@gmail.com
                    </p>
                    <h3 className="text-gray-50 font-semibold text-xl mt-10">
                        Socials:
                    </h3>
                    <div className="flex">
                    <div className="flex flex-row items-center space-x-6 rounded-md p-4">
                    <a href="https://www.linkedin.com/in/joel-chua-7b394b245/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><rect x="0" y="0" width="256" height="256" fill="rgba(255, 255, 255, 0)" /><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"/></g></svg>
                </a>
                </div>
                <div className="flex flex-row items-center space-x-6 rounded-md  p-4">
                <a href="https://github.com/joelchua2403" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><rect x="0" y="0" width="512" height="512" fill="rgba(255, 255, 255, 0)" /><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"/></svg>
                </a>
                  </div>
                  </div>
                  </div>
                  
              
                
                  <div className="flex flex-row items-center space-x-6 rounded-md p-4">
                    
              <form className="form rounded-lg bg-white p-4 flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                  Your Name
                </label>
                <input
                  type="text"
                  className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                  name="name"
                />
                <label htmlFor="company" className="text-sm text-gray-600 mx-4 mt-4">
                    Company
                </label>
                <input
                    type="text"
                    className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                    name="company"
                />
                <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
                  Email
                </label>
                <input
                  type="text"
                  className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                  name="email"
                />
                <label htmlFor="message" className="text-sm text-gray-600 mx-4 mt-4">
                    Message
                </label>
                <textarea
                    className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                    name="message"
                    rows="8"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
         </div>
          </div>
         
        
        </section>
      );
    }

