import React from 'react'
import { Briefcase, MapPin } from 'lucide-react'
import myPhoto from '../../assets/my-photo.png'

const About = () => {
  return (
    <section id='about' className='py-20 bg-gradient-to-b from-black to-emerald-950/20 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            About <span className='text-emerald-400'>Me</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Discover who I am and what drives my passion for development
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left side - Image/Avatar */}
          <div className='relative flex justify-center'>
            <div className='relative w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-2 border-emerald-500/40 rounded-2xl p-2 backdrop-blur-sm shadow-2xl'>
              <img src={myPhoto} alt="My photo" className='w-full h-full rounded-xl object-cover object-center' />
            </div>
          </div>

          {/* Right side - Content */}
          <div className='space-y-6'>
            <p className='text-gray-300 text-lg leading-relaxed'>
              I'm a dedicated full-stack developer with a passion for building solutions that matter. With 1+ year of professional experience, I've worked on diverse projects ranging from web applications to mobile apps that solve real-world business problems.
            </p>

            <p className='text-gray-300 text-lg leading-relaxed'>
              My journey into development is driven by the desire to bridge the gap between business needs and technical excellence. I'm equally comfortable on the frontend crafting beautiful UIs or on the backend architecting robust systems.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-4 pt-6'>
              <div className='bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6'>
                <div className='text-3xl font-bold text-emerald-400 mb-2'>3+</div>
                <p className='text-gray-400'>Major Projects</p>
              </div>
              <div className='bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6'>
                <div className='text-3xl font-bold text-emerald-400 mb-2'>1+</div>
                <p className='text-gray-400'>Years Experience</p>
              </div>
              <div className='bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6'>
                <div className='text-3xl font-bold text-emerald-400 mb-2'>12+</div>
                <p className='text-gray-400'>Tech Skills</p>
              </div>
              <div className='bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6'>
                <div className='text-3xl font-bold text-emerald-400 mb-2'>5/5</div>
                <p className='text-gray-400'>Client Rating</p>
              </div>
            </div>

            {/* Details */}
            <div className='space-y-3 pt-6 border-t border-emerald-500/20'>
              <div className='flex items-center gap-3'>
                <Briefcase className='text-emerald-400' size={20} />
                <span className='text-gray-300'>Full Stack Developer / IT Support</span>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='text-emerald-400' size={20} />
                <span className='text-gray-300'>Makati, Philippines</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
