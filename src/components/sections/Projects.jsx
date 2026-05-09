import React, { useState } from 'react'
import { projects, categories } from '../../data/projects'
import { ExternalLink, Code2 } from 'lucide-react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter(project => project.category === selectedCategory)

  return (
    <section id='projects' className='py-20 bg-gradient-to-b from-black to-emerald-950/10 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Featured <span className='text-emerald-400'>Projects</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Showcasing my best work and contributions to real-world applications
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

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className='group relative bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl overflow-hidden hover:border-emerald-400/60 transition duration-300 hover:shadow-lg hover:shadow-emerald-500/20 flex flex-col'
            >
              {/* Image */}
              <div className='relative h-48 bg-emerald-500/20 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition transform duration-300'
                />
                <div className='absolute inset-0 bg-black/40 group-hover:bg-black/30 transition'></div>
              </div>

              {/* Content */}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition'>
                  {project.title}
                </h3>

                <p className='text-gray-400 text-sm mb-4 flex-grow'>{project.description}</p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className='text-xs px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-3'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/40 text-emerald-300 rounded-lg transition text-sm font-semibold'
                  >
                    <Code2 size={16} />
                    Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center'>
          <p className='text-gray-400 mb-4'>Interested in seeing more?</p>
          <a
            href='https://github.com/food2g0'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/40 text-emerald-300 px-8 py-3 rounded-lg transition font-semibold'
          >
            <Code2 size={20} />
            Visit My GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
