"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Linkedin, Github, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent("Portfolio Contact")
    const body = encodeURIComponent(
      "Hello Vipin,\n\nI found your portfolio and would like to get in touch.\n\nBest regards,",
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

  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Vipin Soni</h3>
              <p className="text-sm text-gray-400 max-w-md">
                Data Analyst & MIS Expert transforming complex data into actionable business insights.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleEmailClick}
                className="p-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg transition-colors group"
                aria-label="Send Email"
                type="button"
              >
                <Mail className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors group-hover:scale-110" />
              </button>
              <Link
                href="https://linkedin.com/in/er-vipinsoni/"
                target="_blank"
                className="p-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </Link>
              <Link
                href="https://github.com/VipinSoni-Git"
                target="_blank"
                className="p-3 bg-gray-800 border border-gray-700 hover:border-yellow-400 rounded-lg transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© {currentYear} Vipin Soni. All rights reserved.</p>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
