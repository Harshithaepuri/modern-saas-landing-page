import { motion } from "framer-motion";
import { Twitter, Github, Dribbble, Linkedin } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#cta" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#footer" }, // this footer itself
  ];

  const socialLinks = [
    { icon: <Twitter />, href: "https://twitter.com/" },
    { icon: <Github />, href: "https://github.com/" },
    { icon: <Dribbble />, href: "https://dribbble.com/" },
    { icon: <Linkedin />, href: "https://linkedin.com/" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 py-16 overflow-hidden"
    >
      {/* Glowing Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full"
      />

      {/* Floating Gradient Line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Logo */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            PixelPulse UI
          </span>
        </motion.h2>

        {/* Navigation Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-8 text-lg mb-10"
        >
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{
                scale: 1.1,
                color: "#ffffff",
                textShadow: "0 0 20px rgba(147,51,234,0.8)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer transition-all duration-300 hover:text-white"
            >
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-6 mb-10"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: 10,
                color: "#fff",
                textShadow: "0 0 25px rgba(147,51,234,0.8)",
              }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} PixelPulse UI — Crafted with 💜 by Creators for Creators
        </motion.p>
      </div>

      {/* Floating Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -40, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
