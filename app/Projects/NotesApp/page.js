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
        Notes App Demo
        </h2>
        <div className="flex flex-col justify-center items-center flex-shrink">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 ">
                GitHub Code
            </h2>
        <a href="https://github.com/joelchua2403/Notes-App-C-" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        </div>
        <ReactPlayer url="https://youtube.com/shorts/ic8Dk358mmw?feature=share" width="100%" height="auto"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
              {/* .net logo */}

                 {/* c# logo */}
                <img src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" />
                    {/* xamarin logo */}
                <img src="https://img.icons8.com/color/48/000000/xamarin.png" />
                {/* android logo */}
                <img src="https://img.icons8.com/color/48/000000/android-os.png" />
                {/* ios logo */}
                <img src="https://img.icons8.com/color/48/000000/ios-logo.png" />
                {/* macos logo */}
                <img src="https://img.icons8.com/color/48/000000/mac-os--v1.png" />
                {/* windows logo */}
                <img src="https://img.icons8.com/color/48/000000/windows-10.png" />


                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) Native running on Windows, Mac, IOS and Android</li>
                        <li>2) Built with .NET MAUI </li>
                        <li>3) User is create new notes and save them.</li>
                        <li>4) User is able to Delete note.</li>
                        <li>5) Notes data is persisted through appData.</li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) First time trying out .NET </li>
                        <li>2) working on Frontend with just XAML was tough. </li>
                        <li>3) Have to learn C# and XAML at the same time.</li>
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Would like to be able to use frontend framework like React for the frontend or could try Blazor.</li>
                        <li>2) Add more features like Editing</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
