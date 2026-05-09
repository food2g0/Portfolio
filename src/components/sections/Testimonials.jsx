import React from 'react'
import { testimonials } from '../../data/Testimonial'
import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className='py-20 bg-gradient-to-b from-black to-emerald-950/20 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Client <span className='text-emerald-400'>Testimonials</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            What my clients and partners have to say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-3 gap-6'>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='group relative bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl p-8 hover:border-emerald-400/60 transition duration-300 hover:shadow-lg hover:shadow-emerald-500/20'
            >
              {/* Stars */}
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className='text-yellow-400 fill-yellow-400' />
                ))}
              </div>

              {/* Quote */}
              <p className='text-gray-300 mb-6 italic'>"{testimonial.quote}"</p>

              {/* Author */}
              <div className='flex items-center gap-4 border-t border-emerald-500/20 pt-6'>
                <div className='w-12 h-12 bg-emerald-500/30 rounded-full flex items-center justify-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-full h-full rounded-full object-cover'
                  />
                </div>
                <div>
                  <h4 className='font-bold text-white'>{testimonial.name}</h4>
                  <p className='text-sm text-emerald-400'>{testimonial.role}</p>
                  <p className='text-xs text-gray-500'>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
