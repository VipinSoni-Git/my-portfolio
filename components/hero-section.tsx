"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Github, Linkedin, Play } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleDownloadCV = () => {
    // Use the direct Google Drive download link
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1UotmXV9abEQW6C73ZBbS8JVlF3Zsr9fu"
    window.open(downloadUrl, "_blank")
  }

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleEmailContact = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const subject = encodeURIComponent("Portfolio Contact - Let's Connect")
    const body = encodeURIComponent(
      "Hello Vipin,\n\nI came across your portfolio and would like to connect with you.\n\nBest regards,",
    )

    const mailtoUrl = `mailto:mr.vipinsoniofficial@gmail.com?subject=${subject}&body=${body}`

    try {
      // Primary method: direct navigation
      window.location.href = mailtoUrl
    } catch (error) {
      // Fallback method: open in new window
      try {
        window.open(mailtoUrl, "_blank")
      } catch (fallbackError) {
        // Final fallback: copy email to clipboard and alert user
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

  const stats = [
    { value: "7.9+", label: "Years of Experience", color: "text-yellow-300" },
    { value: "5+", label: "Projects Completed", color: "text-green-300" },
    { value: "6+", label: "Teams Managed", color: "text-blue-300" },
    { value: "100%", label: "Client Satisfaction", color: "text-purple-300" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Available for new opportunities
                </div>

                <div className="space-y-4">
                  <p className="text-gray-400 text-lg font-mono">Business Analyst &amp; MIS Expert</p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    <span className="text-white">Hello I'm</span>
                    <br />
                    <span className="text-yellow-400">Vipin Soni</span>
                  </h1>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  I excel at crafting elegant data solutions and am proficient in various programming languages and
                  analytics technologies. Transforming complex data into actionable insights with{" "}
                  <span className="text-yellow-400 font-semibold">7.9+ years</span> of experience.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium group"
                  onClick={handleDownloadCV}
                >
                  <Play className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Download CV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                  onClick={handleGetInTouch}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/VipinSoni-Git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/er-vipinsoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <button
                  onClick={handleEmailContact}
                  className="p-3 rounded-full border border-gray-700 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-colors group"
                  aria-label="Send Email"
                  type="button"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column - Stats with High Contrast */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-gray-800/80 border border-gray-600 hover:border-yellow-400/50 transition-colors group"
                  >
                    <div
                      className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform drop-shadow-lg`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-100 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-yellow-400/10 to-green-400/10 border border-yellow-400/20">
                <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
                <p className="text-gray-300 mb-4">
                  Leading data analytics initiatives at iCubesWire, developing Power BI dashboards, and managing the
                  InfluenceZ platform data ecosystem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">Power BI</span>
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">Data Analytics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <button onClick={handleScrollToAbout} className="group">
              <ArrowDown className="h-6 w-6 mx-auto animate-bounce text-yellow-400 group-hover:text-yellow-300 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
