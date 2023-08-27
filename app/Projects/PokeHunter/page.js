'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import ReactPlayer from 'react-player'

const page = () => {
  return (
    <div>
        <Navbar />
   
      

    <div className="flex flex-col md:flex-row justify-center items-center sm:flex-shrink">
        <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-center items-center mb-5">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 m-8">
        PokeHunter App Demo
        </h2>
        <div className="flex flex-col justify-center items-center object-fit">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-2">
                View Code
            </h2>
        <a href="https://github.com/joelchua2403/PokeHunter/tree/main" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        </div>
        <ReactPlayer url="https://youtube.com/shorts/yGWwTBz5vbg?feature=share" width="100%" height="400px"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8 ">
                App Features:
            </h1>
        
                <div className="  font-bold text-gray-700 dark:text-gray-200 m-3 flex flex-wrap">
                    <ol>
                        <li>1) Users able to use gyroscopic controls to look left and right to find Pokemon</li>
                        <li>2) User can set which type of battlefield which affects the type of Pokemon you can find.</li>
                        <li>3) User can attack the pokemon and capture them. After capture, Pokemon will appear in Pokedex.</li>
                        <li>4) Pokemon will attack user if it is not hit in 5 seconds</li>
                        <li>5) You can set notifications for when pokemon is ready to be caught</li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) Issue with building sdk due to view state not being persisted consistently.</li>
                        <li>2) Issue with sound not playing again after first pokemon caught.</li>
                        <li>3) Issue with Async nature of react which does batch updates.</li>
                    
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Can improve on gyroscopic controls by tweaking sensitivity.</li>
                        <li>2) Improve the UI and UX of the app, ie the colour scheme and make the navbar prettier.</li>
                        <li>3) Add vibration when pokemon hits user.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
