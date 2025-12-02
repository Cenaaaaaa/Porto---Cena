"use client"
import { Code, Brain, BarChart2, Users, Puzzle, GraduationCap, LibraryBig, Omega, BookOpen, UserSearch, MonitorCog, AppWindow } from "lucide-react"


export default function AboutSection() {
  const journeyItems = [
    {
      icon: GraduationCap,
      title: "Academic Journey",
      description:
        "Currently pursuing a Computer Science degree specializing in Intelligent Systems. I focus on developing machine learning and deep learning models, exploring NLP, computer vision, and neural architectures. My academic journey centers on building AI solutions, optimizing models, and applying intelligent systems to real-world problems.",
    },
    {
      icon: LibraryBig,
      title: "Research & Innovation Journey",
      description:
        "Actively involved in research-driven projects, from NLP tense classification to multimodal hoax detection using VisualBERT. I enjoy translating academic concepts into practical models, experimenting with architectures, improving F1/accuracy, and understanding how data, algorithms, and system design work together.",
    },
    {
      icon: Omega,
      title: "Engineering & Development Journey",
      description:
        "Growing as a hybrid engineer with experience in both AI and full-stack development. I've built end-to-end systems combining backend logic, data pipelines, and model inference, including job platforms, prediction tools, and intelligent applications. I aim to create scalable, production-ready solutions.",
    },
    {
      icon: BookOpen,
      title: "Applied Learning & Hands-On Experience",
      description:
        "I learn by building. My projects include random forest predictors, NLP models, computer vision pipelines, and multimodal architectures. Each project strengthens my understanding of data preprocessing, modeling, evaluation, and deployment essential skills for real industry engineering.",
    },
    {
      icon: UserSearch,
      title: "Personal Growth & Professional Development",
      description:
        "Beyond academics, I grow through leadership roles, volunteering, and collaboration. Leading events, managing teams, and mentoring peers helped me develop communication, teamwork, and problem-solving skills — qualities that support my development as a future engineer.",
    },
    
  ]

  const skills = [
    { category: "Programming", description: "Python, C, Java, HTML, CSS, JavaScript, SQL, PHP", level: "Advanced", icon: Code },
    { category: "Artificial Intelligence", description: "Machine learning, Deep Learning, Natural language Processing, Computer Vision", level: "Advanced", icon: Brain },
    { category: "Data Analysis", description: "Exploratory Data Analysis, Performance Analytics, Visualization", level: "Advanced", icon: BarChart2 },
    { category: "Backend & Web Frameworks", description: "Django, Flask, ORM, REST API, Backend Engineering", level: "Intermediate", icon: MonitorCog },
    { category: "Project Execution", description: "Project Planning, Requirement Analysis, Task Breakdown, Documentation, Delivering Functional Prototypes", level: "Advanced", icon: AppWindow },
  ]

  const tools = [
    // Frontend
    "Next.js",
    "React",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",

    // Backend & API
    "Django",
    "Flask",
    "Laravel",
    "Node.js",

    // AI & Machine Learning
    "Python",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-Learn",
    "OpenCV",
    "NLTK",

    // Data & Analysis
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",

    // Database
    "MySQL",

    // Cloud & Deployment
    "Vercel",

    // Dev Tools
    "Git",
    "GitHub",
  ];

  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
    "Teamwork",
    "Leadership",
    "Adaptability",
    "Time Management",
    "Project Management",
    "Collaboration",
  ];

  return (
    <section id="about" className="py-16 px-6 section-enter">
      <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 w-full max-w-4xl mx-auto mb-4">
            {/* <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" /> */}
          </div>
        </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Profile Photo */}
        <div className="text-center mb-16 mt-[-70px]">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <img
                src="/fotocena.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-3">About Me</h2> */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-4xl font-medium text-center mx-auto">
              Computer Science student specializing in intelligent systems with experience in developing full-stack web applications and foundational skills in machine learning, deep learning, NLP, and computer vision.
            </p>
        </div>

        {/* Main Content Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Journey Cards */}
          <div className="space-y-4">
            {journeyItems.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-5 hover:border-primary/50 transition-colors duration-300 bg-card/50"
              >
                <div className="flex items-start gap-3 mb-2">
                  <item.icon className="w-5 h-5" />
                  <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          

          {/* Right Column - Skills & Expertise */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors duration-300 bg-card/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.category}</h4>
                        <p className="text-xs text-foreground/60">{skill.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Frameworks */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Tools & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((softSkills, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                  >
                    {softSkills}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
