import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Star, ArrowRight, Users, Award, TrendingUp, Globe, Mail, Phone, MapPin, Play, Facebook , Instagram, Linkedin, Twitter, CheckCircle, Palette, Target, Eye, Zap, Heart, Lightbulb, Briefcase, Camera, Monitor, FileText, Package, Smartphone } from 'lucide-react';

const BrandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const brandingServices = [
    {
      title: "Brand Strategy",
      description: "Develop a comprehensive brand strategy that defines your unique positioning and market approach.",
      icon: <Target className="w-8 h-8" />,
      features: ["Brand Positioning", "Market Research", "Competitive Analysis", "Brand Architecture"],
      pricing: "Starting at $2,500"
    },
    {
      title: "Logo Design",
      description: "Create a memorable and distinctive logo that represents your brand's essence and values.",
      icon: <Palette className="w-8 h-8" />,
      features: ["Multiple Concepts", "Unlimited Revisions", "Vector Files", "Brand Guidelines"],
      pricing: "Starting at $1,200"
    },
    {
      title: "Visual Identity",
      description: "Build a cohesive visual system including colors, typography, and design elements.",
      icon: <Eye className="w-8 h-8" />,
      features: ["Color Palette", "Typography System", "Iconography", "Pattern Library"],
      pricing: "Starting at $1,800"
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines to ensure consistent application across all touchpoints.",
      icon: <FileText className="w-8 h-8" />,
      features: ["Usage Standards", "Do's and Don'ts", "Application Examples", "Digital Assets"],
      pricing: "Starting at $800"
    },
    {
      title: "Marketing Materials",
      description: "Design cohesive marketing materials that reinforce your brand identity.",
      icon: <Briefcase className="w-8 h-8" />,
      features: ["Business Cards", "Brochures", "Presentations", "Trade Show Materials"],
      pricing: "Starting at $500"
    },
    {
      title: "Digital Assets",
      description: "Create digital brand assets optimized for web and social media platforms.",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Social Media Templates", "Email Signatures", "Website Graphics", "Digital Banners"],
      pricing: "Starting at $600"
    }
  ];

  const brandingProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your business, industry, and target audience to understand your unique challenges and opportunities.",
      icon: <Lightbulb className="w-12 h-12" />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Based on our research, we develop a comprehensive brand strategy that positions you for success in your market.",
      icon: <Target className="w-12 h-12" />
    },
    {
      step: "03",
      title: "Creative Concepts",
      description: "Our design team creates multiple creative concepts that bring your brand strategy to life visually.",
      icon: <Palette className="w-12 h-12" />
    },
    {
      step: "04",
      title: "Refinement",
      description: "We work closely with you to refine the chosen concept, ensuring every detail aligns with your vision.",
      icon: <Zap className="w-12 h-12" />
    },
    {
      step: "05",
      title: "Brand Guidelines",
      description: "We create comprehensive brand guidelines to ensure consistent application across all touchpoints.",
      icon: <FileText className="w-12 h-12" />
    },
    {
      step: "06",
      title: "Implementation",
      description: "We help implement your new brand across all marketing materials and digital platforms.",
      icon: <CheckCircle className="w-12 h-12" />
    }
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Rebrand",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Complete rebrand for innovative fintech startup, including logo, visual identity, and digital assets."
    },
    {
      title: "Restaurant Chain Identity",
      category: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      description: "Fresh brand identity for expanding restaurant chain with focus on organic, local ingredients."
    },
    {
      title: "Healthcare Brand",
      category: "Healthcare",
      image: "/healthcare.jpg",
      description: "Trustworthy and modern brand for healthcare provider focusing on patient care and innovation."
    },
    {
      title: "E-commerce Fashion",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "Luxury fashion brand identity with emphasis on sustainability and modern elegance."
    },
    {
      title: "Real Estate Firm",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      description: "Professional brand identity for commercial real estate firm with premium positioning."
    },
    {
      title: "Fitness Studio",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Energetic and motivating brand for boutique fitness studio focusing on community and wellness."
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "CEO, InnovateTech",
      text: "MOJXAI completely transformed our brand identity. The new logo and visual system perfectly capture our innovative spirit and have helped us stand out in a crowded market.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      results: "40% increase in brand recognition"
    },
    {
      name: "David Thompson",
      company: "Founder, Organic Harvest",
      text: "The branding work exceeded our expectations. Our new identity perfectly reflects our commitment to sustainability and has resonated strongly with our target audience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      results: "60% boost in customer engagement"
    },
    {
      name: "Sarah Chen",
      company: "Director, Premier Healthcare",
      text: "MOJXAI created a brand that instills trust and confidence. Our patients and partners consistently comment on our professional and approachable brand presence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      results: "25% increase in new patient inquiries"
    }
  ];

  const faqs = [
    {
      question: "How long does the branding process take?",
      answer: "A complete branding project typically takes 6-12 weeks, depending on the scope and complexity. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in a complete brand identity package?",
      answer: "Our complete package includes brand strategy, logo design, visual identity system, brand guidelines, business card design, and basic marketing materials. We customize packages based on your specific needs."
    },
    {
      question: "Can you work with our existing brand elements?",
      answer: "Absolutely! We can refresh and evolve your existing brand elements or create entirely new ones. We'll assess what's working and what needs improvement during our discovery phase."
    },
    {
      question: "Do you provide brand guidelines?",
      answer: "Yes, comprehensive brand guidelines are included with every branding project. These ensure consistent application of your brand across all touchpoints and can be shared with your team or other vendors."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll receive your logo and brand elements in all necessary formats including vector files (AI, EPS), high-resolution PNGs, JPEGs, and web-optimized versions. We also provide source files for future modifications."
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
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Portfolio</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Process</a>
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
              <a href="#portfolio" className="block py-2 text-gray-700 hover:text-blue-600">Portfolio</a>
              <a href="#process" className="block py-2 text-gray-700 hover:text-blue-600">Process</a>
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
                <Palette className="w-4 h-4 mr-2" />
                Award-Winning Brand Design
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Build a
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block">
                  Memorable Brand
                </span>
                That Stands Out
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Create a powerful brand identity that connects with your audience, builds trust, 
                and drives business growth. From strategy to implementation, we craft brands that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Brand Journey
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center group">
                  <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Our Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop" 
                  alt="Brand Design Process" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">95%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Branding Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive branding solutions designed to establish, strengthen, and differentiate your brand in the marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-purple-200 overflow-hidden transform hover:-translate-y-2 p-8"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform text-purple-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">{service.pricing}</span>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building brands that resonate with your audience and drive business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandingProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-purple-200 h-full">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <div className="text-purple-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < brandingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Brand Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of successful brand transformations across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              View Complete Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real clients who trusted us with their brand</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-purple-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
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
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-purple-600 font-semibold text-sm">{testimonial.results}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our branding services</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" 
            alt="Brand Success" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create a brand identity that truly represents your business and connects with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Brand Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
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

export default BrandingPage