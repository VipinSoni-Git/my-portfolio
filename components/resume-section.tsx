"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"

export function ResumeSection() {
  const handleDownload = () => {
    // Use the direct Google Drive download link
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1UotmXV9abEQW6C73ZBbS8JVlF3Zsr9fu"

    // Open in new tab to avoid blocking issues
    window.open(downloadUrl, "_blank")
  }

  const workExperience = [
    {
      title: "Assistant Manager MIS & Data Analytics",
      company: "iCubesWire",
      location: "Gurugram, HR",
      period: "Dec 2023 – Present",
      type: "Full-time",
      description:
        "Leading data analytics initiatives, developing Power BI dashboards, and managing the InfluenceZ platform data ecosystem. Implementing automated reporting solutions and optimizing business processes.",
      achievements: [
        "Developed 15+ interactive Power BI dashboards improving decision-making efficiency by 40%",
        "Led InfluenceZ platform data integration serving 1000+ influencers and brands",
        "Implemented automated MIS reporting reducing manual effort by 60%",
        "Created SOPs for data quality assurance improving accuracy by 35%",
      ],
      current: true,
    },
    {
      title: "Senior Data Analyst",
      company: "Sagacious IP",
      location: "Gurugram, HR",
      period: "Aug 2017 – Nov 2023",
      type: "Full-time",
      description:
        "Managed multiple data streams, created advanced Excel models, and built reusable business intelligence assets. Specialized in IP research data analysis and reporting.",
      achievements: [
        "Managed 6+ inter-company data streams simultaneously",
        "Built library of reusable BI models reducing development time by 50%",
        "Automated VBA-based reporting systems processing 10K+ records daily",
        "Improved data integrity processes achieving 99.5% accuracy rate",
      ],
      current: false,
    },
    {
      title: "Freelance Developer & Data Analyst",
      company: "Independent",
      location: "New Delhi, DL",
      period: "Feb 2014 – Jul 2017",
      type: "Freelance",
      description:
        "Provided web development and data analysis services to 10+ clients. Specialized in creating data-driven web applications and business intelligence solutions.",
      achievements: [
        "Delivered 25+ successful projects with 100% client satisfaction",
        "Developed custom web applications using PHP, JavaScript, and MySQL",
        "Created data visualization solutions for small and medium businesses",
        "Maintained long-term relationships with key clients",
      ],
      current: false,
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer and Information Sciences",
      institution: "IES College of Technology",
      location: "Bhopal, M.P.",
      period: "2011 – 2015",
      grade: "First Class",
    },
    {
      degree: "High School Diploma",
      field: "Science",
      institution: "The Oxford Higher Sec. School",
      location: "Sehore, M.P.",
      period: "2009 – 2010",
      grade: "Distinction",
    },
  ]

  return (
    <section id="resume" className="py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Professional</span> <span className="text-yellow-400">Resume</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8">
              Professional journey spanning 7.9+ years in data analytics and business intelligence
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-medium group"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>

          {/* Experience */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="h-6 w-6 text-yellow-400" />
              <h3 className="text-2xl font-semibold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card
                  key={index}
                  className={`bg-gray-800/50 border-gray-700 transition-all duration-300 ${
                    job.current
                      ? "border-yellow-400/50 bg-gradient-to-r from-yellow-400/5 to-green-400/5"
                      : "hover:border-green-400/50"
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                          {job.current && (
                            <Badge className="bg-green-400/20 text-green-400 border-green-400/30">Current</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                          <p className="text-yellow-400 font-medium">{job.company}</p>
                          <Badge className="bg-gray-700 text-gray-300 border-gray-600">{job.type}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm mb-3 text-green-400">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="h-6 w-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                        <p className="text-blue-400 font-medium mb-1">{edu.field}</p>
                        <p className="text-gray-300 mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <Badge className="bg-green-400/20 text-green-400 border-green-400/30">{edu.grade}</Badge>
                        </div>
                      </div>
                    </div>
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
