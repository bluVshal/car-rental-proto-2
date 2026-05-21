import React from 'react'

const About = () => {
    return (
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2">
            <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[.3em] text-lime-300">About Velora</p>
                <h2 className="text-5xl font-black tracking-tight">A smarter rental brand for modern travelers.</h2>
                <p className="mt-6 text-lg leading-8 text-white/60">Velora is designed for customers who want reliability, style, and speed. From simple online reservations to premium vehicle handover, every step feels clean, transparent, and effortless.</p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                    {["120+ Cars", "4.9 Rating", "24/7 Help"].map((x) => <div key={x} className="rounded-2xl bg-white/[.05] p-5 text-center font-black">{x}</div>)}
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <img className="h-80 rounded-[2rem] object-cover md:mt-12" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80" alt="Sports car" />
                <img className="h-80 rounded-[2rem] object-cover" src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80" alt="Luxury car" />
            </div>
        </section>
    )
}

export default About