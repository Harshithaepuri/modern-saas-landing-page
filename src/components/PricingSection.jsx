import { motion } from "framer-motion";
import { CheckCircle2, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for students or beginners starting with React UI.",
    features: [
      "Basic React Components",
      "Responsive Design",
      "Community Support",
    ],
    gradient: "from-blue-400/20 via-blue-100/10 to-transparent",
    icon: <Star className="w-8 h-8 text-blue-500" />,
  },
  {
    name: "Pro",
    price: "$9",
    desc: "Ideal for freelancers and indie developers who want more polish.",
    features: [
      "Premium UI Components",
      "Smooth Animations",
      "Lifetime Updates",
      "Priority Support",
    ],
    gradient: "from-purple-400/20 via-purple-100/10 to-transparent",
    highlight: true,
    icon: <Crown className="w-8 h-8 text-purple-600" />,
  },
  {
    name: "Team",
    price: "$29",
    desc: "Best for startups and small teams launching multiple projects.",
    features: [
      "All Pro Features",
      "Team License (Up to 5)",
      "Private GitHub Access",
      "Commercial Rights",
    ],
    gradient: "from-indigo-400/20 via-indigo-100/10 to-transparent",
    icon: <Star className="w-8 h-8 text-indigo-500" />,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-28 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/40 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Simple, Transparent <span className="text-blue-600">Pricing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
        >
          No hidden fees. Choose the plan that fits your goals and start building
          your dream website today.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-8 flex flex-col items-center ${
                plan.highlight ? "ring-2 ring-purple-500/60" : ""
              }`}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-60 -z-10`}
              ></div>

              {/* Icon */}
              <div className="p-4 bg-white/60 rounded-full shadow-md mb-4">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 mb-4">{plan.desc}</p>
              <h4 className="text-5xl font-extrabold text-blue-600 mb-6">
                {plan.price}
                <span className="text-base text-gray-500 font-normal">/mo</span>
              </h4>

              {/* Features */}
              <ul className="text-gray-700 space-y-3 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" /> {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
                  plan.highlight
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
