import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#cta" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo with Glow Animation */}
        <motion.div
          className="relative flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-2xl rounded-full animate-pulse"></div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text relative z-10">
          SaaSBrand
          </h1>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="relative text-gray-800 font-medium hover:text-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
              <motion.span
                className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          {/* Buy Button */}
          <motion.a
            href="#cta"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)",
            }}
            className="px-5 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Buy Now
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden relative z-50">
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-xl"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)",
                }}
                onClick={() => setOpen(false)}
                className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold shadow-md transition-all duration-300"
              >
                Buy Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
