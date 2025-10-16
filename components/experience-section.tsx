"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with cross-functional teams.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2019 - 2020",
    description:
      "Built interactive user interfaces and implemented pixel-perfect designs. Worked closely with designers to bring creative visions to life.",
    technologies: ["React", "JavaScript", "SASS", "Webpack"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2018 - 2019",
    description:
      "Assisted in developing web applications and learned modern development practices. Contributed to both frontend and backend development.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="neon-text text-primary">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary neon-glow border-4 border-background" />

                    <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.title}
                        </h3>
                        <span className="text-sm text-muted-foreground flex items-center gap-2 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-secondary font-medium mb-3">{exp.company}</p>

                      <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
