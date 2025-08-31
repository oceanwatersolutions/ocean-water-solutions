import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function HomePage() {
  const [services] = useState([
    { title: "Thermal Scanning", desc: "Advanced thermal imaging to detect hidden leaks and issues.", img: "/images/thermal_scanning.jpg" },
    { title: "Water Leakage Detection", desc: "Pinpoint leakage sources with precision.", img: "/images/water_leakage.jpg" },
    { title: "Waterproofing Solutions", desc: "Comprehensive waterproofing for roofs, bathrooms, and basements.", img: "/images/waterproofing.jpg" },
    { title: "Consultation & Maintenance", desc: "Expert consultation and scheduled maintenance.", img: "/images/consultation.jpg" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <motion.header initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-gradient-to-r from-teal-600 to-blue-700 shadow-lg p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Ocean Water Solutions</h1>
        <nav className="space-x-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white text-center py-24">
        <motion.h2 variants={fadeUp} initial="hidden" animate="show" className="text-5xl font-extrabold">
          Protecting Your Spaces from Water Damage
        </motion.h2>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <h3 className="text-4xl font-bold text-center mb-12 text-teal-700">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="shadow-xl rounded-2xl overflow-hidden bg-white">
                <img src={s.img} alt={s.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-teal-700">{s.title}</h4>
                  <p className="text-gray-600 mt-3 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-700 via-teal-600 to-indigo-700 text-white">
        <h3 className="text-4xl font-bold text-center mb-8">Contact Us</h3>
        <form className="max-w-xl mx-auto space-y-5 bg-white p-8 rounded-2xl shadow-xl text-gray-800">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg" required />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg" required />
          <textarea placeholder="Your Message" className="w-full border p-3 rounded-lg h-32" required></textarea>
          <button type="submit" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white w-full py-3 rounded-lg">Submit</button>
        </form>
      </section>
    </div>
  );
}

