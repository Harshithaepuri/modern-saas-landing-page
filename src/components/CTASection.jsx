import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Glowing Background Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 blur-3xl rounded-full -z-10 animate-pulse"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full -z-10 animate-pulse"
      ></motion.div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          Build Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Dream Website</span>  
          <br /> in Minutes
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Get instant access to ready-to-use, animated, responsive UI components built
          with React + Tailwind + Framer Motion. Designed for creators and startups who want
          premium design — fast.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(99, 102, 241, 0.5)",
          }}
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
        >
          Get It Now <ArrowRight className="w-5 h-5" />
        </motion.a>

        {/* Floating Glows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400/30 to-purple-400/30 blur-[120px] rounded-full"
        ></motion.div>
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
}
