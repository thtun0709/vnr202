import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertCircle, TrendingUp, Globe, Cpu, Landmark, GraduationCap } from 'lucide-react';

const CHALLENGES = [
  {
    icon: GraduationCap,
    color: '#ff7043',
    title: 'Chất Lượng Nguồn Nhân Lực',
    desc: 'Mức độ đáp ứng của lao động Việt Nam đối với nền kinh tế số còn thấp; thiếu hụt nghiêm trọng kỹ sư AI và Bán dẫn.',
  },
  {
    icon: Landmark,
    color: '#ab47bc',
    title: 'Nút Thắt Thể Chế',
    desc: 'Khung pháp lý cho kinh tế chia sẻ, Fintech Sandbox còn chậm ban hành, gây cản trở đổi mới sáng tạo.',
  },
  {
    icon: Cpu,
    color: '#42a5f5',
    title: 'Mức Độ Làm Chủ Công Nghệ',
    desc: 'Phần lớn công nghệ lõi vẫn phụ thuộc FDI; liên kết giữa FDI và doanh nghiệp nội địa còn rời rạc.',
  },
];

const FUTURE_MILESTONES = [
  {
    icon: Cpu,
    title: 'Đại Hội XIII (2021)',
    color: '#D4AF37',
    items: [
      'Nâng cấp "kinh tế tri thức" → "Chuyển đổi số quốc gia"',
      '3 trụ cột: Chính phủ số · Kinh tế số · Xã hội số',
      'Khát vọng 2045: Quốc gia phát triển thu nhập cao',
    ],
  },
  {
    icon: Globe,
    title: 'Đại Hội XIV (Dự kiến 2026)',
    color: '#E8C84D',
    items: [
      'GDP tăng trưởng bình quân ≥ 10%/năm (2026–2030)',
      'Kinh tế số chiếm ~30% GDP; chế biến chế tạo ~28%',
      'Trung tâm công nghệ mới nổi: AI & vi mạch bán dẫn',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Khát Vọng 2045',
    color: '#F5E8A3',
    items: [
      '"Kỷ nguyên vươn mình của dân tộc"',
      'Việt Nam – quốc gia phát triển thu nhập cao',
      'Vị thế ngang tầm khu vực và quốc tế',
    ],
  },
];

export default function VisionSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="tam-nhin" style={{
      background: 'var(--dark-bg)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(139,0,0,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(212,175,55,0.12) 0%, transparent 40%)',
      }} />
      <div className="noise-overlay" />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ ...labelStyle, color: 'var(--gold)' }}>Phần 3 – Thực Tiễn & Tầm Nhìn</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            color: '#FFFFFF',
            marginTop: '0.5rem',
          }}>
            Thách Thức & Con Đường Đến{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              2045
            </span>
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto', fontSize: '0.97rem' }}>
            Nhận diện các hạn chế còn tồn tại, và lộ trình phát triển tiếp nối từ Đại hội XIII đến khát vọng thịnh vượng 2045.
          </p>
        </motion.div>

        {/* Challenges */}
        <ChallengesRow />

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)', margin: '4rem 0' }} />

        {/* Future milestones */}
        <FutureMilestones />
      </div>
    </section>
  );
}

function ChallengesRow() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <AlertCircle size={20} color="#ff7043" />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
          Những Hạn Chế & Thách Thức
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
        {CHALLENGES.map((c, i) => {
          const Icon = c.icon;
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, margin: '-50px' });
          return (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                borderLeft: `3px solid ${c.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <Icon size={18} color={c.color} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>{c.title}</h4>
              </div>
              <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}>{c.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function FutureMilestones() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <div>
      <div ref={headRef} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <TrendingUp size={20} color="var(--gold)" />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
          Lộ Trình Phát Triển Tiếp Nối
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {FUTURE_MILESTONES.map((m, i) => {
          const Icon = m.icon;
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, margin: '-50px' });
          return (
            <motion.div
              key={i}
              ref={ref}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1.5px solid ${m.color}44`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ borderColor: `${m.color}88`, background: 'rgba(255,255,255,0.07)' }}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: -30, right: -30,
                width: 100, height: 100,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${m.color}22 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{
                width: 40, height: 40,
                borderRadius: 12,
                background: `${m.color}22`,
                border: `1px solid ${m.color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <Icon size={18} color={m.color} />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: m.color,
                marginBottom: '1rem',
              }}>
                {m.title}
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {m.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.72)', alignItems: 'flex-start' }}>
                    <span style={{ color: m.color, flexShrink: 0, marginTop: 2 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
};
