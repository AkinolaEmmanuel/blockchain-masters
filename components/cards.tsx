"use client";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Card = ({ children, className = "", hover = true }: { children: React.ReactNode, className?: string, hover?: boolean}) => (
  <motion.div 
  whileHover={hover ? { y: -5, scale: 1.02 } : {}}
  className={`bg-white rounded-xl shadow-lg p-6 ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
    {children}
  </motion.div>
);

export const StatCard = ({ icon: Icon, number, label, suffix = "" }: { icon: any, number: number, label: string, suffix?: string}) => (
  <div className="text-center">
    <div className="bg-orange-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      <Icon className="w-8 h-8 text-orange-500" />
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-2">{number}{suffix}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);


export const CounterCard = ({ icon: Icon, count, label, delay = 0 }: {icon: any, count: number, label: string, delay?: number}) => {
  const [currentCount, setCurrentCount] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = count / 50;
      const interval = setInterval(() => {
        setCurrentCount(prev => {
          if (prev >= count) {
            clearInterval(interval);
            return count;
          }
          return Math.min(prev + increment, count);
        });
      }, 20);
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [count, delay]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <Icon className="w-8 h-8 text-orange-500" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Bahnschrift, sans-serif' }}>
        {Math.floor(currentCount).toLocaleString()}+
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

export const FeatureCard = ({ icon: Icon, title, description, color = "orange" }: { icon: any, title: string, description: string, color?: string}) => (
  <Card hover className="text-center hover:bg-orange-400 hover:text-white hover:transition duration-300">
    <div className={`bg-${color}-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
      <Icon className={`w-10 h-10 text-${color}-500`} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

export const TestimonialCard = ({ name, role, image, rating, testimonial }: { name: string, role: string, image: string, rating: number, testimonial: string}) => (
  <Card className="h-full space-y-5">
     <p className="text-gray-700 text-base lg:text-lg italic h-32">"{testimonial}"</p>
    <div className="flex items-start ">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
    {/* <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
      ))}
    </div> */}
   
  </Card>
);

export const BlogCard = ({ title, excerpt, date, author, image, readTime }: { title: string, excerpt: string, date: string, author: string, image: string, readTime: number}) => (
  <Card hover className="h-full">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
      <span>{date}</span>
      <span>{readTime} min read</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <div className="flex flex-col md:flex-row item-start md:items-center gap-y-3 justify-between">
      <span className="text-sm text-gray-500">By {author}</span>
      <Button variant="outline" size="sm" link="/">
        Read More <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  </Card>
);