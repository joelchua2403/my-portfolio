
  import React, { useEffect, useState } from "react";
  import Link from "next/link";
  import { useTheme } from "next-themes";
  import { useRouter } from "next/navigation";
  import Image from "next/image";
  import joel from "../public/images/joel.JPG";
  
  export default function Navbar() {
    const router = useRouter();
    console.log(router.asPath);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <div className="max-w-5xl  mx-auto px-3 py-10 md:py-20">
        <div className="flex  md:flex-row justify-between items-center flex-shrink">
        <Link href='/'> <img src="https://avatars.githubusercontent.com/u/119186374?v=4" alt="Joel" className="rounded-full" width={50} />
        </Link>
          {theme === "dark" ? (
          <nav>
              <Link href="/About" className="text-1xl md:text-2xl font-bold text-white ">
                About</Link>
           <Link href="/Projects" className="text-1xl md:text-2xl font-bold text-white ml-8">
                Projects</Link>
                <Link href="/Contact" className="text-1xl md:text-2xl font-bold text-white ml-8">
                Contact</Link>
               
            </nav>
          ) : (
            <nav>
            
              <Link href="/About" className="text-1xl md:text-2xl font-bold text-gray-900 mr-1">
                About</Link>
            <Link href="/Projects" className="text-1xl md:text-2xl font-bold text-gray-900 ml-8">
                Projects</Link>
              <Link href="/Contact" className="text-1xl md:text-2xl font-bold text-gray-900 ml-8">
                Contact</Link>
            </nav>
          )}
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-3 rounded focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>
       //Rest of the code
    );
  }
 


