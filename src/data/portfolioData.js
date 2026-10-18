export const portfolio = {
  name: 'Your Name',
  role: 'MERN Stack Developer',
  tagline: 'Building practical, scalable web applications with clean interfaces and reliable backend systems.',
  intro: 'I am a full-stack JavaScript developer focused on creating modern web applications, dashboards, APIs and business solutions using the MERN stack.',
  email: 'your.email@example.com',
  phone: '+91 XXXXX XXXXX',
  location: 'India',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  stats: [
    { value: 'MERN', label: 'Primary Stack' },
    { value: '10+', label: 'Core Technologies' },
    { value: '100%', label: 'Responsive Focus' },
    { value: 'API', label: 'Backend Integration' }
  ],
  skills: [
    { group: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'] },
    { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
    { group: 'Database', items: ['MongoDB', 'MySQL'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Deployment'] }
  ],
  experience: [
    {
      title: 'MERN Stack Developer',
      company: 'Your Current / Recent Company',
      duration: 'Add duration',
      description: 'Developed and maintained full-stack web applications, REST APIs, dashboards and business workflows using React, Node.js, Express and MongoDB.'
    },
    {
      title: 'Full Stack Development Projects',
      company: 'Professional Projects',
      duration: 'Add duration',
      description: 'Built real-world applications including e-commerce, LMS, employee/work tracking, lead management and POS/billing workflows.'
    }
  ],
  projects: [
    {
      name: 'E-Commerce Platform',
      description: 'A responsive commerce application with product browsing, authentication, cart, wishlist, checkout and admin workflows.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/',
      live: '#'
    },
    {
      name: 'Learning Management System',
      description: 'A full-stack LMS concept for managing courses, learners, instructors, authentication and learning workflows.',
      tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/',
      live: '#'
    },
    {
      name: 'Employee Work Tracking',
      description: 'A business dashboard for tasks, work logs, progress, hours, blockers and reporting.',
      tech: ['React', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/',
      live: '#'
    },
    {
      name: 'Lead Management System',
      description: 'A CRM-style application for organizing leads, follow-ups, assignments, statuses and team workflows.',
      tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/',
      live: '#'
    }
  ],
  services: [
    { title: 'Full Stack Development', text: 'End-to-end web applications with React, Node.js, Express and MongoDB.' },
    { title: 'MERN Development', text: 'Modern JavaScript applications designed around maintainable component and API architecture.' },
    { title: 'REST API Development', text: 'Secure and structured APIs with authentication, validation and database integration.' },
    { title: 'Business Dashboards', text: 'Admin panels, management systems and data-driven interfaces for real-world workflows.' }
  ]
};

export const images = {
  hero: '/src/assets/images/presentation.png',
  about: '/src/assets/images/classroom-wide.jpeg',
  gallery: [
    '/src/assets/images/presentation.png',
    '/src/assets/images/workshop-1.jpg',
    '/src/assets/images/workshop-2.jpg'
  ]
};
