import React from 'react'
import { services } from '../../data/services'
import { Check } from 'lucide-react'

const Services = () => {
  const serviceIcons = {
    'fa-solid fa-globe': '🌐',
    'fa-solid fa-mobile-alt': '📱',
    'fa-solid fa-database': '🗄️',
    'fa-solid fa-desktop': '🖥️',
    'fa-solid fa-tools': '🛠️',
    'fa-solid fa-rocket': '🚀',
  }

  return (
    <section id='services' className='py-20 bg-black relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            My <span className='text-emerald-400'>Services</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map(service => (
            <div
              key={service.id}
              className='group relative bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-400/60 transition duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1'
            >
              {/* Icon */}
              <div className='text-5xl mb-4 group-hover:scale-110 transition transform'>{serviceIcons[service.icon]}</div>

              {/* Title */}
              <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='text-gray-400 mb-6'>{service.description}</p>

              {/* Highlights */}
              <ul className='space-y-2'>
                {['Expert Development', 'Quality Assured', 'On-time Delivery'].map(highlight => (
                  <li key={highlight} className='flex items-center gap-2 text-sm text-gray-300'>
                    <Check size={16} className='text-emerald-400' />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className='mt-20 p-8 bg-emerald-500/5 border border-emerald-500/30 rounded-xl'>
          <h3 className='text-2xl font-bold text-white mb-8'>My Working Process</h3>
          <div className='grid md:grid-cols-4 gap-6'>
            {[
              { step: 1, title: 'Discovery', desc: 'Understanding your needs and vision' },
              { step: 2, title: 'Planning', desc: 'Creating detailed project roadmap' },
              { step: 3, title: 'Development', desc: 'Building with best practices' },
              { step: 4, title: 'Delivery', desc: 'Testing and deployment' },
            ].map(phase => (
              <div key={phase.step} className='relative'>
                <div className='flex items-center justify-center w-12 h-12 bg-emerald-500 text-black rounded-full font-bold mb-4'>
                  {phase.step}
                </div>
                <h4 className='font-bold text-white mb-2'>{phase.title}</h4>
                <p className='text-sm text-gray-400'>{phase.desc}</p>
                {phase.step < 4 && (
                  <div className='hidden md:block absolute top-6 left-16 w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
