import { Container, SectionHeader } from '@/components/section'
import { Cloud, Compass, HandCoins, HandMetal, PenBox } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/button';

export default function Partner() {

    const reasons =[
        {
            icon: HandCoins,
            text: "Access to trained talents in blockchain, crypto, and emerging tech"
        },
        {
            icon: Cloud,
            text: "Brand visibility across Africa’s growing Web3 ecosystem"
        },
        {
            icon: HandMetal,
            text: "Direct community impact and social responsibility"
        },
        {
            icon: Compass,
            text: "Opportunities to co-host events, bootcamps, and innovation labs"
        },
        {
            icon: PenBox,
            text: "Recognition and exposure via all our digital platforms"
        }
    ]

   const partnershipCategories = [
  {
    title: "Skill Empowerment Partner",
    description: "Join us in equipping learners with in-demand blockchain and tech skills. You can:",
    list: [
      "Sponsor hands-on training programs (online/offline)",
      "Provide learning resources, mentorship, or certification access",
      "Support student access to paid tools or platforms."
    ]
  },
  {
    title: "Tech Infrastructure Partner",
    description: "Help us build a strong digital learning environment. You can:",
    list: [
      "Donate laptops, tablets, smart devices",
      "Support with internet/data costs",
      "Provide power solutions (solar kits, backup systems)"
    ]
  },
  {
    title: "Curriculum & Knowledge Partner",
    description: "Collaborate with us to create or enhance training content in:",
    list: [
      "Blockchain Development",
      "Smart Contracts",
      "DeFi/CeFi",
      "Web3 Product Design",
      "Crypto Security",
      "Community Management",
      "NFTs, DAOs, Tokenomics, and more."
    ]
  },
  {
    title: "Internship & Job Placement Partner",
    description: "Give our learners real-world experience and income opportunities. You can:",
    list: [
      "Offer internships or remote jobs",
      "Hire certified students",
      "Feature your brand at our job placement fairs"
    ]
  },
  {
    title: "Startup Incubation Partner",
    description: "Support rising talents who want to build real Web3 solutions. You can:",
    list: [
      "Offer seed grants or project funding",
      "Provide mentorship and accelerator support",
      "Sponsor pitch challenges and hackathons"
    ]
  },
  {
    title: "Media & Promotional Partner",
    description: "Help us tell our story and amplify student success. You can:",
    list: [
      "Feature us on your podcast, blog, TV, or radio",
      "Support media campaigns and visibility drives",
      "Boost reach through influencer partnerships"
    ]
  },
  {
    title: "Local Community Partner",
    description: "We are amplifying learning across Africa and beyond. You can:",
    list: [
      "Provide local event venues",
      "Help promote and mobilize youth in your jurisdiction",
      "Organize meetups, bootcamps, or demo days"
    ]
  },
  {
    title: "Blockchain Project Partner",
    description: "Are you building on Web3? Let’s collaborate. You can:",
    list: [
      "Educate students on your platform",
      "Sponsor ecosystem challenges",
      "Guide hands-on learning through your tools"
    ]
  },
  {
    title: "Government & Institutional Partner",
    description: "Work with us to create sustainable impact. You can:",
    list: [
      "Support youth-focused blockchain training",
      "Co-design policy-aligned innovation programs",
      "Scale tech awareness through ministries, agencies, or schools"
    ]
  },
  {
    title: "Funding & Grant Partner",
    description: "Your sponsorship can transform lives. You can:",
    list: [
      "Fund full/partial scholarships",
      "Support gender-based learning (e.g., Women in Blockchain)",
      "Contribute to outreach in rural communities"
    ]
  }
];

  return (
   <>
   
   <section className='py-10 space-y-10 xl:space-y-20'>
    <Container>
        <div className="flex flex-col md:flex-row items-center justify-between">
        <SectionHeader
        title='Become a Partner'
        subtitle="Let's shape the future of blockchain together"
        centered={false}
        className="max-w-lg"
        />
        <p className='max-w-lg'>
        At Blockchain Masters Academy, we believe that collaboration is key to accelerating Web3 education, adoption, and innovation across Africa. By becoming a Partner, You join us on our simple mission to onboard, train, and empower the next generation of blockchain professionals, creators, and builders especially from underserved communities.
        </p>
        </div>
    </Container>

    <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1">
                <Image src="/blackamerican.jpg" alt='' width={600} height={600}/>
            </div>
            <div className="max-w-lg flex flex-col justify-center gap-y-5 my-10 xl:my-20">
                <SectionHeader
                title='Why Partner With Us'
                centered={false}
                className=""
                />
                {reasons.map((item, index) => (
                    <div key={index} className='flex items-center gap-5'>
                        <div className="p-2 rounded-full bg-orange-500 hover:bg-orange-600">
                            <item.icon className='w-5 h-5 text-white'/>
                        </div>
                        <p className='max-w-lg text-base lg:text-lg'>{item.text}</p>
                    </div>
                ))}

            </div>
        </div>
    </Container>

    <Container>
        <div className="">
            <SectionHeader
            title='Partnership Categories'
            centered
            className="text-2xl! my-10"
            />

     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {partnershipCategories.map((partner, i) => (
        <Dialog key={i}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-lg transition duration-200">
              <CardHeader>
                <CardTitle>{partner.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{partner.description}</p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="font-bold text-xl mb-2">{partner.title}</DialogTitle>
            <p className="mb-4">{partner.description}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {partner.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </DialogContent>
           </Dialog>
      ))}
    </div>
        </div>

        
    </Container>

    <Container>
      <div className="w-full mx-auto my-10 space-y-5 text-center">
            <h1 className='text-3xl lg:text-5xl font-bold'>Build the <span className='text-orange-500 font-semibold'>Future </span>Together</h1>
            <p className='text-xl font-semibold'>Let us shape the future of Blockchain in Africa.</p>
            <Button variant='primary' size='md' link='https://forms.gle/VLBkpqvrGgZd7hKZ7' target='_blank'>Become a Partner</Button>
        </div>
    </Container>
   </section>

   </>
  )
}
