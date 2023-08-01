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
       BJJ RPG Backend Demo
        </h2>
        <div className="flex flex-col justify-center items-center flex-shrink">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 ">
                GitHub Code
            </h2>
        <a href="https://github.com/joelchua2403/BJJ_RPG" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        </div>
        <ReactPlayer url="https://youtu.be/_f6KCb2RyXQ" width="100%" height="400px"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
           
                {/* github logo */}
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
                {/* CSharp logo */}
                <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" />
                {/* ASP.NET logo */}
                <img src="https://img.icons8.com/color/48/000000/asp.png" />
               
              

                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) User Authentication using JWT.</li>
                        <li>2) Full CRUD operations.</li>
                        <li>3) Many to Many relationship between models.</li>
                        <li>4) Exception Handling</li>
                        <li>5) Using Data Transfer Objects. </li>
                    
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) Was originally using Visual Studio Code as IDE, but some features were not availble yet, had to migrate to Visual Studio for Mac.</li>
                        <li>2) Creating the Many To Many relational datbase between Character and Moves.</li>
                        <li>3) Using DTOs was a new concept to me.</li>
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) This is still a work in progress project.</li>
                        <li>2) I would like to add more features to the app.</li>
                        <li>3) I would like to create a game in Unity which calls on this backend API.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
