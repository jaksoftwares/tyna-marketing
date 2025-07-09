'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Target, 
  Zap, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  TrendingUp,
  Palette,
  BarChart3,
  MessageCircle,
  Calendar,
  Eye,
  Heart,
  Quote,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  ThumbsUp,
  Clock,
  User,
  ExternalLink,
  Play,
  Pause
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentProjectImage, setCurrentProjectImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
      title: "Social Media Management",
      description: "Complete social media strategy and management across multiple platforms"
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Creative Design",
      description: "Eye-catching logos, flyers, posters, and brochures for your brand"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />,
      title: "Paid Advertising",
      description: "Strategic paid ads campaigns to reach your target audience"
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />,
      title: "Analytics & Reporting",
      description: "Monthly analytics and reporting to track your growth"
    }
  ];

  const socialMediaPlans = [
    {
      name: "Basic Plan",
      subtitle: "Perfect for small businesses looking to grow online",
      price: "Ksh 15,000",
      usdPrice: "$116.00",
      popular: false,
      features: [
        "Social Media Strategy",
        "Social Media Account creation & Optimization",
        "2 Social Media Platforms",
        "30 Posts Per Month",
        "4 Sponsored post/Ads",
        "Page Monitoring and Responding",
        "Monthly Analytics and Reporting"
      ]
    },
    {
      name: "Standard Plan",
      subtitle: "Mid-Large Business with Several target Location",
      price: "Ksh 30,000",
      usdPrice: "$232.00",
      popular: true,
      features: [
        "Social Media Strategy",
        "Social Media Account creation & Optimization",
        "4 Social Media Platforms",
        "40 Posts Per Month",
        "8 Sponsored post/Ads",
        "Page Monitoring and Responding",
        "Monthly Analytics and Reporting"
      ]
    },
    {
      name: "Premium Plan",
      subtitle: "Enterprise Level Businesses",
      price: "Ksh 60,000",
      usdPrice: "$465.00",
      popular: false,
      features: [
        "Social Media Strategy",
        "Social Media Account creation & Optimization",
        "6 Social Media Platforms",
        "50 Posts Per Month",
        "Unlimited Sponsored post/Ads",
        "Page Monitoring and Responding",
        "Monthly Analytics and Reporting"
      ]
    }
  ];

  const brandingServices = [
    {
      title: "Logo Design",
      price: "Ksh 2,500 - Ksh 7,000",
      usdPrice: "$20-$55",
      unit: "Per 1 Logo",
      description: "Based on Complexity"
    },
    {
      title: "Flyer/Poster Design",
      price: "Ksh 1,500",
      usdPrice: "$12.00",
      unit: "per Flyer / Poster",
      description: "Professional design for marketing materials"
    },
    {
      title: "Brochure Design",
      price: "Ksh 1,500 - Ksh 4,000",
      usdPrice: "$12-$30",
      unit: "per Brochure",
      description: "Price vary based on the number of folds/pages i.e Bi-fold, Trifold, 8 pages"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Bloom Bakery",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Tyna Marketing transformed our online presence completely. Our social media engagement increased by 300% in just 3 months!",
      results: "300% increase in engagement"
    },
    {
      name: "Michael Chen",
      business: "Tech Solutions Ltd",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The team at Tyna Marketing is incredibly professional. They delivered exactly what we needed and more. Highly recommend!",
      results: "250% ROI improvement"
    },
    {
      name: "Emily Rodriguez",
      business: "Fashion Forward",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Our brand identity was completely reimagined by Tyna Marketing. The logo and marketing materials are absolutely stunning.",
      results: "Complete brand transformation"
    },
    {
      name: "David Wilson",
      business: "Fitness Pro Gym",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Outstanding results! Our membership increased by 150% after implementing their social media strategy.",
      results: "150% membership growth"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Restaurant Social Media Campaign",
      category: "Social Media Management",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Increased engagement by 250% for a local restaurant",
      client: "Savory Delights Restaurant",
      duration: "6 months",
      services: ["Social Media Strategy", "Content Creation", "Paid Advertising"],
      results: [
        "250% increase in social media engagement",
        "180% growth in online orders",
        "45% increase in foot traffic",
        "300+ new followers per month"
      ],
      images: [
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      challenge: "The restaurant was struggling with low online visibility and declining customer engagement on social media platforms.",
      solution: "We developed a comprehensive social media strategy focusing on mouth-watering food photography, engaging stories, and targeted advertising to local food enthusiasts."
    },
    {
      id: 2,
      title: "Tech Startup Branding",
      category: "Brand Design",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete brand identity design for a tech startup",
      client: "InnovateTech Solutions",
      duration: "3 months",
      services: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
      results: [
        "Professional brand identity established",
        "40% increase in client inquiries",
        "Enhanced market credibility",
        "Consistent brand presence across all platforms"
      ],
      images: [
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      challenge: "A new tech startup needed a complete brand identity to establish credibility in a competitive market.",
      solution: "We created a modern, professional brand identity that reflects innovation and trustworthiness, including logo, color palette, and comprehensive brand guidelines."
    },
    {
      id: 3,
      title: "E-commerce Ad Campaign",
      category: "Paid Advertising",
      image: "https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Generated 400% ROI through targeted advertising",
      client: "StyleHub Fashion",
      duration: "4 months",
      services: ["Facebook Ads", "Instagram Ads", "Google Ads"],
      results: [
        "400% return on ad spend",
        "65% increase in online sales",
        "50% reduction in cost per acquisition",
        "200% growth in website traffic"
      ],
      images: [
        "https://images.pexels.com/photos/1449844/pexels-photo-1449844.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      challenge: "An e-commerce fashion brand was struggling with low conversion rates and high advertising costs.",
      solution: "We implemented a data-driven advertising strategy with precise audience targeting, compelling ad creatives, and continuous optimization to maximize ROI."
    },
    {
      id: 4,
      title: "Healthcare Marketing",
      category: "Content Creation",
      image: "https://images.pexels.com/photos/3662865/pexels-photo-3662865.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional content creation for healthcare provider",
      client: "WellCare Medical Center",
      duration: "8 months",
      services: ["Content Strategy", "Medical Content Writing", "Social Media Management"],
      results: [
        "85% increase in patient inquiries",
        "300% growth in social media following",
        "Improved patient education engagement",
        "Enhanced online reputation"
      ],
      images: [
        "https://images.pexels.com/photos/3662865/pexels-photo-3662865.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      challenge: "A healthcare provider needed to improve patient engagement and establish thought leadership in their field.",
      solution: "We created educational, trustworthy content that positioned the medical center as a reliable healthcare authority while maintaining compliance with medical advertising regulations."
    },
    {
      id: 5,
      title: "Local Business Growth",
      category: "Integrated Marketing",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive marketing strategy for local business expansion",
      client: "Green Thumb Landscaping",
      duration: "12 months",
      services: ["Social Media", "Local SEO", "Print Design", "Advertising"],
      results: [
        "500% increase in local inquiries",
        "300% growth in service bookings",
        "Expanded to 3 new service areas",
        "Established market leadership position"
      ],
      images: [
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      challenge: "A local landscaping business wanted to expand their service area and increase their market share.",
      solution: "We implemented an integrated marketing approach combining digital presence, local SEO optimization, and traditional marketing materials to drive comprehensive business growth."
    },
    {
      id: 6,
      title: "Nonprofit Awareness Campaign",
      category: "Social Impact Marketing",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Increased community engagement and donations for nonprofit organization",
      client: "Hope Foundation Kenya",
      duration: "6 months",
      services: ["Campaign Strategy", "Content Creation", "Community Management"],
      results: [
        "400% increase in donations",
        "1000+ new volunteers recruited",
        "50% growth in community awareness",
        "Successful fundraising events"
      ],
      images: [
        "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6647003/pexels-photo-6647003.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      challenge: "A nonprofit organization needed to increase community awareness and boost fundraising efforts for their social programs.",
      solution: "We created an emotionally compelling campaign that highlighted the organization's impact, making it easy for the community to connect with and support their cause."
    }
  ];

  const stats = [
    { number: "150+", label: "Happy Clients", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { number: "24/7", label: "Support Available", icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Social Media Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with these emerging social media trends that will shape digital marketing this year.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "Sarah Mitchell",
      authorImage: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Social Media",
      likes: 124,
      shares: 45,
      content: `
        <p>The social media landscape is constantly evolving, and 2024 promises to bring exciting new trends that will reshape how businesses connect with their audiences. As we navigate this dynamic digital environment, staying ahead of these trends is crucial for maintaining a competitive edge.</p>
        
        <h3>1. AI-Powered Content Creation</h3>
        <p>Artificial intelligence is revolutionizing content creation, enabling businesses to produce personalized, engaging content at scale. From automated video editing to AI-generated captions, this technology is making content creation more efficient and effective.</p>
        
        <h3>2. Short-Form Video Dominance</h3>
        <p>Short-form videos continue to dominate social media platforms. With attention spans decreasing, businesses must master the art of conveying their message in 15-60 second clips that capture and retain audience attention.</p>
        
        <h3>3. Social Commerce Integration</h3>
        <p>The line between social media and e-commerce continues to blur. Platforms are introducing more sophisticated shopping features, making it easier for businesses to sell directly through social media posts and stories.</p>
        
        <h3>4. Authentic Storytelling</h3>
        <p>Consumers are craving authenticity more than ever. Brands that share genuine stories, showcase behind-the-scenes content, and highlight real customer experiences will build stronger connections with their audience.</p>
        
        <h3>5. Community Building Focus</h3>
        <p>Building engaged communities around your brand is becoming more important than simply accumulating followers. Businesses are investing in creating spaces where customers can connect, share experiences, and support each other.</p>
        
        <p>These trends represent just the beginning of what's possible in 2024. By embracing these changes and adapting your strategy accordingly, your business can thrive in the evolving social media landscape.</p>
      `
    },
    {
      id: 2,
      title: "How to Create Engaging Content for Small Businesses",
      excerpt: "Learn proven strategies to create content that resonates with your audience and drives meaningful engagement.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 10, 2024",
      readTime: "7 min read",
      author: "Michael Johnson",
      authorImage: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Content Marketing",
      likes: 89,
      shares: 32,
      content: `
        <p>Creating engaging content is the cornerstone of successful social media marketing for small businesses. With limited resources and budget, it's essential to maximize the impact of every piece of content you create.</p>
        
        <h3>Understanding Your Audience</h3>
        <p>Before creating any content, you must deeply understand your target audience. Research their demographics, interests, pain points, and preferred communication styles. This knowledge forms the foundation of all your content decisions.</p>
        
        <h3>Content Planning and Strategy</h3>
        <p>Develop a content calendar that aligns with your business goals and audience preferences. Plan a mix of educational, entertaining, and promotional content to keep your audience engaged without being overly sales-focused.</p>
        
        <h3>Visual Storytelling</h3>
        <p>Humans are visual creatures, and compelling visuals can significantly increase engagement rates. Invest in high-quality images, graphics, and videos that tell your brand's story effectively.</p>
        
        <h3>Consistency is Key</h3>
        <p>Maintain a consistent posting schedule and brand voice across all platforms. Consistency builds trust and keeps your audience coming back for more content.</p>
        
        <h3>Encourage Interaction</h3>
        <p>Create content that invites responses, questions, and discussions. Ask questions, run polls, and encourage user-generated content to foster a sense of community around your brand.</p>
        
        <h3>Measure and Optimize</h3>
        <p>Track your content performance using analytics tools. Identify what works best for your audience and continuously refine your strategy based on data-driven insights.</p>
        
        <p>Remember, engaging content is not about perfection—it's about connection. Focus on creating authentic, valuable content that serves your audience's needs and interests.</p>
      `
    },
    {
      id: 3,
      title: "The Complete Guide to Social Media Analytics",
      excerpt: "Understanding your social media metrics is crucial for growth. Here's everything you need to know.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "March 5, 2024",
      readTime: "6 min read",
      author: "Emily Rodriguez",
      authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Analytics",
      likes: 156,
      shares: 67,
      content: `
        <p>Social media analytics provide invaluable insights into your audience behavior, content performance, and overall marketing effectiveness. Understanding these metrics is essential for making data-driven decisions that drive business growth.</p>
        
        <h3>Key Metrics to Track</h3>
        <p>Focus on metrics that align with your business objectives. These include reach, engagement rate, click-through rate, conversion rate, and return on investment (ROI). Each metric tells a different part of your social media story.</p>
        
        <h3>Platform-Specific Analytics</h3>
        <p>Each social media platform offers unique analytics tools and metrics. Facebook Insights, Instagram Analytics, Twitter Analytics, and LinkedIn Analytics each provide platform-specific data that can inform your strategy.</p>
        
        <h3>Setting Up Tracking</h3>
        <p>Implement proper tracking mechanisms from the start. Use UTM parameters, conversion pixels, and analytics tools to ensure you're capturing all relevant data about your social media performance.</p>
        
        <h3>Analyzing Audience Insights</h3>
        <p>Dive deep into audience demographics, interests, and behavior patterns. This information helps you create more targeted content and optimize your posting schedule for maximum engagement.</p>
        
        <h3>Content Performance Analysis</h3>
        <p>Identify your top-performing content types, formats, and topics. Use this information to create more of what resonates with your audience and less of what doesn't perform well.</p>
        
        <h3>Competitive Analysis</h3>
        <p>Monitor your competitors' social media performance to identify opportunities and benchmark your own results. Look for gaps in their strategy that you can capitalize on.</p>
        
        <h3>Reporting and Action</h3>
        <p>Create regular reports that translate data into actionable insights. Share these findings with your team and use them to continuously improve your social media strategy.</p>
        
        <p>Remember, analytics are only valuable if you act on the insights they provide. Use data to inform your decisions, but don't let it paralyze your creativity and experimentation.</p>
      `
    },
    {
      id: 4,
      title: "Building Brand Authority Through Content Marketing",
      excerpt: "Discover how consistent, valuable content can establish your business as an industry leader.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 28, 2024",
      readTime: "8 min read",
      author: "David Chen",
      authorImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Brand Building",
      likes: 203,
      shares: 89,
      content: `
        <p>Building brand authority is a long-term strategy that requires consistent effort, valuable content, and genuine expertise. When done correctly, it positions your business as a trusted leader in your industry.</p>
        
        <h3>What is Brand Authority?</h3>
        <p>Brand authority is the level of trust and credibility your business has within your industry. It's built through consistent demonstration of expertise, reliability, and value to your audience.</p>
        
        <h3>Content as the Foundation</h3>
        <p>High-quality, informative content is the cornerstone of brand authority. Share insights, tips, industry analysis, and thought leadership pieces that demonstrate your expertise and provide genuine value to your audience.</p>
        
        <h3>Consistency Builds Trust</h3>
        <p>Regular content publication shows commitment and reliability. Develop a content schedule that you can maintain long-term, focusing on quality over quantity.</p>
        
        <h3>Engage with Your Community</h3>
        <p>Authority isn't just about broadcasting—it's about engaging in meaningful conversations with your audience. Respond to comments, participate in industry discussions, and show genuine interest in your community's needs.</p>
        
        <h3>Collaborate with Other Experts</h3>
        <p>Partner with other industry leaders for content collaborations, interviews, and joint ventures. These relationships can expand your reach and reinforce your credibility.</p>
        
        <h3>Share Behind-the-Scenes Content</h3>
        <p>Transparency builds trust. Share your process, challenges, and lessons learned. This humanizes your brand and makes your expertise more relatable.</p>
        
        <h3>Measure Authority Growth</h3>
        <p>Track metrics like brand mentions, share of voice, backlinks, and engagement quality to measure your growing authority in the industry.</p>
        
        <p>Building brand authority takes time, but the investment pays dividends in customer trust, loyalty, and business growth. Stay committed to providing value, and authority will follow naturally.</p>
      `
    },
    {
      id: 5,
      title: "The Psychology of Social Media Engagement",
      excerpt: "Understanding the psychological triggers that drive social media engagement can transform your content strategy.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 22, 2024",
      readTime: "6 min read",
      author: "Lisa Thompson",
      authorImage: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "Psychology",
      likes: 178,
      shares: 54,
      content: `
        <p>Understanding the psychological principles behind social media engagement can dramatically improve your content's effectiveness. By tapping into fundamental human motivations, you can create content that naturally resonates with your audience.</p>
        
        <h3>The Need for Social Validation</h3>
        <p>Humans have an innate need for social approval and validation. Content that allows people to express their identity, values, or achievements tends to generate higher engagement because it fulfills this psychological need.</p>
        
        <h3>Fear of Missing Out (FOMO)</h3>
        <p>FOMO is a powerful motivator in social media behavior. Limited-time offers, exclusive content, and trending topics tap into this fear and encourage immediate engagement and sharing.</p>
        
        <h3>The Power of Storytelling</h3>
        <p>Our brains are wired to respond to stories. Narrative content that includes conflict, resolution, and emotional elements engages multiple areas of the brain and creates memorable experiences.</p>
        
        <h3>Reciprocity Principle</h3>
        <p>When you provide value first—through helpful tips, entertainment, or insights—people feel compelled to reciprocate through likes, shares, and comments. This principle is fundamental to building engaged communities.</p>
        
        <h3>Social Proof and Bandwagon Effect</h3>
        <p>People are more likely to engage with content that others have already engaged with. High engagement signals quality and relevance, creating a snowball effect of further engagement.</p>
        
        <h3>Emotional Triggers</h3>
        <p>Content that evokes strong emotions—whether joy, surprise, anger, or inspiration—is more likely to be shared and remembered. Emotional content creates deeper connections with your audience.</p>
        
        <h3>The Curiosity Gap</h3>
        <p>Headlines and content that create a knowledge gap—telling people just enough to make them curious but not everything—drive clicks and engagement as people seek to fill that gap.</p>
        
        <p>By understanding these psychological principles, you can create more engaging content that not only captures attention but also builds meaningful connections with your audience.</p>
      `
    },
    {
      id: 6,
      title: "ROI-Driven Social Media Strategies for Small Businesses",
      excerpt: "Learn how to measure and maximize the return on investment from your social media marketing efforts.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "February 18, 2024",
      readTime: "9 min read",
      author: "Robert Martinez",
      authorImage: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100",
      category: "ROI & Strategy",
      likes: 234,
      shares: 98,
      content: `
        <p>For small businesses with limited marketing budgets, every dollar spent on social media marketing must deliver measurable results. This guide will help you develop ROI-driven strategies that maximize your return on investment.</p>
        
        <h3>Defining ROI in Social Media</h3>
        <p>Social media ROI goes beyond direct sales. It includes brand awareness, customer acquisition cost reduction, customer lifetime value increase, and customer service cost savings. Define what success looks like for your specific business goals.</p>
        
        <h3>Setting SMART Goals</h3>
        <p>Establish Specific, Measurable, Achievable, Relevant, and Time-bound goals for your social media efforts. Whether it's increasing website traffic by 30% or generating 50 new leads per month, clear goals enable accurate ROI measurement.</p>
        
        <h3>Tracking the Right Metrics</h3>
        <p>Focus on metrics that directly correlate with business outcomes. Track conversion rates, cost per acquisition, customer lifetime value, and revenue attribution from social media channels.</p>
        
        <h3>Budget Allocation Strategy</h3>
        <p>Allocate your budget based on platform performance and audience behavior. Invest more in channels that deliver the highest ROI while testing new platforms with smaller budget allocations.</p>
        
        <h3>Content ROI Optimization</h3>
        <p>Analyze which content types, formats, and topics generate the highest engagement and conversions. Double down on high-performing content while eliminating or improving underperforming content.</p>
        
        <h3>Automation and Efficiency</h3>
        <p>Use social media management tools to automate routine tasks, schedule posts, and streamline workflows. This reduces time investment while maintaining consistent presence and engagement.</p>
        
        <h3>Customer Journey Mapping</h3>
        <p>Understand how social media fits into your customer's journey from awareness to purchase. Optimize content for each stage to guide prospects through the funnel more effectively.</p>
        
        <h3>Regular ROI Assessment</h3>
        <p>Conduct monthly ROI assessments to identify trends, opportunities, and areas for improvement. Use these insights to continuously refine your strategy and improve performance.</p>
        
        <p>Remember, ROI-driven social media marketing is about making informed decisions based on data, not gut feelings. Stay focused on metrics that matter to your business bottom line.</p>
      `
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextProjectImage = () => {
    if (selectedProject) {
      setCurrentProjectImage((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevProjectImage = () => {
    if (selectedProject) {
      setCurrentProjectImage((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentProjectImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const openBlog = (blog: any) => {
    setSelectedBlog(blog);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">Tyna Marketing</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
                {['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-3 text-base font-medium w-full text-left transition-colors ${
                    activeSection === item
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                We Empower Small Businesses to <span className="text-yellow-300">Succeed</span> Through Social Media Marketing
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-purple-100">
                At Tyna Marketing, we handle your social media, create eye-catching designs, run paid ads, and make content that gets your business noticed hence driving growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-sm sm:text-base px-6 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-600 text-sm sm:text-base px-6 py-3"
                  onClick={() => scrollToSection('services')}
                >
                  View Our Services
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2 sm:mb-3 text-yellow-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-purple-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of the things that help your business grow online. You focus on your business, we'll handle the marketing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md p-4 sm:p-6">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Tyna Marketing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We are a Social Media marketing agency that provides tailored solutions for small businesses to strengthen their online presence and reach more customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 border-0 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To provide small businesses with effective, affordable, and innovative digital marketing solutions that enhance their online presence and drive growth.
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6 border-0 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To become a leading provider of digital marketing solutions for small businesses, focused on brand development, customer engagement, and measurable growth.
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6 border-0 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Our Goal</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                To make digital marketing easy and effective for small businesses by offering creative, affordable, and result-driven solutions that help them grow and succeed online.
              </p>
            </Card>

            <Card className="text-center p-4 sm:p-6 border-0 shadow-lg">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We are driven by creativity, authenticity, and excellence. We believe in crafting original content that reflects each brand's voice while delivering real results.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our commitment to your success.
            </p>
          </div>

          <Tabs defaultValue="social-media" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 sm:mb-12 max-w-md mx-auto">
              <TabsTrigger value="social-media" className="text-xs sm:text-sm">Social Media Management</TabsTrigger>
              <TabsTrigger value="branding" className="text-xs sm:text-sm">Branding Services</TabsTrigger>
            </TabsList>

            <TabsContent value="social-media">
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {socialMediaPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.popular ? 'border-purple-500 shadow-xl' : 'border-gray-200'}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-600 text-white text-xs">RECOMMENDED</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center p-4 sm:p-6">
                      <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">{plan.subtitle}</CardDescription>
                      <div className="pt-4">
                        <span className="text-2xl sm:text-4xl font-bold text-purple-600">{plan.price}</span>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1">or {plan.usdPrice}</div>
                        <div className="text-xs sm:text-sm text-gray-500">per month</div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full mt-6" 
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => scrollToSection('contact')}
                      >
                        Book a Discovery Call
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="branding">
              <div className="mb-6 sm:mb-8">
                <Card className="p-4 sm:p-6 bg-blue-50 border-blue-200">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Social Media Branding Services</h3>
                  <p className="text-blue-700 text-sm sm:text-base">
                    This package helps businesses establish a strong, consistent, and professional brand identity across digital platforms. Whether you're launching a new brand or refreshing an existing one, we design visual tools that speak your brand's voice and attract your ideal audience.
                  </p>
                </Card>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {brandingServices.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                      <div className="pt-4">
                        <span className="text-2xl sm:text-3xl font-bold text-purple-600">{service.price}</span>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1">or {service.usdPrice}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{service.unit}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <p className="text-gray-600 mb-6 text-sm sm:text-base">{service.description}</p>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => scrollToSection('contact')}
                      >
                        Book a Discovery Call
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects and the results we've achieved for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => openProject(item)}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 text-xs">
                    {item.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Click to view details</p>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow p-6 sm:p-8">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-sm sm:text-base">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex items-center justify-center mb-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonials[currentTestimonial].business}</p>
                    <p className="text-xs text-purple-600 font-medium">{testimonials[currentTestimonial].results}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="p-2"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="p-2"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2"
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in digital marketing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                onClick={() => openBlog(post)}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <Heart className="w-3 h-3 mr-1" />
                      {post.likes}
                      <Share2 className="w-3 h-3 ml-3 mr-1" />
                      {post.shares}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs p-2">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your marketing goals. Book a discovery call today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+254 (0) 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">hello@tynamarketing.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Nairobi, Kenya</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-purple-600">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-purple-600">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-purple-600">
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-purple-600">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Business Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                      placeholder="Your Business Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base resize-none"
                      placeholder="Tell us about your marketing goals..."
                    />
                  </div>
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold py-2 sm:py-3">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="ml-2 text-lg sm:text-xl font-bold">Tyna Marketing</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Empowering small businesses through innovative social media marketing solutions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white">Social Media Management</a></li>
                <li><a href="#" className="hover:text-white">Brand Design</a></li>
                <li><a href="#" className="hover:text-white">Paid Advertising</a></li>
                <li><a href="#" className="hover:text-white">Content Creation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 Tyna Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">{selectedProject.title}</h2>
              <Button variant="ghost" size="sm" onClick={closeProject}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-4 sm:p-6">
              {/* Image Gallery */}
              <div className="relative mb-6">
                <img 
                  src={selectedProject.images[currentProjectImage]} 
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80"
                      onClick={prevProjectImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80"
                      onClick={nextProjectImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentProjectImage(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentProjectImage ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Client:</span> {selectedProject.client}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {selectedProject.duration}
                    </div>
                    <div>
                      <span className="font-medium">Category:</span> {selectedProject.category}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mt-6 mb-3">Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result: string, index: number) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{selectedProject.challenge}</p>
                
                <h3 className="text-lg font-semibold mb-3">Solution</h3>
                <p className="text-gray-600 text-sm sm:text-base">{selectedProject.solution}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('contact')} className="flex-1">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="flex-1">
                  View More Projects
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="text-xs">{selectedBlog.category}</Badge>
                <span className="text-sm text-gray-500">{selectedBlog.readTime}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={closeBlog}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-4 sm:p-6">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
              />
              
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">{selectedBlog.title}</h1>
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center">
                  <img 
                    src={selectedBlog.authorImage} 
                    alt={selectedBlog.author}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-sm">{selectedBlog.author}</p>
                    <p className="text-xs text-gray-500">{selectedBlog.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {selectedBlog.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Share2 className="w-4 h-4 mr-1" />
                    {selectedBlog.shares}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div 
                className="prose prose-sm sm:prose max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />
              
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => scrollToSection('contact')} className="flex-1">
                    Get Marketing Help
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Read More Articles
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}