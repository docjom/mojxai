import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  ArrowLeft, 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
  Heart, 
  Lightbulb,
  Shield,
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Rocket,
  Eye,
  Zap
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "MOJXAI was founded with a vision to democratize digital marketing for businesses of all sizes.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      year: "2019",
      title: "First 100 Clients",
      description: "Reached our first major milestone, helping 100+ businesses transform their digital presence.",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded services globally, adapting to the digital-first world during the pandemic.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Innovation Hub",
      description: "Launched our AI-powered marketing tools and data analytics platform.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won multiple industry awards for excellence in digital marketing and client satisfaction.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023-2025",
      title: "Market Leader",
      description: "Became one of the top-rated digital marketing agencies with 1000+ five-star reviews.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of digital trends and continuously evolve our strategies to deliver cutting-edge solutions.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Results-Driven",
      description: "Every strategy we implement is designed to deliver measurable results and tangible ROI for our clients.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust, transparency, and results.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Data-Driven",
      description: "All our decisions are backed by data and analytics, ensuring every move is strategic and purposeful.",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust through ethical business practices.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Excellence",
      description: "We never settle for good enough. Every project receives our full attention to detail and commitment to quality.",
      icon: <Award className="w-8 h-8" />,
      color: "from-teal-500 to-blue-500"
    }
  ];

  const team = [
    {
      name: "Rodrick Batombakal",
      position: "CEO and Founder",
      bio: "10 years of experience in digital growth, branding strategy, and startup leadership.",
      image: "/Team/cute.png",
     specialties: ["Digital Strategy", "Brand Building", "Growth Marketing"]
    },
    {
      name: "Boss Jomz",
      position: "Chief Technology Officer",
      bio: "Full-stack developer and AI specialist, leading our technical innovation and platform development.",
      image: "/Team/boss.jpg",
      specialties: ["AI/ML", "Web Development", "Tech Innovation"]
    },
    {
      name: "Matthew Agnote",
      position: "Head of SEO",
      bio: "SEO expert with 8+ years helping businesses rank #1 on Google and drive organic traffic growth.",
      image: "/Team/ating.png",
      specialties: ["SEO", "Content Strategy", "Analytics"]
    },
    {
      name: "Yumi Ace",
      position: "Creative Director",
      bio: "Award-winning designer with expertise in brand identity, UX/UI design, and visual storytelling.",
      image: "/Team/Yumi Ace.jpg",
      specialties: ["Brand Design", "UX/UI", "Creative Strategy"]
    },
    {
      name: "cocoy delacruz",
      position: "PPC Specialist",
      bio: "Google Ads certified expert managing $10M+ in ad spend with proven track record of high-converting campaigns.",
      image: "/Team/cocoy delacruz.jpg",
      specialties: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      name: "Rayel , Likanz Jr.",
      position: "Content Marketing Lead",
      bio: "Content strategist and storyteller, creating compelling narratives that engage audiences and drive conversions.",
      image: "/Team/Licanz.png",
      specialties: ["Content Strategy", "Copywriting", "Social Media"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "500%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50+", label: "Team Members", icon: <Heart className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
    { number: "15+", label: "Industry Awards", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Client Retention", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center h-16">
              <img 
                src="/mojxai.png" 
                alt="MOJXAI Logo" 
                className="h-36 w-auto object-contain"
              />
            </div>
            <Link 
              to="/" 
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Discover Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              MOJXAI
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We're not just another digital marketing agency. We're your strategic partners in growth, 
            innovation, and digital transformation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-blue-600 flex justify-center mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'mission', label: 'Mission & Vision' },
              { id: 'values', label: 'Our Values' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'team', label: 'Our Team' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Our Story */}
        {activeTab === 'story' && (
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">The Heart Behind MOJXAI</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    Every great brand begins with a single spark—an idea, a passion, a mission. For MOJXAI, that spark ignited with one vision: 
                    to empower businesses of all sizes through strategic, data-driven, and creative digital solutions.
                  </p>
                  <p>
                    We weren't built overnight. What you see today is the product of sleepless nights, countless experiments, relentless learning, 
                    and the unwavering belief that we could make a difference in the digital space.
                  </p>
                  <p>
                    MOJXAI was born out of a simple observation—many businesses struggle to stand out online, not because they lack quality or value, 
                    but because they don't have the tools, the team, or the time to market themselves effectively.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="MOJXAI Team Collaboration" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                    <div className="text-sm font-medium text-gray-900">Innovation Hub</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We Started MOJXAI</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Problem We Saw</h4>
                  <p className="text-gray-600">
                    We witnessed countless talented business owners pouring their hearts into their products and services, 
                    only to struggle with getting their message across in the digital world. Traditional marketing agencies 
                    were either too expensive, too impersonal, or simply didn't understand the unique challenges of modern businesses.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
                  <p className="text-gray-600">
                    We created MOJXAI to bridge that gap—combining cutting-edge technology with human creativity and understanding. 
                    Our approach is personal, data-driven, and results-focused, making professional digital marketing accessible 
                    to businesses of every size and industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mission & Vision */}
        {activeTab === 'mission' && (
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driving the future of digital marketing through innovation, integrity, and results.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To empower businesses worldwide by providing innovative, data-driven digital marketing solutions that 
                  deliver measurable results and sustainable growth. We believe every business deserves access to 
                  world-class marketing expertise, regardless of size or budget.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become the global leader in intelligent digital marketing, where AI meets human creativity to 
                  create campaigns that not only drive results but inspire and connect with audiences on a deeper level. 
                  We envision a future where every business can compete digitally.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Drives Us</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    Constantly evolving and adopting new technologies to stay ahead of the curve.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Passion</h4>
                  <p className="text-gray-600">
                    Genuine care for our clients' success and commitment to exceeding expectations.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600">
                    Measurable outcomes that contribute to real business growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Values */}
        {activeTab === 'values' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-blue-200 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        {activeTab === 'timeline' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to a leading digital marketing agency - here's how we've grown.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      {milestone.icon}
                    </div>
                    <div className="ml-8 bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow group">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {milestone.title}
                        </h3>
                        <span className="text-lg font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Our Team */}
        {activeTab === 'team' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The brilliant minds behind MOJXAI's success. Each team member brings unique expertise and passion to drive your business forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" 
            alt="Join Our Team" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with MOJXAI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our expertise and passion can help transform your digital presence and drive remarkable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                MOJXAI 
              </div>
              <p className="text-gray-400 mb-4">
                Empowering businesses through innovative digital marketing solutions.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Paramus, New Jersey</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/web-design" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link to="/seo" className="hover:text-white transition-colors">SEO</Link></li>
                <li><Link to="/ppc-marketing" className="hover:text-white transition-colors">PPC</Link></li>
                <li><Link to="/email-marketing" className="hover:text-white transition-colors">Email Marketing</Link></li>
                <li><Link to="/social-media" className="hover:text-white transition-colors">Social Media</Link></li>
                <li><Link to="/branding-services" className="hover:text-white transition-colors">Branding</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(+63)9 074933166</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@mojxai.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MOJXAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;