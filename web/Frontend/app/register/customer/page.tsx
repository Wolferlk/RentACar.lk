"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  CreditCard,
  Calendar,
  CheckCircle,
  Car,
  Shield,
  Star,
  Users,
} from "lucide-react"

export default function CustomerRegistrationPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nic: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
    emergencyContact: "",
    emergencyPhone: "",
    licenseNumber: "",
    licenseExpiry: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
  }

  const benefits = [
    {
      icon: Car,
      title: "Wide Selection",
      description: "Access to thousands of verified vehicles",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All bookings are insured and protected",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees",
      color: "from-orange-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-4 bg-orange-100 text-orange-700">
                  <Users className="w-4 h-4 mr-1" />
                  Customer Registration
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Join RentACar.lk
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create your account and start renting vehicles from trusted owners across Sri Lanka.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Why Join Us?</h3>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                <h4 className="font-semibold text-gray-800 mb-2">Quick Registration</h4>
                <p className="text-gray-600 text-sm">
                  Complete your registration in under 5 minutes and start booking vehicles immediately.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md mx-auto w-full"
            >
              <Card className="border-orange-200 shadow-xl bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Create Account</CardTitle>
                  <CardDescription className="text-gray-600">Join the RentACar.lk community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Personal Information</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                          <Input
                            placeholder="John"
                            className="pl-10 border-orange-200 focus:border-orange-400"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name *</label>
                        <Input
                          placeholder="Doe"
                          className="border-orange-200 focus:border-orange-400"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10 border-orange-200 focus:border-orange-400"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input
                          placeholder="+94 77 123 4567"
                          className="pl-10 border-orange-200 focus:border-orange-400"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Date of Birth *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                          <Input
                            type="date"
                            className="pl-10 border-orange-200 focus:border-orange-400"
                            value={formData.dateOfBirth}
                            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">NIC Number *</label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                          <Input
                            placeholder="123456789V"
                            className="pl-10 border-orange-200 focus:border-orange-400"
                            value={formData.nic}
                            onChange={(e) => handleInputChange("nic", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Address *</label>
                      <Input
                        placeholder="Enter your address"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">City *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input
                          placeholder="Colombo"
                          className="pl-10 border-orange-200 focus:border-orange-400"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Emergency Contact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Contact Name *</label>
                        <Input
                          placeholder="Emergency contact"
                          className="border-orange-200 focus:border-orange-400"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Contact Phone *</label>
                        <Input
                          placeholder="+94 77 123 4567"
                          className="border-orange-200 focus:border-orange-400"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Driving License */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Driving License</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">License Number *</label>
                        <Input
                          placeholder="B1234567"
                          className="border-orange-200 focus:border-orange-400"
                          value={formData.licenseNumber}
                          onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Expiry Date *</label>
                        <Input
                          type="date"
                          className="border-orange-200 focus:border-orange-400"
                          value={formData.licenseExpiry}
                          onChange={(e) => handleInputChange("licenseExpiry", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Account Security</h4>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          className="pl-10 pr-10 border-orange-200 focus:border-orange-400"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-orange-500"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 border-orange-200 focus:border-orange-400"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-orange-500"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to the{" "}
                        <a href="/terms" className="text-orange-600 hover:text-orange-700">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-orange-600 hover:text-orange-700">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.agreeMarketing}
                        onCheckedChange={(checked) => handleInputChange("agreeMarketing", checked)}
                        className="mt-1"
                      />
                      <label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
                        I would like to receive promotional emails and updates about new features
                      </label>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    disabled={!formData.agreeTerms}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Create Account
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <a href="/login" className="text-orange-600 hover:text-orange-700 font-medium">
                        Sign in here
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
