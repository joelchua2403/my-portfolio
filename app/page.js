'use client'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import axios from 'axios'
// import { Navbar } from 'flowbite-react'

// const getLatestRepos = async (data) => {
//   console.log("data", data);
//   try {
//     const username = data.githubUsername;

//     const res = await axios.get(
//       `https://api.github.com/search/repositories?q=user:${joelchua2403}+sort:author-date-asc`
//     );

//     let repos = res.data.items;
//     console.log("repos", repos);
//     let latestSixRepos = repos.splice(0, 6);
//     return latestSixRepos;
//   } catch (err) {
//     console.log(err);
//   }
// };


export default function Home() {
  return (
    <div>
 <Navbar />
{/* <div padding="50px">
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://media.licdn.com/dms/image/D4E03AQEryxVA38PEbQ/profile-displayphoto-shrink_400_400/0/1687792099007?e=1693440000&v=beta&t=REB-ugiR7UmaynK5c55xAD2DeCwvKkT_zvGgs_0czO8"
      className="mr-3 h-6 sm:h-9 rounded-full"
      alt="Joel"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Joel's Portfolio
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About Me
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Projects
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><rect x="0" y="0" width="256" height="256" fill="rgba(255, 255, 255, 0)" /><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"/></g></svg>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><rect x="0" y="0" width="512" height="512" fill="rgba(255, 255, 255, 0)" /><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4c0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5c-10.2-26.5-24.9-33.6-24.9-33.6c-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8c11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7c-49.7-5.8-102-25.5-102-113.5c0-25.1 8.7-45.6 23-61.6c-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8c14.3 16.1 23 36.6 23 61.6c0 88.2-52.4 107.6-102.3 113.3c8 7.1 15.2 21.1 15.2 42.5c0 30.7-.3 55.5-.3 63c0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7C480 134.9 379.7 32 256 32Z"/></svg>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</div> */}
<Hero />
<h3 className="text-4xl font-semibold text-center text-gray-800 dark:text-white p-5 mt-10">
  My Coding Story
</h3>
<div className="flex flex-col items-center justify-center m-8">
<p className="text-center text-gray-600 dark:text-gray-400">

My first foray into Technology was back when I was 18, I was so desperate for having a gaming PC so that I could play AAA games. However, being a broke student, pre-built PCs were so expensive. So I decided to build my own PC which helped me save about $1000~ :).
<br />
<br />
<div className="flex flex-col items-center justify-center">
<img  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1676963385505/90fe549f-460d-4902-8385-8a64302306d2.jpeg?auto=compress,format&format=webp" alt="Silicon Valley TV Show" />
</div>
<br />
<br />
In Nov 2022, I came across this TV Show called Silicon Valley which got me interested in the tech industry, in particular, software development. This made me sign up with Codecademy to start learning basic programming.
After considerable research on what programming language to learn first, I decided on Python. I signed up for the Learn Python Course on Codecademy and before I knew it, I wrote my first "Hello World" program.

<br />
<br />

It did not take long for me to be hooked to programming. I loved how programming lets you create anything you can put your mind to. I loved the problem solving aspect and the need for continous learning as a software developer.

<br />
<br />

After a month, I had completed the Learn Python Course. I was wondering what could I do next in my coding journey. This was when I came across Harvard's CS50 lectures all on youtube for free. I started watching the lectures in my free time. In short, CS50 WAS AMAZING. I could'nt believe that such good resources were available for anyone for free. This was also my first stepping stone into learning about Data Structures and Algorithms.
<br />
<br />
At this point in time, I concurrently also started on Codecademy's Computer Science Career Path which had modules like Learning Python, Data Structures and Algorithms, Databases, Computer Architecture and Discrete Maths.
Data Structures and Algorithms was probrably one of the toughest part of the course and it made me realise how much more I had to learn. 
<br />
<br />
I decided to take a leap of faith and pursue my newfound passion for programming. I enrolled in a 6 month Software Engineering Bootcamp with Nanyang Technological University. I was so excited to learn more about programming and to be able to build my own web applications.
<br />
<br />
Through the bootcamp, I learnt more about React and React Native as well as Spring Boot for backend. I also learnt about devops and how to use Docker and Jenkins. I also got to know other like-minded people who were also passionate about programming and managed to do some group projects with them.
<br />
<br />
Alas, this is just the beginning of my coding journey. I am truly excited for what's to come and cnstantly learning and honing my skills. I hope to be able to contribute to the tech industry in the future.
</p>
</div>
      </div>
  )
}
