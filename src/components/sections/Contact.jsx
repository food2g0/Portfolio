import React, { useState } from 'react'
import { Mail, MapPin, Code2, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // In a real app, you'd send this data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paolosomido2@gmail.com',
      link: 'mailto:paolosomido2@gmail.com',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'github.com/food2g0',
      link: 'https://github.com/food2g0',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Makati, Philippines',
      link: '#',
    },
  ]

  return (
    <section id='contact' className='py-20 bg-black relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Get In <span className='text-emerald-400'>Touch</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Let's discuss your next project. I'm always excited to collaborate on new ideas.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/60 transition'
                  placeholder='John Doe'
                />
              </div>

              {/* Email Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Your Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/60 transition'
                  placeholder='john@example.com'
                />
              </div>

              {/* Message Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400/60 transition resize-none'
                  placeholder='Tell me about your project...'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 group'
              >
                <Send size={18} className='group-hover:translate-x-1 transition' />
                Send Message
              </button>

              {submitted && (
                <div className='p-4 bg-emerald-500/20 border border-emerald-400 text-emerald-300 rounded-lg text-center'>
                  ✓ Thank you! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div className='space-y-8'>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-start gap-6 p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl hover:border-emerald-400/60 transition group'
              >
                <div className='p-4 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/40 transition'>
                  <method.icon className='text-emerald-400' size={32} />
                </div>
                <div>
                  <h4 className='font-bold text-white mb-1'>{method.label}</h4>
                  <p className='text-gray-400 group-hover:text-emerald-300 transition'>{method.value}</p>
                </div>
              </a>
            ))}

            {/* Additional Info */}
            <div className='p-6 bg-emerald-500/5 border border-emerald-500/30 rounded-xl'>
              <h4 className='font-bold text-white mb-3'>Availability</h4>
              <p className='text-gray-400 text-sm mb-4'>
                I'm currently available for new projects and collaborations. Response time: 24-48 hours.
              </p>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
                <span className='text-emerald-400 text-sm font-semibold'>Available for Hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
