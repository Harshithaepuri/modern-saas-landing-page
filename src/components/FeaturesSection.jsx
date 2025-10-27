import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, ShieldCheck, Cpu, Rocket } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-blue-500" />,
    title: "Stunning Animations",
    desc: "Smooth Framer Motion effects that make your UI feel premium and interactive.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Lightning Fast",
    desc: "Optimized React + Tailwind setup for blazing-fast performance and load speed.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-500" />,
    title: "Fully Responsive",
    desc: "Looks amazing on all devices — from large monitors to mobile screens.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
    title: "Clean Codebase",
    desc: "Readable, modular, and production-ready code that’s easy to customize.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-pink-500" />,
    title: "Modern Stack",
    desc: "Built with React, Tailwind CSS, and Framer Motion — latest 2025 standards.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-indigo-500" />,
    title: "Ready to Launch",
    desc: "Perfect for SaaS, agency, or startup websites that want a head start.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/40 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Why Developers <span className="text-blue-600">Love</span> This
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Crafted for speed, beauty, and flexibility — every detail designed to
          make your website stand out.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl border border-white/40 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-white shadow-sm">{f.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
