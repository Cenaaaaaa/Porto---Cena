"use client"

import { Download, Eye, ScrollText } from "lucide-react"

export default function CVSection() {
  return (
    <section
      id="cv"
      className="py-16 px-6 bg-background animate-in fade-in slide-in-from-bottom-8 duration-1000"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <h2 className="text-xl font-medium text-accent uppercase tracking-widest whitespace-nowrap">
              CV Download
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <h3 className="text-md md:text-3xl font-bold text-foreground mb-2 text-center mt-[20px]">
            Resume & Professional Background
          </h3>
          <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
            Get my CV to see the complete details of my career journey, education, and technical skills.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* LEFT COLUMN – CV PREVIEW */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-border/20 hover:shadow-lg transition-shadow flex-1">
                <img src="/FotoCV.jpg" alt="CV Preview" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* RIGHT COLUMN – INFO */}
            <div className="bg-white rounded-lg shadow-md p-5 md:p-6 flex flex-col justify-start">

              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <ScrollText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold text-foreground mt-1">
                  Complete Professional CV
                </h3>
              </div>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] text-foreground/70 leading-relaxed mb-4">
                A Computer Science student specializing in Intelligent Systems with hands-on experience in building AI-driven applications,
                 NLP models, machine learning classifiers, and full-stack web systems. Skilled in Python, ML/DL frameworks, and data modeling,
                  with project experience in tense classification (NLP), football match prediction, and job-platform development.
                   Actively involved in organizational roles with strong teamwork, communication, and leadership capabilities.
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 mb-4">
                <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide text-accent">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Experience in AI application development, including NLP, Machine Learning Classifiers, and Computer Vision Pipelines
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Hands-on in full-stack web development, integrating backend logic with modern UI/UX
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Strong foundation in Machine Learning, Deep Learning, NLP, and Intelligent Systems
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Proficient in Python, PyTorch, TensorFlow, Scikit-Learn, and modern cloud tools
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Demonstrated ability to deliver end-to-end projects, from data preprocessing to model evaluation
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    3.55/4.00 GPA — consistent academic performance with active organizational involvement
                  </li>
                </ul>
              </div>

              {/* What’s Inside This CV */}
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide text-accent">
                  What's Inside This CV
                </h4>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Clear overview of my background in Intelligent Systems and applied AI engineering
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Portfolio of AI, ML, NLP, and full-stack development projects with measurable outputs
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Hands-on academic experience in data modeling, model training, and feature engineering
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Experience contributing to high-impact organizational programs and community-driven projects
                  </li>
                </ul>
              </div>

              {/* Future Goals */}
              <div className="space-y-2 mb-2">
                <h4 className="font-semibold text-foreground text-xs uppercase tracking-wide text-accent">
                  Future Engineering Goals
                </h4>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Build a career as an AI Engineer specializing in applied machine learning and intelligent systems
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Develop scalable, production-ready AI solutions used by real users and enterprises
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Contribute to engineering teams that prioritize innovation, data-driven decision making, and the development of robust, scalable AI systems.
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-foreground/70">
                    <span className="text-accent font-bold">•</span>
                    Continue growing as a full-stack + AI hybrid engineer capable of solving complex, end-to-end problems
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* BUTTONS ROW – OUTSIDE THE CARDS */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">

            {/* Open Preview */}
            <a
              href="/FotoCV.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary
              text-primary rounded-md hover:bg-primary/5 transition-smooth font-semibold w-full"
            >
              <Eye className="w-4 h-4" />
              Open Preview
            </a>

            {/* Download CV */}
            <a
              href="/CV-JonathanChristianSouw.pdf"
              download="CV-JonathanChristianSouw.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90
              text-white rounded-md transition-smooth font-semibold w-full"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}
