import React from 'react'
import SectionTitle from './SectionTitle';
import CarCard from './CarCard';
import { cars } from '../Data';
import { Search } from "lucide-react";

const Fleet = ({ setActive }) => {
    return (
        <section className="mx-auto max-w-7xl px-5 py-20">
            <SectionTitle eyebrow="Our Fleet" title="Cars for every kind of journey" text="Choose from economy, executive, luxury, sports, and SUV categories with transparent daily pricing." />
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[.04] p-4">
                <div className="flex items-center gap-3 rounded-2xl bg-black/30 px-4 py-3 text-white/50"><Search size={18} /> Search brand, model or category</div>
                <div className="flex flex-wrap gap-2">
                    {["All", "SUV", "Luxury", "Economy", "Sports"].map((x) => <button key={x} className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white hover:text-black">{x}</button>)}
                </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => <CarCard key={car.name} car={car} setActive={setActive} />)}
            </div>
        </section>
    )
}

export default Fleet