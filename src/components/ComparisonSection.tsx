import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const OLD_MODEL = [
  'Nhà máy thâm dụng lao động',
  'Công nhân thao tác thủ công',
  'Môi trường khói bụi, ô nhiễm',
  'Hiệu suất tuyến tính, khó mở rộng',
  'Phụ thuộc lao động giá rẻ',
  'Sản phẩm giá trị thấp, gia công',
];

const NEW_MODEL = [
  'Nhà máy thông minh (Smart Factory)',
  'Robot tự động hóa, cảm biến IoT',
  'Phân tích dữ liệu thời gian thực',
  'Hiệu suất theo cấp số nhân',
  'Co-creation với tri thức & AI',
  '"Kinh tế tri thức" trong từng khâu sản xuất',
];

function ModelColumn({ title, items, isNew }: { title: string; items: string[]; isNew: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isNew ? 60 : -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 }}
      style={{
        flex: 1,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: isNew ? '2px solid rgba(212,175,55,0.5)' : '2px solid rgba(139,0,0,0.15)',
        boxShadow: isNew ? 'var(--shadow-gold)' : 'var(--shadow-card)',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '1.5rem 2rem',
        background: isNew
          ? 'linear-gradient(135deg, var(--red-deep), #5a0000)'
          : 'var(--gray-800)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        {isNew
          ? <CheckCircle2 size={22} color="#D4AF37" strokeWidth={2} />
          : <XCircle size={22} color="#ff7070" strokeWidth={2} />
        }
        <div>
          <div style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: isNew ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
            marginBottom: '0.15rem',
          }}>
            {isNew ? 'Hướng Tới' : 'Trước Đây'}
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: isNew ? '#FFFFFF' : 'rgba(255,255,255,0.88)',
          }}>
            {title}
          </h3>
        </div>
      </div>

      {/* Items */}
      <div style={{ background: isNew ? 'rgba(139,0,0,0.03)' : '#FAFAFA', padding: '1.5rem 2rem' }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: isNew ? 20 : -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}
            >
              <span style={{
                flexShrink: 0,
                width: 20, height: 20,
                borderRadius: '50%',
                background: isNew ? 'rgba(212,175,55,0.15)' : 'rgba(139,0,0,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: 2,
              }}>
                <span style={{ fontSize: '0.6rem', color: isNew ? 'var(--gold)' : 'var(--red-deep)', fontWeight: 700 }}>
                  {isNew ? '✓' : '✗'}
                </span>
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: 1.55 }}>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ComparisonSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const conclusionRef = useRef(null);
  const conclusionInView = useInView(conclusionRef, { once: true, margin: '-60px' });

  return (
    <section id="thuc-tien" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Minh Họa Trực Quan</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Chuyển Mình Sang Nền Sản Xuất 4.0
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 580, margin: '0 auto', fontSize: '0.97rem' }}>
            So sánh trực quan giữa mô hình sản xuất truyền thống và mô hình Công nghiệp 4.0 mà Đại hội XII hướng tới.
          </p>
        </motion.div>

        {/* Side by side comparison */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}>
          <ModelColumn title="Mô Hình Cũ" items={OLD_MODEL} isNew={false} />

          {/* VS divider */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            flexShrink: 0,
          }}>
            <div style={{ width: 1, flex: 1, background: 'var(--gray-200)' }} />
            <div style={{
              width: 44, height: 44,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: '0.75rem',
              color: 'var(--red-deep)',
              flexShrink: 0,
            }}>VS</div>
            <div style={{ width: 1, flex: 1, background: 'var(--gray-200)' }} />
          </div>

          <ModelColumn title="Mô Hình Đại Hội XII (4.0)" items={NEW_MODEL} isNew={true} />
        </div>

        {/* Conclusion callout */}
        <motion.div
          ref={conclusionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={conclusionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: '3rem',
            background: 'linear-gradient(135deg, rgba(139,0,0,0.06), rgba(212,175,55,0.06))',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem 2rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--red-deep)', fontStyle: 'italic', lineHeight: 1.5 }}>
            "Kinh tế tri thức là việc đưa hàm lượng chất xám vào từng khâu nhỏ nhất của quá trình sản xuất."
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            — Kết luận, Nghị Quyết Đại Hội XII
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          #thuc-tien .container > div[style*="flex"] { flex-direction: column; }
          #thuc-tien .container > div > div[style*="flex-direction: column"] { display: none; }
        }
      `}</style>
    </section>
  );
}
