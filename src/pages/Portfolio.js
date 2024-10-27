import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

// Import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  // Define the projects with images, titles, and descriptions
  const projects = [
    {
      id: 1,
      image: Image1,
      title: 'Project One',
      description: 'This is a brief description of Project One.',
      link: '/wedding/index.html', // Link to the other folder's index.html
    },
    {
      id: 2,
      image: Image2,
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
    },
    {
      id: 3,
      image: Image3,
      title: 'Project Three',
      description: 'This is a brief description of Project Three.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ duration: 0.5 }}
      className="section flex flex-col items-center justify-center" 
      style={{ minHeight: '100vh' }} 
    >
      <div className="container mx-auto h-full relative py-20">
        <h1 className="text-3xl font-bold text-center mb-12">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || '#'}
              target={project.link ? '_blank' : '_self'} 
              rel="noopener noreferrer"
              className="relative bg-accent overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to={'/contact'} className="btn">
            Hire Me
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
