import React from 'react'

const SectionTitle = ({ eyebrow, title, text }) => {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.3em] text-lime-300">{eyebrow}</p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
            {text && <p className="mt-4 text-lg leading-8 text-white/60">{text}</p>}
        </div>
    )
}

export default SectionTitle