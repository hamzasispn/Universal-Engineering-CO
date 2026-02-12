'use client'

export default function Engineering() {
  const features = [
    {
      title: 'Technical Precision',
      description: 'Advanced engineering techniques meeting exact specifications',
    },
    {
      title: 'Operational Reliability',
      description: 'Rigorous testing and quality assurance protocols',
    },
    {
      title: 'International Compliance',
      description: 'Certified and compliant with global electrical standards',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored panel designs for specific industrial requirements',
    },
  ]

  return (
    <section id="engineering" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#355FA8]/20 to-transparent rounded-full glow-orb"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-[#355FA8]/15 to-transparent rounded-full glow-orb-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#EFEFEF] text-[#355FA8] rounded-full text-sm font-semibold">Engineering Excellence</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#231F20] mb-6">
            Engineered for Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            We engineer solutions that combine technical precision, operational reliability, and compliance with international electrical standards. Our panels are tested, certified, and customized to meet specific industrial requirements.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl border-2 border-[#EFEFEF] hover:border-[#355FA8] bg-gradient-to-br from-white to-[#EFEFEF]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#355FA8] to-[#1e3a5f] text-white font-heading font-bold text-xl mb-4">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className="font-heading font-bold text-[#231F20] text-xl mb-3 group-hover:text-[#355FA8] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>

              {/* Gradient Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-[#355FA8] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#355FA8] via-[#1e3a5f] to-[#355FA8] opacity-90"></div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          {/* Content */}
          <div className="relative p-12 text-center text-white">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Long-Term Performance & Safety
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Every panel undergoes rigorous testing and certification to ensure long-term performance, safety, and reliability in demanding industrial environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
