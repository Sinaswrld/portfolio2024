import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import yelpCamp from '@/public/yelpCamp2.jpeg';
import prostore from '@/public/prostore2.jpeg';
import currentPortfolio from '@/public/currentPortfolio2.jpeg';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Developer – Nomz',
    location: 'Toronto, ON',
    description:
      'Developed e-commerce solutions, customized themes, and integrated third-party features. Improved the online store’s functionality and user experience through a complete code overhaul.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2022 - Jul 2022',
  },
  {
    title: 'Full-Stack Developer – Purolator',
    location: 'Toronto, ON',
    description:
      'Built high-quality solutions for a customer-facing platform. Led a team in improving web accessibility, ensuring compliance with industry standards for users with disabilities.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2022 - Dec 2022',
  },
  {
    title: 'Automation Engineer – Nomz',
    location: 'Toronto, ON',
    description:
      'Designed an industrial vibratory separator to automate a manual sifting process. Created a modular system for easy maintenance and ensured compliance with industry standards.',
    icon: React.createElement(CgWorkAlt),
    date: 'May 2023 - Aug 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'This Website',
    description:
      'This is my personal portfolio website, designed to showcase my work, skills, and experience. It features a modern, responsive design with smooth animations and an intuitive user experience.',
    tags: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    link: 'https://sinavahidi.dev',
    imageUrl: currentPortfolio,
  },
  {
    title: 'YelpCamp',
    description:
      'A full-stack web application that allows users to explore, review, and share campgrounds. It includes user authentication, image uploads, and interactive maps to enhance the experience.',
    link: 'https://yelpcamp-m4aa.onrender.com',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Cloudinary',
    ],
    imageUrl: yelpCamp,
  },
  {
    title: 'Prostore',
    description:
      'An e-commerce platform with a seamless shopping experience, including secure payments, user authentication, and a responsive design for browsing products effortlessly.',
    link: 'https://prostore-seven-smoky.vercel.app',
    tags: [
      'React.js',
      'Next.js',
      'TypeScript',
      'PostgresSQL',
      'Prisma',
      'PayPal & Stripe API',
      'Tailwind CSS',
      'Jest',
    ],
    imageUrl: prostore,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'Git & GitHub',
  'MongoDB',
  'Mongoose',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'ShadCN',
  'AWS',
  'Python',
  'C++',
  'C',
  'ROBOTC',
] as const;
