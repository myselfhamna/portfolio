import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Card } from '../components/Card';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Work Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-center mx-auto"
        >
          My professional journey
        </motion.p>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <Card key={exp.id} delay={index * 0.2}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gradient mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-orange font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 + i * 0.05 }}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-orange mr-2 mt-1">▹</span>
                    <span>{resp}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 + i * 0.05 }}
                    className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};