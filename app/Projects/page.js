'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div>
      <Navbar />
      <h3 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
        Projects
        </h3>
      <ProjectCard />
    </div>
  )
}

export default page
