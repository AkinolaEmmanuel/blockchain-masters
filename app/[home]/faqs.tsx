"use client"
import { Button } from '@/components/button';
import { Container, SectionHeader } from '@/components/section';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
      question: "What makes Blockchain Masters Academy different from other blockchain education platforms?",
      answer: "We focus on practical, hands-on learning with real-world projects. Our curriculum is designed by industry experts and constantly updated to reflect the latest blockchain trends. Plus, we provide comprehensive career support and have a 95% job placement rate for our graduates."
    },
    {
      question: "Do I need any prior coding experience to join?",
      answer: "Not at all! We offer learning paths for complete beginners. Our 'Blockchain Fundamentals' course starts from the very basics and gradually builds up your knowledge. We also have specialized tracks for those with technical backgrounds who want to dive deeper into development."
    },
    {
      question: "What kind of career opportunities are available in blockchain?",
      answer: "The blockchain industry offers diverse career paths including Blockchain Developer, Smart Contract Engineer, DeFi Specialist, Blockchain Consultant, Crypto Analyst, NFT Developer, and many more. Our graduates have landed roles at top companies like Coinbase, Binance, ConsenSys, and leading Web3 startups."
    },
    {
      question: "How long does it take to complete the program?",
      answer: "It depends on your chosen path. Our bootcamps range from 6-16 weeks for intensive training, while our self-paced courses can be completed in 3-6 months. We also offer accelerated programs for those who want to fast-track their learning."
    },
    // {
    //   question: "Are there any payment plans or scholarships available?",
    //   answer: "Yes! We offer flexible payment plans, income-share agreements, and need-based scholarships. We believe financial barriers shouldn't prevent anyone from learning blockchain technology. Contact our admissions team to discuss options that work for your situation."
    // },
    // {
    //   question: "Can I learn remotely, or do I need to attend in person?",
    //   answer: "We offer both online and hybrid options. Our online programs are fully interactive with live sessions, group projects, and one-on-one mentoring. We also have physical locations in major cities for those who prefer in-person learning."
    // },
    // {
    //   question: "What support do I get after completing the program?",
    //   answer: "Our support doesn't end at graduation! You'll have lifetime access to our alumni network, ongoing career support, job placement assistance, and continued learning resources. We also provide ongoing mentorship and help with portfolio development."
    // },
    // {
    //   question: "How do I know if blockchain is right for me?",
    //   answer: "Great question! We offer a free 'Blockchain Fundamentals' mini-course that gives you a taste of what blockchain learning involves. You can also book a free consultation with our career advisors to discuss your goals and interests."
    // }
  ];


  
  
  export default function Faqs() {

    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    return (
      <>
       {/* FAQ Section */}
      <section className="relative py-10">
        <Container className='flex flex-col md:flex-row items-start justify-between'>
            <div className="">
             <SectionHeader
             title='FAQs'
            subtitle='Frequently asked questions'
            centered={false}
            />
                <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className=" mt-6"
          >
            <p className="text-gray-900 text-lg mb-8">
              Here are some of the most common things people ask about Blockchain Masters. Still have questions? We're here to help!
            </p>
                
            <Button variant="primary" size="md" link="/" className='hidden! md:block'>Contact Us</Button>
          </motion.div>
            </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="text-black transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <motion.button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full py-5 md:p-8 text-left flex items-center justify-between hover:bg-slate-100/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-lg md:text-2xl font-semibold pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={24} className="text-orange-400" />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="text-gray-900 text-lg leading-relaxed"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
                     <Button variant="primary" size="md" link="/" className='md:hidden block'>Contact Us</Button>
          </div>

      
        </Container>
      </section>
      </>
    )
  }
  