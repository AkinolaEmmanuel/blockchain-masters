'use client'
import { ArrowRight, Award, BookOpen, CheckCircle, Globe, LucideProps, Rocket, Shield, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/section";
import { Button } from "@/components/button";



interface AudienceCategories {
  [key: string]: {
    title: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    description: string;
    benefits: string[];
  };
}
export function Whocanjoin() {

     const audienceCategories: AudienceCategories = {
    students: {
      title: "Students & Graduates",
      icon: BookOpen,
      description: "Launch your career in the most exciting tech frontier",
      benefits: [
        "Build job-ready blockchain skills",
        "Access to internship opportunities",
        "Career guidance and mentorship",
        "Portfolio development support"
      ]
    },
    developers: {
      title: "Developers & Engineers",
      icon: Zap,
      description: "Level up your technical skills with cutting-edge blockchain development",
      benefits: [
        "Learn Solidity, Web3.js, and DeFi protocols",
        "Hands-on smart contract development",
        "Advanced security and auditing techniques",
        "Real-world project experience"
      ]
    },
    entrepreneurs: {
      title: "Entrepreneurs & Founders",
      icon: Rocket,
      description: "Build the next generation of decentralized businesses",
      benefits: [
        "Blockchain business strategy",
        "Tokenomics and DeFi integration",
        "Investor-ready pitch development",
        "Network with blockchain VCs"
      ]
    },
    professionals: {
      title: "Career Switchers",
      icon: TrendingUp,
      description: "Transition from traditional industries to blockchain",
      benefits: [
        "Beginner-friendly learning paths",
        "Industry transition guidance",
        "Skill mapping and planning",
        "Job placement assistance"
      ]
    },
    investors: {
      title: "Investors & Traders",
      icon: Target,
      description: "Make smarter investment decisions with deep tech knowledge",
      benefits: [
        "Technical analysis of blockchain projects",
        "DeFi yield farming strategies",
        "Risk assessment frameworks",
        "Market trend analysis"
      ]
    },
    businesses: {
      title: "Businesses & Enterprises",
      icon: Shield,
      description: "Integrate blockchain technology into your operations",
      benefits: [
        "Enterprise blockchain solutions",
        "Team training programs",
        "Implementation consulting",
        "ROI optimization strategies"
      ]
    }
  };

   const [activeTab, setActiveTab] = useState('students');
  return (
    <>
     {/* Who Can Join Section */}
      <section className="relative py-10"   style={{ fontFamily: 'Bahnschrift, sans-serif' }}>

          {/* Interactive Tab Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {Object.entries(audienceCategories).map(([key, category]: any, index: number) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-4 py-4 rounded-full transition-all duration-300 ${
                    activeTab === key 
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25' 
                      : 'bg-transparent text-black hover:bg-orange-500/50'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent size={20} />
                    <span className="font-medium">{category.title}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                    {audienceCategories[activeTab].title}
                  </h3>
                  <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                    {audienceCategories[activeTab].description}
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {audienceCategories[activeTab].benefits.map((benefit: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-900 hover:bg-slate-800/90 transition-colors"
                    >
                      <CheckCircle className="text-orange-400 flex-shrink-0" size={24} />
                      <span className="text-lg text-gray-200">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                     
            <Button variant="primary" size="md" link="/join-us/as-a-member">Start your journey</Button>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative z-10"
                >
                  <div className="w-full h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl backdrop-blur-sm border border-orange-500/20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 border-4 border-orange-500/30 rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-xl">₿</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
      </section>
    </>
  )
}



export function WhyJoin () {

    const whyJoinReasons = [
    {
      icon: Star,
      title: "Industry-Leading Curriculum",
      description: "Learn from real-world blockchain projects and case studies",
      stat: "95%",
      statLabel: "Job Placement Rate"
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Join 10,000+ blockchain enthusiasts across 50+ countries",
      stat: "10K+",
      statLabel: "Active Members"
    },
    {
      icon: Award,
      title: "Recognized Certifications",
      description: "Industry-recognized credentials from leading blockchain organizations",
      stat: "500+",
      statLabel: "Partner Companies"
    },
    {
      icon: Globe,
      title: "Real-World Projects",
      description: "Work on live blockchain projects with actual market impact",
      stat: "$2M+",
      statLabel: "Project Values"
    }
  ];
    return (
        <>

        {/* Why You Should Join Section */}
      <section className="relative py-10">
        <Container>
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {whyJoinReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="group relative"
                >
                  <motion.div
                    className="relative p-5 md:p-10 lg:h-fit rounded-3xl bg-orange-500/90 border border-orange-700/50 hover:border-orange-500/50 transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <motion.div
                        className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent size={32} className="text-white" />
                      </motion.div>
                      
                      <div className="min-h-48 lg:h-52">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-white text-lg leading-relaxed mb-6">
                          {reason.description}
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="text-4xl md:text-5xl font-bold text-white"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring" }}
                          >
                            {reason.stat}
                          </motion.div>
                          <div className="text-gray-100">
                            {reason.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
         
            <Button variant="primary" size="md" link="/join-us/as-a-member">Join Our Community</Button>
          </motion.div>
        </Container>
      </section>
        </>
    )
}


