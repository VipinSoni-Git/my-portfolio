"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, Github } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const subject = encodeURIComponent("Hiring Inquiry - Portfolio Contact")
    const body = encodeURIComponent(
      "Hello Vipin,\n\nI found your portfolio and would like to discuss a potential hiring opportunity with you.\n\nPlease let me know your availability for a discussion.\n\nBest regards,",
    )

    const mailtoUrl = `mailto:mr.vipinsoniofficial@gmail.com?subject=${subject}&body=${body}`

    try {
      window.location.href = mailtoUrl
    } catch (error) {
      try {
        window.open(mailtoUrl, "_blank")
      } catch (fallbackError) {
        navigator.clipboard
          ?.writeText("mr.vipinsoniofficial@gmail.com")
          .then(() => {
            alert("Email address copied to clipboard: mr.vipinsoniofficial@gmail.com")
          })
          .catch(() => {
            alert("Please email me at: mr.vipinsoniofficial@gmail.com")
          })
      }
    }
  }

  const handleDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const subject = encodeURIComponent("Portfolio Contact")
    const body = encodeURIComponent(
      "Hello Vipin,\n\nI came across your portfolio and would like to connect.\n\nBest regards,",
    )

    const mailtoUrl = `mailto:mr.vipinsoniofficial@gmail.com?subject=${subject}&body=${body}`

    try {
      window.location.href = mailtoUrl
    } catch (error) {
      try {
        window.open(mailtoUrl, "_blank")
      } catch (fallbackError) {
        navigator.clipboard
          ?.writeText("mr.vipinsoniofficial@gmail.com")
          .then(() => {
            alert("Email address copied to clipboard: mr.vipinsoniofficial@gmail.com")
          })
          .catch(() => {
            alert("Please email me at: mr.vipinsoniofficial@gmail.com")
          })
      }
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mr.vipinsoniofficial@gmail.com",
      href: "mailto:mr.vipinsoniofficial@gmail.com",
      clickHandler: handleDirectEmail,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 704 296 4677",
      href: "tel:+917042964677",
      clickHandler: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram, Haryana, India",
      href: "#",
      clickHandler: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/er-vipinsoni/",
      clickHandler: null,
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/VipinSoni-Git",
      clickHandler: null,
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mr.vipinsoniofficial@gmail.com",
      clickHandler: handleDirectEmail,
    },
  ]

  return (
    <section id="contact" className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Get In</span> <span className="text-yellow-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">Let's discuss how data analytics can drive your business forward</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
                        <info.icon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white">{info.label}</p>
                        {info.href === "#" ? (
                          <p className="text-gray-300 text-sm">{info.value}</p>
                        ) : info.clickHandler ? (
                          <button
                            onClick={info.clickHandler}
                            className="text-gray-300 text-sm hover:text-yellow-400 transition-colors text-left"
                            type="button"
                          >
                            {info.value}
                          </button>
                        ) : (
                          <Link
                            href={info.href}
                            className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                          >
                            {info.value}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) =>
                    social.clickHandler ? (
                      <button
                        key={index}
                        onClick={social.clickHandler}
                        className="p-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg transition-colors group"
                        aria-label={social.label}
                        type="button"
                      >
                        <social.icon className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors group-hover:scale-110" />
                      </button>
                    ) : (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        className="p-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg transition-colors group"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                      </Link>
                    ),
                  )}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-white">Available for:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Data Analytics Consulting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Power BI Dashboard Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>MIS Implementation & Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Python Analytics Solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Full-time Opportunities</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium group"
                      onClick={handleHireMe}
                      type="button"
                    >
                      <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Hire Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
                      <h4 className="text-lg font-semibold mb-3 text-white">Message Sent Successfully!</h4>
                      <p className="text-gray-300">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-white">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-white">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-white">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400"
                          placeholder="What would you like to discuss?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-white">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="bg-gray-700 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                          placeholder="Tell me about your project, requirements, or any questions you have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium group"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
