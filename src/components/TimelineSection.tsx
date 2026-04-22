import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TIMELINE_DATA = [
  {
    period: '1986 – 1991',
    congress: 'Đại Hội VI & VII',
    color: '#4a6fa1',
    content: 'Khởi xướng Đổi Mới, xóa bỏ bao cấp, tạo nền tảng chính trị – xã hội để chuẩn bị bước vào thời kỳ CNH, HĐH.',
  },
  {
    period: '1996 – 2001',
    congress: 'Đại Hội VIII & IX',
    color: '#7b5ea7',
    content: 'Chính thức đưa đất nước bước vào thời kỳ đẩy mạnh CNH, HĐH; bắt đầu tiếp thu thành tựu khoa học thế giới.',
  },
  {
    period: '2006 – 2011',
    congress: 'Đại Hội X & XI',
    color: 'var(--red-mid)',
    content: 'Bức phá về nhận thức khi chính thức đưa cụm từ "gắn với kinh tế tri thức" và "bảo vệ môi trường" vào định hướng phát triển cốt lõi.',
  },
  {
    period: '2016',
    congress: 'Đại Hội XII',
    color: 'var(--gold)',
    highlight: true,
    content: 'Đỉnh cao chuyển đổi tư duy chiến lược: từ mô hình thâm dụng tài nguyên sang mô hình trí tuệ, năng suất và công nghệ trong kỷ nguyên Cách mạng 4.0.',
  },
];

function TimelineItem({ item, index }: { item: typeof TIMELINE_DATA[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: isRight ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        gap: '0',
        position: 'relative',
        marginBottom: '2.5rem',
      }}
      className="timeline-item"
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        style={{
          flex: 1,
          background: item.highlight
            ? 'linear-gradient(135deg, rgba(139,0,0,0.08), rgba(212,175,55,0.08))'
            : '#FFFFFF',
          border: item.highlight
            ? '1.5px solid rgba(212,175,55,0.45)'
            : '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          boxShadow: item.highlight ? 'var(--shadow-gold)' : 'var(--shadow-card)',
          marginLeft: isRight ? 0 : '2rem',
          marginRight: isRight ? '2rem' : 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: item.highlight ? 'var(--gold)' : 'var(--gray-600)',
          }}>
            {item.period}
          </span>
          {item.highlight && (
            <span style={{
              background: 'var(--gold)',
              color: 'var(--dark-bg)',
              fontSize: '0.62rem',
              fontWeight: 700,
              padding: '0.15rem 0.5rem',
              borderRadius: '100px',
              letterSpacing: '0.05em',
            }}>MỐC LỊCH SỬ</span>
          )}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: item.highlight ? 'var(--red-deep)' : 'var(--gray-800)',
          marginBottom: '0.6rem',
        }}>
          {item.congress}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{item.content}</p>
      </motion.div>

      {/* Center dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, flexShrink: 0 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: item.color,
            border: '3px solid white',
            boxShadow: `0 0 0 3px ${item.color}44`,
          }}
        />
      </div>

      {/* Empty right side to balance layout */}
      <div style={{ flex: 1 }} />
    </div>
  );
}

export default function TimelineSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="lich-su" style={{ background: 'var(--gray-50)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">Phần 1</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Mạch Tư Duy Lý Luận Qua Các Kỳ Đại Hội
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 560, margin: '0 auto', fontSize: '0.97rem' }}>
            Hành trình tư duy từ Đổi Mới 1986 đến Cách mạng Công nghiệp 4.0 (1986 – 2016)
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 8,
            bottom: 8,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--gray-200) 10%, var(--gold) 50%, var(--gray-200) 90%, transparent)',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }} />

          {TIMELINE_DATA.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-item { flex-direction: column !important; }
          .timeline-item > div:first-child { margin-left: 2rem !important; margin-right: 0 !important; }
          .timeline-item > div:nth-child(2) { position: absolute; left: 0; margin-top: 1.25rem; }
          .timeline-item > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
