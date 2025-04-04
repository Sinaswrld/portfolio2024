"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  link,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0">
      <section className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:h-fit hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="py-7 px-5 sm:max-w-[52%] sm:group-odd:pr-0 sm:group-even:pl-0 flex flex-col h-full sm:group-even:ml-[48%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          {link ? (
            <Link
              className="mt-2 mb-5 w-16 bg-slate-500 hover:bg-slate-700 transition-all px-3 py-1 rounded-md text-white dark:text-white/70"
              href={link}>
              View
            </Link>
          ) : (
            ""
          )}
          <ul className="flex  flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className="absolute top-[29%] -right-48 md:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-48 md:group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition hidden sm:block "
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
        />
      </section>
    </motion.div>
  );
}
