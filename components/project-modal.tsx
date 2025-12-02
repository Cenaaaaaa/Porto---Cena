"use client"

import { X, Play, Github } from "lucide-react"

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-md">
            <X className="w-5 h-5 text-foreground/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg h-64 bg-muted">
            <img src={project.image} className="w-full h-full object-cover" />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-primary uppercase">Description</h3>
            <p className="text-foreground/70">{project.description}</p>
          </div>

          {/* Contribution */}
          <div>
            <h3 className="text-lg font-bold text-primary uppercase">Contribution</h3>
            <p className="text-foreground/70">{project.contribution}</p>
          </div>

          {/* Contributors */}
          <div>
            <h3 className="text-lg font-bold text-primary uppercase">Contributors</h3>
            <ul className="space-y-1">
              {project.contributors?.map((contrib: string, idx: number) => (
                <li key={idx} className="text-foreground/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {contrib}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-primary uppercase">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
