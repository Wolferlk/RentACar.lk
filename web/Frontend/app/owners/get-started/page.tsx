"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign, Shield, TrendingUp, CheckCircle, Upload, MapPin, Camera, FileText, Sparkles, ArrowRight, ArrowLeft } from "lucide-react"

export default function OwnersGetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Make up to LKR 60,000+ per month by renting out your idle vehicle",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Full Insurance Coverage",
      description: "Comprehensive insurance protection for your vehicle and peace of mind",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Flexible Scheduling",
      description: "Set your own availability and pricing. You're in complete control",
      color: "from-orange-500 to-purple-500",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Vehicle Information",
      description: "Tell us about your car",
    },
    {
      number: 2,
      title: "Photos & Documents",
      description: "Upload photos and paperwork",
    },
    {
      number: 3,
      title: "Pricing & Availability",
      description: "Set your rates and schedule",
    },
    {
      number: 4,
      title: "Verification",
      description: "Complete verification process",
    },
  ]

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

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
              <Sparkles className="w-4 h-4 mr-1" />
              Start Earning Today
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              List Your Car
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn your idle vehicle into a money-making asset. Join thousands of car owners earning extra income on RentACar.lk
            </p>
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
              Why List With Us?
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
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing Form */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              List Your Vehicle
            </h2>
            <p className="text-xl text-gray-600">
              Complete the form below to get started. It takes less than 10 minutes!
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step.number 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-full h-1 mx-4 ${
                      currentStep > step.number ? 'bg-orange-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-800 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <Card className="border-orange-200 shadow-xl">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Make</label>
                      <Input placeholder="Toyota" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Model</label>
                      <Input placeholder="Prius" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Year</label>
                      <Input placeholder="2020" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">License Plate</label>
                      <Input placeholder="ABC-1234" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Fuel Type</label>
                      <select className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>Select fuel type</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Hybrid</option>
                        <option>Electric</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Transmission</label>
                      <select className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>Select transmission</option>
                        <option>Automatic</option>
                        <option>Manual</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Number of Seats</label>
                      <select className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                        <option>Select seats</option>
                        <option>2</option>
                        <option>4</option>
                        <option>5</option>
                        <option>7</option>
                        <option>8+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Mileage (km)</label>
                      <Input placeholder="50000" className="border-orange-200 focus:border-orange-400" />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <label className="text-sm font-medium text-gray-700">Vehicle Description</label>
                    <Textarea 
                      placeholder="Describe your vehicle's condition, features, and any special notes..."
                      className="border-orange-200 focus:border-orange-400 min-h-[100px]"
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Photos & Documents</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Vehicle Photos</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Front", "Back", "Interior", "Dashboard", "Engine", "Side"].map((angle) => (
                          <div key={angle} className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors cursor-pointer">
                            <Camera className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-700">{angle} View</p>
                            <p className="text-xs text-gray-500 mt-1">Click to upload</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Required Documents</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Vehicle Registration",
                          "Insurance Certificate",
                          "Revenue License",
                          "Driver's License"
                        ].map((doc) => (
                          <div key={doc} className="border-2 border-dashed border-orange-300 rounded-lg p-4 text-center hover:border-orange-400 transition-colors">
                            <FileText className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-700">{doc}</p>
                            <Button variant="outline" size="sm" className="mt-2 border-orange-300 text-orange-600 hover:bg-orange-50">
                              <Upload className="w-4 h-4 mr-1" />
                              Upload
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Pricing & Availability</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Set Your Daily Rate</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Weekday Rate (LKR)</label>
                          <Input placeholder="4500" className="border-orange-200 focus:border-orange-400" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Weekend Rate (LKR)</label>
                          <Input placeholder="5500" className="border-orange-200 focus:border-orange-400" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Monthly Rate (LKR)</label>
                          <Input placeholder="120000" className="border-orange-200 focus:border-orange-400" />
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-700">
                          <strong>Suggested rate:</strong> LKR 4,500 - 6,000 per day based on similar vehicles in your area
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Location & Pickup</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Pickup Location</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                            <Input placeholder="Enter address" className="pl-10 border-orange-200 focus:border-orange-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Delivery Available?</label>
                          <select className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none">
                            <option>No delivery</option>
                            <option>Free delivery (5km)</option>
                            <option>Paid delivery</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Availability</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-7 gap-2">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                            <div key={day} className="text-center">
                              <p className="text-sm font-medium text-gray-700 mb-2">{day}</p>
                              <input type="checkbox" className="w-5 h-5 text-orange-500 rounded border-orange-300 focus:ring-orange-500" defaultChecked />
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Available From</label>
                            <Input type="time" className="border-orange-200 focus:border-orange-400" defaultValue="08:00" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Available Until</label>
                            <Input type="time" className="border-orange-200 focus:border-orange-400" defaultValue="18:00" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Verification & Final Steps</h3>
                  <div className="space-y-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-orange-500" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Almost Done!</h4>
                      <p className="text-gray-600 mb-6">
                        We'll review your listing and get back to you within 24 hours.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">What happens next?</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Our team will verify your documents and photos
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          You'll receive a confirmation email once approved
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Your car will be live on our platform and ready for bookings
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Start earning money from day one!
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-orange-500 rounded border-orange-300 focus:ring-orange-500" />
                        <label className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-orange-600 hover:underline">Terms of Service</a> and <a href="#" className="text-orange-600 hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 text-orange-500 rounded border-orange-300 focus:ring-orange-500" />
                        <label className="text-sm text-gray-700">
                          I confirm that all information provided is accurate and complete
                        </label>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-orange-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Submit Listing
                    <Upload className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}