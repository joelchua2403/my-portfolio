'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Navbar />
  

    <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
        Jamming App Demo
        </h2>
        <Image src="/images/jamming1.png" width={500} height={500} className="mb-10"/>
        <Image src="/images/jamming2.png" width={500} height={500} className="mb-10"/>
        <Image src="/images/jamming3.png" width={500} height={500} className="mb-10"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/css3.png" />
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) User is able to search for songs, artist or albums and add them to a new playlist.</li>
                        <li>2) The new playlist created will be synced to your spotify account.</li>
                        <li>3) User can also remove songs from the new playlist</li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) This project was one of my first projects using react. </li>
                        <li>2) This was created with react classes hence, was quite challenging compared to functional react programming</li>
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) As this was part of a walkthrough project from Codecademy, I would like to have used less help from the hints</li>
                        <li>2) I would like to have used functional react programming instead of react classes</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
