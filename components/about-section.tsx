"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="neon-text text-primary">About Me</span>
          </h2>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full gradient-border overflow-hidden"
            >
              <img src="/professional-developer-portrait.png" alt="Profile" className="w-full h-full object-cover" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg leading-relaxed text-foreground/90 text-pretty"
            >
              I'm a passionate Full Stack Web Developer with over 5 years of experience building scalable web
              applications. My journey in tech started with a curiosity about how things work, which evolved into a deep
              love for creating elegant solutions to complex problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg leading-relaxed text-foreground/90 text-pretty"
            >
              I specialize in modern web technologies including React, Node.js, TypeScript, and cloud platforms. I'm
              committed to writing clean, maintainable code and staying up-to-date with the latest industry trends and
              best practices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg leading-relaxed text-foreground/90 text-pretty"
            >
              When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or
              exploring new technologies that push the boundaries of web development.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
