import React, { useState } from 'react'
import { skills } from '../../data/skills'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend')

  const categories = ['Frontend', 'Backend', 'Database', 'Tools']
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory)

  return (
    <section id='skills' className='py-20 bg-black relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            My <span className='text-emerald-400'>Skills</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Technologies and tools I've mastered to build modern applications
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-black'
                  : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredSkills.map(skill => (
            <div
              key={skill.id}
              className='group relative bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-400/60 transition duration-300 hover:shadow-lg hover:shadow-emerald-500/20'
            >
              {/* Hover overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition'></div>

              {/* Content */}
              <div className='relative z-10 text-center'>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='w-16 h-16 mx-auto mb-4 filter drop-shadow-lg group-hover:scale-110 transition transform'
                />
                <h3 className='font-bold text-white mb-2'>{skill.name}</h3>
                <p className='text-sm text-emerald-300'>{skill.level}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Details */}
        <div className='mt-16 p-8 bg-emerald-500/5 border border-emerald-500/30 rounded-xl'>
          <h3 className='text-2xl font-bold text-white mb-6'>Full Expertise Overview</h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {categories.map(category => {
              const catSkills = skills.filter(s => s.category === category)
              return (
                <div key={category}>
                  <h4 className='text-emerald-400 font-bold mb-4 flex items-center gap-2'>
                    <span className='w-1 h-1 bg-emerald-400 rounded-full'></span>
                    {category}
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    {catSkills.map(s => s.name).join(' • ')}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
