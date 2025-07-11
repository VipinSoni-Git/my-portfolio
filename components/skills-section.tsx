"use client"

import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Analytics & BI",
      icon: "📊",
      color: "yellow",
      skills: [
        { name: "Power BI", level: 90, description: "Advanced dashboard creation, DAX, Power Query" },
        { name: "Advanced Excel", level: 95, description: "Pivot tables, VBA, complex formulas" },
        { name: "Tableau", level: 60, description: "Data visualization and storytelling" },
        { name: "Data Visualization", level: 85, description: "Creating compelling visual narratives" },
      ],
    },
    {
      title: "Programming",
      icon: "💻",
      color: "green",
      skills: [
        { name: "Python", level: 80, description: "Pandas, NumPy, Scikit-learn, Matplotlib" },
        { name: "SQL", level: 85, description: "Complex queries, stored procedures, optimization" },
        { name: "DAX", level: 85, description: "Power BI calculations and measures" },
        { name: "VBA", level: 75, description: "Excel automation and macro development" },
      ],
    },
    {
      title: "Data Management",
      icon: "🗄️",
      color: "blue",
      skills: [
        { name: "Data Quality Assurance", level: 90, description: "Data validation and cleansing" },
        { name: "ETL Processes", level: 85, description: "Extract, Transform, Load operations" },
        { name: "Power Query", level: 90, description: "Data transformation and automation" },
        { name: "Database Management", level: 80, description: "SQL Server, data modeling" },
      ],
    },
    {
      title: "Business Intelligence",
      icon: "📈",
      color: "purple",
      skills: [
        { name: "MIS Reporting", level: 95, description: "Comprehensive management reporting" },
        { name: "Forecasting", level: 85, description: "Predictive analytics and trend analysis" },
        { name: "Process Optimization", level: 90, description: "SOP development and automation" },
        { name: "Statistical Analysis", level: 80, description: "Statistical modeling and validation" },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "yellow":
        return {
          border: "border-yellow-400/50",
          text: "text-yellow-400",
          bg: "bg-yellow-400/10",
        }
      case "green":
        return {
          border: "border-green-400/50",
          text: "text-green-400",
          bg: "bg-green-400/10",
        }
      case "blue":
        return {
          border: "border-blue-400/50",
          text: "text-blue-400",
          bg: "bg-blue-400/10",
        }
      case "purple":
        return {
          border: "border-purple-400/50",
          text: "text-purple-400",
          bg: "bg-purple-400/10",
        }
      default:
        return {
          border: "border-gray-600",
          text: "text-gray-400",
          bg: "bg-gray-800/50",
        }
    }
  }

  return (
    <section id="skills" className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Technical</span> <span className="text-yellow-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Technical expertise developed over 7.9+ years in data analytics and business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color)
              return (
                <Card
                  key={categoryIndex}
                  className={`bg-gray-800/50 border-gray-700 hover:${colorClasses.border} transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className={`text-xl font-semibold ${colorClasses.text}`}>{category.title}</h3>
                    </div>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group"
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`text-sm font-medium text-white group-hover:${colorClasses.text} transition-colors`}
                            >
                              {skill.name}
                            </span>
                            <Badge className={`${colorClasses.bg} ${colorClasses.text} border-transparent text-xs`}>
                              {skill.level}%
                            </Badge>
                          </div>

                          <Progress
                            value={skill.level}
                            className="h-2 mb-2 group-hover:h-3 transition-all duration-300"
                          />

                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <p className="text-xs text-gray-400 animate-in slide-in-from-top-2 duration-200">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Key Metrics */}
          <Card className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">Key Achievements</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                    7.9+
                  </div>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                    5+
                  </div>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                    6+
                  </div>
                  <p className="text-sm text-gray-400">{"Teams Managed"}</p>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <p className="text-sm text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
