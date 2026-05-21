import React from 'react'
import { motion } from "framer-motion";
import { fade } from '../Data';
import {
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

const Hero = ({ setActive }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=2200&q=80" alt="Luxury car on modern road" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090f] via-[#07090f]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090f] to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:py-32">
        <motion.div variants={fade} initial="hidden" animate="show" className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm text-lime-200">
            <Sparkles size={16} /> Seamless rentals. Premium cars. Zero stress.
          </div>
          <h1 className="text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Drive the perfect car for every moment.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">A modern car rental experience built for airport pickups, business trips, island adventures, weekend escapes, and luxury occasions.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setActive("Fleet")} className="rounded-full bg-white px-7 py-4 font-bold text-black hover:bg-lime-300">Explore Fleet</button>
            <button onClick={() => setActive("Booking")} className="rounded-full border border-white/20 px-7 py-4 font-bold text-white hover:bg-white/10">Reserve a Car</button>
          </div>
        </motion.div>
        <motion.div variants={fade} initial="hidden" animate="show" className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-[#0c101a] p-5">
            <p className="mb-4 text-sm text-white/50">Quick search</p>
            <div className="grid gap-3">
              {["Pick-up location", "Return location", "Pick-up date", "Return date"].map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                  {i < 2 ? <MapPin className="text-lime-300" /> : <CalendarDays className="text-lime-300" />}
                  <span className="text-white/75">{item}</span>
                </div>
              ))}
              <button onClick={() => setActive("Booking")} className="mt-2 rounded-2xl bg-lime-400 py-4 font-black text-black">Search Availability</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero