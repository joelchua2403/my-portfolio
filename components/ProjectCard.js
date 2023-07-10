import React from 'react'
import nutrimate from '../public/images/nutrimate.png'
import Image from 'next/image'
import HarbourBooking from '../public/images/HarbourBooking.png'
import BackendBooking from '../public/images/BackendBooking.png'
import ownfit from '../public/images/ownfit.png'
import Link from 'next/link'

const ProjectCard = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-rows-2 gap-5 p-3'>
      <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
        <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Nutrimate
        </p>
        <div className='flex flex-row justify-center items-center'>
        <Image src={nutrimate} alt="nutrimate" width={400} height={400} className="rounded-xl"/>
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
            A FrontEnd food recipe website that allows users to search for recipes based on ingredients and cuisine.
            Users are able to save their favourite recipes and view them.
            </p>
            </div>
            <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
       <Link href="/Projects/HarbourBooking"> <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Harbour Booking App
        </p>
        </Link>
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Link href="/Projects/HarbourBooking"><Image src={HarbourBooking} alt="HarbourBooking" width={400} height={400} className="rounded-xl" />
        </Link>
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
            Harbour Booking is a Full Stack App for vessels and port operators to book berths and manage their bookings.
            </p>
            </div>
            <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
        <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Backend Spring Boot API
        </p>
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={BackendBooking} alt="BackendBooking" width={400} height={400} className="rounded-xl" />
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            </p>
            </div>
        <div className='bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
        <p className='text-gray-800 dark:text-gray-200 text-xl font-bold mb-2 p-6'>
            Ownfit Apparrels
        </p>
        <div className='flex flex-row justify-center items-center rounded-lg'>
        <Image src={ownfit} alt="ownfit" width={400} height={400} className="rounded-xl"/>
        </div>
        <p className='text-gray-600 dark:text-gray-300 text-sm p-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            </p>
            </div>
    </div>
  )
}

export default ProjectCard
