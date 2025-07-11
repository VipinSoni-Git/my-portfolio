"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import Image from "next/image"
import { ImageSlideshow } from "./image-slideshow"

export function BlinkitSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAutoplay, setIsAutoplay] = useState(false)

  const blinkitImages = [
    "/images/blinkit-dashboard.png",
    "/images/blinkit-kpi-filters.png",
    "/images/blinkit-outlet-visual.png",
    "/images/blinkit-metrics.png",
    "/images/blinkit-data-model.png",
  ]

  const imageDescriptions = [
    "Main Dashboard Overview - Comprehensive sales analytics and KPI visualization",
    "KPI Filters & Controls - Interactive filtering system for data analysis",
    "Outlet Visual Analysis - Geographic and performance-based outlet insights",
    "Key Metrics Display - Essential business metrics and performance indicators",
    "Data Model Structure - Underlying data architecture and relationships",
  ]

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blinkitImages.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blinkitImages.length) % blinkitImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  return (
    <div className="w-full">
      <Card className="bg-gray-900/50 border-gray-700 overflow-hidden">
        <CardContent className="p-0">
          {/* Main Slideshow */}
          <div className="relative aspect-video bg-gray-800">
            <Image
              src={blinkitImages[currentIndex] || "/placeholder.svg"}
              alt={`Blinkit Dashboard - ${imageDescriptions[currentIndex]}`}
              fill
              className="object-contain"
              priority
            />

            {/* Navigation Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Fullscreen Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={openFullscreen}
              >
                <Maximize2 className="h-5 w-5" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {blinkitImages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Image Description */}
          <div className="p-6 bg-gradient-to-r from-yellow-400/5 to-green-400/5">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                Dashboard View {currentIndex + 1}
              </Badge>
              <Badge className="bg-green-400/20 text-green-400 border-green-400/30">Power BI</Badge>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{imageDescriptions[currentIndex].split(" - ")[0]}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{imageDescriptions[currentIndex].split(" - ")[1]}</p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-4 bg-gray-800/30">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {blinkitImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-20 h-12 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-yellow-400 ring-2 ring-yellow-400/50 scale-105"
                      : "border-gray-600 hover:border-gray-400 hover:scale-102"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fullscreen Slideshow */}
      <ImageSlideshow
        images={blinkitImages}
        alt="Blinkit Dashboard"
        isOpen={isFullscreen}
        onClose={closeFullscreen}
        initialIndex={currentIndex}
      />
    </div>
  )
}
