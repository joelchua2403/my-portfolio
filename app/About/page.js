"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
          About Me
        </h1>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <div className="text-md md:text-1xl font-bold text-gray-700 dark:text-gray-200 m-3">
              Hi, I'm Joel, an aspiring full-stack developer based in Singapore.
              I am currently a self-taught developer, and I am looking for
              opportunities to work in a team to build cool stuff. I am also
              looking for opportunities to learn from experienced developers.
              I am a lifelong learner, and I am always looking to learn new things.
              
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
                src="/images/joel.JPG"
                alt="Picture of the author"
                width={300}
                height={300}
                className="rounded-xl"
            />
          </div>
        </div>
        <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">
                Skills
            </h1>
            <div>
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    Languages:
                    <div className="flex p-5 mr-5">
                        <img src="https://img.icons8.com/color/48/000000/python--v1.png"/>
                        <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"/>
                        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
                        <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
                        <img src="https://img.icons8.com/color/48/000000/css3.png"/>
                    </div>
                </div>
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    Frontend:
                    <div className="flex p-5 mr-5">
                        <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                        <img src="https://img.icons8.com/color/48/000000/nextjs.png"/>
                        <img src="https://img.icons8.com/color/48/000000/tailwindcss.png"/>
                        <img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
    
                        </div>
                      
                </div>
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    Backend:
                    <div className="flex p-5 mr-5">
                        <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
                        <img src="https://img.icons8.com/color/48/000000/express.png"/>
                        <img src="https://img.icons8.com/color/48/000000/django.png"/>
                        <img src="https://img.icons8.com/?size=512&id=90519&format=png" width={48} height={48}/>
                        
                        
                        </div>
                </div>
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    Database:
                    <div className="flex p-5 mr-5">
                    <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                        <img src="https://img.icons8.com/color/48/000000/mysql-logo.png"/>
                        <img src="https://img.icons8.com/color/48/000000/postgreesql.png"/>
                        </div>
                </div>
                <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
                    DevOps:
                </div>
                <div className="flex p-5 mr-5">
                    <img src="https://img.icons8.com/color/48/000000/git.png"/>
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
                    <img src="https://img.icons8.com/color/48/000000/docker.png"/>
                    <img src="https://img.icons8.com/color/48/000000/jenkins.png"/>
                    <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png"/>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 m-8">Experience</h1> 

                </div>
      </div>
    </div>
  );
};

export default page;
