import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

const ExternalLinkIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 18}
    height={size || 18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const AppleIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 18}
    height={size || 18}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 18}
    height={size || 18}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-navy/10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle text-center mx-auto"
        >
          Some of my best work
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} delay={index * 0.2} className="h-full">
              <div className="h-80 bg-gradient-to-br from-orange/20 to-navy/20 rounded-lg mb-4 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl">
                      {project.featured ? "💍" : "🚗"}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mb-2">
                {project.featured && (
                  <span className="px-2 py-1 bg-orange/20 text-orange text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gradient mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-orange mb-2">
                  Key Features:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 6).map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark/50 text-gray-300 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 6 && (
                    <span className="px-2 py-1 bg-dark/50 text-gray-400 text-xs rounded-md">
                      +{project.features.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-orange mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange/20 text-orange rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {/* App Store Button */}
                {"appStoreUrl" in project &&
                  project.appStoreUrl &&
                  project.appStoreUrl !== "#" ? (
                    <Button
                      variant="outline"
                      href={project.appStoreUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2"
                      type="button"
                    >
                      <AppleIcon size={18} />
                      App Store
                    </Button>
                  ) : null}

                {/* Play Store Button */}
                {"playStoreUrl" in project &&
                  project.playStoreUrl &&
                  project.playStoreUrl !== "#" ? (
                    <Button
                      variant="outline"
                      href={project.playStoreUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2"
                      type="button"
                    >
                      <PlayStoreIcon size={18} />
                      Play Store
                    </Button>
                  ) : null}

                {/* Demo Button (fallback for projects without store links) */}
                {(!("appStoreUrl" in project) ||
                  !project.appStoreUrl ||
                  project.appStoreUrl === "#") &&
                  (!("playStoreUrl" in project) ||
                    !project.playStoreUrl ||
                    project.playStoreUrl === "#") &&
                  "demoUrl" in project &&
                  project.demoUrl &&
                  project.demoUrl !== "#" ? (
                    <Button
                      variant="outline"
                      href={project.demoUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2"
                      type="button"
                    >
                      <ExternalLinkIcon size={18} />
                      Demo
                    </Button>
                  ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
