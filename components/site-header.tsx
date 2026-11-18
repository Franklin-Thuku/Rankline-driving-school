"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our approach", href: "#about" },
  { label: "Course", href: "#course" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="Rankline Driving School home">
          <span className="brand-mark">R<span>.</span></span>
          <span className="brand-copy">
            <strong>RANKLINE</strong>
            <small>DRIVING SCHOOL</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="https://wa.me/254725486708?text=Hello%20Rankline%20Driving%20School%2C%20I%27d%20like%20to%20enquire%20about%20Class%20B%20lessons." target="_blank" rel="noreferrer">
          Enquire now <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="mobile-nav-cta"
            href="https://wa.me/254725486708?text=Hello%20Rankline%20Driving%20School%2C%20I%27d%20like%20to%20enquire."
            target="_blank"
            rel="noreferrer"
          >
            Enquire on WhatsApp <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
