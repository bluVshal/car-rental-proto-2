import React from 'react';
import SectionTitle from './SectionTitle';

const FAQ = () => {
    const qs = ["What documents do I need?", "Can I cancel my booking?", "Is insurance included?", "Do you offer airport delivery?", "Can companies open monthly accounts?"];
    return (
        <section className="mx-auto max-w-4xl px-5 py-20">
            <SectionTitle eyebrow="FAQ" title="Common questions" text="Simple answers for a smooth rental experience." />
            <div className="grid gap-4">
                {qs.map((q, i) => <div key={q} className="rounded-2xl border border-white/10 bg-white/[.04] p-6"><h3 className="text-xl font-black">{q}</h3><p className="mt-3 text-white/60">{i === 0 ? "A valid driving licence, ID or passport, and payment card are required." : "Yes. Our team will guide you clearly before checkout and during vehicle handover."}</p></div>)}
            </div>
        </section>
    )
}

export default FAQ