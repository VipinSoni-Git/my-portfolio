"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, BarChart3, Code, Database, TrendingUp, Eye } from "lucide-react"
import Link from "next/link"
import { BlinkitSlideshow } from "./blinkit-slideshow"

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Blinkit Sales Dashboard",
      description:
        "Comprehensive Power BI dashboard analyzing Blinkit's sales performance with interactive visualizations for outlet analysis, item categorization, and performance metrics. Features dynamic filtering, KPI tracking, and detailed data modeling for India's leading quick commerce platform.",
      category: "Power BI Dashboard",
      technologies: ["Power BI", "DAX", "Data Modeling", "Excel", "Business Intelligence"],
      icon: BarChart3,
      githubUrl: "https://github.com/VipinSoni-Git/Blinkit-Sales-Dashboard",
      liveUrl: "https://github.com/VipinSoni-Git/Blinkit-Sales-Dashboard",
      featured: true,
      hasSlideshow: true,
      embedIframe: true,
      metrics: {
        totalSales: "$1.20M",
        avgSales: "$140.99",
        items: "8523",
        rating: "3.92",
      },
    },
    {
      title: "InfluenceZ Analytics Platform",
      description:
        "AI-driven influencer marketing platform with comprehensive analytics dashboard featuring real-time collaboration metrics, influencer performance tracking, and campaign ROI analysis.",
      category: "Business Intelligence",
      technologies: ["Power BI", "ZOHO", "Excel", "Power Query", "AI Analytics"],
      icon: TrendingUp,
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      hasSlideshow: false,
    },
    {
      title: "Sales Forecasting Model",
      description:
        "Advanced forecasting model using Python and machine learning algorithms to predict sales trends and optimize inventory management for multiple product categories.",
      category: "Python Analytics",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Machine Learning"],
      icon: Code,
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      hasSlideshow: false,
    },
    {
      title: "MIS Reporting Automation",
      description:
        "Automated reporting system that generates daily, weekly, and monthly MIS reports with dynamic visualizations and automated email distribution to stakeholders.",
      category: "Process Automation",
      technologies: ["Excel VBA", "Power Query", "Power Automate", "Python"],
      icon: Database,
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      hasSlideshow: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Featured</span> <span className="text-yellow-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing data-driven solutions that deliver measurable business value through advanced analytics and
              visualization
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <CardContent className="p-0">
                    <div
                      className={`gap-0 ${
                        project.embedIframe ? "flex flex-col" : "grid lg:grid-cols-2"
                      }`}
                    >
                      {/* Project Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors">
                            <project.icon className="h-5 w-5 text-yellow-400" />
                          </div>
                          <Badge className="bg-green-400/20 text-green-400 border-green-400/30 hover:bg-green-400/30">
                            {project.category}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs border-gray-600 text-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {project.metrics && (
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-yellow-400/10 rounded-lg p-3">
                              <div className="text-yellow-400 font-semibold text-sm">Total Sales</div>
                              <div className="text-white text-lg font-bold">{project.metrics.totalSales}</div>
                            </div>
                            <div className="bg-green-400/10 rounded-lg p-3">
                              <div className="text-green-400 font-semibold text-sm">Avg Sales</div>
                              <div className="text-white text-lg font-bold">{project.metrics.avgSales}</div>
                            </div>
                          </div>
                        )}

                        <div className="flex gap-3">
                          {project.githubUrl !== "#" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 group/btn bg-transparent"
                              asChild
                            >
                              <Link href={project.githubUrl} target="_blank">
                                <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                                Code
                              </Link>
                            </Button>
                          )}
                          <Button
                            size="sm"
                            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 group/btn"
                            asChild
                          >
                            <Link href={project.liveUrl} target="_blank">
                              <Eye className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                              View Project
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Project Visual */}
                      <div className="relative">
                        {project.embedIframe ? (
  <div className="p-4">
    <iframe
      title={project.title}
      src={project.liveUrl}
      width="100%"
      height="450"
      className="w-full rounded-lg border-0"
      allowFullScreen
    />
  </div>
) : project.hasSlideshow ? (
  <BlinkitSlideshow />
) : (
  <div className="aspect-video bg-gradient-to-br from-yellow-400/20 to-green-400/20 flex items-center justify-center">
    <project.icon className="h-16 w-16 text-yellow-400/50" />
  </div>
)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-12 text-center text-white">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-gray-900/50 border-gray-700 hover:border-green-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-400/20 rounded-lg group-hover:bg-green-400/30 transition-colors">
                        <project.icon className="h-4 w-4 text-green-400" />
                      </div>
                      <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                        {project.category}
                      </Badge>
                    </div>

                    <h4 className="font-semibold mb-3 text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      className="p-0 h-auto text-xs text-green-400 hover:text-green-300 group/btn"
                      asChild
                    >
                      <Link href="#contact">
                        View Details
                        <ExternalLink className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
