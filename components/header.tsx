import Image from "next/image";
import { Button } from "./button";
import { Container } from "./section";
import Link from "next/link";


const navItems = [
    {
        link: "/",
        name: "Who we are"
    },
    {
        link: "/bootcamps",
        name: "Our Bootcamps"
    },
    {
        link: "/",
        name: "Events"
    },
    {
        link: "/",
        name: "Join Us"
    },
    {
        link: "/",
        name: "Blog"
    },
    {
        link: "/",
        name: "Contact Us"
    }
]

export default function Header() {
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
              <Image src={"/Blockchain Masters Academy.png"} alt="Logo" width={70} height={70} className="w-full h-auto object-cover"/>
              </div>
              {/* <div>
                <h1 className="text-lg font-bold text-gray-900">Blockchain Masters Academy</h1>
                <p className="text-sm text-gray-600">Blockchain for Everyone</p>
              </div> */}
            </div>
            <nav className="hidden md:flex space-x-8">
                {navItems.map((item, index) => (
              <Link key={index} href={item.link} className="text-gray-600 hover:text-orange-600 hover:underline">{item.name}</Link>
                ))}
            </nav>
            <Button variant="primary" size="sm" link="/">Start Learning</Button>
          </div>
        </Container>
      </header>
  )
}
