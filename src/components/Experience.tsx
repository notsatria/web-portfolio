import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted/30">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and the experiences that have shaped my skills and expertise in software development.</p>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div key={experience.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <CardTitle className="text-xl">{experience.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">{experience.company}</CardDescription>
                    {experience.location && <p className="text-sm text-muted-foreground mt-1">{experience.location}</p>}
                  </div>
                  <div className="mt-2 md:mt-0">
                    {experience.jobType && <span className="inline-block px-3 py-1 bg-background border text-primary rounded-full text-sm">{experience.jobType}</span>}
                    <span className="inline-block px-3 py-1 ml-2 bg-primary text-primary-foreground rounded-full text-sm">{experience.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {experience.description && <p className="text-muted-foreground mb-4">{experience.description}</p>}
                {experience.bulletPoints && (
                  <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                    {experience.bulletPoints.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
