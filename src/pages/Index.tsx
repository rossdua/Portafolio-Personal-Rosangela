import { useEffect } from "react";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling polyfill for older browsers
    const smoothScrollPolyfill = () => {
      if (!("scrollBehavior" in document.documentElement.style)) {
        import("smoothscroll-polyfill").then(({ polyfill }) => {
          polyfill();
        });
      }
    };

    smoothScrollPolyfill();

    // Add scroll event listener for header background
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = element.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Update active navigation if needed
          const navLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
          navLinks.forEach((link) => {
            link.classList.add("active");
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
