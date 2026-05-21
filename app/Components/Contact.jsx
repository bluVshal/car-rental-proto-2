import React from 'react'
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.8fr_1.2fr]">
      <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8">
        <p className="mb-3 text-sm font-bold uppercase tracking-[.3em] text-lime-300">Contact</p>
        <h2 className="text-4xl font-black">Talk to our rental team</h2>
        <div className="mt-8 grid gap-4 text-white/70">
          <p className="flex items-center gap-3"><Phone className="text-lime-300" /> +230 5555 0000</p>
          <p className="flex items-center gap-3"><Mail className="text-lime-300" /> hello@velora-rentals.com</p>
          <p className="flex items-center gap-3"><MapPin className="text-lime-300" /> Ebene, Mauritius</p>
          <p className="flex items-center gap-3"><MessageCircle className="text-lime-300" /> WhatsApp support available</p>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8">
        <div className="grid gap-4 md:grid-cols-2">
          {["Full Name", "Email Address", "Phone Number", "Rental Date"].map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40">{x}</div>)}
        </div>
        <div className="mt-4 h-36 rounded-2xl border border-white/10 bg-black/30 p-4 text-white/40">Message</div>
        <button className="mt-5 rounded-2xl bg-lime-400 px-8 py-4 font-black text-black">Send Message</button>
      </div>
    </section>
  )
}

export default Contact