import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Phone } from "lucide-react";
import { personalInfo, experience } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre mí</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre mi trayectoria profesional y experiencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Mi Historia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Con más de 4 años de experiencia en desarrollo web, me
                especializo en crear aplicaciones modernas y escalables. Mi
                pasión por la tecnología me impulsa a estar siempre aprendiendo
                nuevas herramientas y mejores prácticas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Me enfoco en escribir código limpio, crear interfaces intuitivas
                y colaborar efectivamente con equipos multidisciplinarios para
                entregar productos excepcionales que generen impacto real.
              </p>
            </div>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Información de Contacto
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail size={18} />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone size={18} />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin size={18} />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Experiencia Profesional
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {exp.position}
                        </h4>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {exp.duration}
                        </div>
                      </div>

                      <p className="text-blue-600 font-medium mb-3">
                        {exp.company}
                      </p>

                      <ul className="text-gray-600 space-y-2 mb-4">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-blue-50 text-blue-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
