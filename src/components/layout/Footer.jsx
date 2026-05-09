import React from 'react'
import { Mail, MapPin, ArrowUp, Code2 } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='bg-black border-t border-emerald-500/20 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-3 gap-12 mb-8'>
          {/* Brand */}
          <div>
            <h3 className='text-2xl font-bold text-emerald-400 mb-3'>Paolo B. Somido</h3>
            <p className='text-gray-400 text-sm'>
              Full Stack Developer passionate about creating impactful digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className='text-gray-400 hover:text-emerald-400 transition text-sm'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-white font-bold mb-4'>Connect</h4>
            <div className='flex gap-4'>
              <a
                href='mailto:paolosomido2@gmail.com'
                className='p-3 bg-emerald-500/10 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-emerald-400 transition'
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-emerald-500/20 py-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          {/* Copyright */}
          <p className='text-gray-500 text-sm'>
            © {currentYear} Paolo B. Somido. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className='p-2 bg-emerald-500/10 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-emerald-400 transition'
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Design Credit */}
        <p className='text-gray-600 text-xs text-center mt-6'>
          Crafted with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer