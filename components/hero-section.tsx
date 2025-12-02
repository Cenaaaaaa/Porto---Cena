"use client"

import { useEffect, useState } from "react"
import { Mail, Linkedin, Github, FolderGit, Book, SquareUser } from "lucide-react"

export default function HeroSection() {
  const roles = ["Full Stack Developer & Designer", "AI Engineer Enthusiast", "Data Scientist Enthusiast"]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 30 : 60
    const totalDelay = 3000

    let timeout
    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, typingSpeed)
      } else {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    } else {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, totalDelay)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex, roles])

  return (
    <section id="home" className="pt-32 pb-16 px-6 md:pt-40 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-12">
            {/* Header with small accent text */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Jonathan Christian Souw <span className="text-primary typewriter-text">{displayedText}</span>
              </h1>
            </div>
            {/* Description */}
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl font-medium mt-[-60px]">
              As a Computer Science student in Intelligent Systems, I'm developing intelligent solutions using Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                    🎓
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">BINUS University</h4>
                  <p className="text-sm text-foreground/60">Computer Science</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 text-accent">
                    ⭐
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">GPA: 3.55/4.00</h4>
                  <p className="text-sm text-foreground/60">4th-semester standing</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-6 py-6 border-t border-b border-border">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:jonathan.souw@binus.ac.id"
                  className="text-foreground/70 hover:text-primary transition-smooth text-sm"
                >
                  jonathan.souw@binus.ac.id
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="https://www.linkedin.com/in/jonathan-christian-souw-67b045335/" className="text-foreground/70 hover:text-primary transition-smooth text-sm">
                  Jonathan Christian Souw

                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="https://github.com/Cenaaaaaa" className="text-foreground/70 hover:text-primary transition-smooth text-sm">
                  Cenaaaaaa
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth font-semibold shadow-sm hover:shadow-md"
              >
                <FolderGit className="mr-2 h-4 w-4" />My Project
              </a>
              <a
                href="https://drive.google.com/drive/folders/1onTgv-qQXuIo3wgkxaSL2NpYhK8tcHU2"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth font-semibold shadow-sm hover:shadow-md"
              >
                <Book className="mr-2 h-4 w-4" />Grade Transcript
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-smooth font-semibold shadow-sm hover:shadow-md"
              >
                <SquareUser className="mr-2 h-4 w-4" />Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="hidden md:flex justify-center items-center mt-60">
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/Foto cena home.jpg"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-accent opacity-50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-accent opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
