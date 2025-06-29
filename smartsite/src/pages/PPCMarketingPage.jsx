import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Target, 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Zap, 
  Users, 
  Eye, 
  MousePointer, 
  Award,
  CheckCircle,
  Phone,
  Mail,
  Star,
  ArrowRight,
  Play,
  Clock,
  Shield,
  Lightbulb,
  Settings,
  Globe,
  Search,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

const PPCMarketingPage = () => {
  const [activeTab, setActiveTab] = useState('google-ads');

  const ppcServices = [
    {
      title: "Google Ads Management",
      description: "Dominate search results with expertly managed Google Ads campaigns that drive qualified traffic and maximize ROI.",
      icon: <Search className="w-8 h-8" />,
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads", "Performance Max"],
      results: "Average 300% ROI increase"
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Reach your ideal customers on social media with targeted campaigns that generate leads and drive sales.",
      icon: <Facebook className="w-8 h-8" />,
      features: ["Lead Generation", "Brand Awareness", "Conversion Campaigns", "Retargeting", "Lookalike Audiences"],
      results: "2.5x more leads generated"
    },
    {
      title: "LinkedIn Advertising",
      description: "Connect with decision-makers and professionals through strategic LinkedIn advertising campaigns.",
      icon: <Linkedin className="w-8 h-8" />,
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Lead Gen Forms", "Account-Based Marketing"],
      results: "45% higher conversion rates"
    },
    {
      title: "YouTube Advertising",
      description: "Engage audiences with compelling video ads that build brand awareness and drive action.",
      icon: <Youtube className="w-8 h-8" />,
      features: ["Video Campaigns", "TrueView Ads", "Bumper Ads", "Discovery Ads", "YouTube Shorts"],
      results: "85% increase in brand recall"
    }
  ];

  const ppcProcess = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "We analyze your business, competitors, and target audience to develop a comprehensive PPC strategy.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Our experts create optimized ad campaigns with compelling copy, targeted keywords, and strategic bidding.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Launch & Monitor",
      description: "We launch your campaigns and continuously monitor performance to ensure optimal results.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Optimize & Scale",
      description: "Through data-driven optimization, we improve performance and scale successful campaigns.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Immediate Results",
      description: "Start seeing traffic and leads within hours of campaign launch",
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "Precise Targeting",
      description: "Reach your exact audience based on demographics, interests, and behavior",
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Measurable ROI",
      description: "Track every dollar spent with detailed analytics and conversion tracking",
      icon: <BarChart3 className="w-8 h-8 text-green-500" />
    },
    {
      title: "Budget Control",
      description: "Set daily budgets and maximum bids to control your advertising spend",
      icon: <DollarSign className="w-8 h-8 text-purple-500" />
    },
    {
      title: "24/7 Visibility",
      description: "Your ads run around the clock, capturing leads even while you sleep",
      icon: <Clock className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Competitive Advantage",
      description: "Outrank competitors and capture market share with strategic positioning",
      icon: <Award className="w-8 h-8 text-red-500" />
    }
  ];

  const caseStudies = [
    {
      client: "E-commerce Fashion Brand",
      challenge: "Low online sales despite quality products",
      solution: "Multi-platform PPC strategy with Google Shopping and Facebook retargeting",
      results: {
        roi: "450%",
        sales: "+280%",
        cost: "-35%"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
    },
    {
      client: "B2B Software Company",
      challenge: "High customer acquisition costs",
      solution: "LinkedIn advertising with targeted lead generation campaigns",
      results: {
        roi: "320%",
        leads: "+180%",
        cost: "-45%"
      },
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      client: "Local Service Business",
      challenge: "Limited local market reach",
      solution: "Google Ads local campaigns with call extensions and location targeting",
      results: {
        roi: "380%",
        calls: "+250%",
        bookings: "+200%"
      },
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "TechStart Solutions",
      text: "MOJXAI's PPC management transformed our lead generation. We went from 50 leads per month to over 400, with a 60% lower cost per acquisition.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      company: "Metro Real Estate",
      text: "The ROI on our Google Ads campaigns has been incredible. We're seeing a 5:1 return on ad spend consistently month after month.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Lisa Chen",
      company: "Wellness Clinic Network",
      text: "Our appointment bookings increased by 300% after implementing their PPC strategy. The targeting is incredibly precise and effective.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  // Platform tabs functionality
  const platforms = [
    { name: "Google Ads", id: 'google-ads' },
    { name: "Facebook Ads", id: 'facebook-ads' },
    { name: "LinkedIn Ads", id: 'linkedin-ads' },
    { name: "YouTube Ads", id: 'youtube-ads' }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.history.back()} 
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center h-16">
                <img 
                  src="/mojxai.png" 
                  alt="MOJXAI Logo" 
                  className="h-36 w-auto object-contain"
                />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-medium">(+63)9 074933166</span>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop" 
            alt="PPC Marketing" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <Target className="w-4 h-4 mr-2" />
                Expert PPC Management
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Drive Instant
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                  Results with PPC
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Generate qualified leads and drive sales with data-driven PPC campaigns across Google, Facebook, LinkedIn, and more. Get immediate visibility and measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free PPC Audit
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Average Client Results</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                      <span className="text-blue-100">ROI Increase</span>
                    </div>
                    <span className="text-3xl font-bold text-green-400">+380%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-6 h-6 text-blue-400 mr-3" />
                      <span className="text-blue-100">Lead Generation</span>
                    </div>
                    <span className="text-3xl font-bold text-blue-400">+250%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="w-6 h-6 text-purple-400 mr-3" />
                      <span className="text-blue-100">Cost Reduction</span>
                    </div>
                    <span className="text-3xl font-bold text-purple-400">-45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Tabs Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => handleTabChange(platform.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === platform.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {platform.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PPC Advertising?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay-per-click advertising delivers immediate results with precise targeting and complete budget control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our PPC Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pay-per-click advertising solutions across all major platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ppcServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200 group"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-semibold">{service.results}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our PPC Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers consistent, measurable results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ppcProcess.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-blue-100">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < ppcProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-blue-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients who trusted us with their PPC campaigns
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-sm text-gray-600"><strong>Solution:</strong> {study.solution}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{study.results.sales || study.results.leads || study.results.calls}</div>
                      <div className="text-xs text-gray-600">{study.results.sales ? 'Sales' : study.results.leads ? 'Leads' : 'Calls'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{study.results.cost}</div>
                      <div className="text-xs text-gray-600">Cost/Lead</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our PPC clients say about working with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=400&fit=crop" 
            alt="PPC Success" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your PPC Campaigns?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with a free PPC audit and discover how we can drive immediate results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Free PPC Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call (+63)9 0749-33166
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
                Expert PPC management that drives results and maximizes your advertising ROI.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">PPC Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube Ads</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">PPC Audit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
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
                  <span>ppc@mojxai.com</span>
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

export default PPCMarketingPage;