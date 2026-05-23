import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import { Card } from '../components/Card';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-center mx-auto"
        >
          A passionate developer building amazing experiences
        </motion.p>

        <Card className="max-w-4xl mx-auto" delay={0.3}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 leading-relaxed whitespace-pre-line"
          >
            {aboutData.summary}
          </motion.p>
        </Card>
      </div>
    </section>
  );
};