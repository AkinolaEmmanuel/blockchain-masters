"use client"

import Image from "next/image";
import { Button } from "./button";
import { Container } from "./section";
import Link from "next/link";
import { useState } from "react";
import { Hamburger, Menu, X } from "lucide-react";


const navItems = [
    {
        link: "/who-we-are",
        name: "Who we are"
    },
    {
        link: "/bootcamps",
        name: "Our Bootcamps"
    },
    {
        link: "/events",
        name: "Events"
    },
    {
        link: "/join-us",
        name: "Join Us"
    },
    {
        link: "/blog",
        name: "Blog"
    },
    {
        link: "/contact-us",
        name: "Contact Us"
    }
]

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);

    const toggleNav = () => {
        setIsMobile(!isMobile);
    }
  return (
      <header
        className="bg-white shadow-sm">
        <Container>
          <div className="flex items-center justify-between py-4">
            
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
              </div> */}
              <div className="">
                <Link href={"/"}>
              <Image src={"/Blockchain Masters Academy.png"} alt="Logo" width={70} height={70} className="w-full h-auto object-cover"/>
              </Link>
              </div>
              {/* <div>
                <h1 className="text-lg font-bold text-gray-900">Blockchain Masters Academy</h1>
                <p className="text-sm text-gray-600">Blockchain for Everyone</p>
              </div> */}
            </div>
           
               <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                <Link key={index} href={item.link} className="text-gray-600 hover:text-orange-600 hover:underline">{item.name}</Link>
                ))}
               
                </div>
                 <Button variant="primary" size="sm" link="/" className="lg:block hidden">Start Learning</Button>
                <div className="flex lg:hidden">
                    {isMobile ?
                    <X className="text-black w-6 h-6" onClick={toggleNav}/>
                    : 
                    <Menu className="text-black w-6 h-6" onClick={toggleNav}/>
                    }
                 
                </div>
                    </div>
                    {isMobile && (
                <div className="h-fit py-2 grid items-center gap-4 grid-cols-2 md:grid-cols-3">
                    {navItems.map((item, index) => (
                                <Link key={index} href={item.link} className="text-gray-600 hover:text-orange-600 hover:underline">{item.name}</Link>
                    ))}
                    <Button variant="primary" size="sm" link="/" className="">Start Learning</Button>
                </div>
             )}
          
           
        </Container>
      </header>
  )
}


