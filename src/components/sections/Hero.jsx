import React from 'react'
import { ArrowRight, Code2, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-2 mb-8 hover:bg-emerald-500/20 transition'>
          <Zap size={16} className='text-emerald-400' />
          <span className='text-emerald-400 font-semibold'>Full Stack Developer Ready</span>
        </div>

        {/* Main Heading */}
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
          <span className='block text-white'>Hey, I'm</span>
          <span className='block bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent'>
            Paolo B. Somido
          </span>
        </h1>

        {/* Subtitle */}
        <p className='text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed'>
          A passionate full-stack developer crafting beautiful, functional applications across web and mobile platforms.
          Building digital solutions that make a real impact on businesses and communities.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <a
            href='#projects'
            className='inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-4 rounded-lg transition transform hover:scale-105'
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold px-8 py-4 rounded-lg transition'
          >
            Get In Touch
          </a>
        </div>

        {/* Tech Stack Preview */}
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          <span className='text-gray-400 font-semibold'>Tech Stack:</span>
          {['React', 'Flutter', 'Python', 'MySQL', 'Firebase'].map((tech) => (
            <span
              key={tech}
              className='px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium hover:bg-emerald-500/20 transition'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <svg
          className='w-6 h-6 text-emerald-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero