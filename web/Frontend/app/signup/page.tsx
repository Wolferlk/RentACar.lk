"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Mail, Lock, Eye, EyeOff, Car, User, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState<"customer" | "owner">("customer")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Welcome */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-4 bg-orange-100 text-orange-700">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Join RentACar.lk
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Create Your Account
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of users who trust RentACar.lk for their transportation needs.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">Why Join Us?</h3>
                {[
                  {
                    title: "Easy Registration",
                    description: "Quick and simple signup process with instant verification",
                  },
                  {
                    title: "Secure Platform",
                    description: "Your data is protected with enterprise-grade security",
                  },
                  {
                    title: "Flexible Options",
                    description: "Rent cars or list your own vehicles to earn money",
                  },
                  {
                    title: "Community Support",
                    description: "Join a trusted community of verified users",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md mx-auto w-full"
            >
              <Card className="border-orange-200 shadow-xl bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Get Started</CardTitle>
                  <CardDescription className="text-gray-600">Create your RentACar.lk account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* User Type Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">I want to:</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setUserType("customer")}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          userType === "customer"
                            ? "border-orange-500 bg-orange-50 text-orange-700"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                      >
                        <div className="text-center">
                          <User className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">Rent Cars</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setUserType("owner")}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          userType === "owner"
                            ? "border-orange-500 bg-orange-50 text-orange-700"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                      >
                        <div className="text-center">
                          <Car className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-sm font-medium">List Cars</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input placeholder="John" className="pl-10 border-orange-200 focus:border-orange-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Doe" className="border-orange-200 focus:border-orange-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      <Input
                        placeholder="+94 77 123 4567"
                        className="pl-10 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      <Input placeholder="Colombo" className="pl-10 border-orange-200 focus:border-orange-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10 border-orange-200 focus:border-orange-400"
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
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 border-orange-200 focus:border-orange-400"
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

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                      I agree to the{" "}
                      <Link href="/terms" className="text-orange-600 hover:text-orange-700">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-orange-600 hover:text-orange-700">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                    Create Account
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="text-center">
                    <p className="text-gray-600">
                      Already have an account?{" "}
                      <Link href="/login" className="text-orange-600 hover:text-orange-700 font-medium">
                        Sign in here
                      </Link>
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
