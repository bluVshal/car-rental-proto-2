import React from 'react'
import { cars } from '../Data';
import { CheckCircle2 } from "lucide-react";

const Details = () => {
    const car = cars[0];
    return (
        <section className="mx-auto max-w-7xl px-5 py-20">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
                <div>
                    <div className="overflow-hidden rounded-[2rem]"><img src={car.img} alt={car.name} className="h-[520px] w-full object-cover" /></div>
                    <div className="mt-5 grid grid-cols-3 gap-4">
                        {cars.slice(1, 4).map((c) => <img key={c.name} src={c.img} alt={c.name} className="h-32 rounded-2xl object-cover" />)}
                    </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8">
                    <p className="text-lime-300">Luxury Convertible</p>
                    <h2 className="mt-2 text-5xl font-black">{car.name}</h2>
                    <p className="mt-5 leading-8 text-white/60">A refined open-top driving experience with premium interior, advanced safety, smooth handling, and elegant styling for special occasions or unforgettable road trips.</p>
                    <div className="mt-7 grid grid-cols-2 gap-4">
                        {["Automatic", "4 Seats", "Premium Sound", "GPS Included", "Bluetooth", "Full Insurance"].map((x) => <div key={x} className="flex items-center gap-2 rounded-2xl bg-black/30 p-4 text-white/75"><CheckCircle2 className="text-lime-300" size={18} />{x}</div>)}
                    </div>
                    <div className="mt-8 flex items-center justify-between rounded-2xl bg-white p-5 text-black">
                        <span className="text-sm font-bold text-black/50">Daily rate</span>
                        <span className="text-3xl font-black">{car.price}</span>
                    </div>
                    <button className="mt-5 w-full rounded-2xl bg-lime-400 py-4 font-black text-black">Book This Car</button>
                </div>
            </div>
        </section>
    )
}

export default Details