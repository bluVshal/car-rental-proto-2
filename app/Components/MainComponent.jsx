import React from 'react'
import Hero from './Hero'
import Fleet from './Fleet'
import Services from './Services'
import {
  Star,
  ShieldCheck,
  Clock,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const MainComponent = ({ setActive }) => {
    return (
        <>
            <Hero setActive={setActive} />
            <section className="mx-auto max-w-7xl px-5 py-16">
                <div className="grid gap-4 md:grid-cols-4">
                    {[
                        [Clock, "Fast Booking", "Reserve in under 3 minutes."],
                        [ShieldCheck, "Protected Trips", "Optional coverage and roadside help."],
                        [CreditCard, "Secure Payments", "Cards, bank transfer, and local options."],
                        [Star, "Premium Service", "Hand-picked fleet and clean cars."],
                    ].map(([Icon, title, text]) => (
                        <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[.04] p-6">
                            <Icon className="mb-5 text-lime-300" />
                            <h3 className="font-black">{title}</h3>
                            <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Fleet setActive={setActive} />
            <Services />
            <section className="mx-auto max-w-7xl px-5 py-20">
                <div className="overflow-hidden rounded-[2.5rem] bg-lime-400 text-black">
                    <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
                        <div className="p-10 md:p-14">
                            <h2 className="text-4xl font-black md:text-5xl">Ready to drive something unforgettable?</h2>
                            <p className="mt-4 max-w-xl text-black/65">Create a booking flow that feels premium, fast, and trustworthy from the first click.</p>
                            <button onClick={() => setActive("Booking")} className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 font-black text-white">Start Booking <ArrowRight size={18} /></button>
                        </div>
                        <img className="h-96 w-full object-cover" src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80" alt="Premium car" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainComponent