
import { 
  Play, 
  Users, 
  BookOpen, 
  Trophy, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Globe,
  Zap,
  Shield,
  Code,
  TrendingUp,
  Award,
  Target,
  Eye,
  Heart,
  Mail,
  ChevronRight,
  Lightbulb,
  Building,
  GraduationCap,
  DollarSign,
  Rocket,
  UserCheck,
  Clock,
  BarChart,
  Paintbrush,
  Cpu,
  PieChart,
  School,
  CalendarCheck
} from 'lucide-react';


export const stats = [
  { icon: Users, number: 5000, label: "Active Students", suffix: "+" },
  { icon: BookOpen, number: 50, label: "Courses Available", suffix: "+" },
  { icon: Trophy, number: 89, label: "Success Rate", suffix: "%" },
  // { icon: Globe, number: 25, label: "Countries", suffix: "+" }
];

export const programs = [
  {
    icon: Code,
    title: "Blockchain Fundamentals",
    description: "Gain a solid foundation in blockchain, cryptographic security, and decentralized systems through hands-on learning."
  },
  {
    icon: Shield,
    title: "Trading",
    description: "Understand how crypto markets work, and master technical analysis, risk management, and blockchain-based trading tools."
  },
  {
    icon: TrendingUp,
    title: "Artificial Intelligence",
    description: "Discover the intersection of blockchain and artificial intelligence to build smarter decentralized applications (dApps)."
  },
  {
    icon: BarChart,
    title: "Business Development",
    description: "Learn how to launch, scale, and monetize blockchain startups and Web3 ventures through real-world business strategies."
  },
  {
    icon: Building,
    title: "Blockchain Development",
    description: "Master Solidity, smart contracts, and full-stack dApp development using Web3.js, Ethers.js, and industry best practices."
  },
  {
    icon: Award,
    title: "UI & UX Design",
    description: "Design intuitive, user-friendly Web3 apps with a focus on accessibility, usability, and decentralized UX flows."
  }
]

export const events = [
  {
    icon: CalendarCheck,
    title: "Web3 Hackathon",
    description: "Compete with global builders to launch real blockchain projects in just 48 hours using smart contracts and DeFi tools.",
    dialog: true,
    dialogcontent: {
      title: "Web3 Hackathon Challenge",
      description: "Join forces with fellow developers, designers, and founders to build decentralized apps from scratch in just 48 hours. Showcase your skills to mentors and investors while solving real-world problems on the blockchain.",
      buttontext: "Join the Hackathon",
      buttonlink: "/"
    }
  },
  {
    icon: Users,
    title: "Founders in Web3",
    description: "Panel discussions with blockchain startup founders sharing their success stories, challenges, and funding tips.",
    dialog: true,
    dialogcontent: {
      title: "Web3 Founder Panels",
      description: "Hear firsthand from startup founders navigating the Web3 landscape. Learn how they built their teams, secured funding, and scaled their ideas in the decentralized economy.",
      buttontext: "Explore the Sessions",
      buttonlink: "/"
    }
  },
  {
    icon: School,
    title: "Smart Contract Bootcamp",
    description: "An intensive week-long camp focused on Solidity, contract testing, audits, and deployment to Ethereum testnets.",
    dialog: true,
    dialogcontent: {
      title: "Smart Contract Developer Bootcamp",
      description: "Master the fundamentals of Solidity and smart contract development in a focused, hands-on learning environment. Write secure code, test rigorously, and deploy to live testnets.",
      buttontext: "Start Bootcamp",
      buttonlink: "/"
    }
  },
  {
    icon: Cpu,
    title: "Blockchain x AI Showcase",
    description: "Explore cutting-edge projects combining artificial intelligence with decentralized apps and smart contracts.",
    dialog: true,
    dialogcontent: {
      title: "AI + Blockchain Innovation Showcase",
      description: "Discover how artificial intelligence enhances decentralized applications. Explore projects that integrate AI with smart contracts, oracles, and automated governance.",
      buttontext: "View Showcase",
      buttonlink: "/"    
    }
  },
  {
    icon: Paintbrush,
    title: "Web3 UI/UX Sprint",
    description: "Collaborate with designers and developers to build and test seamless Web3 interfaces in a fast-paced design sprint.",
    dialog: true,
    dialogcontent: {
      title: "Web3 Design Sprint",
      description: "Jump into a fast-paced sprint focused on building clean, accessible, and intuitive dApp interfaces. Collaborate with UX experts to reimagine Web3 usability.",
      buttontext: "Join the Sprint",
      buttonlink: "/"
       }
  },
  {
    icon: Rocket,
    title: "Certification Ceremony",
    description: "Celebrate the completion of your blockchain program and receive blockchain-verified certificates to boost your Web3 career.",
    dialog: true,
    dialogcontent: {
      title: "Graduation & Certification Ceremony",
      description: "Celebrate your journey and achievements with fellow graduates. Receive blockchain-verified credentials that showcase your skills to global employers and networks.",
      buttontext: "View Details",
      buttonlink: "/"
    }
  }
]


export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Blockchain Developer at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b14a3c18?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "The bootcamp transformed my career. I went from knowing nothing about blockchain to landing a developer role in just 3 months!"
  },
  {
    name: "Michael Chen",
    role: "DeFi Protocol Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "The practical approach and real-world projects gave me the confidence to launch my own DeFi protocol."
  },
  {
    name: "Emma Rodriguez",
    role: "Smart Contract Auditor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    testimonial: "The security-focused curriculum was exactly what I needed. Now I'm working as a professional smart contract auditor."
  }
];



export const whyJoinReasons = [
  {
    icon: Lightbulb,
    title: "Clarity Over Complexity",
    description: "We simplify blockchain concepts, making them accessible to everyone regardless of technical background."
  },
  {
    icon: Users,
    title: "Community-First Approach",
    description: "Join a thriving community of learners, mentors, and industry professionals supporting each other."
  },
  {
    icon: Target,
    title: "Real-World Relevance",
    description: "Learn practical skills that are immediately applicable in the blockchain industry."
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We practice what we teach, embodying the core principles of Web3 and blockchain."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Our programs are designed to help you build a successful career in the blockchain space."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with our flexible online and offline learning options."
  }
];

export const blogPosts = [
  {
    title: "Getting Started with Blockchain Development",
    excerpt: "A beginner's guide to understanding blockchain technology and starting your development journey.",
    date: "Jan 15, 2024",
    author: "Dr. Alex Thompson",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
    readTime: 8
  },
  {
    title: "The Future of DeFi: Trends to Watch",
    excerpt: "Exploring the latest developments in decentralized finance and what they mean for the future.",
    date: "Jan 12, 2024",
    author: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
    readTime: 6
  },
  {
    title: "Smart Contract Security Best Practices",
    excerpt: "Essential security considerations when developing and deploying smart contracts.",
    date: "Jan 10, 2024",
    author: "Michael Zhang",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
    readTime: 10
  }
];