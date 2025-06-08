import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Github,
      Linkedin,
      Mail,
    };
    const Icon = icons[iconName];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {personalInfo.title} especializada en crear experiencias digitales
              excepcionales que combinan diseño elegante con funcionalidad
              robusta.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {getSocialIcon(link.icon)}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              {[
                { name: "Inicio", href: "#home" },
                { name: "Sobre mí", href: "#about" },
                { name: "Proyectos", href: "#projects" },
                { name: "Habilidades", href: "#skills" },
                { name: "Contacto", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Trabajemos Juntos
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm flex items-center">
              © {new Date().getFullYear()} {personalInfo.name}. Hecho con
              <Heart className="mx-1 text-red-500" size={16} />y mucho código.
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span>Construido con React + TypeScript</span>
              <span>•</span>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/rosangela/portfolio",
                    "_blank",
                  )
                }
                className="hover:text-white transition-colors duration-200"
              >
                Ver Código Fuente
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
