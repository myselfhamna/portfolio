import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Card } from '../components/Card';

export const Skills = () => {
  const categories = [
    { key: 'frontend', title: 'Frontend', icon: '💻' },
    { key: 'mobile', title: 'Mobile', icon: '📱' },
    { key: 'backend', title: 'Backend', icon: '🔧' },
    { key: 'stateManagement', title: 'State Management', icon: '📦' },
    { key: 'authentication', title: 'Authentication', icon: '🔐' },
    { key: 'tools', title: 'Tools', icon: '🛠️' },
    { key: 'testing', title: 'Testing', icon: '🧪' },
  ] as const;

  return (
    <section id="skills" className="py-20 px-4 bg-navy/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-center mx-auto"
        >
          Technologies I work with
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const skills = skillsData[category.key];
            return (
              <Card key={category.key} delay={index * 0.1}>
                <div className="mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gradient mt-2">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-orange">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                          className="h-full bg-gradient-to-r from-orange to-navy rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};