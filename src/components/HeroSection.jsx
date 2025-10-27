import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-24 sm:pt-28 md:pt-32 pb-20"
    >
      {/* Background gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-24 left-10 w-60 h-60 md:w-80 md:h-80 bg-blue-300/40 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-16 right-10 w-72 h-72 md:w-96 md:h-96 bg-purple-300/40 rounded-full blur-3xl"
      ></motion.div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[22%] right-[12%] hidden xl:block"
      >
        <Rocket className="w-10 h-10 text-indigo-600 opacity-70" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[12%] hidden xl:block"
      >
        <Star className="w-10 h-10 text-yellow-500 opacity-70" />
      </motion.div>

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 px-4"
      >
        Design. Animate. <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          Build Stunning React UIs
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-10 px-6"
      >
        Create sleek, dynamic, and modern experiences — powered by{" "}
        <strong>React</strong>, <strong>Tailwind</strong>, and{" "}
        <strong>Framer Motion</strong>.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mb-16"
      >
        <motion.a
          href="#features"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          🚀 Get Started <ArrowRight className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="#pricing"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(147,51,234,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white/70 backdrop-blur-md text-blue-700 font-semibold rounded-full border border-blue-200 hover:bg-white transition flex items-center justify-center gap-2"
        >
          ✨ View Pricing
        </motion.a>
      </motion.div>

      {/* Floating Sparkles */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-12 right-12 hidden md:block"
      >
        <Sparkles className="w-8 h-8 text-yellow-400 opacity-70" />
      </motion.div>
    </section>
  );
}
