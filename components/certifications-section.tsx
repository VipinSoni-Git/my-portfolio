"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Power BI Certification",
      issuer: "TuteDude",
      date: "2025",
      credentialId: "TD-VIPI-PB-1158",
      url: "https://upskill.tutedude.com/certificate/TD-VIPI-PB-1158",
      description:
        "Comprehensive certification covering Power BI fundamentals, advanced DAX, data modeling, and dashboard creation.",
      skills: ["Power BI", "DAX", "Data Modeling", "Visualization", "Business Intelligence"],
      verified: true,
      featured: true,
    },
    {
      title: "Advanced Excel Analytics",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-EXL-2023",
      url: "https://www.microsoft.com/en-us/learning/excel-certification.aspx",
      description:
        "Advanced Excel techniques including VBA programming, pivot tables, and complex formula development.",
      skills: ["Excel", "VBA", "Pivot Tables", "Advanced Formulas"],
      verified: true,
      featured: false,
    },
    {
      title: "Python for Data Analysis",
      issuer: "DataCamp",
      date: "2023",
      credentialId: "DC-PY-2023",
      url: "https://www.datacamp.com/certificate/DC-PY-2023",
      description: "Comprehensive Python programming for data analysis using Pandas, NumPy, and Matplotlib.",
      skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
      verified: true,
      featured: false,
    },
  ]

  const featuredCerts = certifications.filter((cert) => cert.featured)
  const otherCerts = certifications.filter((cert) => !cert.featured)

  return (
    <section id="certifications" className="py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Professional</span> <span className="text-yellow-400">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Professional certifications validating expertise in data analytics and business intelligence
            </p>
          </div>

          {/* Featured Certification */}
          <div className="mb-12">
            {featuredCerts.map((cert, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-yellow-400/20 rounded-lg">
                          <Award className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-yellow-400">{cert.title}</h3>
                            {cert.verified && <CheckCircle className="h-5 w-5 text-green-400" />}
                            <Badge className="bg-green-400/20 text-green-400 border-green-400/30">Featured</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="font-medium text-white">{cert.issuer}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{cert.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {cert.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                className="bg-gray-800 text-gray-300 border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 font-mono">
                            Credential ID: <span className="text-emerald-400 font-semibold">{cert.credentialId}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:ml-6">
                      <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 group/btn" asChild>
                        <Link href={cert.url} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                          View Certificate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Certifications */}
          <div className="space-y-6 mb-16">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">Additional Certifications</h3>
            {otherCerts.map((cert, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-green-400/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-400/20 rounded-lg">
                          <Award className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                            {cert.verified && <CheckCircle className="h-4 w-4 text-green-400" />}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="font-medium text-gray-300">{cert.issuer}</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{cert.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-400 mb-3 text-sm leading-relaxed">{cert.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {cert.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className="text-xs border-gray-600 text-gray-400"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 font-mono">
                            Credential ID: <span className="text-emerald-400 font-semibold">{cert.credentialId}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Stats */}
          <Card className="bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-teal-500/10 border-violet-400/30 hover:border-violet-400/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-3xl font-bold text-violet-400 mb-2 group-hover:scale-110 transition-transform">
                    {certifications.length}
                  </div>
                  <p className="text-sm text-violet-200">Active Certifications</p>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <p className="text-sm text-blue-200">Verification Rate</p>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                    2025
                  </div>
                  <p className="text-sm text-teal-200">Latest Certification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
