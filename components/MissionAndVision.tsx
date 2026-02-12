'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const industries = [
  { name: 'Manufacturing', icon: CheckCircle2 },
  { name: 'Construction', icon: CheckCircle2 },
  { name: 'Retail', icon: CheckCircle2 },
  { name: 'Healthcare', icon: CheckCircle2 },
]

export default function MissionAndVision() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const header = sectionRef.current?.querySelector('.about-header')
          const leftContent = sectionRef.current?.querySelector('.about-left')
          const rightContent = sectionRef.current?.querySelector('.about-right')

          if (header) header.classList.add('animate-in')
          if (leftContent) {
            setTimeout(() => {
              leftContent.classList.add('animate-in')
            }, 150)
          }
          if (rightContent) {
            setTimeout(() => {
              rightContent.classList.add('animate-in')
            }, 300)
          }

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-[#355FA8]/10 to-transparent rounded-full glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center about-header opacity-0">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Mission & Vision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <div className="about-left opacity-0">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f]">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#231F20]">Vision</h3>
                  <p className="text-gray-600 mt-2">
                    To be a Leader in the Electrical Manufacturing Industries with unique attributes characterized by quality products and services, excellence in practices, and values that nurture human potential.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#355FA8] to-[#1e3a5f]">
                    <CheckCircle2 className="text-white w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#231F20]">MISSION</h3>
                  <ul className="mt-2 space-y-3">
                    {[
                      "To develop and supply intelligent solutions and services for Electrical Distribution Systems",
                      "To respond and adapt to our customer needs, enabling the supply of energy safely and reliably",
                      "To achieve success through the commitment of our employees and actively engage, empower, and continuously develop our workforce.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">

                        {/* Gradient Disc */}
                        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] flex-shrink-0"></span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="grid grid-cols-2 gap-4 about-right opacity-0">
            {[1, 2].map((idx) => (
              <div
                key={idx}
                className="relative h-48 rounded-lg overflow-hidden border-2 border-[#EFEFEF] bg-[#EFEFEF] flex items-center justify-center group cursor-pointer hover:border-[#355FA8] hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#355FA8]/20 to-[#1e3a5f]/20 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="text-center z-10">
                  <div className="text-5xl mb-2">📸</div>
                  <p className="text-gray-500 font-medium text-sm">Add image {idx}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] rounded-xl p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative z-10">
            <h3 className="font-heading text-2xl font-bold mb-3">Our Company History</h3>
            <p className="text-lg text-white/90">
              The Company has been established in 2012 with the aim of producing Electrical Panel and is proud to work with great effort and energy over the years using updated facilities and technologies by capable and responsible personnel to have a major share in the industry development. During its tenure, Universal Engineering has gained a wide range of manufacturing experience in industries such as Civil Construction, Oil, Gas, Cement, Chemicals, Textile, Power & Water Industries, Food, Health & Agriculture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
