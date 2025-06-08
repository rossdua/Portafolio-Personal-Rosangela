import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Settings, Palette } from "lucide-react";
import { skills } from "@/data/portfolio";

const Skills = () => {
  const skillCategories = {
    frontend: { name: "Frontend", icon: Code, color: "blue" },
    backend: { name: "Backend", icon: Database, color: "green" },
    tools: { name: "Herramientas", icon: Settings, color: "purple" },
    design: { name: "Diseño", icon: Palette, color: "pink" },
  };

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(
            ([categoryKey, category], index) => {
              const categorySkills = groupedSkills[categoryKey] || [];
              const Icon = category.icon;

              return (
                <motion.div
                  key={categoryKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-12 h-12 mx-auto rounded-full bg-${category.color}-100 flex items-center justify-center mb-3`}
                      >
                        <Icon
                          className={`text-${category.color}-600`}
                          size={24}
                        />
                      </div>
                      <CardTitle className="text-lg text-gray-900">
                        {category.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">
                              {skill.name}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            },
          )}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Enfoque en el Desarrollo Moderno
              </h3>
              <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
                Me mantengo actualizada con las últimas tendencias y mejores
                prácticas en desarrollo web, enfocándome en crear experiencias
                excepcionales para usuarios y desarrolladores.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    4+
                  </div>
                  <div className="text-sm text-gray-600">Años Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    20+
                  </div>
                  <div className="text-sm text-gray-600">
                    Proyectos Completados
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Tecnologías</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-1">
                    99%
                  </div>
                  <div className="text-sm text-gray-600">
                    Satisfacción Cliente
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
