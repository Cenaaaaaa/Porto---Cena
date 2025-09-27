"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github, Users, Briefcase } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "CAteriNgz",
    description:
      "Cateringz is a web-based restaurant platform that offers a variety of food, featuring a complete menu, special promotions, and customer testimonials to enhance trust and user experience.",
    fullDescription:
      "Cateringz is a web-based restaurant platform that I created during my second semester. It provides a wide variety of food, a complete menu, special promotional dishes, and customer testimonials to increase trust and user experience. The project was built using HTML for structure, CSS for styling, and JavaScript for interactivity",
    role: "Developer",
    contributors: ["Jonathan Christian Souw"],
    image: "/cateringzz.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Cenaaaaaa/HCI---CAteriNgz.git",
  },
  {
    title: "Tense Sense",
    description:
      "Tense Sense is a web-based application built with Flask, HTML, CSS, and JavaScript that predicts the grammatical tense of user-input sentences.",
    fullDescription:
      "Tense Sense is a web-based project I developed in my third semester using Flask for the backend and HTML, CSS, and JavaScript for the frontend. The system integrates natural language processing and machine learning to analyze user-input sentences and classify them into grammatical tense categories such as present, past, or future. This project highlights the combination of AI concepts with web technologies, resulting in an interactive platform that supports grammar understanding and language learning in an accessible way.",
    role: "Frontend Developer & Machine Learning Developer",
    contributors: ["Jonathan Christian Souw","Bren Alden","Hernando Tan"],
    image: "/tensensee.png",
    technologies: ["Flask", "HTML", "CSS", "JavaScript", "Python"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Cenaaaaaa/AI---Tense-Sense.git",
  },
  {
    title: "Workly",
    description: "Workly is a job search web platform designed to connect companies with job seekers, with a focus on opportunities for senior high school graduates.",
    fullDescription:
      "Workly is a job search platform I developed in my fourth semester using Django for the backend and HTML, CSS, and JavaScript for the frontend. It aims to bridge the gap between companies and job seekers, with a special focus on creating accessible opportunities for senior high school graduates. For job seekers, Workly provides features such as job search, CV posting, and access to career articles and tips. For companies, the platform enables posting job vacancies and advertisements to reach potential candidates effectively. This project demonstrates my ability to combine web technologies and practical design to address real-world employment challenges.",
    role: "Frontend Developer & Backend Developer",
    contributors: ["Jonathan Christian Souw","Richard Chrysander","Dava Rabbani Adrian Widyatmoko", "Fadhil Aziz Rizky", "Samuel"],
    image: "/worklys.png",
    technologies: ["HTML", "CSS", "JavaScript", "Django"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Cenaaaaaa/SE---Workly.git",
  },
  {
    title: "Football Match Predictor",
    description: "Football Match Prediction is a machine learning project that predicts the outcomes of football matches based on historical data and performance statistics.",
    fullDescription:
      "Developed in my fourth semester, Football Match Prediction combines web development and machine learning to provide predictions for football match outcomes. The frontend was built with React to deliver a responsive and interactive user interface, while the backend uses Python with machine learning libraries such as Scikit-learn and XGBoost to analyze historical data and generate predictions. Pandas and NumPy were used for data preprocessing, and visualization libraries like Matplotlib and Seaborn helped in exploring performance patterns.",
    role: "Solo Developer",
    contributors: ["Solo Project"],
    image: "/footballmatchpredictors.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Python"],
    // liveUrl: "#",
    githubUrl: "https://github.com/Cenaaaaaa/ML---Football-Match-Predictor.git",
  },
]

export function ProjectSection() {
  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These projects highlight my journey in applying technology with creativity to develop impactful solutions.
            </p>
          </div>

          {/* Projects grid - 3 projects in first row, 1 in second row */}
          <div className="space-y-8">
            {/* First row - 3 projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            {/* Second row - 1 project centered */}
            <div className="flex justify-center">
              <div className="w-full max-w-md lg:max-w-lg">
                <ProjectCard project={projects[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group overflow-hidden border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg cursor-pointer">
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-sm font-medium">Click to view details</div>
            </div>
          </div>

          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-base">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Description</h4>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h4 className="text-lg font-semibold">Contribution</h4>
            </div>
            <p className="text-muted-foreground">{project.role}</p>
          </div>

          {/* Contributors */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <h4 className="text-lg font-semibold">Contributors</h4>
            </div>
            <ul className="space-y-1">
              {project.contributors.map((contributor, index) => (
                <li key={index} className="text-muted-foreground">
                  • {contributor}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            {/* <Button asChild className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button> */}
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
