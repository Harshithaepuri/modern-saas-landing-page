import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ava Martinez",
    role: "Frontend Engineer @ Vercel",
    image: "https://i.pravatar.cc/100?img=1",
    quote:
      "This UI kit saved me weeks of design work! Every animation feels smooth and polished — absolute game changer.",
  },
  {
    name: "Noah Johnson",
    role: "Founder @ DevLaunch",
    image: "https://i.pravatar.cc/100?img=2",
    quote:
      "I used these components for my startup’s site — the performance and responsiveness blew my clients away.",
  },
  {
    name: "Sophia Chen",
    role: "UI Designer @ Figma",
    image: "https://i.pravatar.cc/100?img=3",
    quote:
      "The color gradients, glassmorphism, and details in every section feel premium. Perfect for any SaaS or portfolio.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-gradient-to-b from-purple-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Glowing orbs background */}
      <div className="absolute -top-20 left-20 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-200/40 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Loved by <span className="text-purple-600">Developers</span> Worldwide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Join thousands of creators and developers using our modern React + Tailwind
          UI components to build beautiful, fast websites.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40 hover:shadow-2xl transition-all duration-300"
            >
              {/* Top stars */}
              <div className="flex justify-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6">“{t.quote}”</p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-3"
                />
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200/20 via-transparent to-blue-200/10 opacity-0 hover:opacity-100 transition duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
