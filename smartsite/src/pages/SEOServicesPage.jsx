import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Star, 
  ArrowRight, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Play, 
  CheckCircle,
  Search,
  BarChart3,
  Target,
  Zap,
  Eye,
  MousePointer,
  Clock,
  Shield,
  Lightbulb,
  PieChart,
  LineChart,
  Monitor,
  Smartphone,
  FileText,
  ExternalLink,
  Camera,
  Code,
  Activity
} from 'lucide-react';

const SEOServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Removed unused setActiveTab state

  const seoServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword analysis to identify high-value opportunities and create a data-driven SEO strategy.",
      features: ["Competitor Analysis", "Search Volume Analysis", "Long-tail Keywords", "Intent Mapping"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "On-Page SEO Optimization",
      description: "Optimize every element of your website to improve search engine rankings and user experience.",
      features: ["Title Tag Optimization", "Meta Descriptions", "Header Structure", "Internal Linking"]
    },
    {
      icon: <ExternalLink className="w-8 h-8" />,
      title: "Link Building & Authority",
      description: "Build high-quality backlinks to establish domain authority and improve search rankings.",
      features: ["High-Quality Backlinks", "Guest Posting", "Digital PR", "Link Auditing"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical SEO Audit",
      description: "Comprehensive technical analysis to identify and fix issues that impact search performance.",
      features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "Crawl Error Fixes"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Keywords"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "SEO Analytics & Reporting",
      description: "Track, measure, and report on all aspects of your SEO performance with detailed insights.",
      features: ["Ranking Tracking", "Traffic Analysis", "Conversion Monitoring", "Monthly Reports"]
    }
  ];

  const seoPackages = [
    {
      name: "Starter SEO",
      price: "$899",
      period: "/month",
      description: "Perfect for small businesses just starting their SEO journey",
      features: [
        "Up to 10 target keywords",
        "On-page optimization",
        "Google My Business setup",
        "Monthly reporting",
        "Basic link building",
        "Technical SEO audit"
      ],
      popular: false
    },
    {
      name: "Professional SEO",
      price: "$1,499",
      period: "/month",
      description: "Comprehensive SEO solution for growing businesses",
      features: [
        "Up to 25 target keywords",
        "Advanced on-page optimization",
        "Content creation (4 articles/month)",
        "Link building campaign",
        "Local SEO optimization",
        "Competitor analysis",
        "Bi-weekly reporting",
        "Phone support"
      ],
      popular: true
    },
    {
      name: "Enterprise SEO",
      price: "$2,999",
      period: "/month",
      description: "Advanced SEO strategy for large businesses and e-commerce",
      features: [
        "Unlimited target keywords",
        "E-commerce SEO",
        "Content creation (8 articles/month)",
        "Advanced link building",
        "Technical SEO maintenance",
        "Multi-location optimization",
        "Weekly reporting",
        "Dedicated account manager",
        "Priority support"
      ],
      popular: false
    }
  ];

  const seoResults = [
    {
      metric: "Average Traffic Increase",
      value: "285%",
      description: "Within 6 months of implementation"
    },
    {
      metric: "Keywords Ranking Page 1",
      value: "94%",
      description: "Of targeted keywords reach first page"
    },
    {
      metric: "Average ROI",
      value: "650%",
      description: "Return on SEO investment"
    },
    {
      metric: "Client Retention Rate",
      value: "96%",
      description: "Clients continue working with us"
    }
  ];

  const caseStudies = [
    {
      company: "Local Restaurant Chain",
      industry: "Food & Beverage",
      challenge: "Low online visibility and local search presence",
      solution: "Comprehensive local SEO strategy with Google My Business optimization",
      results: {
        traffic: "+340%",
        rankings: "150+ keywords on page 1",
        revenue: "+$2.3M annual revenue increase"
      },
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop"
    },
    {
      company: "E-commerce Fashion Brand",
      industry: "Retail",
      challenge: "High competition in fashion keywords",
      solution: "Technical SEO overhaul and content marketing strategy",
      results: {
        traffic: "+520%",
        rankings: "300+ keywords in top 10",
        revenue: "+180% online sales"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      company: "B2B Software Company",
      industry: "Technology",
      challenge: "Complex technical product with low search visibility",
      solution: "Content-driven SEO strategy with technical optimization",
      results: {
        traffic: "+410%",
        rankings: "250+ keywords ranking",
        leads: "+300% qualified leads"
      },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description: "Comprehensive analysis of your current SEO performance, technical issues, and opportunities."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy based on your business goals, competition, and market analysis."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page optimization, technical fixes, and begin content creation and link building."
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring, reporting, and optimization to maximize your SEO performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            <Link to="/" className="flex items-center h-16">
              <img 
                src="/mojxai.png" 
                alt="MOJXAI Logo" 
                className="h-36 w-auto object-contain"
              />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
              <a href="#results" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Results</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 font-medium">(+63)9 074933166</span>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Free SEO Audit
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
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#results" className="block py-2 text-gray-700 hover:text-blue-600">Results</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg mt-4">
                Get Free SEO Audit
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
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Proven SEO Results Since 2011
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  SEO Services
                </span>
                That Drive Results
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Increase your organic traffic, improve search rankings, and grow your business with our 
                data-driven SEO strategies that deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free SEO Audit
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
                  src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop" 
                  alt="SEO Analytics Dashboard" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Search className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">#1</div>
                      <div className="text-sm text-gray-600">Google Ranking</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Results That Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven SEO strategies have helped hundreds of businesses achieve remarkable growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {seoResults.map((result, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {result.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</div>
                <div className="text-gray-600 text-sm">{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical optimization to content strategy, we cover every aspect of SEO to maximize your online visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border hover:border-blue-200 p-8 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to improving your search engine rankings and organic traffic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect SEO package for your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {pkg.price}<span className="text-lg text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEO Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses who trusted us with their SEO
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{study.industry}</div>
                    <div className="text-xl font-bold">{study.company}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{study.results.traffic}</div>
                      <div className="text-xs text-gray-600">Traffic</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{study.results.rankings}</div>
                      <div className="text-xs text-gray-600">Rankings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{study.results.revenue || study.results.leads}</div>
                      <div className="text-xs text-gray-600">{study.results.revenue ? 'Revenue' : 'Leads'}</div>
                    </div>
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
          <div className="absolute inset-0 bg-black/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" 
            alt="SEO Growth" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free SEO audit and discover how we can help you outrank your competition and drive more organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Free SEO Audit
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
                Driving organic growth through proven SEO strategies and data-driven results.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Paramus, New Jersey</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">SEO Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Local SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Link Building</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Audits</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
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

export default SEOServicesPage