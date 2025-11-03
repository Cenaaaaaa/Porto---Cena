"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Instagram, EyeIcon } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/CV Jonathan Christian Souw.pdf"
    link.download = "CV_Jonathan_Christian_Souw.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    window.open("https://drive.google.com/drive/folders/1onTgv-qQXuIo3wgkxaSL2NpYhK8tcHU2?usp=sharing", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">Jonathan Christian Souw</h1>
              <p className="text-xl sm:text-2xl text-primary font-medium">
                Computer Science Student | Intelligent Systems
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                As a Computer Science student in Intelligent Systems, I'm developing intelligent solutions using Machine
                Learning, Deep Learning, Natural Language Processing, and Computer Vision.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button size="lg" onClick={handleDownload} className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button size="lg" onClick={handlePreview} className="bg-primary hover:bg-primary/90">
                <EyeIcon className="mr-2 h-4 w-4" />
                Grade Transcripts
              </Button>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/Cenaaaaaa" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/jonathan-christian-souw-67b045335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/jonathancso_?igsh=dG0xcDRmanExMXFz" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src="/foto utama 2.jpg"
                  alt="Profile Photo"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
