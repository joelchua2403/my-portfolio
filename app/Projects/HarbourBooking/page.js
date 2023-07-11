'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import ReactPlayer from 'react-player'

const page = () => {
  return (
    <div>
        <Navbar />
  

    <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center mb-5">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
        Harbour Booking App Demo
        </h2>
        <div className="flex flex-col justify-center items-center flex-shrink">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 ">
                Frontend Code
            </h2>
        <a href="https://github.com/joelchua2403/bookingFrontend" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        <div className="flex flex-col justify-center items-center ml-8">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-2">
               Backend Code
            </h2>
        <a href="https://github.com/joelchua2403/BookingApp" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        </div>
        <ReactPlayer url="https://www.youtube.com/watch?v=aA4VRxHHjmU" width="100%" height="auto"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/nextjs.png" />
                <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <img src="https://img.icons8.com/color/48/000000/django.png" />
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
                <img src="https://img.icons8.com/color/48/000000/material-ui.png" />

                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) User Authentication using JWT</li>
                        <li>2) Logged in user is able to view his past bookings made.</li>
                        <li>3) User is able to create new Booking.</li>
                        <li>4) Timeslots that have already been booked are blocked out in red</li>
                        <li>5) Timeslots that are available are in green</li>
                        <li>6)User is able to delete his bookings</li>
                        <li>7) Admin is able to view all bookings made by all users</li>
                        <li>8) Admin is able to delete any bookings</li>
                        <li>9) Admin is able to edit any bookings</li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) Challenges with requirements gathering due to confidentiality</li>
                        <li>2) Learning to translate user requirements into technical decisions.</li>
                        <li>3) Making the select timing interface blocked out for timeslots booked with respect to the date.</li>
                        <li>4) Balancing trade-offs between features vs ease-of-use.</li>
                        <li>5) Balancing trade-off between giving too much power to users vs keeping power to port operators</li>
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Spend more time on requirements gathering</li>
                        <li>2) Do up a MVP and getting user feedback after demo first before continuing work</li>
                        <li>3) Implement different timeslot intervals which cater to varying vessel sizes.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
