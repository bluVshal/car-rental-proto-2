import React from 'react'
import {
  ShieldCheck,
  Plane,
  BriefcaseBusiness,
  HeartHandshake,
} from "lucide-react";
import SectionTitle from './SectionTitle';

const Services = () => {
    const items = [
        [Plane, "Airport Transfers", "Meet-and-greet pickup with clean, ready-to-drive cars."],
        [BriefcaseBusiness, "Corporate Rentals", "Monthly plans for executives, teams, and visiting partners."],
        [HeartHandshake, "Chauffeur Service", "Professional drivers for events, VIP guests, and business travel."],
        [ShieldCheck, "Full Protection", "Optional insurance, roadside help, and 24/7 support."],
    ];
    return (
        <section className="mx-auto max-w-7xl px-5 py-20">
            <SectionTitle eyebrow="Services" title="Designed around your journey" text="A premium rental experience with practical services for locals, tourists, and companies." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {items.map(([Icon, title, text]) => (
                    <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[.04] p-7">
                        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-lime-400 text-black"><Icon /></div>
                        <h3 className="text-xl font-black">{title}</h3>
                        <p className="mt-3 leading-7 text-white/60">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services