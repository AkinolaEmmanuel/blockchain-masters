"use client";
import { ArrowRight, Calendar, Clock, ExternalLink, MapPin, Star, Users } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Link from "next/link";
import { CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";



export interface EventCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  time?: string;
  date?: string;
  location?: string;
  attendees?: number;
  category: string;
  status: 'upcoming' | 'live' | 'completed';
  link: string;
  linkText?: string;
  featured?: boolean;
}


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

export const FeatureCard = ({ icon: Icon, title, description, color = "orange", dialog, dialogcontent }: { icon: any, title: string, description: string, color?: string, dialog?: boolean, dialogcontent?: {title: string, description: string, buttontext: string, buttonlink: string }}) => (
  <Card hover className="text-center hover:bg-orange-400 hover:text-white hover:transition duration-300">
    <div className={`bg-${color}-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
      <Icon className={`w-10 h-10 text-${color}-500`} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>

    {dialog &&
    <Dialog>
       <DialogTrigger className="my-5"><Button variant="primary" size="sm">Learn More</Button></DialogTrigger>
       <DialogContent className="p-5">
       <DialogHeader className="space-y-5 flex-col items-center">
          <DialogTitle className="text-2xl md:text-3xl">{dialogcontent?.title}</DialogTitle>
          <DialogDescription className="text-justify italic">{dialogcontent?.description}</DialogDescription>
          <a href={dialogcontent?.buttonlink} className="my-3 p-2 bg-gray-100 border border-gray-500 text-center">{dialogcontent?.buttontext}</a>
       </DialogHeader>
       </DialogContent>
    </Dialog>
    }
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




export const EventCard = ({ 
  title, 
  description, 
  image, 
  time,
  date, 
  location, 
  attendees, 
  category, 
  status, 
  link, 
  linkText = "Learn More",
  featured = false 
}: EventCardProps) => {
  const getStatusBadge = () => {
    const statusConfig = {
      upcoming: { label: 'Upcoming', className: 'bg-blue-500/10 text-blue-600 border-blue-200' },
      live: { label: 'Live Now', className: 'bg-green-500/10 text-green-600 border-green-200 animate-pulse' },
      completed: { label: 'Completed', className: 'bg-gray-500/10 text-gray-600 border-gray-200' }
    };
    
    return statusConfig[status];
  };

  return (
    <Card className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
      featured ? 'ring-2 ring-orange-500/20 shadow-lg' : ''
    } bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-200/50`}>
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-80 bg-gradient-to-br from-orange-400 to-purple-600">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 via-purple-500 to-blue-600 flex items-center justify-center">
            <div className="text-white text-6xl font-bold opacity-20">BMA</div>
          </div>
        )}



        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center gap-x-3">
        <Badge variant="outline" className="text-orange-600 border-orange-200 bg-orange-50">
          {category}
        </Badge>

        {status &&
          <Badge variant={"outline"} className={` ${getStatusBadge().className}`}>
            <span className="font-medium text-xs">{getStatusBadge().label}</span>
          </Badge>
        }
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-4">
          {title}
        </h3>

        {/* Event Meta Information */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
      
        
      
          {date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <div className="flex gap-x-1">
              <span>{time}</span>
              <span>{date}</span>
              </div>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          )}
          {featured && (
          <div className="flex items-center gap-1"> 
            <Star className="w-4 h-4 text-orange-400" />
            <span className="text-orange-600 font-medium">Featured</span>
          </div>
        )}
          {attendees && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{attendees}+ attending</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed ">
          {description}
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <Button 
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-medium group-hover:shadow-lg transition-all duration-300"
            link={link}
          >
            <p
              className="flex items-center justify-center gap-2"
            >
              {linkText}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </p>
          </Button>
        </div>
      </div>
    </Card>
  );
};