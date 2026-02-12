'use client'

import { Star } from 'lucide-react'

export default function Clients() {
  const clients = [
    { name: 'Client 01', abbr: 'C1' },
    { name: 'Client 02', abbr: 'C2' },
    { name: 'Client 03', abbr: 'C3' },
    { name: 'Client 04', abbr: 'C4' },
    { name: 'Client 05', abbr: 'C5' },
    { name: 'Client 06', abbr: 'C6' },
    { name: 'Client 07', abbr: 'C7' },
    { name: 'Client 08', abbr: 'C8' },
  ]

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#355FA8]/15 to-transparent rounded-full glow-orb"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Trusted by Industry Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We partner with leading industrial and commercial organizations
          </p>
        </div>

        {/* Marquee Slider */}
        <div className="relative h-40 flex items-center overflow-hidden rounded-xl bg-white border-2 border-[#EFEFEF] group mb-16">
          {/* Marquee Container */}
          <div className="flex whitespace-nowrap marquee">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-8 h-full flex items-center justify-center min-w-max"
              >
                <div className="group/item h-32 w-32 rounded-xl border-2 border-[#EFEFEF] bg-white hover:border-[#355FA8] hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#355FA8]/20 to-[#1e3a5f]/20 flex items-center justify-center mx-auto mb-2 group-hover/item:from-[#355FA8] group-hover/item:to-[#1e3a5f] group-hover/item:text-white transition-all duration-300">
                      <span className="font-heading font-bold text-lg group-hover/item:text-white">
                        {client.abbr}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 group-hover/item:text-[#355FA8] transition-colors font-semibold">
                      {client.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-20"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-20"></div>
        </div>


        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join our growing network of satisfied clients worldwide
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#355FA8]/50 transition-all duration-300 transform hover:scale-105">
            See Our Full Client Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
