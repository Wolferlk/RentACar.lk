"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Car,
  Upload,
  Camera,
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Eye,
  EyeOff,
  Lock,
  CreditCard,
} from "lucide-react"

export default function OwnerRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nic: "",
    address: "",
    city: "",
    password: "",
    confirmPassword: "",
    // Vehicle Info
    make: "",
    model: "",
    year: "",
    licensePlate: "",
    fuelType: "",
    transmission: "",
    seats: "",
    mileage: "",
    description: "",
    // Pricing
    dailyRate: "",
    weeklyRate: "",
    monthlyRate: "",
    pickupLocation: "",
    deliveryAvailable: false,
    // Documents
    documents: {},
    photos: {},
  })

  const totalSteps = 5

  const steps = [
    { number: 1, title: "Personal Info", description: "Your basic information" },
    { number: 2, title: "Vehicle Details", description: "About your vehicle" },
    { number: 3, title: "Photos", description: "Vehicle photos" },
    { number: 4, title: "Documents", description: "Required paperwork" },
    { number: 5, title: "Pricing & Location", description: "Set your rates" },
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <Car className="w-4 h-4 mr-1" />
              Car Owner Registration
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Start Earning with Your Car
            </h1>
            <p className="text-xl text-gray-600">Complete your registration to list your vehicle</p>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.number
                        ? "bg-orange-500 text-white"
                        : currentStep === step.number
                          ? "bg-orange-100 text-orange-600 border-2 border-orange-500"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-full h-1 mx-4 ${currentStep > step.number ? "bg-orange-500" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-4 text-center">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-800 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <Card className="border-orange-200 shadow-xl">
            <CardContent className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        <Input
                          type="email"
                          placeholder="john@example.com"
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
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-700">Address *</label>
                      <Textarea
                        placeholder="Enter your full address"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                      />
                    </div>
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
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-10 border-orange-200 focus:border-orange-400"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Vehicle Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Make *</label>
                      <Input
                        placeholder="Toyota"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.make}
                        onChange={(e) => handleInputChange("make", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Model *</label>
                      <Input
                        placeholder="Prius"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.model}
                        onChange={(e) => handleInputChange("model", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Year *</label>
                      <Input
                        placeholder="2020"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.year}
                        onChange={(e) => handleInputChange("year", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">License Plate *</label>
                      <Input
                        placeholder="ABC-1234"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.licensePlate}
                        onChange={(e) => handleInputChange("licensePlate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Fuel Type *</label>
                      <select
                        className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                        value={formData.fuelType}
                        onChange={(e) => handleInputChange("fuelType", e.target.value)}
                      >
                        <option value="">Select fuel type</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Transmission *</label>
                      <select
                        className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                        value={formData.transmission}
                        onChange={(e) => handleInputChange("transmission", e.target.value)}
                      >
                        <option value="">Select transmission</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Number of Seats *</label>
                      <select
                        className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                        value={formData.seats}
                        onChange={(e) => handleInputChange("seats", e.target.value)}
                      >
                        <option value="">Select seats</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="8+">8+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Mileage (km)</label>
                      <Input
                        placeholder="50000"
                        className="border-orange-200 focus:border-orange-400"
                        value={formData.mileage}
                        onChange={(e) => handleInputChange("mileage", e.target.value)}
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-700">Vehicle Description</label>
                      <Textarea
                        placeholder="Describe your vehicle's condition, features, and any special notes..."
                        className="border-orange-200 focus:border-orange-400 min-h-[100px]"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Photos */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Vehicle Photos</h3>
                  <p className="text-gray-600 mb-6">Upload clear photos of your vehicle from different angles</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["Front View", "Back View", "Interior", "Dashboard", "Engine Bay", "Side View"].map((angle) => (
                      <div
                        key={angle}
                        className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors cursor-pointer"
                      >
                        <Camera className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">{angle}</p>
                        <p className="text-xs text-gray-500 mt-1">Click to upload</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-orange-300 text-orange-600 bg-transparent"
                        >
                          <Upload className="w-3 h-3 mr-1" />
                          Upload
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700">
                      <strong>Tips:</strong> High-quality photos increase your booking chances by up to 40%. Make sure
                      your vehicle is clean and well-lit.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Documents */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Required Documents</h3>
                  <p className="text-gray-600 mb-6">Upload the following documents for verification</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: "Vehicle Registration", required: true },
                      { name: "Insurance Certificate", required: true },
                      { name: "Revenue License", required: true },
                      { name: "Driver's License", required: true },
                      { name: "NIC Copy", required: true },
                      { name: "Utility Bill", required: false },
                    ].map((doc) => (
                      <div
                        key={doc.name}
                        className="border-2 border-dashed border-orange-300 rounded-lg p-4 text-center hover:border-orange-400 transition-colors"
                      >
                        <FileText className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {doc.name} {doc.required && <span className="text-red-500">*</span>}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-orange-300 text-orange-600 bg-transparent"
                        >
                          <Upload className="w-4 h-4 mr-1" />
                          Upload
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Note:</strong> All documents will be verified by our team within 24-48 hours. You'll
                      receive an email confirmation once approved.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Pricing & Location */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Pricing & Location</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Set Your Rates</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Daily Rate (LKR) *</label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                            <Input
                              placeholder="4500"
                              className="pl-10 border-orange-200 focus:border-orange-400"
                              value={formData.dailyRate}
                              onChange={(e) => handleInputChange("dailyRate", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Weekly Rate (LKR)</label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                            <Input
                              placeholder="28000"
                              className="pl-10 border-orange-200 focus:border-orange-400"
                              value={formData.weeklyRate}
                              onChange={(e) => handleInputChange("weeklyRate", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Monthly Rate (LKR)</label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                            <Input
                              placeholder="100000"
                              className="pl-10 border-orange-200 focus:border-orange-400"
                              value={formData.monthlyRate}
                              onChange={(e) => handleInputChange("monthlyRate", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-700">
                          <strong>Suggested rate:</strong> LKR 4,500 - 6,000 per day based on similar vehicles in your
                          area
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Pickup Location</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Pickup Address *</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                            <Input
                              placeholder="Enter pickup address"
                              className="pl-10 border-orange-200 focus:border-orange-400"
                              value={formData.pickupLocation}
                              onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">Delivery Options</label>
                          <div className="flex items-center space-x-2 mt-3">
                            <Checkbox
                              id="delivery"
                              checked={formData.deliveryAvailable}
                              onCheckedChange={(checked) => handleInputChange("deliveryAvailable", checked)}
                            />
                            <label htmlFor="delivery" className="text-sm text-gray-700">
                              I can deliver the vehicle (additional charges may apply)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Earnings Estimate</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-orange-600">LKR 63,750</p>
                          <p className="text-sm text-gray-600">Monthly potential (15 days)</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-orange-600">LKR 127,500</p>
                          <p className="text-sm text-gray-600">Monthly potential (30 days)</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-orange-600">85%</p>
                          <p className="text-sm text-gray-600">Your share (15% platform fee)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="border-orange-300 text-orange-600 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Registration
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
