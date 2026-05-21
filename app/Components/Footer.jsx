import React from 'react'
import { pages } from '../Data';

const Footer = ({ setActive }) => {
    return (
        <footer className="border-t border-white/10 px-5 py-10 text-white/50">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
                <p>© 2026 Velora Rentals. Premium sample concept.</p>
                <div className="flex flex-wrap gap-4">
                    {pages.slice(0, 8).map((p) => <button key={p} onClick={() => setActive(p)} className="hover:text-white">{p}</button>)}
                </div>
            </div>
        </footer>
    )
}

export default Footer