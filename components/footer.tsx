"use client"
import { Container } from './section'


export default function Footer() {
  return (
    <>
     {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            <div>
              {/* <div className="">
                <Link href={"/"}>
              <Image src={"/logo.jpg"} alt="Logo" width={70} height={70} className="w-full h-auto object-cover"/>
              </Link>
              </div> */}
               <div className="flex items-center space-x-3 mb-4">
                {/*
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
                </div>
                 */}
                <div>
                  <h3 className="font-bold">Blockchain Masters Academy</h3>
                  <p className="text-sm text-gray-400">Blockchain for Everyone</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Making blockchain and Web3 education accessible, practical, and career-driven for everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/who-we-are" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/bootcamps&events" className="text-gray-400 hover:text-white">Bootcamps & Events</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="/join-us/as-a-member" className="text-gray-400 hover:text-white">Join Us As a Member</a></li>
                <li><a href="/join-us/as-a-partner" className="text-gray-400 hover:text-white">Join Us As a Partner</a></li>
                {/* 
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li> */}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 text-sm mb-2">chainmastersacademy@gmail.com</p>
              <div className="flex space-x-4">
                <a target='_blank' href="https://www.facebook.com/share/19XZ3jixUZ/" className="text-gray-400 hover:text-white">Facebook</a>
                <a target='_blank' href="https://x.com/BlockCMA" className="text-gray-400 hover:text-white">Twitter</a>
                <a target='_blank' href="https://www.linkedin.com/company/blockchainmastersacademy/" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a target='_blank' href="https://t.me/BlockCMA" className="text-gray-400 hover:text-white">Telegram</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Blockchain Masters Academy. All rights reserved.</p>
          </div>
        </Container>
      </footer>
      </>
  )
}
