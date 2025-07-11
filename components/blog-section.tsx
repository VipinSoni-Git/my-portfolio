"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp, Eye } from "lucide-react"

export function BlogSection() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const blogPosts = [
    {
      title: "The Future of Business Intelligence: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends in BI, from AI-powered analytics to real-time data processing and their impact on business decision-making.",
      category: "Business Intelligence",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "1.2k",
      featured: true,
    },
    {
      title: "Power BI Best Practices: Creating Effective Dashboards",
      excerpt:
        "A comprehensive guide to designing Power BI dashboards that drive action and provide meaningful insights to stakeholders.",
      category: "Power BI",
      date: "2024-01-10",
      readTime: "12 min read",
      views: "2.1k",
      featured: true,
    },
    {
      title: "Data Quality Management: Ensuring Accuracy in Analytics",
      excerpt:
        "Learn essential strategies for maintaining data quality, implementing validation processes, and building trust in your analytics.",
      category: "Data Management",
      date: "2024-01-05",
      readTime: "10 min read",
      views: "856",
      featured: false,
    },
    {
      title: "Python for Data Analytics: Essential Libraries and Techniques",
      excerpt:
        "A deep dive into Python libraries like Pandas, NumPy, and Matplotlib for effective data analysis and visualization.",
      category: "Python",
      date: "2023-12-28",
      readTime: "15 min read",
      views: "1.8k",
      featured: false,
    },
    {
      title: "Building a Data-Driven Culture in Organizations",
      excerpt:
        "Strategies for fostering a data-driven mindset across teams and overcoming common challenges in data adoption.",
      category: "Leadership",
      date: "2023-12-20",
      readTime: "11 min read",
      views: "943",
      featured: false,
    },
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section id="blog" className="py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-white">Latest</span> <span className="text-yellow-400">Blog</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Insights and thoughts on data analytics, business intelligence, and industry trends
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-12 text-center text-white">Featured Articles</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group bg-gray-900/50 border-gray-700 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">{post.category}</Badge>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-yellow-400 hover:text-yellow-300 transition-colors group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-12 text-center text-white">Recent Posts</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group bg-gray-900/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-green-400/20 text-green-400 border-green-400/30">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-3 text-white group-hover:text-green-400 transition-colors leading-tight line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-xs text-green-400 hover:text-green-300 transition-colors group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border-yellow-400/20">
              <CardContent className="p-12">
                <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-white">Stay Updated</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  Subscribe to get the latest insights on data analytics, MIS, and business intelligence delivered to
                  your inbox.
                </p>
                <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 group">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
