import React, { useState } from 'react'
import {
  Car,
  Menu,
  X,
} from "lucide-react";
import { pages } from '../Data';

const Header = ({ active, setActive }) => {
    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090f]/80 backdrop-blur-2xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
                <button onClick={() => setActive("MainComponent")} className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black shadow-lg shadow-white/10">
                        <Car size={23} />
                    </div>
                    <div className="text-left">
                        <p className="text-lg font-black tracking-tight">Velora</p>
                        <p className="text-xs text-white/50">Premium Car Rental</p>
                    </div>
                </button>

                <nav className="hidden items-center gap-1 lg:flex">
                    {pages.map((p) => (
                        <button
                            key={p}
                            onClick={() => setActive(p)}
                            className={`rounded-full px-4 py-2 text-sm transition ${active === p ? "bg-white text-black" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
                        >
                            {p}
                        </button>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <button className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:bg-white/10">Support</button>
                    <button onClick={() => setActive("Booking")} className="rounded-full bg-lime-400 px-5 py-2 text-sm font-bold text-black hover:bg-lime-300">Book Now</button>
                </div>

                <button onClick={() => setOpen(!open)} className="rounded-xl border border-white/10 p-2 lg:hidden">
                    {open ? <X /> : <Menu />}
                </button>
            </div>
            {open && (
                <div className="border-t border-white/10 bg-[#07090f] px-5 py-4 lg:hidden">
                    <div className="grid gap-2">
                        {pages.map((p) => (
                            <button key={p} onClick={() => { setActive(p); setOpen(false); }} className="rounded-xl px-4 py-3 text-left text-white/80 hover:bg-white/10">{p}</button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header