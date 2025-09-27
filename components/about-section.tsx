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
import Image from "next/image"

const skills = [
  "5+ Programming Languages",
  "Artificial Intelligence",
  "Database Technology",
  "Machine Learning",
  "Natural Language Processing",
  "Software Engineering",
  "Deep Learning",
  "Computer Vision",
  "Problem Solving & Analytical Thinking",
  "Communication (technical & non-technical)",
  "Adaptibility & Time Management",
  "Project Management & Documentation",
  "Leadership & Teamwork"
  
]

const experiences = [
  {
    period: "January 2024 — January 2025",
    title: "Activist of Dhamma and Social Division",
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    description:
      "Active member of Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD), contributing to organizational programs, community service, and fostering teamwork within the Buddhist student community.",
  },
  {
    period: "March 2024 - June 2024",
    title: "Member of One Million Help 2024 Event Division",
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    description:
      "Managed and led volunteers in teaching hydroponic growing media to students at Tegal Angus Village State Elementary School.",
  },
  {
    period: "January 2025 — Present",
    title: "Staff of Dhamma and Social Division",
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    description:
      "As a staff member of the Dhammavaddhana Buddhist Student Family (KMBD), I was in charge of supporting the organization's programs and developing the Buddhist student community.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative">
              <Image
                src="/Foto cena home.jpg"
                alt="Foto Profil"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover aspect-square"
              />
            </div>

            <div className="space-y-4 w-full">
              <h3 className="text-xl font-semibold text-foreground text-center lg:text-left">Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-8">
            {/* About content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Computer Science student majoring in Intelligent Systems at Bina Nusantara University. 
                I am passionate about developing artificial intelligence solutions through machine learning, deep learning, natural language processing, and computer vision. 
                I have worked on research projects such as multimodal hoax detection and soccer match prediction, and I am committed to continuously improving my skills to contribute to the advancement of intelligent technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of class, I enjoy learning and trying new things to expand my understanding of artificial intelligence. 
                I'm also adaptable and can work both independently and collaboratively within a team. 
                I'm prepared to contribute optimally in a variety of work situations. 
                This experience has helped me improve my technical knowledge as well as my communication, problem-solving, and teamwork skills, 
                preparing me for future challenges in the field of intelligent systems.
              </p>
            </div>

            <div className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full sm:w-auto">
                    Show Experience →
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Organizational Experience</DialogTitle>
                    <DialogDescription>
                      This section highlights my organizational experiences, where I developed leadership, teamwork, and communication skills through active involvement in events and community initiatives.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    {experiences.map((exp, index) => (
                      <Card key={index} className="border-border bg-card">
                        <CardContent className="p-6">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                {exp.period}
                              </p>
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                            <p className="text-lg text-primary font-medium">{exp.company}</p>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
