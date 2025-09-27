"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Eye } from "lucide-react"
import Image from "next/image"

export function CVSection() {
  const handleDownload = () => {
    // Create a temporary link to download the CV
    const link = document.createElement("a")
    link.href = "/CV Jonathan Christian Souw.pdf"
    link.download = "CV_Jonathan_Christian_Souw.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    // Open CV in new tab for preview
    window.open("/CV Jonathan Christian Souw.pdf", "_blank")
  }

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Curriculum Vitae</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get my CV to see the complete details of my career journey, education, and technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* CV Preview */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden border-border bg-card">
              <CardContent className="p-0">
                <div className="relative group cursor-pointer" onClick={handlePreview}>
                  <Image
                    src="/cvcena.png"
                    alt="CV Preview"
                    width={450}
                    height={600}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary rounded-full p-4">
                      <Eye className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CV Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Professional Resume</h3>
              <p className="text-muted-foreground leading-relaxed">My CV provides a complete picture of who I am, including:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Professional experiences that shaped my adaptability and teamwork
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Educational background as a Computer Science student specializing in Intelligent Systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Technical expertise in programming, AI, and software development, along with soft skills such as communication and leadership
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Portfolio and project highlights showcasing creativity, problem-solving, and innovation
                </li>
                
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleDownload} className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={handlePreview}>
                <Eye className="mr-2 h-4 w-4" />
                Preview CV
              </Button>
            </div>

            {/* <div className="text-sm text-muted-foreground">
              <p>Format: PDF | Ukuran: ~2MB | Terakhir diupdate: Januari 2025</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
