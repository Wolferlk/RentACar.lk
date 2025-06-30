"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Filter, Star, Users, Fuel, Settings, Heart, Eye, Car, Zap } from "lucide-react"

export default function VehiclesPage() {
  const [searchLocation, setSearchLocation] = useState("")
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")

  const vehicles = [
    {
      id: 1,
      name: "Toyota Prius Hybrid",
      location: "Colombo 03",
      price: 4500,
      rating: 4.8,
      reviews: 124,
      seats: 5,
      fuel: "Hybrid",
      transmission: "Auto",
      image: "/placeholder.svg?height=200&width=300",
      owner: "Kamal P.",
      features: ["GPS", "AC", "Bluetooth"],
      available: true,
    },
    {
      id: 2,
      name: "Honda Vezel",
      location: "Kandy",
      price: 5200,
      rating: 4.9,
      reviews: 89,
      seats: 5,
      fuel: "Petrol",
      transmission: "Auto",
      image: "/placeholder.svg?height=200&width=300",
      owner: "Saman R.",
      features: ["GPS", "AC", "USB"],
      available: true,
    },
    {
      id: 3,
      name: "Suzuki Alto",
      location: "Galle",
      price: 3200,
      rating: 4.6,
      reviews: 67,
      seats: 4,
      fuel: "Petrol",
      transmission: "Manual",
      image: "/placeholder.svg?height=200&width=300",
      owner: "Nimal S.",
      features: ["AC", "Radio"],
      available: false,
    },
    {
      id: 4,
      name: "BMW X3",
      location: "Colombo 07",
      price: 12000,
      rating: 4.9,
      reviews: 45,
      seats: 5,
      fuel: "Petrol",
      transmission: "Auto",
      image: "/placeholder.svg?height=200&width=300",
      owner: "Rajesh M.",
      features: ["GPS", "AC", "Leather", "Sunroof"],
      available: true,
    },
    {
      id: 5,
      name: "Nissan Leaf",
      location: "Negombo",
      price: 6800,
      rating: 4.7,
      reviews: 32,
      seats: 5,
      fuel: "Electric",
      transmission: "Auto",
      image: "/placeholder.svg?height=200&width=300",
      owner: "Priya L.",
      features: ["GPS", "AC", "Fast Charging"],
      available: true,
    },
    {
      id: 6,
      name: "Mitsubishi Montero",
      location: "Anuradhapura",
      price: 8500,
      rating: 4.8,
      reviews: 78,
      seats: 7,
      fuel: "Diesel",
      transmission: "Auto",
      image: "/placeholder.svg?height=200&width=300",
      owner: "Chaminda K.",
      features: ["GPS", "AC", "4WD", "Roof Rack"],
      available: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />

      {/* Hero Section with Search */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
              <Car className="w-4 h-4 mr-1" />
              Browse Vehicles
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Find Your Perfect Ride
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Choose from hundreds of verified vehicles across Sri Lanka
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 border border-orange-100 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                  <Input
                    placeholder="Where to?"
                    className="pl-10 border-orange-200 focus:border-orange-400"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Pick-up Date</label>
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
                <label className="text-sm font-medium text-gray-700">Return Date</label>
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
                  Search
                </Button>
              </div>
              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Available Vehicles</h2>
              <p className="text-gray-600">{vehicles.length} vehicles found</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border border-orange-200 rounded-lg px-3 py-2 focus:border-orange-400 focus:outline-none">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Distance</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card
                  className={`h-full border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl ${!vehicle.available ? "opacity-75" : ""}`}
                >
                  <div className="relative">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    {!vehicle.available && (
                      <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                        <Badge className="bg-red-500 text-white">Not Available</Badge>
                      </div>
                    )}
                    {vehicle.fuel === "Electric" && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-green-500 text-white">
                          <Zap className="w-3 h-3 mr-1" />
                          Electric
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                          {vehicle.name}
                        </CardTitle>
                        <CardDescription className="flex items-center text-gray-600 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {vehicle.location}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">LKR {vehicle.price.toLocaleString()}</div>
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
                      <div className="text-gray-500">by {vehicle.owner}</div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{vehicle.seats} seats</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel className="w-4 h-4 mr-1" />
                        <span>{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center">
                        <Settings className="w-4 h-4 mr-1" />
                        <span>{vehicle.transmission}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${
                        vehicle.available
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!vehicle.available}
                    >
                      {vehicle.available ? "Book Now" : "Not Available"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 bg-transparent"
            >
              Load More Vehicles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
