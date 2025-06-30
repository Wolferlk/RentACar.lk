"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, MapPin, Calendar, Star, Users, Fuel, Settings, Heart, Zap, X, SlidersHorizontal } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: [0, 20000],
    fuelType: [],
    transmission: [],
    seats: [],
    features: [],
  })

  const searchResults = [
    {
      id: 1,
      name: "Toyota Prius Hybrid",
      location: "Colombo 03",
      distance: "2.5 km away",
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
      instantBook: true,
    },
    {
      id: 2,
      name: "Honda Vezel",
      location: "Colombo 05",
      distance: "3.8 km away",
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
      instantBook: false,
    },
    {
      id: 3,
      name: "BMW X3",
      location: "Colombo 07",
      distance: "5.2 km away",
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
      instantBook: true,
    },
    {
      id: 4,
      name: "Nissan Leaf",
      location: "Colombo 04",
      distance: "4.1 km away",
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
      instantBook: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />

      {/* Search Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <span>Search Results</span>
              <span>•</span>
              <span>Colombo</span>
              <span>•</span>
              <span>Dec 25 - Dec 27</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              {searchResults.length} vehicles available
            </h1>
            <p className="text-gray-600">in Colombo for your selected dates</p>
          </motion.div>

          {/* Quick Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-4 border border-orange-100 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                <Input placeholder="Colombo" className="pl-10 border-orange-200 focus:border-orange-400" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                <Input type="date" className="pl-10 border-orange-200 focus:border-orange-400" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                <Input type="date" className="pl-10 border-orange-200 focus:border-orange-400" />
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                <Search className="w-4 h-4 mr-2" />
                Update Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`lg:block ${showFilters ? "block" : "hidden"}`}
            >
              <Card className="border-orange-200 sticky top-24">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-800">Filters</CardTitle>
                    <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Price Range (LKR)</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Input placeholder="Min" className="border-orange-200 focus:border-orange-400" />
                        <span className="text-gray-500">-</span>
                        <Input placeholder="Max" className="border-orange-200 focus:border-orange-400" />
                      </div>
                    </div>
                  </div>

                  {/* Fuel Type */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Fuel Type</h3>
                    <div className="space-y-2">
                      {["Petrol", "Diesel", "Hybrid", "Electric"].map((fuel) => (
                        <div key={fuel} className="flex items-center space-x-2">
                          <Checkbox id={fuel} />
                          <label htmlFor={fuel} className="text-sm text-gray-700">
                            {fuel}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transmission */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Transmission</h3>
                    <div className="space-y-2">
                      {["Automatic", "Manual"].map((trans) => (
                        <div key={trans} className="flex items-center space-x-2">
                          <Checkbox id={trans} />
                          <label htmlFor={trans} className="text-sm text-gray-700">
                            {trans}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Seats */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Seats</h3>
                    <div className="space-y-2">
                      {["2", "4", "5", "7+"].map((seat) => (
                        <div key={seat} className="flex items-center space-x-2">
                          <Checkbox id={`seat-${seat}`} />
                          <label htmlFor={`seat-${seat}`} className="text-sm text-gray-700">
                            {seat} seats
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
                    <div className="space-y-2">
                      {["GPS", "AC", "Bluetooth", "USB", "Sunroof", "Leather"].map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox id={feature} />
                          <label htmlFor={feature} className="text-sm text-gray-700">
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <div className="lg:col-span-3">
              {/* Sort & Filter Toggle */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    className="lg:hidden border-orange-300 text-orange-600 bg-transparent"
                    onClick={() => setShowFilters(true)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-orange-200 rounded-lg px-3 py-2 focus:border-orange-400 focus:outline-none">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                    <option>Distance</option>
                  </select>
                </div>
              </div>

              {/* Results Grid */}
              <div className="space-y-6">
                {searchResults.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Card className="border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                          {/* Image */}
                          <div className="relative">
                            <img
                              src={vehicle.image || "/placeholder.svg"}
                              alt={vehicle.name}
                              className="w-full h-48 md:h-full object-cover rounded-l-lg"
                            />
                            <div className="absolute top-3 right-3 flex space-x-2">
                              <button className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                <Heart className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                            {vehicle.fuel === "Electric" && (
                              <div className="absolute top-3 left-3">
                                <Badge className="bg-green-500 text-white">
                                  <Zap className="w-3 h-3 mr-1" />
                                  Electric
                                </Badge>
                              </div>
                            )}
                            {vehicle.instantBook && (
                              <div className="absolute bottom-3 left-3">
                                <Badge className="bg-orange-500 text-white">Instant Book</Badge>
                              </div>
                            )}
                          </div>

                          {/* Details */}
                          <div className="md:col-span-2 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{vehicle.name}</h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  <span>{vehicle.location}</span>
                                  <span className="mx-2">•</span>
                                  <span>{vehicle.distance}</span>
                                </div>
                                <div className="flex items-center mb-3">
                                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                  <span className="font-medium">{vehicle.rating}</span>
                                  <span className="text-gray-500 ml-1">({vehicle.reviews} reviews)</span>
                                  <span className="mx-2 text-gray-300">•</span>
                                  <span className="text-gray-600">by {vehicle.owner}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-orange-600">
                                  LKR {vehicle.price.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-500">per day</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-6 text-sm text-gray-600">
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
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {vehicle.features.map((feature, featureIndex) => (
                                <Badge key={featureIndex} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <Button
                                variant="outline"
                                className="border-orange-300 text-orange-600 hover:bg-orange-50 bg-transparent"
                              >
                                View Details
                              </Button>
                              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8">
                                Book Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                    Previous
                  </Button>
                  <Button className="bg-orange-500 text-white">1</Button>
                  <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                    2
                  </Button>
                  <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                    3
                  </Button>
                  <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
