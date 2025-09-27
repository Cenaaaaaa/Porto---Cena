"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/6287775151952",
      color: "bg-green-500 hover:bg-green-600",
      description: "Chat langsung",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:jonathan.souw@binus.ac.id",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Kirim email",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jonathan-christian-souw-67b045335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "bg-blue-700 hover:bg-blue-800",
      description: "Koneksi profesional",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Cenaaaaaa",
      color: "bg-gray-800 hover:bg-gray-900",
      description: "Lihat kode saya",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/jonathancso_?igsh=dG0xcDRmanExMXFz",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      description: "Kehidupan sehari-hari",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/171x5dyi9q/",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Terhubung di Facebook",
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jonathan.souw@binus.ac.id",
      href: "mailto:jonathan.souw@binus.ac.id",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 877- 7515- 1952",
      href: "tel:+6287775151952",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Cimone Permai VI, Karawaci District, Tangerang City, Banten",
      href: "https://share.google/0jffUDVROIEUCqkJz",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-balance">Let's Connect</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am always open to discussions, collaborations, and idea sharing. Feel free to connect with me using the platform you find most suitable.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.label}</h3>
                <a href={info.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                  {info.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Buttons */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Find Me On</h3>
            <p className="text-gray-600 text-lg">Select the platform you find most convenient to connect.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`${social.color} p-6 text-white transition-all duration-300`}>
                      <div className="flex items-center justify-between mb-3">
                        <social.icon className="h-8 w-8" />
                        <div className="w-3 h-3 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <h4 className="text-xl font-bold mb-1">{social.name}</h4>
                      <p className="text-white/90 text-sm">{social.description}</p>
                    </div>
                    <div className="p-4 bg-gray-50">
                      <div className="flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors">
                          Click to Connect →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
