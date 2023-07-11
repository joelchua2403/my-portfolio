'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'


const page = () => {
  return (
    <div>
        <Navbar />
   
      

    <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
        Spring-boot Harbour Booking Backend Demo
        </h2>
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-2">
                View Code
            </h2>
        <a href="https://github.com/joelchua2403/SCTP-SE-Module03-JAVA-ProjectTeam02" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        </div>
        <ReactPlayer url="https://youtu.be/1vaDW0298iw" />
        <p className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-8">
            Relational Database Design
        </p>
        <Image src="/images/springboot1.png" width={600} height={600} className="mb-10"/>
        <Image src="/images/springboot2.png" width={600} height={600} className="mb-10"/>
        <Image src="/images/springboot3.png" width={600} height={600} className="mb-10"/>
        <p className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-8">
            Unit Testing
        </p>
        <Image src="/images/springboot4.png" width={600} height={600} className="mb-10"/>
    
        <Image src="/images/springboot5.png" width={600} height={600} className="mb-10"/>
        <Image src="/images/springboot6.png" width={600} height={600} className="mb-10"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
                <img
                  src="https://img.icons8.com/?size=512&id=90519&format=png"
                  width={48}
                  height={48}
                />
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />

                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) User Authentication.</li>
                        <li>2) Full CRUD operations.</li>
                        <li>3) Unit testing for booking service.</li>
                        <li>4) One to One and One to Many relational database.</li>
                        <li>5) Global exception handling.</li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) Challenging problem of creating service class for updating a nested list of objects ie shippping routes within vessel within booking.</li>
                        <li>2) Creating the Schema for the database relationship between entities.</li>
                        <li>3) First time writing unit test for spring-boot.</li>
                    
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Use JWT user authentication.</li>
                        <li>2) Write Integration tests.</li>
                        <li>3) Could have taken mre time with deciding on the relational database schema.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
