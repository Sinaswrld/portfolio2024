'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className="mb-28 max-w-[46.4rem] text-center leading-8 sm:mb-40 scroll-mt-72 text-sm sm:text-[1rem]"
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
        to pursue my passion for programming. I purchased an online course and
        started to learn <span className="font-medium">web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span> 👨‍💻, I enjoy
        playing Rocket League 🚀, listening to music 🎵, going on walks 🚶, and
        playing basketball 🏀.
      </p>
    </motion.section>
  );
}
