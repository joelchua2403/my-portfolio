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
       Devops CI/CD Demo
        </h2>
        <div className="flex flex-col justify-center items-center flex-shrink">
            <h2 className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 ">
                GitHub Code
            </h2>
        <a href="https://github.com/joelchua2403/SCTP-SE-Module03-JAVA-ProjectTeam02/tree/release" target="_blank">
        <img src="https://img.icons8.com/ios-filled/50/000000/github.png" />
        </a>
        </div>
        </div>
        <ReactPlayer url="https://youtu.be/_uDZ-7BiIGc" width="100%" height="400px"/>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Built with:
            </h1>
            <div className="flex flex-row justify-center items-center">
           
                {/* circleCI logo */}
                <img src="https://img.icons8.com/color/48/000000/circleci.png" />
                {/* heroku logo */}
                <img src="https://img.icons8.com/color/48/000000/heroku.png" />
                {/* docker logo */}
                <img src="https://img.icons8.com/color/48/000000/docker.png" />
                {/* github logo */}
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
        

                </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                App Features:
            </h1>
        
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                        <li>1) Runs CI whenever changes to Develop branch is pushed to GitHub </li>
                        <li>2) Runs CICD whenever changes to Release branch is pushed to GitHub </li>
                        <li>3) CI workflow includes build, test and synk security scan.</li>
                        <li>4) CICD workflow includes build, test, build-and-push which deploys to heroku. </li>
                        <li>5) Build job builds a new Docker Image for it to be used. </li>
                    </ol>
                </div>
                

            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Challenges:
            </h1>
            
                <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    <ol>
                    <li>1) CICD is relatively new, hence documents were not availble yet. </li>
                        <li>2) Figuring out the proper location of jar file when built. </li>
                        <li>3) When doing the security scan with Snyk, the version of H2 Database was outdated by no availble new version to update to. </li>
                    </ol>
                    </div>
                    
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-8">
                What I would do differently:
            </h1>
            <div className="text-1xl md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3 mb-20">
                    <ol>
                        <li>1) Figuring out how to add a wrokflow to merge the develop and release branches together when pushed.</li>
                    </ol>
                </div>
        </div>  
        </div>

    </div>
  )
}

export default page
