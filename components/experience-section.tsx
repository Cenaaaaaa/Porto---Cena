"use client"

const experiences = [
  {
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    position: "Staff of Dhamma and Social Division",
    period: "January 2025 - Present",
    description: "Active member of Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD), contributing to organizational programs, community service, and fostering teamwork within the Buddhist student community.",
    skills: ["Adaptability", "Communication", "Time Management", "Teamwork", "Leadership"],
  },
  {
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    position: "Member of One Million Help 2024 Event Division",
    period: "March 2024 - June 2024",
    description: "Managed and led volunteers in teaching hydroponic growing media to students at Tegal Angus Village State Elementary School.",
    skills: ["Leadership", "Teamwork", "Time Management", "Communication", "Analytical Thinking"],
  },
  {
    company: "Keluarga Mahasiswa Buddhis Dhammavaddhana",
    position: "Activist of Dhamma and Social Division",
    period: "January 2024 — January 2025",
    description: "Active member of Keluarga Mahasiswa Buddhis Dhammavaddhana (KMBD), contributing to organizational programs, community service, and fostering teamwork within the Buddhist student community.",
    skills: ["Adaptability", "Communication", "Time Management", "Teamwork", "Leadership"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30 section-enter">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-2xl text-primary tracking-widest mb-4">My Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 transition-smooth hover:border-primary/70"
            >
              <div className="absolute left-[-12px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-background transition-smooth hover:scale-125 shadow-sm" />

              <div className="space-y-2 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.position}</h3>
                <p className="text-primary font-semibold">{exp.company}</p>
                <p className="text-sm text-foreground/60 font-medium">{exp.period}</p>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
