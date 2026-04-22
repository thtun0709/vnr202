import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

const NAV_LINKS = [
  { href: '#lich-su', label: 'Mạch Lịch Sử' },
  { href: '#diem-moi', label: 'Điểm Mới' },
  { href: '#thuc-tien', label: 'Thực Tiễn' },
  { href: '#tam-nhin', label: 'Tầm Nhìn' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(18px) saturate(1.6)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.6)',
        background: scrolled
          ? 'rgba(15, 5, 5, 0.82)'
          : 'rgba(15, 5, 5, 0.55)',
        borderBottom: scrolled
          ? '1px solid rgba(212,175,55,0.25)'
          : '1px solid rgba(212,175,55,0.1)',
        transition: 'background 0.4s, border-color 0.4s',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <BookOpen size={22} color="var(--gold)" strokeWidth={1.8} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--gold)', fontWeight: 700 }}>
            VNR202
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={navLinkStyle}>
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          className="hamburger-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', display: 'none' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: 'rgba(10,2,2,0.95)', borderTop: '1px solid rgba(212,175,55,0.15)' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem 1.5rem' }}>
              {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ ...navLinkStyle, padding: '0.75rem 0', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 720px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.82)',
  textDecoration: 'none',
  letterSpacing: '0.04em',
  transition: 'color 0.2s',
};
