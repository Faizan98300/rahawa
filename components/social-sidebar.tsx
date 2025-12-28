"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { MessageCircle } from "lucide-react"

export default function SocialSidebar() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/message/Z6LP4UWYDAGLN1",
      color: "hover:bg-[#25D366]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/rawahainternationalpvtltd?igsh=YWxxcjlsZm42MXRn&utm_source=qr",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/rawaha-international-459637335",
      color: "hover:bg-[#0077B5]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/17UvjTAQeh/?mibextid=wwXIfr",
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:info@rawahainternationalpvtltd.com",
      color: "hover:bg-[#EA4335]",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+8619819208835",
      color: "hover:bg-[#0066cc]",
    },
  ]

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
          rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
          className={`group flex items-center bg-white border border-gray-200 shadow-lg transition-all duration-300 ease-out hover:pr-3 ${link.color}`}
          aria-label={link.name}
        >
          <div className="p-3 flex items-center justify-center">
            <link.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
          </div>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-white transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:mr-2">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  )
}
