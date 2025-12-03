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

  const fade = (delay: number) =>
    isLoaded ? "page-enter-content" : "opacity-0"

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header />

      <main className="overflow-hidden">

        {/* ========================== HERO ========================== */}
        <div className={fade(0)} style={{ animationDelay: "0ms" }}>
          <HeroSection />
        </div>

        {/* ========================== CV ========================== */}
        <div className={fade(100)} style={{ animationDelay: "100ms" }}>
          <CVSection />
        </div>

        {/* ========================== PROJECTS ========================== */}
        <SectionDivider
          title="Projects"
          subtitle="A collection of my technical work and contributions"
        />
        <div className={fade(200)} style={{ animationDelay: "200ms" }}>
          <ProjectsGrid />
        </div>
        
        {/* ========================== ABOUT ========================== */}
        <SectionDivider
          title="About Me"
          subtitle="Exploring my growth as a full-stack developer and AI enthusiast"
        />
        <div className={fade(150)} style={{ animationDelay: "150ms" }}>
          <AboutSection />
        </div>

        {/* ========================== EXPERIENCE ========================== */}
        <SectionDivider
          title="Experience"
          subtitle="My Organizational Journey"
        />
        <div className={fade(300)} style={{ animationDelay: "300ms" }}>
          <ExperienceSection />
        </div>

        {/* ========================== CONTACT ========================== */}
        <SectionDivider
          title="Contact"
          subtitle="Let's connect and collaborate"
        />
        <div className={fade(400)} style={{ animationDelay: "400ms" }}>
          <ContactSection />
        </div>

      </main>

      <Footer />
    </div>
  )
}


/* -------------------------------------------------------------
   💡 COMPONENT: Section Divider (biar nggak copy-paste terus)
-------------------------------------------------------------- */
function SectionDivider({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="px-6 py-16 flex flex-col items-center justify-center gap-3 enhanced-scroll-in">
      <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
      </div>

      <p className="text-center text-foreground/60 text-sm md:text-base font-medium max-w-2xl">
        {subtitle}
      </p>
    </div>
  )
}
