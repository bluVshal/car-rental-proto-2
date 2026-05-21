import React from 'react'
import { motion } from "framer-motion";
import { fade } from '../Data';
import {
  Fuel,
  Gauge,
  Users,
  ChevronRight,
} from "lucide-react";

const CarCard = ({ car, setActive }) => {
    return (
        <motion.article variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04]">
            <div className="relative h-64 overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-sm backdrop-blur">{car.tag}</div>
            </div>
            <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm text-lime-300">{car.type}</p>
                        <h3 className="mt-1 text-2xl font-black">{car.name}</h3>
                    </div>
                    <p className="rounded-2xl bg-white px-4 py-2 font-black text-black">{car.price}</p>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-sm text-white/65">
                    <span className="flex items-center gap-2"><Users size={16} /> {car.seats}</span>
                    <span className="flex items-center gap-2"><Fuel size={16} /> {car.fuel}</span>
                    <span className="flex items-center gap-2"><Gauge size={16} /> {car.speed}</span>
                </div>
                <button onClick={() => setActive("Details")} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 py-4 font-bold hover:bg-white hover:text-black">View Details <ChevronRight size={18} /></button>
            </div>
        </motion.article>
    )
}

export default CarCard