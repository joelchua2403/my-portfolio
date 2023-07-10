'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import ReactPlayer from 'react-player'

const page = () => {
  return (
    <div>
        <Navbar />
    <h2 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
        Harbour Booking App Demo
        </h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=wmhO_nnjVTo" />

    <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <img src="https://img.icons8.com/color/48/000000/material-ui.png" />
                </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) Users able to search for recipes by ingredients, types, cuisines etc.</li>
                        <li>2) User is able to save favourite recipes and view them in saved recipes page.</li>
                        <li>3) User is able to view recipe details and award recipe stars</li>
                        <li>4) User is able to share recipes via social media eg Twitter, Facebook, Whatsapp etc</li>
                        <li>5) My Feed page shows a list of randomized recipes for the users.</li>
                    </ol>
                </div>
                

            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) Encountered problem due to batch updates in React where search results showed the previous search instead of current.</li>
                        <li>2) Merging branches of group members together broke some code.</li>
                        <li>3) Ran into a CORS restriction error which prevented our frontend from calling Spoontacular api.</li>
                    
                    </ol>
                    </div>
                    
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Use UseContext hooks instead of solely useState hooks to manage state within app.</li>
                        <li>2) Improve the UI and UX of the app, ie the colour scheme and make the navbar prettier.</li>
                        <li>3) Refactor the code and add in comments for group mates to look at easier.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
