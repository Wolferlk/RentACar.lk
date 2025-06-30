"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Car,
  MapPin,
  Star,
  Clock,
  CreditCard,
  User,
  Heart,
  Search,
  Download,
  Eye,
  MessageCircle,
  Phone,
  Settings,
  Bell,
  BarChart3,
} from "lucide-react"

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Trips",
      value: "24",
      change: "+3 this month",
      icon: Car,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Money Saved",
      value: "LKR 45,000",
      change: "vs buying",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Favorite Vehicles",
      value: "8",
      change: "+2 new",
      icon: Heart,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: "Excellent",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  const currentBookings = [
    {
      id: 1,
      vehicle: "Toyota Prius 2020",
      owner: "Kamal Perera",
      dates: "Dec 25-27, 2024",
      location: "Colombo 03",
      amount: "LKR 13,500",
      status: "Confirmed",
      image: "/placeholder.svg?height=200&width=300",
      pickupTime: "10:00 AM",
      returnTime: "6:00 PM",
    },
    {
      id: 2,
      vehicle: "Honda Vezel 2019",
      owner: "Saman Silva",
      dates: "Dec 30, 2024 - Jan 2, 2025",
      location: "Kandy",
      amount: "LKR 20,800",
      status: "Upcoming",
      image: "/placeholder.svg?height=200&width=300",
      pickupTime: "9:00 AM",
      returnTime: "7:00 PM",
    },
  ]

  const tripHistory = [
    {
      id: 1,
      vehicle: "BMW X3 2021",
      owner: "Rajesh Mendis",
      dates: "Dec 15-17, 2024",
      location: "Colombo 07",
      amount: "LKR 36,000",
      status: "Completed",
      rating: 5,
      review: "Excellent vehicle and great owner!",
    },
    {
      id: 2,
      vehicle: "Nissan Leaf 2022",
      owner: "Priya Fernando",
      dates: "Dec 10-12, 2024",
      location: "Negombo",
      amount: "LKR 20,400",
      status: "Completed",
      rating: 4,
      review: "Clean and efficient electric car.",
    },
    {
      id: 3,
      vehicle: "Suzuki Alto 2018",
      owner: "Nimal Silva",
      dates: "Dec 5-6, 2024",
      location: "Galle",
      amount: "LKR 6,400",
      status: "Completed",
      rating: 5,
      review: "Perfect for city driving!",
    },
  ]

  const favoriteVehicles = [
    {
      id: 1,
      name: "Toyota Prius 2020",
      owner: "Kamal Perera",
      location: "Colombo 03",
      price: 4500,
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      available: true,
    },
    {
      id: 2,
      name: "BMW X3 2021",
      owner: "Rajesh Mendis",
      location: "Colombo 07",
      price: 12000,
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      available: false,
    },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "bookings", label: "My Bookings", icon: Calendar },
    { id: "history", label: "Trip History", icon: Clock },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />

      <div className="pt-24 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Customer Dashboard
                </h1>
                <p className="text-gray-600 mt-2">Welcome back, Saman! Ready for your next adventure?</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <Search className="w-4 h-4 mr-2" />
                  Find a Car
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex space-x-1 bg-white rounded-xl p-1 border border-orange-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <Card className="border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.change}</p>
                          </div>
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                          >
                            <stat.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Current Bookings & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Current Bookings */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Current Bookings</CardTitle>
                    <CardDescription>Your upcoming and active rentals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {currentBookings.map((booking) => (
                        <div key={booking.id} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-medium text-gray-800">{booking.vehicle}</p>
                              <p className="text-sm text-gray-600">by {booking.owner}</p>
                              <p className="text-sm text-gray-600">{booking.dates}</p>
                            </div>
                            <Badge
                              className={
                                booking.status === "Confirmed" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mr-1" />
                              {booking.location}
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-orange-300 text-orange-600 bg-transparent"
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-gray-300 text-gray-600 bg-transparent"
                              >
                                <MessageCircle className="w-3 h-3 mr-1" />
                                Contact
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Quick Actions</CardTitle>
                    <CardDescription>What would you like to do?</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      <Search className="w-4 h-4 mr-2" />
                      Find a Vehicle
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-orange-300 text-orange-600 bg-transparent"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      View Favorites
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-orange-300 text-orange-600 bg-transparent"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Trip History
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-orange-300 text-orange-600 bg-transparent"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Account Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>

              <div className="space-y-6">
                {currentBookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-orange-200 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="flex items-center space-x-4">
                            <img
                              src={booking.image || "/placeholder.svg"}
                              alt={booking.vehicle}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="font-bold text-gray-800">{booking.vehicle}</h3>
                              <p className="text-sm text-gray-600">by {booking.owner}</p>
                              <Badge
                                className={
                                  booking.status === "Confirmed" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                                }
                              >
                                {booking.status}
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              {booking.dates}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="w-4 h-4 mr-2" />
                              {booking.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 mr-2" />
                              {booking.pickupTime} - {booking.returnTime}
                            </div>
                          </div>

                          <div className="flex flex-col justify-between">
                            <div className="text-right">
                              <p className="text-2xl font-bold text-orange-600">{booking.amount}</p>
                              <p className="text-sm text-gray-600">Total amount</p>
                            </div>
                            <div className="flex space-x-2 mt-4">
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-orange-300 text-orange-600 bg-transparent"
                              >
                                <Eye className="w-3 h-3 mr-1" />
                                Details
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex-1 border-gray-300 text-gray-600 bg-transparent"
                              >
                                <Phone className="w-3 h-3 mr-1" />
                                Contact
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Trip History Tab */}
          {activeTab === "history" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Trip History</h2>
                <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="space-y-4">
                {tripHistory.map((trip, index) => (
                  <motion.div
                    key={trip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-orange-100 hover:border-orange-300 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Car className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-800">{trip.vehicle}</h3>
                              <p className="text-sm text-gray-600">by {trip.owner}</p>
                              <p className="text-sm text-gray-600">{trip.dates}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="font-bold text-gray-800">{trip.amount}</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < trip.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <Badge className="bg-green-500 text-white mt-2">{trip.status}</Badge>
                          </div>
                        </div>

                        {trip.review && (
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700 italic">"{trip.review}"</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Favorites Tab */}
          {activeTab === "favorites" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-800">Favorite Vehicles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
                      <div className="relative">
                        <img
                          src={vehicle.image || "/placeholder.svg"}
                          alt={vehicle.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-3 right-3">
                          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 p-0">
                            <Heart className="w-4 h-4 fill-current" />
                          </Button>
                        </div>
                        {!vehicle.available && (
                          <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                            <Badge className="bg-red-500 text-white">Not Available</Badge>
                          </div>
                        )}
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-gray-800">{vehicle.name}</CardTitle>
                        <CardDescription className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {vehicle.location}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 mr-1" />
                            <span className="font-medium">{vehicle.rating}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-orange-600">
                              LKR {vehicle.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-500">per day</div>
                          </div>
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
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
