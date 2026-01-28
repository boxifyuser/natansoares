'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface VideoItem {
  src: string
  title?: string
}

interface VideoCarouselProps {
  videos: VideoItem[]
  title?: string
  subtitle?: string
}

export function VideoCarousel({ 
  videos, 
  title = 'Qualidade e compromisso – não perca tempo, associe-se!',
  subtitle = 'Venha Pra UNIQUE e conte com a melhor proteção veicular do Brasil.'
}: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    // Pausar todos os vídeos quando mudar de slide
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause()
        video.currentTime = 0
      }
    })
    setPlayingIndex(null)
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      if (playingIndex === index) {
        video.pause()
        setPlayingIndex(null)
      } else {
        // Pausar vídeo atual se houver
        if (playingIndex !== null) {
          const currentVideo = videoRefs.current[playingIndex]
          if (currentVideo) {
            currentVideo.pause()
            currentVideo.currentTime = 0
          }
        }
        video.play()
        setPlayingIndex(index)
      }
    }
  }

  const handleVideoEnd = (index: number) => {
    setPlayingIndex(null)
  }

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-muted">
              {subtitle}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 -translate-x-4 md:-translate-x-6"
              onClick={goToPrevious}
              aria-label="Vídeo anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full h-12 w-12 translate-x-4 md:translate-x-6"
              onClick={goToNext}
              aria-label="Próximo vídeo"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Video Grid */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / Math.min(5, videos.length))}%)`,
                }}
              >
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / Math.min(5, videos.length)}%` }}
                  >
                    <div className="relative bg-primary rounded-xl overflow-hidden aspect-[9/16] group">
                      {/* Video Element */}
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el
                        }}
                        src={video.src}
                        className="w-full h-full object-cover"
                        playsInline
                        onEnded={() => handleVideoEnd(index)}
                        onClick={() => handleVideoClick(index)}
                      />

                      {/* Play Button Overlay */}
                      {playingIndex !== index && (
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-primary/20 cursor-pointer group-hover:bg-primary/30 transition-colors"
                          onClick={() => handleVideoClick(index)}
                        >
                          <div className="bg-accent rounded-full p-4 md:p-6 shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 md:h-12 md:w-12 text-foreground fill-foreground ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Title Overlay */}
                      {video.title && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <p className="text-white text-sm font-semibold">{video.title}</p>
                        </div>
                      )}

                      {/* Video Controls Overlay (when playing) */}
                      {playingIndex === index && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center justify-between text-white text-xs">
                            <span>Antes e Depois</span>
                            <span className="flex items-center gap-2">
                              <span>🔊</span>
                              <span>⛶</span>
                              <span>⋯</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {videos.slice(0, Math.min(5, videos.length)).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir para vídeo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
