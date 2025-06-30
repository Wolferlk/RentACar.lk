"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Shield, Star, CheckCircle, Users, Car, Clock, Heart } from "lucide-react"

export default function CustomersGetStartedPage() {
  const [searchLocation, setSearchLocation] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const benefits = [
    {
      icon: Car,
      title: "Wide Selection",
      description: "Choose from thousands of verified vehicles across Sri Lanka",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All vehicles are insured and owners are verified for your safety",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees. Pay only for what you use",
      color: "from-orange-500 to-purple-500",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Search & Compare",
      description: "Find the perfect vehicle for your needs using our smart search filters",
      icon: Search,
    },
    {
      number: "02",
      title: "Book Instantly",
      description: "Reserve your chosen vehicle with instant confirmation and secure payment",
      icon: CheckCircle,
    },
    {
      number: "03",
      title: "Meet & Drive",
      description: "Meet the owner, inspect the vehicle, and start your journey",
      icon: Users,
    },
    {
      number: "04",
      title: "Return & Rate",
      description: "Return the vehicle and share your experience with the community",
      icon: Star,
    },
  ]

  const featuredVehicles = [
    {
      id: 1,
      name: "Toyota Prius Hybrid",
      location: "Colombo 03",
      price: 4500,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=300",
      features: ["GPS", "AC", "Bluetooth"],
      instantBook: true,
    },
    {
      id: 2,
      name: "Honda Vezel",
      location: "Kandy",
      price: 5200,
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=300",
      features: ["GPS", "AC", "USB"],
      instantBook: false,
    },
    {
      id: 3,
      name: "BMW X3",
      location: "Colombo 07",
      price: 12000,
      rating: 4.9,
      reviews: 45,
      image: "/placeholder.svg?height=200&width=300",
      features: ["GPS", "AC", "Leather"],
      instantBook: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
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
              <Heart className="w-4 h-4 mr-1" />
              Start Your Journey
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Find Your Perfect Ride
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover thousands of vehicles from trusted owners across Sri Lanka. Book instantly and drive with
              confidence.
            </p>
          </motion.div>

          {/* Quick Search */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 border border-orange-100 mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Start Your Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Where</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input
                    placeholder="Colombo, Sri Lanka"
                    className="pl-10 border-orange-200 focus:border-orange-400"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pick-up</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input
                    type="date"
                    className="pl-10 border-orange-200 focus:border-orange-400"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input
                    type="date"
                    className="pl-10 border-orange-200 focus:border-orange-400"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                  />
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

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Why Choose RentACar.lk?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="h-full border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl text-center">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <Clock className="w-4 h-4 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Renting a car has never been easier. Follow these simple steps to get on the road.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
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
                    <span className="text-sm font-bold text-orange-600">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Popular Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of our most popular vehicles available for rent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="h-full border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                  <div className="relative">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {vehicle.instantBook && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-500 text-white">Instant Book</Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-800">{vehicle.name}</CardTitle>
                        <CardDescription className="flex items-center text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {vehicle.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-orange-600">LKR {vehicle.price.toLocaleString()}</div>
                        <div className="text-sm text-gray-500">per day</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{vehicle.rating}</span>
                        <span className="ml-1">({vehicle.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 bg-transparent"
            >
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Hit the Road?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of satisfied customers who trust RentACar.lk for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Find a Car Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
