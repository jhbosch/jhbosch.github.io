"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Database, Globe, Server, Zap } from "lucide-react"

const skills = [
  {
    icon: Code2,
    name: "React",
    level: 95,
    color: "from-primary to-primary/50",
  },
  {
    icon: Server,
    name: "Node.js",
    level: 90,
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Code2,
    name: "TypeScript",
    level: 92,
    color: "from-primary to-primary/50",
  },
  {
    icon: Globe,
    name: "PHP",
    level: 85,
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Server,
    name: "Laravel",
    level: 88,
    color: "from-primary to-primary/50",
  },
  {
    icon: Database,
    name: "Drupal",
    level: 80,
    color: "from-secondary to-secondary/50",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    level: 87,
    color: "from-primary to-primary/50",
  },
  {
    icon: Zap,
    name: "Next.js",
    level: 93,
    color: "from-secondary to-secondary/50",
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="neon-text text-primary">Skills & Technologies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>

                  <div className="w-full">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className={`h-full bg-gradient-to-r ${skill.color} neon-glow`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 text-center">{skill.level}%</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
