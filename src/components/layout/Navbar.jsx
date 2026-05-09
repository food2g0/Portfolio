import React, { useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Mail, url: 'mailto:paolosomido2@gmail.com', label: 'Email' },
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-lg z-50 border-b border-emerald-500/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <a href='#home' className='text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition'>
              PBS
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <div className='flex gap-6'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-gray-300 hover:text-emerald-400 transition font-medium text-sm'
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className='flex gap-4 items-center'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-emerald-400 transition'
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-emerald-400 hover:text-emerald-300'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden pb-4 border-t border-emerald-500/20'>
            <div className='flex flex-col gap-3 pt-4'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className='text-gray-300 hover:text-emerald-400 transition font-medium px-2 py-2'
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className='flex gap-4 items-center px-2 pt-2 border-t border-emerald-500/20'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-emerald-400 transition'
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
