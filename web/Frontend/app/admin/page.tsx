"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Users,
  Car,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Shield,
  BarChart3,
  Calendar,
  MapPin,
  Star,
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Users",
      value: "15,234",
      change: "+12.5%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Vehicles",
      value: "5,847",
      change: "+8.2%",
      icon: Car,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Monthly Revenue",
      value: "LKR 2.4M",
      change: "+15.3%",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Active Bookings",
      value: "1,892",
      change: "+5.7%",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "Kamal Perera",
      email: "kamal@email.com",
      type: "Owner",
      status: "Active",
      joinDate: "2024-01-15",
      vehicles: 2,
    },
    {
      id: 2,
      name: "Saman Silva",
      email: "saman@email.com",
      type: "Customer",
      status: "Pending",
      joinDate: "2024-01-14",
      vehicles: 0,
    },
    {
      id: 3,
      name: "Priya Fernando",
      email: "priya@email.com",
      type: "Owner",
      status: "Active",
      joinDate: "2024-01-13",
      vehicles: 1,
    },
  ]

  const recentVehicles = [
    {
      id: 1,
      name: "Toyota Prius 2020",
      owner: "Kamal Perera",
      location: "Colombo 03",
      status: "Active",
      price: 4500,
      rating: 4.8,
      bookings: 24,
    },
    {
      id: 2,
      name: "Honda Vezel 2019",
      owner: "Saman Silva",
      location: "Kandy",
      status: "Pending",
      price: 5200,
      rating: 4.9,
      bookings: 18,
    },
    {
      id: 3,
      name: "BMW X3 2021",
      owner: "Rajesh Mendis",
      location: "Colombo 07",
      status: "Active",
      price: 12000,
      rating: 4.9,
      bookings: 15,
    },
  ]

  const pendingVerifications = [
    {
      id: 1,
      type: "Vehicle",
      item: "Nissan Leaf 2022",
      owner: "Priya Fernando",
      submitted: "2024-01-15",
      documents: ["Registration", "Insurance", "Revenue License"],
    },
    {
      id: 2,
      type: "User",
      item: "Chaminda Rathnayake",
      owner: "Self",
      submitted: "2024-01-14",
      documents: ["NIC", "Driving License"],
    },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "vehicles", label: "Vehicles", icon: Car },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "verification", label: "Verification", icon: Shield },
    { id: "reports", label: "Reports", icon: TrendingUp },
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
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 mt-2">Manage your RentACar.lk platform</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
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

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Users */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Recent Users</CardTitle>
                    <CardDescription>Latest user registrations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant={user.type === "Owner" ? "default" : "secondary"}>{user.type}</Badge>
                              <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-600">{user.joinDate}</p>
                            {user.vehicles > 0 && <p className="text-xs text-orange-600">{user.vehicles} vehicles</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pending Verifications */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Pending Verifications</CardTitle>
                    <CardDescription>Items requiring admin approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingVerifications.map((item) => (
                        <div key={item.id} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-medium text-gray-800">{item.item}</p>
                              <p className="text-sm text-gray-600">by {item.owner}</p>
                            </div>
                            <Badge className="bg-yellow-500 text-white">
                              <Clock className="w-3 h-3 mr-1" />
                              {item.type}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-1">
                              {item.documents.map((doc, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Search and Filters */}
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search users by name, email, or phone..."
                        className="pl-10 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <select className="px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>All Types</option>
                        <option>Customers</option>
                        <option>Owners</option>
                      </select>
                      <select className="px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Suspended</option>
                      </select>
                      <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Users Table */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">All Users</CardTitle>
                  <CardDescription>Manage platform users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-700">User</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Join Date</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Vehicles</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <p className="font-medium text-gray-800">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant={user.type === "Owner" ? "default" : "secondary"}>{user.type}</Badge>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{user.joinDate}</td>
                            <td className="py-3 px-4 text-gray-600">{user.vehicles}</td>
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
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-300 text-red-600 bg-transparent"
                                >
                                  <UserX className="w-3 h-3" />
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

          {/* Vehicles Tab */}
          {activeTab === "vehicles" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Search and Filters */}
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        placeholder="Search vehicles by make, model, or owner..."
                        className="pl-10 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <select className="px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Suspended</option>
                      </select>
                      <select className="px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>All Locations</option>
                        <option>Colombo</option>
                        <option>Kandy</option>
                        <option>Galle</option>
                      </select>
                      <Button variant="outline" className="border-orange-300 text-orange-600 bg-transparent">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vehicles Table */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">All Vehicles</CardTitle>
                  <CardDescription>Manage platform vehicles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Vehicle</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Owner</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Rating</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentVehicles.map((vehicle) => (
                          <tr key={vehicle.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                  <Car className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">{vehicle.name}</p>
                                  <p className="text-sm text-gray-600">{vehicle.bookings} bookings</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{vehicle.owner}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                                <span className="text-gray-600">{vehicle.location}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant={vehicle.status === "Active" ? "default" : "secondary"}>
                                {vehicle.status}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-gray-600">LKR {vehicle.price.toLocaleString()}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                <span className="text-gray-600">{vehicle.rating}</span>
                              </div>
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
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-300 text-red-600 bg-transparent"
                                >
                                  <Trash2 className="w-3 h-3" />
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

          {/* Verification Tab */}
          {activeTab === "verification" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Verifications */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">User Verifications</CardTitle>
                    <CardDescription>Pending user document verifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingVerifications
                        .filter((item) => item.type === "User")
                        .map((item) => (
                          <div key={item.id} className="p-4 border border-orange-200 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <p className="font-medium text-gray-800">{item.item}</p>
                                <p className="text-sm text-gray-600">Submitted: {item.submitted}</p>
                              </div>
                              <Badge className="bg-yellow-500 text-white">Pending</Badge>
                            </div>
                            <div className="space-y-2 mb-4">
                              {item.documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                  <span className="text-sm text-gray-700">{doc}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-orange-300 text-orange-600 bg-transparent"
                                  >
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                  </Button>
                                </div>
                              ))}
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white flex-1">
                                <UserCheck className="w-3 h-3 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-300 text-red-600 hover:bg-red-50 flex-1 bg-transparent"
                              >
                                <UserX className="w-3 h-3 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Vehicle Verifications */}
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800">Vehicle Verifications</CardTitle>
                    <CardDescription>Pending vehicle document verifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingVerifications
                        .filter((item) => item.type === "Vehicle")
                        .map((item) => (
                          <div key={item.id} className="p-4 border border-orange-200 rounded-lg">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <p className="font-medium text-gray-800">{item.item}</p>
                                <p className="text-sm text-gray-600">Owner: {item.owner}</p>
                                <p className="text-sm text-gray-600">Submitted: {item.submitted}</p>
                              </div>
                              <Badge className="bg-yellow-500 text-white">Pending</Badge>
                            </div>
                            <div className="space-y-2 mb-4">
                              {item.documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                  <span className="text-sm text-gray-700">{doc}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-orange-300 text-orange-600 bg-transparent"
                                  >
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                  </Button>
                                </div>
                              ))}
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white flex-1">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-red-300 text-red-600 hover:bg-red-50 flex-1 bg-transparent"
                              >
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Reject
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
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
