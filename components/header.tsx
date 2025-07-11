"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hiring Inquiry")
    const body = encodeURIComponent(
      "Hello Vipin,\n\nI would like to discuss a potential opportunity with you.\n\nBest regards,",
    )
    window.location.href = `mailto:mr.vipinsoniofficial@gmail.com?subject=${subject}&body=${body}`
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    if (href === "#") {
      // Scroll to top when logo is clicked
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-yellow-400/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavClick("#")}
            className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Vipin Soni
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-800/50"
              >
                {item.label}
              </button>
            ))}
            <Button className="ml-4 bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium" onClick={handleHireMe}>
              Hire Me
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-800/50"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium"
                  onClick={handleHireMe}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
