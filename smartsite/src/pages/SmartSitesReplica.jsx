import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Star, ArrowRight, Users, Award, TrendingUp, Globe, Mail, Phone, MapPin, Play, CheckCircle, Clock, MessageCircle } from 'lucide-react';

const SmartSitesReplica = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      title: "Web Design",
      description: "Create a brand and communicate your value with stunning, conversion-focused websites.",
      image: "/webDesign.jpg",
      features: ["Responsive Design", "Custom Development", "Brand Integration", "User Experience"]
    },
    {
      title: "SEO",
      description: "Find new clients organically and grow a foundation for tomorrow with proven SEO strategies.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
      features: ["Keyword Research", "On-Page Optimization", "Link Building", "Analytics"]
    },
    {
      title: "PPC",
      description: "Put your business in front of the right people today with targeted advertising campaigns.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      features: ["Google Ads", "Social Media Ads", "Campaign Management", "ROI Tracking"]
    },
    {
      title: "Email & SMS",
      description: "Get more out of your current website visitors with personalized marketing automation.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop",
      features: ["Email Campaigns", "SMS Marketing", "Automation", "Segmentation"]
    },
    {
      title: "Social Media",
      description: "Increase awareness by engaging with your audience across all major platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      features: ["Content Creation", "Community Management", "Social Ads", "Analytics"]
    },
    {
      title: "Branding",
      description: "Build a memorable brand identity that resonates with your target audience.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=300&fit=crop",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"]
    }
  ];

  const stats = [
    { number: "1000+", label: "5-Star Reviews", icon: <Star className="w-8 h-8" /> },
    { number: "97%", label: "Client Satisfaction", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "100+", label: "Digital Experts", icon: <Users className="w-8 h-8" /> },
    { number: "2011", label: "Founded", icon: <Award className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovations Inc.",
      text: "SmartSites transformed our online presence completely. Our website traffic increased by 300% in just 6 months, and the ROI has been incredible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "Local Restaurant Chain",
      text: "The PPC campaigns delivered immediate results. We saw a 250% increase in qualified leads within the first month, exceeding all our expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      company: "E-commerce Startup",
      text: "Their web design team created a beautiful, conversion-focused site that perfectly represents our brand. Sales increased by 180% after launch.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const ContactModal = () => (
    <div className={`absolute top-[90px] left-0 right-0 z-40 ${isContactModalOpen ? 'block' : 'hidden'}`}>

    
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsContactModalOpen(false)}
      ></div>
      
      {/* Modal */}
      <div className="mx-auto mt-4 max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-y-auto relative z-50">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all">
          {/* Close Button */}
          <button
            onClick={() => setIsContactModalOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-2xl">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-blue-100">Ready to grow your business? Let's start the conversation.</p>
          </div>
          
          {/* Content */}
          <div className="p-8">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(+63) 9 074933166</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@mojxai.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Phnom Penh, Cambodia</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-sm text-gray-500 mt-1">Instant support during business hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact Form</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 font-medium">🚀 Free Consultation Available!</p>
                <p className="text-blue-600 text-sm mt-1">Schedule a 30-minute strategy session to discuss your digital marketing goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Results</a>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
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
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#results" className="block py-2 text-gray-700 hover:text-blue-600">Results</a>
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>
{/* Contact Modal */}
      <ContactModal />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                #1 Rated Digital Marketing Agency
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                MOJXAI
                Results-driven
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                We help businesses grow with cutting-edge web design, SEO, PPC, and digital marketing strategies 
                that deliver measurable results and drive real ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="Digital Marketing Dashboard" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">+300%</div>
                      <div className="text-sm text-gray-600">Traffic Growth</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-blue-200 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                {service.title === "Web Design" ? (
  <Link 
    to="/web-design" 
    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
  >
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </Link>
) : service.title === "SEO" ? (
  <Link 
    to="/seo" 
    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
  >
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </Link>
) : service.title === "PPC" ? (
  <Link 
    to="/ppc-marketing" 
    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
  >
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </Link>
) : service.title === "Email & SMS" ? (
  <Link 
    to="/email-marketing" 
    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
  >
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </Link>
) : service.title === "Social Media" ? (
  <Link 
    to="/social-media" 
    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
  >
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </Link>
) : service.title === "Branding" ? (
  <Link 
    to="/branding-services" 
    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group"
  >
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </Link>
) : service.title === "Discover MOJXAI" ? (
  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
    <Link to="/about-us">Discover MOJXAI</Link>
  </button>
) : (
  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
    Learn More 
    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
  </button>
)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Remarkable Results</h2>
            <p className="text-xl text-blue-100">The numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 text-white/80 group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Story – The Heart Behind MOJXAI
                Every great brand begins with a single spark—an idea, a passion, a mission. For MOJXAI, that spark ignited with one vision: 
                to empower businesses of all sizes through strategic, data-driven, and creative digital solutions. We weren't built overnight. 
                What you see today is the product of sleepless nights, countless experiments, relentless learning, and the unwavering belief that we could make a 
                difference in the digital space.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                MOJXAI was born out of a simple observation—many businesses struggle to stand out online, not because they lack quality or value, 
                but because they don't have the tools, the team, or the time to market themselves effectively. We started as a small group of digital 
                professionals—designers, marketers, developers, storytellers—united by a shared frustration with overpriced, outdated, and impersonal agency models.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
  <Link to="/about-us">Discover MOJXAI</Link>  {/* Link to About Us page */}
</button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                  alt="MOJXAI  Team" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Digital Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Over 1,000 five-star reviews and counting</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/mojxai.png"
                alt="MOJXAI Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} MOJXAI. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmartSitesReplica;
