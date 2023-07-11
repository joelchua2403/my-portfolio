"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


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
              Hi, I'm Joel, an Ex-Naval Officer holding a degree in Civil Engineering turned full-stack developer
              from Singapore. I am currently looking for opportunities to
              work in a team to build cool stuff. I am also looking for
              opportunities to learn from experienced developers. I am a
              lifelong learner, and I am always looking to learn new things. I
              am currently learning about DevOps and cloud computing as well as
              constantly improving my skills in frontend and backend
              development.
              <br />
              <br />
              As a mid career switcher, I decided to take a leap of faith and
              pursue my passion for programming, and I have not looked back
              since. I hope to be able to show my passion for programming and my
              willingness to learn in my future endeavours.
              <br />
              <br />
              <div className="flex flex-row justify-left items-center">
              <Link href="/Resume.pdf" target="_blank" download={true}
              >
                <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                My Resume
                </button>
                </Link>
                <Link href="/Contact">
                <button className="bg-blue-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full">
                Contact Me
                </button>
                </Link>
                </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/joel-hero.JPG"
              alt="Picture of the author"
              width={250}
              height={250}
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
                <img src="https://img.icons8.com/color/48/000000/python--v1.png" />
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
                <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
                <img src="https://img.icons8.com/color/48/000000/css3.png" />
              </div>
            </div>
            <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
              Frontend:
              <div className="flex p-5 mr-5">
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                <img src="https://img.icons8.com/color/48/000000/nextjs.png" />
                <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <img src="https://img.icons8.com/color/48/000000/material-ui.png" />
              </div>
            </div>
            <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
              Backend:
              <div className="flex p-5 mr-5">
                {/* <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                <img src="https://img.icons8.com/color/48/000000/express.png" /> */}
                <img src="https://img.icons8.com/color/48/000000/django.png" />
                <img
                  src="https://img.icons8.com/?size=512&id=90519&format=png"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
              Database:
              <div className="flex p-5 mr-5">
                {/* <img src="https://img.icons8.com/color/48/000000/mongodb.png" /> */}
                {/* <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" /> */}
                <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
              </div>
            </div>
            <div className="text-1xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 m-3">
              DevOps:
            </div>
            <div className="flex p-5 mr-5 mb-28">
              <img src="https://img.icons8.com/color/48/000000/git.png" />
              <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
              <img src="https://img.icons8.com/color/48/000000/docker.png" />
              {/* <img src="https://img.icons8.com/color/48/000000/jenkins.png" /> */}
              <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default page;
