"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Car,
  Users,
  Shield,
  Star,
  MapPin,
  Calendar,
  CreditCard,
  Search,
  ChevronRight,
  Play,
  CheckCircle,
  TrendingUp,
  UserCheck,
  Settings,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
              <Sparkles className="w-4 h-4 mr-1" />
              Sri Lanka's #1 P2P Car Rental Platform
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Rent. Share. Earn.
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect car owners with renters in a seamless peer-to-peer marketplace. Find the perfect vehicle or
              monetize your idle car.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/customers/get-started">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Renting
              </Button>
            </Link>
            <Link href="/owners/get-started">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg bg-transparent"
              >
                List Your Car
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 border border-orange-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input placeholder="Colombo, Sri Lanka" className="pl-10 border-orange-200 focus:border-orange-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pick-up Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input type="date" className="pl-10 border-orange-200 focus:border-orange-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Return Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input type="date" className="pl-10 border-orange-200 focus:border-orange-400" />
                </div>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Search Cars
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          >
            {[
              { number: "10K+", label: "Happy Customers" },
              { number: "5K+", label: "Cars Listed" },
              { number: "50K+", label: "Trips Completed" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <Zap className="w-4 h-4 mr-1" />
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed for car owners, renters, and administrators
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Search,
                title: "Smart Search",
                description: "Find vehicles by location, type, price range, and availability with advanced filters",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: Shield,
                title: "Secure Verification",
                description: "Complete document verification and secure payment processing for peace of mind",
                color: "from-orange-500 to-yellow-500",
              },
              {
                icon: Star,
                title: "Rating System",
                description: "Comprehensive review and rating system for both vehicles and users",
                color: "from-orange-500 to-pink-500",
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                description: "Integrated payment gateways with escrow protection for safe transactions",
                color: "from-orange-500 to-purple-500",
              },
              {
                icon: Calendar,
                title: "Easy Booking",
                description: "Simple booking system with real-time availability and instant confirmation",
                color: "from-orange-500 to-blue-500",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Connect with verified car owners and renters in your local community",
                color: "from-orange-500 to-green-500",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className="group">
                <Card className="h-full border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <Globe className="w-4 h-4 mr-1" />
              For Everyone
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Three Ways to Benefit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "For Car Owners",
                subtitle: "Monetize Your Vehicle",
                icon: Car,
                features: [
                  "List multiple vehicles",
                  "Set your own pricing",
                  "Manage availability",
                  "Earn passive income",
                  "Insurance coverage",
                ],
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-500/10 to-red-500/10",
              },
              {
                title: "For Customers",
                subtitle: "Find Perfect Rides",
                icon: Users,
                features: [
                  "Wide vehicle selection",
                  "Competitive pricing",
                  "Instant booking",
                  "24/7 support",
                  "Flexible rentals",
                ],
                color: "from-orange-500 to-yellow-500",
                bgColor: "from-orange-500/10 to-yellow-500/10",
              },
              {
                title: "For Admins",
                subtitle: "Platform Management",
                icon: Settings,
                features: [
                  "User verification",
                  "Analytics dashboard",
                  "Dispute resolution",
                  "Revenue tracking",
                  "Content moderation",
                ],
                color: "from-orange-500 to-purple-500",
                bgColor: "from-orange-500/10 to-purple-500/10",
              },
            ].map((userType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card
                  className={`h-full bg-gradient-to-br ${userType.bgColor} border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl`}
                >
                  <CardHeader className="text-center pb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${userType.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <userType.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800">{userType.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{userType.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {userType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full mt-6 bg-gradient-to-r ${userType.color} hover:opacity-90 text-white`}>
                      Get Started
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <TrendingUp className="w-4 h-4 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Register",
                description: "Create your account and complete verification process",
                icon: UserCheck,
              },
              {
                step: "02",
                title: "Search & Book",
                description: "Find the perfect vehicle and make your booking",
                icon: Search,
              },
              {
                step: "03",
                title: "Meet & Drive",
                description: "Meet the owner, inspect the car, and start your journey",
                icon: Car,
              },
              {
                step: "04",
                title: "Return & Rate",
                description: "Return the vehicle and rate your experience",
                icon: Star,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-orange-600">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of car owners and renters who trust RentACar.lk for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                <Car className="w-5 h-5 mr-2" />
                List Your Car
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg bg-transparent"
              >
                Find a Car
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
