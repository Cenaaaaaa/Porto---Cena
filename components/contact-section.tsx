"use client"

import { Mail, Linkedin, Github, MessageCircle, Instagram, MessageSquare, MousePointer2 } from "lucide-react"

export default function ContactSection() {
  const platforms = [
    {
      name: "WhatsApp",
      description: "Send me a message",
      icon: MessageCircle,
      bgColor: "bg-[#25D366]",
      href: "https://wa.me/+6287775151952",
    },
    {
      name: "Email",
      description: "Send me an email",
      icon: Mail,
      bgColor: "bg-[#2563EB]",
      href: "mailto:jonathan.souw@binus.ac.id",
    },
    {
      name: "LinkedIn",
      description: "Professional Connection",
      icon: Linkedin,
      bgColor: "bg-[#0A66C2]",
      href: "https://www.linkedin.com/in/jonathan-christian-souw-67b045335/",
    },
    {
      name: "GitHub",
      description: "Take a look at my repositories",
      icon: Github,
      bgColor: "bg-[#1F2937]",
      href: "https://github.com/Cenaaaaaa",
    },
    {
      name: "Instagram",
      description: "My personal account",
      icon: Instagram,
      bgColor: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#833AB4]",
      href: "https://www.instagram.com/jonathancso_?igsh=dG0xcDRmanExMXFz",
    },
    {
      name: "Discord",
      description: "Send me a message",
      icon: MessageSquare,
      bgColor: "bg-[#5865F2]",
      href: "https://discord.com/users/cennnnn_",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-background section-enter mt-[-70px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's connect and collaborate</h2>
        </div> */}

        {/* Find Me On Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Find Me On</h3>
            <p className="text-foreground/70">Select the platform you find most convenient to connect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => {
              const Icon = platform.icon
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg shadow-md border border-border overflow-hidden hover:shadow-lg transition-smooth hover:-translate-y-1"
                >
                  {/* Platform Color Section */}
                  <div className={`${platform.bgColor} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6" />
                        <div>
                          <h4 className="font-bold text-base">{platform.name}</h4>
                          <p className="text-xs opacity-90">{platform.description}</p>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-smooth" />
                    </div>
                  </div>

                  {/* Button Section */}
                  <div className="p-6 bg-white">
                    <button className="w-full text-center text-foreground/70 hover:text-foreground font-medium transition-smooth group-hover:text-primary">
                      Click to Connect ᯓ➤
                    </button>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
