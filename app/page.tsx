
"use client";

import { useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  CarFront,
  Check,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CarFront as InteractiveCarFront } from "@/components/car-front";

const phoneDisplay = "+254 725 486 708";
const phoneLink = "tel:+254725486708";

const whatsappLink =
  "https://wa.me/254725486708?text=Hello%20Rankline%20Driving%20School%2C%20I%27d%20like%20to%20enquire%20about%20Class%20B%20lessons.";

export default function Home()  {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .image-reveal"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <SiteHeader />

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="container hero-content">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" />
            JUJA, KIAMBU COUNTY
          </div>

          <h1>
            THE ROAD AHEAD
            <br />
            <em>STARTS WITH YOU.</em>
          </h1>

          <p className="hero-description">
            Learn with confidence. Build safe driving habits. Take your first
            step towards independence with Rankline Driving School.
          </p>

          <div className="hero-actions">
            <a
              className="button button-gold playful-button"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Enquire about lessons <ArrowUpRight size={18} />
            </a>

            <a className="text-link text-link-light" href="#course">
              Explore our course <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note-dot pulse-badge" />
            CLASS B TRAINING
          </div>
        </div>

        <InteractiveCarFront />

        <div className="hero-side-label">LEARN · PRACTISE · DRIVE</div>

        <div className="hero-bottom container">
          <span>YOUR JOURNEY. YOUR CONFIDENCE.</span>
          <span>01 / 04</span>
        </div>
      </section>

      {/* ================= INTRO STRIP ================= */}
      <section className="intro-strip">
        <div className="container intro-grid">
          <p className="intro-kicker reveal-left">
            A NEW JOURNEY
            <br />
            BEGINS HERE.
          </p>

          <p className="intro-copy reveal-right delay-1">
            Rankline Driving School is getting ready to welcome new learners in
            Juja. Our focus is simple: patient guidance, practical learning and
            a strong foundation for responsible driving.
          </p>

          <a
            href="#about"
            className="about-visual reveal-scale delay-2"
            aria-label="Learn about Rankline"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section section-paper" id="about">
        <div className="container about-grid">
          <div className="about-visual reveal-left">
            <div
              className="about-photo playful-image"
              role="img"
              aria-label="Rankline Driving School car and mascot"
              style={{
                backgroundImage: "url('/images/rankline-car-mascot.png')",
              }}
            />

            <div className="photo-stamp reveal-scale delay-2">
              <span>RANKLINE</span>
              <strong>
                DRIVE
                <br />
                FORWARD.
              </strong>
              <small>JUJA · KIAMBU</small>
            </div>

            <div className="about-index reveal delay-3">
              01 — OUR APPROACH
            </div>
          </div>

          <div className="about-copy reveal-right">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              WHY RANKLINE
            </div>

            <h2>
              Confidence is built
              <br />
              one lesson at a time.
            </h2>

            <p>
              Learning to drive is more than learning how to operate a car.
              It is about awareness, patience, good judgement and taking
              responsibility on the road.
            </p>

            <p>
              At Rankline, we're building a learning experience that puts
              these foundations first. As we prepare to open, we're looking
              forward to meeting our first learners and growing with our
              community.
            </p>

            <div className="value-list">
              <div className="reveal delay-1">
                <span><Check size={15} /></span>
                <strong>Patient, learner-focused guidance</strong>
              </div>

              <div className="reveal delay-2">
                <span><Check size={15} /></span>
                <strong>Practical skills and road awareness</strong>
              </div>

              <div className="reveal delay-3">
                <span><Check size={15} /></span>
                <strong>A focus on safe driving habits</strong>
              </div>
            </div>

            <a className="text-link playful-button" href="#contact">
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= COURSE ================= */}
      <section className="section section-dark" id="course">
        <div className="container">
          <div className="section-heading section-heading-light reveal">
            <div>
              <div className="eyebrow eyebrow-light">
                <span className="eyebrow-line" />
                START YOUR JOURNEY
              </div>

              <h2>
                One course.
                <br />
                <em>A world of possibility.</em>
              </h2>
            </div>

            <p>
              Start with the skills you need for everyday driving. Get in touch
              to ask about enrolment, lesson arrangements and opening updates.
            </p>
          </div>

          <article className="course-card reveal-scale interactive-card">
            <div className="course-number float-slow">01</div>

            <div className="course-main">
              <div className="course-tag">OUR INITIAL TRAINING OFFER</div>

              <h3>Class B</h3>

              <p className="course-subtitle">Private motor vehicle</p>

              <p className="course-description">
                Build the knowledge and practical driving skills needed to
                handle a private car with care, awareness and confidence.
              </p>

              <div className="course-points">
                <span><Check size={15} /> Vehicle familiarisation</span>
                <span><Check size={15} /> Practical driving skills</span>
                <span><Check size={15} /> Road safety awareness</span>
              </div>

              <a
                className="button button-gold playful-button"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Ask about Class B <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="course-visual reveal-right delay-2">
              <div className="course-car-image playful-image" />

              <div className="course-visual-caption">
                <span>CLASS B</span>
                <span>PRIVATE CAR TRAINING</span>
              </div>
            </div>
          </article>

          <p className="course-disclaimer reveal">
            Course fees, lesson schedules, training commencement dates and
            enrolment details will be confirmed directly by the school.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                THE RANKLINE STANDARD
              </div>

              <h2>
                Learn with purpose.
                <br />
                <em>Drive with care.</em>
              </h2>
            </div>

            <p>
              We're building Rankline around the fundamentals that matter
              every time you get behind the wheel.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card reveal interactive-card">
              <div className="feature-icon float-slow">
                <CarFront size={25} />
              </div>

              <span className="feature-count">01 / PRACTICE</span>

              <h3>Practical learning</h3>

              <p>
                Develop familiarity with the vehicle and build your driving skills
                through guided practice.
              </p>
            </article>

            <article className="feature-card reveal delay-1 interactive-card">
              <div className="feature-icon float">
                <ShieldCheck size={25} />
              </div>

              <span className="feature-count">02 / SAFETY</span>

              <h3>Safety first</h3>

              <p>
                Understand road awareness, responsible decisions and habits
                that help keep everyone safer.
              </p>
            </article>

            <article className="feature-card reveal delay-2 interactive-card">
              <div className="feature-icon float-fast">
                <Award size={25} />
              </div>

              <span className="feature-count">03 / CONFIDENCE</span>

              <h3>Build confidence</h3>

              <p>
                Learn progressively, ask questions and work towards becoming
                a more confident driver.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= OPENING BANNER ================= */}
      <section className="opening-banner">
        <div className="opening-bg" aria-hidden="true" />

        <div className="container opening-content">
          <div className="reveal-left">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-line" />
              A NEW CHAPTER IN JUJA
            </div>

            <h2>
              Be among our
              <br />
              <em>first learners.</em>
            </h2>
          </div>

          <div className="opening-right reveal-right delay-2">
            <p>
              Rankline Driving School is preparing to open. Contact us to
              register your interest and receive updates about the first
              available lessons.
            </p>

            <a
              className="button button-gold playful-button"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Register your interest <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section section-paper contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy reveal-left">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              LET'S TALK
            </div>

            <h2>
              Your next move
              <br />
              <em>starts here.</em>
            </h2>

            <p>
              Have a question about Class B lessons or want to know when
              enrolment opens? We'd be happy to hear from you.
            </p>

            <div className="contact-methods">
              <a href={phoneLink} className="interactive-card">
                <span className="contact-icon"><Phone size={19} /></span>

                <span>
                  <small>CALL US</small>
                  <strong>{phoneDisplay}</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="interactive-card"
              >
                <span className="contact-icon"><MessageCircle size={19} /></span>

                <span>
                  <small>WHATSAPP</small>
                  <strong>Send us a message</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <div className="contact-location reveal delay-2">
                <span className="contact-icon"><MapPin size={19} /></span>

                <span>
                  <small>FIND US</small>
                  <strong>Juja, Kiambu County, Kenya</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="contact-panel reveal-right delay-1">
            <div className="contact-panel-top">
              <span>RANKLINE / CONTACT</span>
              <Sparkles size={18} className="float-slow" />
            </div>

            <h3>
              Let's get you
              <br />
              moving.
            </h3>

            <p>
              Send an enquiry directly to our team on WhatsApp. We'll get
              back to you with the information you need.
            </p>

            <a
              className="button button-dark playful-button"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <ArrowUpRight size={18} />
            </a>

            <div className="contact-panel-foot">
              <span>JUJA, KENYA</span>
              <span>DRIVE FORWARD.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="container footer-main">
          <a href="#home" className="brand brand-footer">
            <span className="brand-mark">R<span>.</span></span>

            <span className="brand-copy">
              <strong>RANKLINE</strong>
              <small>DRIVING SCHOOL</small>
            </span>
          </a>

          <p>
            Building confident drivers.
            <br />
            One journey at a time.
          </p>

          <a className="footer-top playful-button" href="#home">
            BACK TO TOP <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Rankline Driving School. All rights
            reserved.
          </span>

          <span>JUJA · KIAMBU COUNTY · KENYA</span>
        </div>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
