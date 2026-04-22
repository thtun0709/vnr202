import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.18, duration: 0.7, ease: 'easeOut' } }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          radial-gradient(ellipse at 20% 60%, rgba(139,0,0,0.55) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 30%, rgba(100,0,0,0.35) 0%, transparent 55%),
          linear-gradient(170deg, #0D0000 0%, #1A0505 45%, #0A0A0A 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        textAlign: 'center',
      }}
    >
      {/* Decorative vertical lines */}
      <div style={vertLineStyle(10)} />
      <div style={vertLineStyle(90)} />

      {/* Gold particle shimmer */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="noise-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 1.5rem' }}>
        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          <span style={{
            display: 'inline-block',
            padding: '0.35rem 1.2rem',
            border: '1px solid rgba(212,175,55,0.5)',
            borderRadius: '100px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '2rem',
          }}>
            Lịch Sử Đảng Cộng Sản Việt Nam
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5.5vw, 4rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.2,
            maxWidth: 860,
            margin: '0 auto',
          }}
        >
          Phân Tích Những Điểm Mới Trong{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--gold) 30%, var(--gold-light) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Nghị Quyết Đại Hội XII
          </span>
        </motion.h1>

        {/* Sub-title */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            marginTop: '1.25rem',
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 660,
            margin: '1.25rem auto 0',
            fontStyle: 'italic',
          }}
        >
          Về Công Nghiệp Hóa, Hiện Đại Hóa Gắn Với Phát Triển Kinh Tế Tri Thức
        </motion.p>

        {/* Objective box */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{
            marginTop: '2.5rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(212,175,55,0.22)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            maxWidth: 700,
            margin: '2.5rem auto 0',
            backdropFilter: 'blur(8px)',
          }}
        >
          <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Mục Tiêu Bài Thuyết Trình</p>
          <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, fontSize: '0.975rem' }}>
            Làm rõ sự chuyển đổi tư duy chiến lược của Đảng từ mô hình thâm dụng tài nguyên sang mô hình dựa trên nền tảng{' '}
            <strong style={{ color: 'var(--gold-light)' }}>trí tuệ, năng suất và công nghệ</strong>{' '}
            trong bối cảnh Cách mạng Công nghiệp 4.0.
          </p>
        </motion.div>

        {/* Scroll CTA */}
        <motion.a
          href="#lich-su"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginTop: '3.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.45)' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Khám phá</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

function vertLineStyle(leftPercent: number): React.CSSProperties {
  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: `${leftPercent}%`,
    width: '1px',
    background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.12) 30%, rgba(212,175,55,0.12) 70%, transparent)',
    zIndex: 0,
  };
}
