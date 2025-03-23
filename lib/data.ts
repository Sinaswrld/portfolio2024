import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import yelpCamp from '@/public/yelpCamp.png';
import prostore from '@/public/prostore.png';
import previousPortfolioImg from '@/public/previousPortfolio.png';
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
    title: 'Web Developer',
    location: 'Toronto, ON',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2022 - Jul 2022',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Toronto, ON',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2022 - Dec 2022',
  },
  {
    title: 'Automation Engineer',
    location: 'Toronto, ON',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    icon: React.createElement(CgWorkAlt),
    date: 'May 2023 - Aug 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Previous Website',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    link: 'https://yelpcamp-m4aa.onrender.com',
    imageUrl: previousPortfolioImg,
  },
  {
    title: 'YelpCamp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://yelpcamp-m4aa.onrender.com',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: yelpCamp,
  },
  {
    title: 'Prostore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://prostore-seven-smoky.vercel.app',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: prostore,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'PostgreSQL',
  'Framer Motion',
  'Python',
  'C++',
] as const;
