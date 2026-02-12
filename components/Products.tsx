'use client'

import Link from 'next/link'
import { useState } from 'react'
import productsData from '@/public/data/products.json'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = productsData.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.shortDescription,
    image: product.image,
  }))

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#EFEFEF] via-white to-[#EFEFEF] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-bl from-[#355FA8]/30 to-transparent rounded-full glow-orb"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#355FA8]/20 to-transparent rounded-full glow-orb-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-4">
            Products & Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive electrical panel solutions engineered for performance and reliability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {products.map((product, idx) => {
            const isFeatured = product.id === 1 || product.id === 2;

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className={`
          group relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer transform
          ${isFeatured
                    ? 'col-span-12 lg:col-span-6 bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] border-transparent hover:shadow-2xl hover:-translate-y-2'
                    : 'col-span-12 md:col-span-6 lg:col-span-3 bg-white border-[#EFEFEF] hover:border-[#355FA8] hover:shadow-xl hover:-translate-y-2'
                  }
        `}
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Image */}
                <div
                  className={`
            w-full mb-4 rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-300
            ${isFeatured
                      ? 'bg-white/10 group-hover:scale-105 md:h-64 h-40'
                      : 'bg-[#EFEFEF] border border-[#EFEFEF] group-hover:scale-105 h-40'
                    }
          `}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23EFEFEF" width="100" height="100"/%3E%3Ctext x="50" y="50" textAnchor="middle" dy=".3em" fill="%23999" fontSize="14"%3EImage%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Gradient Line */}
                <div
                  className={`
            h-1 mb-4 transition-all duration-300
            ${isFeatured
                      ? 'w-16 bg-white group-hover:w-full'
                      : 'w-12 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] group-hover:w-full'
                    }
          `}
                ></div>

                {/* Content */}
                <h3
                  className={`font-heading font-bold mb-2 transition-colors
            ${isFeatured
                      ? 'text-white md:text-4xl text-xl'
                      : 'text-[#231F20] group-hover:text-[#355FA8] text-lg'
                    }
          `}
                >
                  {product.name}
                </h3>

                <p
                  className={`
            text-sm
            ${isFeatured ? 'text-white/80 text-md md:text-xl' : 'text-gray-600'}
          `}
                >
                  {product.description}
                </p>

                {/* Arrow */}
                <div
                  className={`
            mt-4 transition-opacity
            ${isFeatured
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                    }
          `}
                >
                  <span
                    className={`font-bold ${isFeatured ? 'text-white' : 'text-[#355FA8]'}`}
                  >
                    →
                  </span>
                </div>

                {/* Hover Background Effect (ONLY featured) */}
                {isFeatured && (
                  <div className="absolute bottom-0 right-0 w-50 h-50 bg-gradient-to-tl from-[#fff]/10 to-transparent rounded-full transform translate-x-20 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                )}
              </Link>
            );
          })}
        </div>


        {/* CTA */}
        <div className="text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-[#355FA8] to-[#1e3a5f] text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#355FA8]/50 transition-all duration-300 transform hover:scale-105">
            View Detailed Specifications
          </button>
        </div>
      </div>
    </section>
  )
}
