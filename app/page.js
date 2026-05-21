'use client';

import React, { useMemo, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainComponent from "./Components/MainComponent";
import Fleet from "./Components/Fleet";
import Booking from "./Components/Booking";
import Details from "./Components/Details";
import Services from "./Components/Services";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

function PageShell({ children }) {
  return <main className="min-h-screen bg-[#07090f] text-white">{children}</main>;
}

export default function Home() {
  const [active, setActive] = useState("MainComponent");
  const view = useMemo(() => {
    if (active === "MainComponent") return <MainComponent setActive={setActive} />;
    if (active === "Fleet") return <Fleet setActive={setActive} />;
    if (active === "Booking") return <Booking />;
    if (active === "Details") return <Details />;
    if (active === "Services") return <Services />;
    if (active === "About") return <About />;
    if (active === "FAQ") return <FAQ />;
    if (active === "Contact") return <Contact />;
    return <Login />;
  }, [active]);

  return (
    <PageShell>
      <Header active={active} setActive={setActive} />
      {view}
      <Footer setActive={setActive} />
    </PageShell>
  );
}
