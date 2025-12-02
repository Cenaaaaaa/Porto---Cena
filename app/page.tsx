"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CVSection from "@/components/cv-section"
import AboutSection from "@/components/about-section"
import ProjectsGrid from "@/components/projects-grid"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header />
      <main className="overflow-hidden">
        <div className={isLoaded ? "page-enter-content" : "opacity-0"} style={{ animationDelay: "0ms" }}>
          <HeroSection />
        </div>

        <div className={isLoaded ? "page-enter-content" : "opacity-0"} style={{ animationDelay: "100ms" }}>
          <CVSection />
        </div>

        {/* Enhanced scroll-in animation to Projects section divider */}
        <div className="px-6 py-16 flex flex-col items-center justify-center gap-3 enhanced-scroll-in">
          <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center whitespace-nowrap">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-center text-foreground/60 text-sm md:text-base font-medium max-w-2xl">
            Exploring my growth as a full-stack developer and AI enthusiast
          </p>
        <div className={isLoaded ? "page-enter-content" : "opacity-0"} style={{ animationDelay: "150ms" }}>
          <AboutSection />
        </div>

        </div>
        <div className="px-6 py-16 flex flex-col items-center justify-center gap-3 enhanced-scroll-in">
          <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center whitespace-nowrap">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-center text-foreground/60 text-sm md:text-base font-medium max-w-2xl">
            A collection of my technical work and contributions
          </p>
        </div>
        <div className={isLoaded ? "page-enter-content" : "opacity-0"} style={{ animationDelay: "200ms" }}>
          <ProjectsGrid />
        </div>

        {/* Enhanced scroll-in animation to Experience section divider */}
        <div className="px-6 py-16 flex flex-col items-center justify-center gap-3 enhanced-scroll-in">
          <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center whitespace-nowrap">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-center text-foreground/60 text-sm md:text-base font-medium max-w-2xl">
            My Organizational Journey
          </p>
        </div>
        <div className={isLoaded ? "page-enter-content" : "opacity-0"} style={{ animationDelay: "300ms" }}>
          <ExperienceSection />
        </div>

        {/* Enhanced scroll-in animation to Contact section divider */}
        <div className="px-6 py-16 flex flex-col items-center justify-center gap-3 enhanced-scroll-in">
          <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center whitespace-nowrap">Contact</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <p className="text-center text-foreground/60 text-sm md:text-base font-medium max-w-2xl">
            Let's connect and collaborate
          </p>
        </div>
        <div className={isLoaded ? "page-enter-content" : "opacity-0"} style={{ animationDelay: "400ms" }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
