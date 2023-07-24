import React from 'react'
import nutrimate from '../public/images/nutrimate.png'
import Image from 'next/image'
import jamming3 from '../public/images/jamming3.png'
import HarbourBooking from '../public/images/HarbourBooking.png'
import BackendBooking from '../public/images/BackendBooking.png'
import ownfit from '../public/images/ownfit.png'
import NotesApp from '../public/images/NotesApp.png'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-rows-2 gap-5 p-3 '>
      <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden '>
      <Link href="/Projects/NutriMate"><p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Nutrimate
        </p>
      
        <div className='flex flex-row justify-center items-center'>
        <Image src={nutrimate} alt="nutrimate" width={400} height={400} className="rounded-xl hover:scale-125 ease-in duration-500"/>
       
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6 mt-20'>
            A FrontEnd food recipe website that allows users to search for recipes based on ingredients and cuisine.
            Users are able to save their favourite recipes and view them.
            </p>
            </Link>
            </div>
            <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
       <Link href="/Projects/HarbourBooking"> <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Harbour Booking App
        </p>
       
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={HarbourBooking} alt="HarbourBooking" width={400} height={400} className="rounded-xl hover:scale-125 ease-in duration-500" />
       
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
            Harbour Booking is a Full Stack App for vessels and port operators to book berths and manage their bookings.
            </p>
            </Link>
            </div>

            <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
            <Link href="/Projects/Spring-boot-backend"> 
        <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Backend Spring Boot API
        </p>
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={BackendBooking} alt="BackendBooking" width={400} height={500} className="rounded-xl hover:scale-125 ease-in duration-500" />
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6 mt-20'>
            Backend Booking is a Spring Boot API that allows users to book berths and manage their bookings.
            </p>
            </Link>
            </div>

            <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
            <Link href="/Projects/NotesApp"> 
        <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Notes App with .NET MAUI
        </p>
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={NotesApp} alt="BackendBooking" width={250} height={300} className="rounded-xl hover:scale-125 ease-in duration-500" />
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6 mt-20'>
            Notes App is a .NET MAUI app that allows users to create notes and save them.
            </p>
            </Link>
            </div>
           
        <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
        <Link href="/Projects/OwnFit"><p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Ownfit Apparrels
        </p>
        
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={ownfit} alt="ownfit" width={400} height={400} className="rounded-xl hover:scale-125 ease-in duration-500"/>
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
            Ownfit is a E-commerce website that sells fitness apparels. It uses Next.js for the frontend and sanity.io for the backend as well as Stripe for payment.
            </p>
            </Link>
            </div>

            <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
       <Link href="/Projects/Jamming"> <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Jamming App
        </p>
        
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={jamming3} alt="HarbourBooking" width={400} height={400} className="rounded-xl hover:scale-125 ease-in duration-500" />

        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
           Jamming is a front end React App that allows users to search for songs on Spotify and create a playlist.
            </p>
            </Link>
            </div>
    </div>
  )
}

export default ProjectCard
