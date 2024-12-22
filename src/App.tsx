import React from "react";
import { Navbar } from "./modules/navbar/nav.tsx";
import Hero from "./modules/heros/hero.tsx";
import Services from "./modules/servis/servicios.tsx";
import WhyOurServices from "./modules/ourServices/ourservices.tsx";
import { WhyWebPresence } from "./modules/whyweb/presence.tsx";
import Projects from "./modules/projects/project.tsx";
import Stats from "./modules/star/stats.tsx";
import Testimonials from "./modules/testimonials/testimonal.tsx";
import { Footer } from "./modules/footer/footers.tsx";
import AboutBrandAxion from "./modules/aboutbrandaxiom/aboutbrandaxiom.tsx";
import ServicesPlan from "./modules/ServicesPlan/plan.tsx";
import AboutUs from "./modules/about/aboutUs.tsx";
import Blog from "./modules/blogs/blog.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#020617] text-white">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Services />
        <AboutBrandAxion />
        <AboutUs />
        <ServicesPlan />
        <section>
          <article>
            <WhyOurServices />
            <WhyWebPresence />
            <Projects />
            <Stats />
            <Blog />
            <Testimonials />
          </article>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
