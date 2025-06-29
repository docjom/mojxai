import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Eye, 
  Heart, 
  Share2, 
  Target, 
  Calendar, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Play, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';

const SocialMediaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8" />,
      users: '2.9B+',
      description: 'Build community and drive engagement with targeted Facebook marketing campaigns.',
      features: ['Business Pages', 'Facebook Ads', 'Community Building', 'Event Promotion'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      users: '2B+',
      description: 'Showcase your brand visually with stunning Instagram content and Stories.',
      features: ['Visual Storytelling', 'Instagram Ads', 'Influencer Partnerships', 'Shopping Integration'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8" />,
      users: '900M+',
      description: 'Connect with professionals and establish thought leadership in your industry.',
      features: ['B2B Marketing', 'Professional Networking', 'Content Marketing', 'Lead Generation'],
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: ' X/Twitter',
      icon: <Twitter className="w-8 h-8" />,
      users: '450M+',
      description: 'Engage in real-time conversations and build brand awareness through trending topics.',
      features: ['Real-time Engagement', 'Trending Topics', 'Customer Service', 'Brand Voice'],
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8" />,
      users: '2.7B+',
      description: 'Create compelling video content that educates, entertains, and converts viewers.',
      features: ['Video Marketing', 'YouTube Ads', 'Channel Optimization', 'Live Streaming'],
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'TikTok',
      icon: <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">TT</div>,
      users: '1B+',
      description: 'Reach younger audiences with creative, viral-worthy short-form video content.',
      features: ['Viral Content', 'Trending Challenges', 'Influencer Marketing', 'Creative Campaigns'],
      color: 'from-black to-gray-800'
    }
  ];

  const services = [
    {
      title: 'Social Media Strategy',
      description: 'Comprehensive strategic planning tailored to your business goals and target audience.',
      icon: <Target className="w-12 h-12" />,
      features: [
        'Competitive Analysis',
        'Audience Research',
        'Content Strategy',
        'Platform Selection',
        'KPI Definition',
        'Campaign Planning'
      ]
    },
    {
      title: 'Content Creation',
      description: 'Professional content creation that captures attention and drives engagement.',
      icon: <MessageCircle className="w-12 h-12" />,
      features: [
        'Graphic Design',
        'Video Production',
        'Copywriting',
        'Photography',
        'Animation',
        'Brand Consistency'
      ]
    },
    {
      title: 'Community Management',
      description: 'Build and nurture your online community with proactive engagement and support.',
      icon: <Users className="w-12 h-12" />,
      features: [
        'Daily Monitoring',
        'Response Management',
        'Community Building',
        'Crisis Management',
        'User Generated Content',
        'Influencer Relations'
      ]
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted advertising campaigns designed to maximize ROI and reach your ideal customers.',
      icon: <Zap className="w-12 h-12" />,
      features: [
        'Campaign Setup',
        'Audience Targeting',
        'Ad Creative Design',
        'Budget Optimization',
        'A/B Testing',
        'Performance Tracking'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive reporting and insights to measure success and optimize performance.',
      icon: <BarChart3 className="w-12 h-12" />,
      features: [
        'Performance Metrics',
        'ROI Analysis',
        'Audience Insights',
        'Competitive Benchmarking',
        'Monthly Reports',
        'Growth Recommendations'
      ]
    },
    {
      title: 'Influencer Marketing',
      description: 'Connect with relevant influencers to amplify your brand message and reach new audiences.',
      icon: <Star className="w-12 h-12" />,
      features: [
        'Influencer Discovery',
        'Partnership Management',
        'Campaign Coordination',
        'Content Collaboration',
        'Performance Tracking',
        'ROI Measurement'
      ]
    }
  ];

  const results = [
    {
      metric: '+285%',
      label: 'Follower Growth',
      description: 'Average follower increase within 6 months',
      icon: <Users className="w-8 h-8" />
    },
    {
      metric: '+420%',
      label: 'Engagement Rate',
      description: 'Increase in likes, comments, and shares',
      icon: <Heart className="w-8 h-8" />
    },
    {
      metric: '+180%',
      label: 'Website Traffic',
      description: 'Social media driven website visits',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      metric: '+350%',
      label: 'Lead Generation',
      description: 'Qualified leads from social channels',
      icon: <Target className="w-8 h-8" />
    }
  ];

  const caseStudies = [
    {
      company: 'Fashion Retailer',
      industry: 'E-commerce',
      challenge: 'Low brand awareness and engagement on social media',
      solution: 'Comprehensive Instagram and TikTok strategy with influencer partnerships',
      results: ['300% increase in followers', '500% boost in engagement', '250% rise in sales'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      company: 'Tech Startup',
      industry: 'B2B SaaS',
      challenge: 'Difficulty reaching decision-makers and generating qualified leads',
      solution: 'LinkedIn-focused content marketing and thought leadership strategy',
      results: ['400% increase in LinkedIn followers', '200% more qualified leads', '150% growth in demo requests'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      company: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Limited local awareness and foot traffic',
      solution: 'Multi-platform approach with location-based targeting and user-generated content',
      results: ['180% increase in local followers', '220% boost in foot traffic', '300% more online orders'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Bloom Beauty Co.",
      text: "MOJXAI transformed our social media presence completely. Our Instagram engagement increased by 400% and we've seen a direct impact on sales.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      company: "TechFlow Solutions",
      text: "Their LinkedIn strategy helped us establish thought leadership in our industry. We're now getting inbound leads daily from our social media efforts.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      company: "Artisan Coffee Roasters",
      text: "The team's creative content and community management have turned our social media into a powerful customer acquisition channel.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'We analyze your current social media presence, competitors, and identify opportunities for growth.',
      icon: <Eye className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive social media strategy aligned with your business goals and target audience.',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Content Planning',
      description: 'Develop a content calendar with engaging posts designed to drive interaction and conversions.',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute the strategy with consistent posting, community management, and paid advertising campaigns.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuously monitor performance and optimize campaigns based on data-driven insights.',
      icon: <TrendingUp className="w-8 h-8" />
    }
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
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Results</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-medium">(+63)9 074933166</span>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#results" className="block py-2 text-gray-700 hover:text-blue-600">Results</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Share2 className="w-4 h-4 mr-2" />
                Social Media Marketing Experts
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Amplify Your Brand with
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                  Social Media Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Build meaningful connections, increase brand awareness, and drive conversions across all major social media platforms with our data-driven approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Social Media Audit
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" 
                  alt="Social Media Marketing" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">+420%</div>
                      <div className="text-sm text-gray-600">Engagement Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platforms We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create tailored strategies for each social media platform to maximize your reach and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPlatforms.map((platform, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-purple-200 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${platform.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white">{platform.icon}</div>
                    <div className="text-white/80 font-semibold">{platform.users} users</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Social Media Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media solutions designed to grow your online presence and drive business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-purple-200 p-8 group"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-purple-100">The impact of our social media marketing expertise</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 text-white/80 group-hover:text-white transition-colors">
                  {result.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {result.metric}
                </div>
                <div className="text-purple-100 font-medium mb-2">{result.label}</div>
                <div className="text-purple-200 text-sm">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to social media success, from strategy to execution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full hidden lg:block"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <div className={`bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-purple-600 mb-4">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="lg:w-12 lg:h-12 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 mb-8 lg:mb-0">
                    {step.step}
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses that trusted us with their social media marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                    <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">{study.industry}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-green-600 text-sm flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Social media success stories from satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-purple-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=400&fit=crop" 
            alt="Social Media Marketing" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create a social media strategy that drives real results for your business. Get your free audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Free Social Media Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call (+63)9 0749-33166
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our social media marketing services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Which social media platforms should my business be on?",
                answer: "The best platforms depend on your target audience, industry, and business goals. We conduct thorough research to identify where your customers spend their time online and recommend the most effective platforms for your specific needs."
              },
              {
                question: "How often should I post on social media?",
                answer: "Posting frequency varies by platform and audience. Generally, we recommend 1-2 posts per day on Facebook and Instagram, 3-5 tweets on Twitter, and 1-2 posts per week on LinkedIn. We create custom posting schedules based on your audience engagement patterns."
              },
              {
                question: "How do you measure social media ROI?",
                answer: "We track various metrics including engagement rates, reach, website traffic, lead generation, and conversions. We provide detailed monthly reports showing how social media activities directly contribute to your business objectives and revenue growth."
              },
              {
                question: "Do you create all the content in-house?",
                answer: "Yes, our team of designers, copywriters, and videographers create all content in-house. This ensures brand consistency, quality control, and faster turnaround times. We also collaborate with you to ensure content aligns with your brand voice and messaging."
              },
              {
                question: "How long does it take to see results?",
                answer: "While some improvements in engagement can be seen within the first month, significant results typically appear within 3-6 months. Social media marketing is a long-term strategy that builds momentum over time, creating lasting brand awareness and customer relationships."
              },
              {
                question: "Can you help with social media advertising?",
                answer: "Absolutely! We specialize in paid social media advertising across all major platforms. Our team creates targeted ad campaigns, manages budgets, and continuously optimizes for better performance and ROI."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <div className="ml-4 flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                MOJXAI 
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for social media marketing success. Helping businesses grow their online presence since 2011.
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
                <li><span className="text-purple-400">Social Media</span></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Social Platforms</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok Marketing</a></li>
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
                  <span>info@MOJXAI.com</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MOJXAI. All rights reserved. | Social Media Marketing Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SocialMediaPage;