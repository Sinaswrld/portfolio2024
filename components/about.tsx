'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-72 text-sm sm:text-[1rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}>
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        While studying{' '}
        <span className="font-medium">Mechatronics Engineering</span> at the{' '}
        <span className="font-medium">University of Waterloo</span>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned <span className="font-medium">web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with TypeScript and Prisma and I am always looking
        to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Rocket League, listening to music, going on walks, and playing
        basketball.
      </p>
    </motion.section>
  );
}
