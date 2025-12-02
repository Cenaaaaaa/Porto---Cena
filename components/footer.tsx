"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-foreground mb-2">Jonathan Christian Souw</h3>
            <p className="text-sm text-foreground/60 font-medium">
              AI & Software Engineer shaping intelligent, scalable solutions for real-world impact.
            </p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#cv" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    Download CV
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1onTgv-qQXuIo3wgkxaSL2NpYhK8tcHU2" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    Grade Transcript
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    Showcase
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider">Social</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/jonathan-christian-souw-67b045335/" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Cenaaaaaa" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jonathancso_?igsh=dG0xcDRmanExMXFz" className="text-sm text-foreground/60 hover:text-primary transition-smooth font-medium">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/60 font-medium">&copy; {currentYear} Jonathan Christian Souw.</p>
        </div>
      </div>
    </footer>
  )
}
