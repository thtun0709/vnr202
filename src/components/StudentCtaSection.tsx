import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, BookOpenCheck, Rocket, Globe2, ArrowRight } from 'lucide-react';

const RESPONSIBILITIES = [
  {
    icon: BookOpenCheck,
    color: '#1565c0',
    title: 'Người Tạo Ra Tri Thức',
    desc: 'Không chỉ là người thụ hưởng mà phải là lực lượng nòng cốt tạo ra tri thức mới cho đất nước.',
  },
  {
    icon: Rocket,
    color: '#6a1b9a',
    title: 'Tinh Thần Khởi Nghiệp',
    desc: 'Chuyển từ tâm thế "tìm kiếm việc làm" sang "sáng tạo việc làm" với tinh thần khởi nghiệp đổi mới.',
  },
  {
    icon: Lightbulb,
    color: '#e65100',
    title: 'Tự Trang Bị Vũ Khí',
    desc: 'Không ngừng tự học, nâng cao ngoại ngữ, tư duy phản biện và khả năng thích ứng với công nghệ mới.',
  },
  {
    icon: Globe2,
    color: '#2e7d32',
    title: 'Công Dân Toàn Cầu',
    desc: 'Vươn tầm quốc tế, đóng góp vào vị thế Việt Nam trong kỷ nguyên kinh tế số và cạnh tranh tri thức.',
  },
];

export default function StudentCtaSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <section style={{
      background: 'linear-gradient(160deg, #FFFFFF 0%, var(--gray-50) 100%)',
      padding: '6rem 0',
      borderTop: '1px solid var(--gray-200)',
    }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Slide 14 – Dành Cho Sinh Viên</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Vai Trò Của Sinh Viên Trong<br />Nền Kinh Tế Tri Thức
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 560, margin: '0 auto', fontSize: '0.97rem' }}>
            Bạn không chỉ là thế hệ thụ hưởng kết quả của công cuộc đổi mới — bạn chính là lực lượng kiến tạo nó.
          </p>
        </motion.div>

        {/* Responsibility cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {RESPONSIBILITIES.map((r, i) => {
            const Icon = r.icon;
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: '-50px' });
            return (
              <motion.div
                key={i}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid var(--gray-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{
                  width: 48, height: 48,
                  borderRadius: 14,
                  background: `${r.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                  border: `1px solid ${r.color}30`,
                }}>
                  <Icon size={22} color={r.color} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: '0.6rem' }}>
                  {r.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{r.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            background: 'linear-gradient(135deg, var(--red-deep) 0%, #5a0000 60%, #3a0000 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(139,0,0,0.35)',
          }}
        >
          {/* BG shimmer */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="noise-overlay" />

          {/* Gold top border */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            borderRadius: 2,
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-block',
              padding: '0.3rem 1rem',
              border: '1px solid rgba(212,175,55,0.45)',
              borderRadius: 100,
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
            }}>
              Lời Kêu Gọi Hành Động
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.25,
              marginBottom: '1rem',
              maxWidth: 680,
              margin: '0 auto 1rem',
            }}>
              Khát Vọng 2045 Cần Chính Các Bạn Hiện Thực Hóa
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.72)',
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              maxWidth: 600,
              margin: '0 auto 2rem',
              lineHeight: 1.75,
            }}>
              Mỗi kiến thức bạn tích lũy, mỗi kỹ năng bạn rèn giũa, mỗi ý tưởng bạn dám biến thành hiện thực — đó chính là những viên gạch xây nên "kỷ nguyên vươn mình" của dân tộc.
            </p>

            <motion.a
              href="#hero"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                color: 'var(--red-deep)',
                textDecoration: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: 100,
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              }}
            >
              Xem Lại Toàn Bộ
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
