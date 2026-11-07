
import {
  FaWhatsapp,
  FaGithub,
  FaYoutube,
  FaChrome,
  FaLinkedin,
} from "react-icons/fa";

import { SiClaude } from "react-icons/si";
import { Bot } from "lucide-react";

import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://www.whatsapp.com/",
      color: "hover:text-green-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/",
      color: "hover:text-gray-400",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/",
      color: "hover:text-red-500",
    },
    {
      name: "Google Chrome",
      icon: FaChrome,
      url: "https://www.google.com/chrome/",
      color: "hover:text-blue-400",
    },
    {
      name: "Claude",
      icon: SiClaude,
      url: "https://claude.ai/",
      color: "hover:text-orange-400",
    },
   {
  name: "ChatGPT",
  icon: Bot,
  url: "https://chatgpt.com/",
  color: "hover:text-emerald-400",
},
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3">

        {/* Website Information */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-400">
            FoodFinder
          </h2>

          <p className="mt-3 text-slate-300">
            Discover delicious food and explore the best restaurants near you.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Contact Us
          </h3>

          <p className="mb-2 flex items-center gap-2 text-slate-300">
            <MapPin size={18} />
            Buner, Khyber Pakhtunkhwa
          </p>

          <p className="flex items-center gap-2 text-slate-300">
            <Mail size={18} />
            foodfinder@example.com
          </p>
        </div>

        {/* Social Media and Tools */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Follow & Explore
          </h3>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  aria-label={social.name}
                  className={`text-slate-300 transition duration-300 hover:scale-125 ${social.color}`}
                >
                  <Icon size={27} />
                </a>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Connect, explore, and discover useful tools.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-slate-700 pt-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} FoodFinder. All rights reserved.
      </div>
    </footer>
  );
}

