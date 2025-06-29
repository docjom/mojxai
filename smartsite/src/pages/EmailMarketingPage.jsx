import React, { useState } from 'react';
import { 
  ChevronDown, Menu, X, Star, ArrowRight, Users, Award, TrendingUp, 
  Globe, Mail, Phone, MapPin, Play, CheckCircle, Send, Target, 
  BarChart3, Clock, Zap, Shield, Eye, MousePointer, DollarSign,
  Smartphone, Calendar, Settings, MessageSquare, Heart, Briefcase
} from 'lucide-react';

const EmailMarketingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const emailServices = [
    {
      title: "Email Campaign Design & Development",
      description: "Stunning, mobile-responsive email templates that capture attention and drive action.",
      icon: <Send className="w-8 h-8 text-blue-600" />,
      features: ["Custom HTML Templates", "Mobile Optimization", "Brand Integration", "A/B Testing"]
    },
    {
      title: "Marketing Automation",
      description: "Sophisticated automation workflows that nurture leads and convert prospects into customers.",
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      features: ["Drip Campaigns", "Behavioral Triggers", "Lead Scoring", "Customer Journey Mapping"]
    },
    {
      title: "List Building & Segmentation",
      description: "Grow your subscriber base and segment audiences for personalized, targeted messaging.",
      icon: <Target className="w-8 h-8 text-green-600" />,
      features: ["Lead Magnets", "Opt-in Forms", "Audience Segmentation", "Data Management"]
    },
    {
      title: "Analytics & Optimization",
      description: "Comprehensive reporting and continuous optimization to maximize your email ROI.",
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      features: ["Performance Tracking", "ROI Analysis", "Campaign Optimization", "Deliverability Monitoring"]
    }
  ];

  const emailTypes = [
    {
      title: "Welcome Series",
      description: "Create memorable first impressions with engaging welcome email sequences.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Promotional Campaigns",
      description: "Drive sales with compelling promotional emails that convert browsers into buyers.",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Newsletter Marketing",
      description: "Keep your audience engaged with valuable content and regular updates.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Transactional Emails",
      description: "Optimize order confirmations, receipts, and shipping notifications.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Re-engagement Campaigns",
      description: "Win back inactive subscribers with targeted re-activation sequences.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Event & Webinar Emails",
      description: "Promote events and maximize attendance with strategic email campaigns.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      stat: "4,200%",
      description: "Average ROI on Email Marketing",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      stat: "86%",
      description: "Of consumers want promotional emails",
      icon: <Mail className="w-8 h-8" />
    },
    {
      stat: "50%",
      description: "More sales from email than social media",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      stat: "18%",
      description: "Average open rate improvement",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  const platforms = [
    "Mailchimp", "Klaviyo", "Constant Contact", "HubSpot", 
    "SendGrid", "Campaign Monitor", "ConvertKit", "ActiveCampaign"
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Fashion E-commerce",
      text: "MOJXAI's email campaigns increased our revenue by 45% in just 3 months. Their automation sequences are incredible.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      results: "+45% Revenue Growth"
    },
    {
      name: "David Thompson",
      company: "SaaS Startup",
      text: "The welcome series they created improved our trial-to-paid conversion rate by 60%. Outstanding work!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      results: "+60% Conversion Rate"
    },
    {
      name: "Lisa Chen",
      company: "Local Service Business",
      text: "Our email open rates doubled and click-through rates tripled. The ROI has been phenomenal.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h-80&fit=crop&crop=face",
      results: "3x Click-Through Rate"
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
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
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
              <a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Mail className="w-4 h-4 mr-2" />
                Email Marketing Specialists
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Email Marketing
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  That Converts
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Turn your email list into your most profitable marketing channel. We create personalized, 
                automated email campaigns that nurture leads and drive sales with industry-leading ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Email Audit
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop" 
                  alt="Email Marketing Dashboard" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">4,200%</div>
                      <div className="text-sm text-gray-600">Average ROI</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Email Marketing Works</h2>
            <p className="text-xl text-blue-100">The most cost-effective way to reach your customers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 text-white/80 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {benefit.stat}
                </div>
                <div className="text-blue-100 font-medium">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Email Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your email marketing to maximize results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {emailServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-blue-200 p-8 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Email Campaigns We Create</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every email serves a purpose. We craft the right message for every stage of your customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3 text-blue-600">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platforms We Work With</h2>
            <p className="text-xl text-gray-600">
              We're experts in all major email marketing platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-lg font-semibold text-gray-900">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border hover:border-blue-200">
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
                  <div className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full">
                    {testimonial.results}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we transform your email marketing in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Audit", description: "We analyze your current email marketing and develop a comprehensive strategy." },
              { step: "02", title: "Design & Setup", description: "Create stunning templates and set up automation workflows tailored to your business." },
              { step: "03", title: "Launch & Test", description: "Deploy campaigns with A/B testing to optimize performance from day one." },
              { step: "04", title: "Optimize & Scale", description: "Continuous monitoring and optimization to maximize ROI and growth." }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" 
            alt="Email Marketing Success" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Maximize Your Email ROI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create email campaigns that your customers love and that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Free Email Strategy Session
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call (+63)9 074933166
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
                America's #1 rated digital marketing agency, helping businesses grow since 2011.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Paramus, New Jersey</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/web-design" className="hover:text-white transition-colors">Web Design</a></li>
                <li><a href="/seo" className="hover:text-white transition-colors">SEO</a></li>
                <li><a href="/ppc-marketing" className="hover:text-white transition-colors">PPC</a></li>
                <li><a href="/email-marketing" className="hover:text-white transition-colors text-blue-400">Email Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
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
                  <span>info@MOJXAI.com</span>
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

export default EmailMarketingPage;