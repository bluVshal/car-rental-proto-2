import React from 'react'
import { Calendar } from 'primereact/calendar';

const Booking = () => {
    const [pickupDate, setPickupDate] = React.useState(null);
    const [returnDate, setReturnDate] = React.useState(null);

    return (
        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[2rem]">
                <img className="h-full min-h-[520px] w-full object-cover" src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1400&q=80" alt="Car rental keys" />
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[.04] p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-[.3em] text-lime-300">Booking</p>
                <h2 className="text-4xl font-black">Reserve your car in minutes</h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm text-white/60">
                        Pickup Location
                        <input type="text" placeholder="Enter pickup location" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40" />
                    </label>
                    <label className="grid gap-2 text-sm text-white/60">
                        Return Location
                        <input type="text" placeholder="Enter return location" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40" />
                    </label>
                    <label className="grid gap-2 text-sm text-white/60">
                        Pickup Date
                        <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40"><Calendar value={pickupDate} onChange={(e) => setPickupDate(e.value)} /></div>
                    </label>
                    <label className="grid gap-2 text-sm text-white/60">
                        Return Date
                        <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40"><Calendar value={returnDate} onChange={(e) => setReturnDate(e.value)} /></div>
                    </label>                    
                    <label className="grid gap-2 text-sm text-white/60">
                        Car Category
                        <input type="text" placeholder="Enter car category" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40" />
                    </label>
                    <label className="grid gap-2 text-sm text-white/60">
                        Driver Age
                        <input type="number" max={150} placeholder="Enter driver age" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40" />
                    </label>
                </div>
                <div className="mt-6 rounded-2xl border border-lime-300/20 bg-lime-300/10 p-5 text-lime-100">
                    <p className="font-bold">Included: unlimited mileage, free cancellation, basic protection, and 24/7 support.</p>
                </div>
                <button className="mt-6 w-full rounded-2xl bg-lime-400 py-4 font-black text-black">Continue to Checkout</button>
            </div>
        </section>
    )
}

export default Booking