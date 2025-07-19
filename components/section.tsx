"use client"
import { Stars } from "lucide-react";
import { motion } from "framer-motion";
export const Container = ({ children, className }: { children: React.ReactNode, className?: string}) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const SectionHeader = ({ title, subtitle, centered = true, ...props }: { title: string, subtitle?: string, centered?: boolean, [props: string]: any }) => (
  <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} 
      className={`my-10 ${centered ? 'text-center' : 'text-start'}`}
      {...props}>
      <div className={`flex items-center ${centered ? 'justify-center' : ``}`}>
      <Stars className="w-6 h-6 text-orange-500 mr-2" />
        <h2 className="text-lg md:text-xl text-gray-900 my-4">{title}</h2>
       </div>
    {subtitle && (  
      <h1 className={`${centered ? 'text-center' : 'text-start'} text-3xl md:text-4xl font-bold text-gray-900`}> {subtitle}</h1>
    )}
  </motion.div>
);


export const PageHeader= ({ title, link,  ...props }: { title: string, link?: string, [props: string]: any }) => (
  <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} 
      className={`h-80 flex flex-col items-center justify-center bg-orange-500 relative`}
      {...props}>
        <Stars className="w-8 h-8 text-white absolute top-10 lg:top-16 left-10 lg:left-16"/>
        <Stars className="w-5 h-5 text-white absolute top-8 lg:top-10 right-10 lg:right-20"/>
        <Stars className="w-5 h-5 text-white absolute bottom-8 lg:bottom-10 left-10 lg:left-20"/>
        <Stars className="w-8 h-8 text-white absolute bottom-10 lg:bottom-16 right-10 lg:right-16" />
      <div className={`flex flex-col items-center`}>
        <h2 className="text-3xl md:text-4xl text-white my-4">{title}</h2>
       </div>
    {link && (  
      <p className={` text-lg md:text-xl font-bold text-white`}> {link}</p>
    )}
  </motion.div>
)