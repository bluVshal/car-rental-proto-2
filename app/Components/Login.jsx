import React from 'react'
import { KeyRound } from 'lucide-react';

const Login = () => {
  return (
    <section className="mx-auto grid min-h-[760px] max-w-7xl place-items-center px-5 py-20">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] lg:grid-cols-2">
        <img className="hidden h-full object-cover lg:block" src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80" alt="Car dashboard" />
        <div className="p-8 md:p-12">
          <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-lime-400 text-black"><KeyRound /></div>
          <h2 className="text-4xl font-black">Welcome back</h2>
          <p className="mt-3 text-white/60">Access your bookings, saved cars, invoices, and loyalty offers.</p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40">Email address</div>
            <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-white/40">Password</div>
            <button className="rounded-2xl bg-lime-400 py-4 font-black text-black">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;