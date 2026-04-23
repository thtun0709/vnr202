import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import videoSrc from '../assets/video.mp4';

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #0D0000 0%, #1A0505 50%, #0A0A0A 100%)',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(139,0,0,0.3) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Label + Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            Video Minh Hoạ
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginTop: '0.5rem',
            marginBottom: 0,
          }}>
            Toàn Cảnh Đại Hội Đại Biểu Toàn Quốc Lần Thứ XII của Đảng
          </h2>
          {/* Gold divider */}
          <div style={{
            width: 60, height: 3,
            background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
            borderRadius: 2,
            margin: '1rem auto 0',
          }} />
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          style={{
            maxWidth: 860,
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1.5px solid rgba(212,175,55,0.3)',
            boxShadow: '0 0 60px rgba(139,0,0,0.4), 0 0 0 1px rgba(212,175,55,0.1)',
            lineHeight: 0,
          }}
        >
          <video
            src={videoSrc}
            controls
            playsInline
            style={{
              width: '100%',
              display: 'block',
              background: '#000',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
