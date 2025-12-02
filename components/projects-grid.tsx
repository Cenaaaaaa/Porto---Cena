"use client"

import { useState } from "react"
import { Github, Play, Wallpaper, ScanSearch} from "lucide-react"
import ProjectModal from "./project-modal"

const projects = [
  {
    id: 1,
    title: "Tense Sense",
    description:
      "Tense Sense is a web-based project I developed in my third semester using Flask for the backend and HTML, CSS, and JavaScript for the frontend. The system integrates natural language processing and machine learning to analyze user-input sentences and classify them into grammatical tense categories such as present, past, or future. This project highlights the combination of AI concepts with web technologies, resulting in an interactive platform that supports grammar understanding and language learning in an accessible way.",
    category: "Artificial Intelligence",
    image: "/tensesense.vercel.app_.png",
    tags: ["Fython", "Flask", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
    contribution: "Fullstack Developer",
    contributors: [
      "Jonathan Christian Souw",
      "Bren Alden",
      "Hernando Tan",
    ],
    technologies: ["Fython", "Flask", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
    demoLink: "https://tensesense.vercel.app/",
    repoLink: "https://github.com/Cenaaaaaa/AI---Tense-Sense.git",
  },
  {
    id: 2,
    title: "Fake News Detection Research",
    description: "Developed an AI system to detect hoaxes using VisualBERT combined with Faster R-CNN on the Factify3M & Fakeddit multimodal datasets. The model integrates image features and textual context into a unified transformer architecture, achieving robust classification performance on real–world multimodal misinformation.",
    category: "Research Methodology",
    image: "/fakenewsdetection.png",
    tags: ["Python", "VisualBERT", "BERT Tokenizer"],
    contribution: "Led literature review, evaluation design, and result interpretation to ensure research quality",
    contributors: ["Jonathan Christian Souw", "Richard Chrysander", "Wandy Reynand Lim"],
    technologies: ["Python", "VisualBERT", "BERT Tokenizer"],
    paperViewLink: "https://drive.google.com/drive/folders/18J3RvGH73Ac3Y_sipmBeTitPRUfM_dHS?usp=sharing",
    paperPresentationLink: "https://www.canva.com/design/DAG6XzqGVKY/gj4sUk42dUSzGEqmds-zAg/edit?utm_content=DAG6XzqGVKY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 3,
    title: "Workly",
    description: "Workly is a job search platform I developed in my fourth semester using Django for the backend and HTML, CSS, and JavaScript for the frontend. It aims to bridge the gap between companies and job seekers, with a special focus on creating accessible opportunities for senior high school graduates. For job seekers, Workly provides features such as job search, CV posting, and access to career articles and tips. For companies, the platform enables posting job vacancies and advertisements to reach potential candidates effectively. This project demonstrates my ability to combine web technologies and practical design to address real-world employment",
    category: "Software Engineering",
    image: "/workly.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Django",],
    contribution: "Fullstack Developer",
    contributors: [
      "Jonathan Christian Souw",
      "Richard Chrysander",
      "Dava Rabbani Adrian Widyatmoko",
      "Fadhil Aziz Rizky",
      "Samuel",],
      technologies: ["HTML", "CSS", "JavaScript", "Django",],
      demoLink: "https://drive.google.com/drive/folders/1ODS81OhnKd_KII52A-It39m38OxmU7XU?usp=sharing",
      repoLink: "https://github.com/Cenaaaaaa/SE---Workly.git",
    },
    {
      id: 4,
      title: "Football Match Predictor",
      description: "Football Match Prediction is a machine learning project that predicts the outcomes of football matches based on historical data and performance statistics. It combines web development and machine learning to provide predictions for football match outcomes. The frontend was built with React to deliver a responsive and interactive user interface, while the backend uses Python with machine learning libraries such as Scikit-learn and XGBoost to analyze historical data and generate predictions. Pandas and NumPy were used for data preprocessing, and visualization libraries like Matplotlib and Seaborn helped in exploring performance patterns.",
      category: "Machine Learning",
      image: "/footballmatchpredictor.vercel.app_.png",
      tags: ["Fython", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
      contribution: "Fullstack Developer",
      contributors: ["Jonathan Christian Souw", "Gilbert Christian Putra Utama", "Richard Chrysander"],
      technologies: ["Fython", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
      demoLink: "https://footballmatchpredictor.vercel.app/",
      repoLink: "https://github.com/Cenaaaaaa/ML---Football-Match-Predictor.git",
    },
    {
      id: 5,
      title: "Advancing Lung Cancer Classification Through Multimodal Deep Learning",
      description: "Developed a multimodal deep learning approach for lung cancer classification by integrating radiomic (CT scan) and pathomic (histopathology) features. This fusion enables more comprehensive tumor representation and improves diagnostic accuracy compared to single-modality models.",
      category: "Deep Learning",
      image: "#",
      tags: ["Ongoing"],
      contribution: "-",
      contributors: ["Jonathan Christian Souw", "Mikhael Kevin Narendra Jayadharma", "Steven Imanuel Lambert"],
      technologies: ["Ongoing"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 6,
      title: "Enhancing Digital Attendance Systems with Biometric Verification Using Facial Recognition",
      description: "Football Match Prediction is a machine learning project that predicts the outcomes of football matches based on historical data and performance statistics. It combines web development and machine learning to provide predictions for football match outcomes. The frontend was built with React to deliver a responsive and interactive user interface, while the backend uses Python with machine learning libraries such as Scikit-learn and XGBoost to analyze historical data and generate predictions. Pandas and NumPy were used for data preprocessing, and visualization libraries like Matplotlib and Seaborn helped in exploring performance patterns.",
      category: "Computer Vision",
      image: "#",
      tags: ["Ongoing"],
      contribution: "-",
      contributors: ["Jonathan Christian Souw", "James Dawson Haryanto", "Lityo Putra Sudarso", "Mikhael Kevin Narendra Jayadharma", "Steven Imanuel Lambert"],
      technologies: ["Ongoing"],
      demoLink: "#",
      repoLink: "#",
    },
  ]

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="work" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-muted border-b border-border/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-3 border-t border-border/20">

                    {/* Research Methodology*/}
                    {project.category === "Research Methodology" ? (
                      <>
                        <a
                          href={project.paperViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition text-sm">
                          <ScanSearch className="w-4 h-4" />
                          Paper View
                        </a>
                        <a
                          href={project.paperPresentationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-md hover:bg-primary/5 transition text-sm">
                          <Wallpaper className="w-4 h-4" />
                          Presentation
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition text-sm"
                        >
                          <Play className="w-4 h-4" />
                          App Demo
                        </a>

                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-md hover:bg-primary/5 transition text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Repository
                        </a>
                      </>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  )
}
