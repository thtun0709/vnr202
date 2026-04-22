import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe2, TrendingDown, AlertTriangle } from 'lucide-react';

const cards = [
  {
    icon: Globe2,
    color: '#1565c0',
    bg: 'rgba(21,101,192,0.07)',
    border: 'rgba(21,101,192,0.2)',
    label: 'Thách Thức Toàn Cầu',
    title: 'Cách Mạng Công Nghiệp 4.0',
    items: ['Vạn vật kết nối (IoT)', 'Dữ liệu lớn (Big Data)', 'Trí tuệ nhân tạo (AI)'],
    desc: 'Làm thay đổi hoàn toàn phương thức sản xuất trên toàn thế giới.',
  },
  {
    icon: TrendingDown,
    color: '#b71c1c',
    bg: 'rgba(183,28,28,0.07)',
    border: 'rgba(183,28,28,0.2)',
    label: 'Giới Hạn Trong Nước',
    title: 'Bẫy Thu Nhập Trung Bình',
    items: ['Lao động giá rẻ đã chạm trần', 'Khai thác tài nguyên thô cạn kiệt', 'Không còn dư địa tạo sức bật mới'],
    desc: 'Việt Nam đứng trước nguy cơ bị kẹt trong "bẫy thu nhập trung bình".',
  },
  {
    icon: AlertTriangle,
    color: '#e65100',
    bg: 'rgba(230,81,0,0.07)',
    border: 'rgba(230,81,0,0.2)',
    label: 'Yêu Cầu Cấp Bách',
    title: 'Không Thể "Lắp Ráp, Gia Công"',
    items: ['Chuyển đổi mô hình tăng trưởng', 'Đổi mới sáng tạo và công nghệ', 'Không bị bỏ lại phía sau'],
    desc: 'Phải chuyển đổi để tạo ra giá trị gia tăng cao hơn trong chuỗi toàn cầu.',
  },
];

function ContextCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.14 }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.14)' }}
      style={{
        background: card.bg,
        border: `1.5px solid ${card.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 44, height: 44,
          borderRadius: 12,
          background: card.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={22} color="white" strokeWidth={1.8} />
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: card.color }}>
            {card.label}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--gray-800)', lineHeight: 1.2 }}>
            {card.title}
          </div>
        </div>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {card.items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.87rem', color: 'var(--gray-700)' }}>
            <span style={{ color: card.color, marginTop: 3 }}>▸</span>
            {item}
          </li>
        ))}
      </ul>

      <p style={{ fontSize: '0.85rem', color: 'var(--gray-600)', fontStyle: 'italic', lineHeight: 1.6 }}>
        {card.desc}
      </p>
    </motion.div>
  );
}

export default function ContextSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="section-label">Bối Cảnh</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Áp Lực Kép Trước Thềm Đại Hội XII (2016)
          </h2>
          <span className="gold-divider" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 620, fontSize: '0.97rem' }}>
            Đại hội XII ra đời trong bối cảnh thế giới biến động sâu sắc và Việt Nam đối mặt với hai vòng áp lực đồng thời từ bên ngoài và bên trong.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {cards.map((card, i) => (
            <ContextCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
