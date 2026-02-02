import {
  Stethoscope,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Eye,
  Syringe,
  Ambulance,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const services = [
    {
      title: "General Medicine",
      icon: Stethoscope,
      desc: "Comprehensive diagnosis and treatment for common illnesses.",
    },
    {
      title: "Cardiology",
      icon: HeartPulse,
      desc: "Advanced heart care with modern diagnostic facilities.",
    },
    {
      title: "Neurology",
      icon: Brain,
      desc: "Expert care for brain, spine, and nervous system disorders.",
    },
    {
      title: "Orthopedics",
      icon: Bone,
      desc: "Bone, joint, spine, and sports injury treatments.",
    },
    {
      title: "Pediatrics",
      icon: Baby,
      desc: "Specialized healthcare for infants, children, and adolescents.",
    },
    {
      title: "Ophthalmology",
      icon: Eye,
      desc: "Complete eye care including vision testing and surgery.",
    },
    {
      title: "Vaccination",
      icon: Syringe,
      desc: "Immunization services for all age groups.",
    },
    {
      title: "24/7 Emergency",
      icon: Ambulance,
      desc: "Round-the-clock emergency and trauma care.",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our Medical Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          A wide range of multi-specialty healthcare services delivered by
          experienced doctors using advanced medical technology.
        </motion.p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mx-auto mb-4 h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center"
              >
                <service.icon className="h-7 w-7 text-blue-600" />
              </motion.div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-600">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
