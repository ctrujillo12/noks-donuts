'use client'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "/images-noks/img7.webp",
    "/images-noks/img1.png",
    "/images-noks/img2.png",
    "/images-noks/img4.png",
    "/images-noks/img5.png",
    "https://images.squarespace-cdn.com/content/v1/668b38999928de19ab29f590/83bb2076-0217-4288-b2f2-0ec1ca3bdf64/DSC09864.jpg",
    "https://images.squarespace-cdn.com/content/v1/668b38999928de19ab29f590/0a072a59-b1e7-415c-a286-b2e390804eac/DSC09422.jpg",
    "https://images.squarespace-cdn.com/content/v1/668b38999928de19ab29f590/dfca272a-99a9-4392-9c87-522c7618c6fd/fierberg_05552_lowres.jpg",
   "https://images.squarespace-cdn.com/content/v1/668b38999928de19ab29f590/b25169c6-c741-4a7b-b8f4-86c50be4ac3d/DSC00157.jpg"
  ]

  const flavorColors = {
    "vanilla bean": "#5f5f5fff",
    "chocolate": "#7b3f00",
    "maple": "#d9a066",
    "glazed": "#676767ff",
    "strawberry": "#fc5a8d",
    "blueberry": "#4f86f7",
    "raspberry": "#e30b5c",
    "purple sweet potato": "#9b59b6",
    "blue lemon": "#00bfff",
    "matcha": "#6aa84f",
    "mango passionfruit": "#ffb347"
  }

  return (
    <div style={{ backgroundColor: '#FFF8F0' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF8F0',
        zIndex: 50,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href="/">
            <img 
              src="/images-noks/biglogo-nobg.png" 
              alt="Nok's Donuts" 
              style={{ height: '65px' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
            <a href="#news" style={{ textDecoration: 'none', color: '#333' }}>News</a>

            <a 
              href="#menu"
              style={{
                display: 'inline-block',
                backgroundColor: '#338729',
                color: 'white',
                padding: '0.4rem 1rem', 
                fontSize: '1rem',       
                fontWeight: '600',
                textDecoration: 'none',
                lineHeight: '1.5',      
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2c6a23'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#338729'}
            >
              Order
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span style={{ width: '24px', height: '2px', backgroundColor: '#000' }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#000' }}></span>
            <span style={{ width: '24px', height: '2px', backgroundColor: '#000' }}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu" style={{
            borderTop: '1px solid #eee',
            backgroundColor: '#FFF8F0'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '1rem', gap: '1rem' }}>
              <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
              <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main style={{ marginTop: '70px' }}>
        {/* Hero Section */}
        <section style={{ position: 'relative', height: '100vh' }}>
          <img 
            src="/images-noks/img8.jpg"
            alt="Fresh donuts"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center', color: 'white', padding: '1rem' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: '1rem' }}>
                premium, all-natural donuts
              </h1>
              <h4 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '1rem', letterSpacing: '0.1em' }}>
                HANDCRAFTED FRESH DAILY
              </h4>
              <h4 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                TUES - FRI 7:30AM - 2:30PM
              </h4>
              <h4 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
                SAT - SUN 8AM - 3PM
              </h4>
              <a 
                href="#menu"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#338729ff',
                  color: 'white',
                  padding: '1rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s'
                }}
              >
                See Menu!
              </a>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section id="about" style={{ padding: '5rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Welcome to Nok's Donuts! Discover our delicious creations
              </h2>
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Our premium donuts are handcrafted fresh daily from scratch, using only the finest all-natural ingredients.
No artificial/imitation flavors. No artificial colors. No preservatives. No high-fructose corn syrup. No GMOs. No overnight donuts.
              </p>
            </div>
            <div>
              <img 
                src="/images-noks/img2.png"
                alt="Donut close-up"
                style={{ width: '100%', height: '400px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" style={{ padding: '5rem 1rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Our standard menu</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>
          Check out our standard menu below, and drop in or check our{" "}
          <a
            href="https://www.instagram.com/noksdonuts/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#338729ff', fontWeight: 'bold', textDecoration: 'none' }}
          >
            Instagram
          </a>{" "}
          to stay informed of daily or weekly specials!
        </p>

          {/* Donuts */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Donuts</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <div>
                <p style={{ fontWeight: '600' }}>single</p>
                <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
                  cake $3 / mochi $4 / cruller $4
                </p>
              </div>
              <p style={{ fontWeight: 'bold' }}>$3-4</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <p style={{ fontWeight: '600' }}>half dozen</p>
              <p style={{ fontWeight: 'bold' }}>$16</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <p style={{ fontWeight: '600' }}>dozen</p>
              <p style={{ fontWeight: 'bold' }}>$30</p>
            </div>
          </div>

          {/* Flavors */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Flavors</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
              {Object.keys(flavorColors).map(flavor => (
                <p 
                  key={flavor} 
                  style={{ fontSize: '1rem', color: flavorColors[flavor], fontWeight: '600' }}
                >
                  • {flavor}
                </p>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Drinks</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <p style={{ fontWeight: '600' }}>hot tea</p>
              <p style={{ fontWeight: 'bold' }}>$4</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <p style={{ fontWeight: '600' }}>thai tea</p>
              <p style={{ fontWeight: 'bold' }}>$5</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #e5e7eb' }}>
              <p style={{ fontWeight: '600' }}>green thai tea</p>
              <p style={{ fontWeight: 'bold' }}>$4</p>
            </div>
            
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{ padding: '5rem 1rem', backgroundColor: '#FFF8F0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
              Gallery
            </h2>
            <div style={{ position: 'relative' }}>
              <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                  src={slides[currentSlide]}
                  alt={`Gallery ${currentSlide + 1}`}
                  style={{ width: '100%', height: '550px', objectFit: 'cover' }}
                />
              </div>
              <button 
                onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                ←
              </button>
              <button 
                onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  padding: '1rem',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                → 
              </button>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: idx === currentSlide ? '#000' : '#ccc'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: '#338729ff', color: 'white', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <img 
                  src="/images-noks/logo-nobg.png" 
                  alt="Nok's Donuts" 
                  style={{ height: '50px', marginBottom: '0.5rem' }}
                />
                
                <p style={{ color: '#ffffffff', marginBottom: '2.5rem' }}>
                  Follow us on{" "}
                  <a
                    href="https://www.instagram.com/noksdonuts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000000ff', fontWeight: 'bold', textDecoration: 'none' }}
                  >
                    Instagram
                  </a>{" "}
                  for daily specials, pop-ups, and behind-the-scenes updates.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Location</h4>
                <p>400 W South Boulder Rd, Ste 2300</p>
                <p>Lafayette, CO 80026</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Contact</h4>
                <a href="mailto:info@noksdonuts.com" style={{ color: 'white', textDecoration: 'underline' }}>
                  info@noksdonuts.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
