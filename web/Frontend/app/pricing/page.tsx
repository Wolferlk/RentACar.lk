"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Shield, Users, Car, Calculator, DollarSign } from "lucide-react"

export default function PricingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
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
              <DollarSign className="w-4 h-4 mr-1" />
              Transparent Pricing
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
              Simple Pricing
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that works best for you. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Customer Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl relative">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Customer</CardTitle>
                  <CardDescription className="text-gray-600">Perfect for renters</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-800">Free</span>
                    <span className="text-gray-600 ml-2">to join</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      "Browse unlimited vehicles",
                      "Instant booking confirmation",
                      "24/7 customer support",
                      "Secure payment processing",
                      "Insurance coverage included",
                      "Mobile app access",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                    Get Started Free
                  </Button>
                  <p className="text-center text-sm text-gray-500">Pay only when you rent</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Car Owner Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-orange-300 hover:border-orange-400 transition-all duration-300 hover:shadow-xl relative bg-gradient-to-br from-orange-50 to-white">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Car Owner</CardTitle>
                  <CardDescription className="text-gray-600">For vehicle owners</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-800">15%</span>
                    <span className="text-gray-600 ml-2">commission</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      "List unlimited vehicles",
                      "Professional photography",
                      "Dynamic pricing optimization",
                      "Comprehensive insurance",
                      "Priority customer support",
                      "Analytics dashboard",
                      "Marketing promotion",
                      "Fast payment processing",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    Start Earning Today
                  </Button>
                  <p className="text-center text-sm text-gray-500">Keep 85% of rental income</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl relative">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">Premium Owner</CardTitle>
                  <CardDescription className="text-gray-600">For fleet owners</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-800">10%</span>
                    <span className="text-gray-600 ml-2">commission</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {[
                      "Everything in Car Owner",
                      "Dedicated account manager",
                      "Custom pricing strategies",
                      "Advanced analytics",
                      "Priority listing placement",
                      "Bulk vehicle management",
                      "API access",
                      "White-label options",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white">
                    Contact Sales
                  </Button>
                  <p className="text-center text-sm text-gray-500">For 10+ vehicles</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <Calculator className="w-4 h-4 mr-1" />
              Earnings Calculator
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Calculate Your Earnings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how much you could earn by listing your vehicle on RentACar.lk
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">Estimate Your Income</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Daily Rental Rate (LKR)</label>
                        <input
                          type="number"
                          placeholder="5000"
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Days Rented Per Month</label>
                        <input
                          type="number"
                          placeholder="15"
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800">Your Potential Earnings</h3>
                    <div className="bg-white rounded-xl p-6 border border-orange-200">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Gross Monthly Income</span>
                          <span className="font-semibold text-gray-800">LKR 75,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Platform Fee (15%)</span>
                          <span className="font-semibold text-red-600">- LKR 11,250</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-800">Net Monthly Income</span>
                            <span className="text-2xl font-bold text-orange-600">LKR 63,750</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      Start Listing Your Car
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-700">
              <Shield className="w-4 h-4 mr-1" />
              Frequently Asked
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Pricing Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Are there any hidden fees?",
                answer:
                  "No hidden fees! Our commission structure is transparent. Customers pay the rental rate plus applicable taxes, and owners keep 85% of the rental income.",
              },
              {
                question: "When do I get paid?",
                answer:
                  "Payments are processed within 24-48 hours after the rental period ends, directly to your registered bank account or mobile wallet.",
              },
              {
                question: "What's included in the platform fee?",
                answer:
                  "The platform fee covers insurance, customer support, payment processing, marketing, and platform maintenance.",
              },
              {
                question: "Can I change my pricing?",
                answer:
                  "Yes! You have full control over your vehicle pricing and can adjust rates anytime through your dashboard.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-orange-100 hover:border-orange-300 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
