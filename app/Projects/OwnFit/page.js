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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
        OwnFit Website Demo
        </h2>
        <ReactPlayer url="https://youtu.be/9f3t74G9CYg" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/nextjs.png" />
                <img width={80} src="data:image/png;base64,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" />
                <img  src="https://img.icons8.com/color/48/000000/material-ui.png" />

                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) User is able to click on items and add to cart or purchase.</li>
                        <li>2) Shows autoscroll "you may also like" carousell </li>
                        <li>3) Able to make payment with Stripe.</li>
                        <li>4) With Sanity.io, admin is able to easily add new products and change images/ text in hero banner.</li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) Was using previous version of Next.js (Version 12) </li>
                        <li>2) First time trying out sanity.io, had to watch tutorials and read docs</li>
                        <li>3) Had to learn how to integrate Stripe</li>
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Use Next.js version 13 in the future for cleaner and easier code</li>
                        <li>2) If it was an actual e-commerce website, might use more standard backend like Django due to the pricing of sanity.io.</li>
                        <li>3) Could add user authentication for returning users.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
