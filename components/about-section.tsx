"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">About</span> <span className="text-yellow-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a detail-focused Business Analyst with expertise in forecasting, process validation, and business needs
                analysis. With over <span className="text-yellow-400 font-semibold">7.11 years of experience</span>{" "}
                across multiple MNCs, I specialize in transforming complex datasets into strategic business insights.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently serving as{" "}
                <span className="text-green-400 font-semibold">Assistant Manager MIS & Data Analytics</span> at
                iCubesWire, I lead data-driven initiatives that optimize business performance and drive decision-making
                processes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies in leveraging advanced analytics tools like{" "}
                <span className="text-yellow-400 font-semibold">Power BI</span>, {" "}
                <span className="text-blue-400 font-semibold">MySQL</span> and{" "}
                <span className="text-green-400 font-semibold">Python</span> to create compelling visualizations and
                automated reporting solutions.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Data Analytics", "Power BI", "Python", "MIS", "Business Intelligence", "Excel"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-gray-700 hover:border-yellow-400/50 transition-colors group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors">
                    Current Role
                  </h3>
                  <p className="text-white font-medium">Assistant Manager MIS & Data Analytics</p>
                  <p className="text-gray-400">iCubesWire - Global Ad Tech Platform</p>
                  <p className="text-sm text-gray-500 mt-2">Dec 2023 – Present</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400/50 transition-colors group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                    Location
                  </h3>
                  <p className="text-white">Gurugram, Haryana, India</p>
                  <p className="text-gray-400">Available for Remote & On-site</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-colors group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                    Experience
                  </h3>
                  <p className="text-white">7.11+ Years in Data Analytics & MIS</p>
                  <p className="text-gray-400">Multiple MNCs & Industries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
