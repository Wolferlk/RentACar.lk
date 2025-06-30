"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Car,
  DollarSign,
  Calendar,
  Star,
  Users,
  MapPin,
  Mail,
  Edit,
  Eye,
  Plus,
  BarChart3,
  Clock,
  Settings,
  Bell,
  Filter,
  Download,
} from "lucide-react"

export default function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Earnings",
      value: "LKR 127,500",
      change: "+15.3%",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Active Vehicles",
      value: "3",
      change: "+1",
      icon: Car,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Total Bookings",
      value: "47",
      change: "+8",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
    },
  ]

  const vehicles = [
    {
      id: 1,
      name: "Toyota Prius 2020",
      image: "/placeholder.svg?height=200&width=300",
      status: "Active",
      price: 4500,
      rating: 4.8,
      bookings: 24,
      earnings: "LKR 85,000",
      location: "Colombo 03",
      nextBooking: "Dec 25, 2024",
    },
    {
      id: 2,
      name: "Honda Vezel 2019",
      image: "/placeholder.svg?height=200&width=300",
      status: "Booked",
      price: 5200,
      rating: 4.9,
      bookings: 18,
      earnings: "LKR 42,500",
      location: "Colombo 05",
      nextBooking: "Available Dec 28",
    },
    {
      id: 3,
      name: "Suzuki Alto 2018",
      image: "/placeholder.svg?height=200&width=300",
      status: "Maintenance",
      price: 3200,
      rating: 4.6,
      bookings: 5,
      earnings: "LKR 12,000",
      location: "Colombo 07",
      nextBooking: "Under maintenance",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      customer: "Saman Perera",
      vehicle: "Toyota Prius 2020",
      dates: "Dec 20-22, 2024",
      amount: "LKR 13,500",
      status: "Completed",
      rating: 5,
    },
    {
      id: 2,
      customer: "Priya Silva",
      vehicle: "Honda Vezel 2019",
      dates: "Dec 18-20, 2024",
      amount: "LKR 15,600",
      status: "Completed",
      rating: 4,
    },
    {
      id: 3,
      customer: "Kamal Fernando",
      vehicle: "Toyota Prius 2020",
      dates: "Dec 25-27, 2024",
      amount: "LKR 13,500",
      status: "Upcoming",
      rating: null,
    },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "vehicles", label: "My Vehicles", icon: Car },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "earnings", label: "Earnings", icon: DollarSign },
    { id: "profile", label: "Profile", icon: Users },
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
                  Owner Dashboard
                </h1>
                <p className="text-gray-600 mt-2">Welcome back, Kamal! Manage your vehicles and earnings.</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Vehicle
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
                            <p className="text-sm text-green-600 font-medium">{stat.change}</p>
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

              {/* Quick Actions & Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Quick Actions */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Quick Actions</CardTitle>
                    <CardDescription>Manage your vehicles and bookings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Vehicle
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-orange-300 text-orange-600 bg-transparent"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      View Calendar
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-orange-300 text-orange-600 bg-transparent"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      View Analytics
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

                {/* Recent Bookings */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Recent Bookings</CardTitle>
                    <CardDescription>Latest booking activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.slice(0, 3).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{booking.customer}</p>
                            <p className="text-sm text-gray-600">{booking.vehicle}</p>
                            <p className="text-sm text-gray-600">{booking.dates}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-800">{booking.amount}</p>
                            <Badge
                              variant={
                                booking.status === "Completed"
                                  ? "default"
                                  : booking.status === "Upcoming"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Vehicles Tab */}
          {activeTab === "vehicles" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">My Vehicles</h2>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Vehicle
                </Button>
              </div>

              {/* Vehicles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle, index) => (
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
                          <Badge
                            variant={
                              vehicle.status === "Active"
                                ? "default"
                                : vehicle.status === "Booked"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              vehicle.status === "Active"
                                ? "bg-green-500 text-white"
                                : vehicle.status === "Booked"
                                  ? "bg-blue-500 text-white"
                                  : "bg-yellow-500 text-white"
                            }
                          >
                            {vehicle.status}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-gray-800">{vehicle.name}</CardTitle>
                        <CardDescription className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          {vehicle.location}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Daily Rate</p>
                            <p className="font-semibold text-orange-600">LKR {vehicle.price.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Rating</p>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="font-semibold">{vehicle.rating}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-600">Bookings</p>
                            <p className="font-semibold">{vehicle.bookings}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Earnings</p>
                            <p className="font-semibold text-green-600">{vehicle.earnings}</p>
                          </div>
                        </div>

                        <div className="p-3 bg-orange-50 rounded-lg">
                          <p className="text-sm text-orange-700">
                            <Clock className="w-4 h-4 inline mr-1" />
                            {vehicle.nextBooking}
                          </p>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-orange-300 text-orange-600 bg-transparent"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-gray-300 text-gray-600 bg-transparent"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Bookings</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Bookings Table */}
              <Card className="border-orange-200">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Customer</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Vehicle</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Dates</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Amount</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Rating</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                  <Users className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">{booking.customer}</p>
                                  <p className="text-sm text-gray-600">Customer</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{booking.vehicle}</td>
                            <td className="py-3 px-4 text-gray-600">{booking.dates}</td>
                            <td className="py-3 px-4 font-semibold text-gray-800">{booking.amount}</td>
                            <td className="py-3 px-4">
                              <Badge
                                variant={
                                  booking.status === "Completed"
                                    ? "default"
                                    : booking.status === "Upcoming"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={
                                  booking.status === "Completed"
                                    ? "bg-green-500 text-white"
                                    : booking.status === "Upcoming"
                                      ? "bg-blue-500 text-white"
                                      : ""
                                }
                              >
                                {booking.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              {booking.rating ? (
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                  <span>{booking.rating}</span>
                                </div>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-orange-300 text-orange-600 bg-transparent"
                                >
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-gray-300 text-gray-600 bg-transparent"
                                >
                                  <Mail className="w-3 h-3" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Earnings Tab */}
          {activeTab === "earnings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-800">Earnings Overview</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800">This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-green-600">LKR 127,500</p>
                    <p className="text-sm text-gray-600 mt-1">+15.3% from last month</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800">Total Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-orange-600">LKR 850,000</p>
                    <p className="text-sm text-gray-600 mt-1">Since joining</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800">Pending Payout</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-blue-600">LKR 25,500</p>
                    <p className="text-sm text-gray-600 mt-1">Available Dec 30</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
