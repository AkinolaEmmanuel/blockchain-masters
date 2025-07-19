"use client";
import { Button } from "@/components/button";
import { Container, SectionHeader } from "@/components/section";
import { ArrowRight, Award, Book, Brain, Building, Check, CheckCircle, Code, Eye, Globe, GraduationCap, Heart, Mail, Play, Rocket, Shield, Stars, Target, TrendingUp, Users } from "lucide-react";
import { blogPosts, programs, stats, testimonials, whyJoinReasons } from "../data/mock";
import { BlogCard, Card, CounterCard, FeatureCard, StatCard, TestimonialCard } from "@/components/cards";
import Hero from "./[home]/hero";
import { useState, useEffect } from "react";
import { GlobalLoader } from "@/components/global-loader";
import Image from "next/image";
import Programs from "./[home]/programs";
import Testimonials from "./[home]/testimonials";


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

   
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setIsVisible(true);
    }, []);

     const values = [
                  {
                    icon: <Book className="w-6 h-6 text-orange-200" />,
                    title: "Clarity over complexity",
                    description: "We simplify blockchain concepts for all."
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5 text-orange-200" />,
                    title: "Community-First",
                    description: "We grow with, and for, our learners."
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-orange-200" />,
                    title: "Real-world relevance",
                    description: "What we teach is what you'll use."
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-orange-200" />,
                    title: "Integrity & transparency",
                    description: "We walk the talk in the spirit of Web3."
                  },
                  {
                    icon: <Award className="w-6 h-6 text-orange-200" />,
                    title: "Continual learning",
                    description: "Blockchain is evolving, and so are we."
                  }
                ]

      const whoCanJoinData = [
    {
      id: 1,
      title: "Aspiring Blockchain Developers",
      description: "Ready to build the future with code",
      icon: <Code className="w-6 h-6" />,
      details: "Learn smart contracts, dApps, and Web3 development from zero to hero",
      color: "from-purple-500 to-pink-500",
      benefits: ["Hands-on coding projects", "Real-world blockchain apps", "Industry mentorship"]
    },
    {
      id: 2,
      title: "Entrepreneurs & Innovators",
      description: "Building the next generation of Web3 businesses",
      icon: <Rocket className="w-6 h-6" />,
      details: "Transform your ideas into blockchain-powered ventures",
      color: "from-blue-500 to-cyan-500",
      benefits: ["Business model validation", "Funding opportunities", "Network access"]
    },
    {
      id: 3,
      title: "Career Switchers",
      description: "Transitioning to the blockchain industry",
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Leverage your existing skills in the Web3 ecosystem",
      color: "from-green-500 to-emerald-500",
      benefits: ["Skill bridging programs", "Career counseling", "Job placement support"]
    },
    {
      id: 4,
      title: "Crypto Enthusiasts",
      description: "Understand the technology behind your investments",
      icon: <Brain className="w-6 h-6" />,
      details: "Go beyond trading to truly understand blockchain fundamentals",
      color: "from-orange-500 to-red-500",
      benefits: ["Technical analysis", "DeFi deep dives", "Investment strategies"]
    },
    {
      id: 5,
      title: "Students & Graduates",
      description: "Future-proof your career with blockchain skills",
      icon: <GraduationCap className="w-6 h-6" />,
      details: "Start your professional journey in the most exciting tech field",
      color: "from-indigo-500 to-purple-500",
      benefits: ["Student discounts", "Internship programs", "Graduate support"]
    },
    {
      id: 6,
      title: "Enterprise Teams",
      description: "Organizations adopting blockchain technology",
      icon: <Building className="w-6 h-6" />,
      details: "Upskill your team for blockchain integration and innovation",
      color: "from-teal-500 to-blue-500",
      benefits: ["Corporate training", "Custom curriculums", "Team certifications"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoading && <GlobalLoader isLoading={isLoading} />}
 

      {/* Hero Section */}
      <Hero />

      {/* Who We Are Section */}
      <section className="my-20">
        <Container className="flex flex-col md:flex-row items-center justify-between">
          <SectionHeader centered={false} title="Who we are" subtitle="Blockchain Masters"></SectionHeader>
          <p className="text-justify text-black text-lg max-w-lg my-5">
            <span>Blockchain Masters Academy is an EdTech platform dedicated to making blockchain and Web3 education accessible, practical, and career-driven. </span>
            <span>We believe that blockchain isn't just for coders, tech bros, or crypto nerds but for everyone. Whether you’re a student, a small business owner, or someone simply curious about Web3 We’re here to help you understand Blockchain, use it, and grow with it.</span>
          </p>
        </Container>

        {/* Stats */}
        <Container className="my-10 flex flex-col md:flex-row items-center justify-between">
          <div className="bg-orange-400 p-5">
          <Image src={"/students.jpg"} width={600} height={600} alt="" className="rounded-sm"/>
          </div>
          <div className="space-y-5">
          <h1 className="font-bold text-3xl text-center text-black mb-5">Our Track Record Till Date</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <CounterCard icon={Users} count={10500} label="Students Trained" delay={0} />
            <CounterCard icon={GraduationCap} count={8500} label="Graduates" delay={0.2} />
            <CounterCard icon={Award} count={92} label="Success Rate %" delay={0.4} />
            <CounterCard icon={Building} count={150} label="Hiring Partners" delay={0.6} />
          </div>
          </div>
     
        </Container>
      </section>

      {/* Featured Programs*/}
      <Programs section="home"/>

      {/* Vision, and Mission */}
      <section className="py-20 bg-orange-500">
        <Container className="flex flex-col items-center w-full">

            <div className="text-center mb-8">
              <div className="flex items-center justify-center text-white">
               <Stars className="w-6 h-6 mr-2 text-orange-700" />
                <h2 className="text-lg md:text-xl my-4">Our Vision and Mission</h2>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">The Core of Blockchain Masters</h1>   
            </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We believe blockchain is the future, and everyone deserves a chance to be part of it. 
                Our vision is to bridge the gap between curiosity and expertise, turning learners into 
                creators, innovators, and leaders in the decentralized world.
              </p>
            </Card>

            {/* Mission */}
            <Card className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make blockchain and Web3 education simple, accessible, and practical for everyone 
                from curious beginners to future industry leaders. We help you not just learn, 
                but master the tools of tomorrow.
              </p>
            </Card>
           
          </div>
           <Button variant="secondary" size="md" link="/" className="mt-8">
            Join Our Community
            </Button>
         
        </Container>
      </section>

         {/*Our Values */}
         <section className="py-20 bg-white">
             <SectionHeader 
            centered={true}
            title="Values"
            subtitle="Our Core Values"
            className=""
          />
         <Container className="my-5 lg:my-10 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2"> 
            <Image src={"/medium-shot-students.jpg"} width={600} height={600} alt="" className="rounded-sm"/>
          </div>
            <div className="px-10 w-full md:w-1/2 xl:w-3/7">
              <div className="space-y-5 my-5">
                {values.map(({ icon, title, description }, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="rounded-full p-2 bg-orange-700 hover:bg-orange-300">{icon}</div>
                    <div className="flex flex-col text-gray-900">
                      <span className="font-semibold text-2xl">{title}</span>
                      <span className="">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </Container>
            </section>

     {/* Who Can Join Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Header */}
          <div className={`flex items-center justify-between mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <SectionHeader
              title="Who Can Join"
              subtitle="Join Our Community"
              centered={false}
              ></SectionHeader>
            <p className="text-xl text-gray-900 max-w-lg leading-relaxed">
              Blockchain Masters Academy welcomes learners from all backgrounds. Whether you're a complete beginner or looking to advance your career, we have a place for you.
            </p>
          </div>

            <div className="flex flex-col md:flex-row items-center justify-between">

              <Image src={'/different-ethnicities.jpg'} width={600} height={600} alt="" className={`w-full md:w-1/2 rounded-sm transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}/>

              <div className={`px-10 w-full md:w-1/2 xl:w-3/7 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="space-y-5 my-5">
                  {whoCanJoinData.map(({ icon, title, description }, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="rounded-full p-2 bg-orange-700 hover:bg-orange-300"><Check/></div>
                      <div className="flex flex-col text-gray-900">
                        <span className="font-semibold text-2xl">{title}</span>
                        <span className="">{description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          
                
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeader 
            title="Why Choose Blockchain Masters Academy?"
            subtitle="Discover what makes our approach to blockchain education unique and effective"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <FeatureCard key={index} {...reason} />
            ))}
          </div>
        </Container>
      </section>

     
        <Testimonials/>
      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeader 
            title="Latest from Our Blog"
            subtitle="Stay updated with the latest insights, tutorials, and industry news"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index: number) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" link="/">
              View All Posts <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-orange-500 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get exclusive access to blockchain resources, course updates, and industry insights
            </p>
            <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-s border-y  border-white text-white rounded-lg rounded-e-none outline-none"
              />
              <Button variant="secondary" link="/" className="rounded-s-none border border-white outline-none">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              Join 10,000+ blockchain enthusiasts. No spam, unsubscribe anytime.
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default HomePage;