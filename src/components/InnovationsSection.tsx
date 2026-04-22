import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Cpu, Leaf, LineChart, Building2, Scale, ChevronRight } from 'lucide-react';

const INNOVATIONS = [
  {
    icon: LineChart,
    number: '01',
    color: '#1a237e',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
    title: 'Đổi Mới Triết Lý Tăng Trưởng',
    subtitle: 'Từ chiều rộng → chiều sâu',
    keyPoints: [
      'Năng suất lao động: nâng kỹ năng thay vì tăng giờ làm',
      'Hiệu quả nguồn lực: tối ưu hóa phân bổ vốn đầu tư',
      'Sức cạnh tranh: nâng cấp vị thế sản phẩm trong chuỗi giá trị toàn cầu',
    ],
    detail: 'Đại hội XII đánh dấu mốc quyết định chuyển đổi mô hình tăng trưởng từ chiều rộng (chạy theo số lượng, phụ thuộc vốn) sang chiều sâu (tập trung vào chất lượng) với 3 trụ cột cốt lõi.',
  },
  {
    icon: Cpu,
    number: '02',
    color: '#4527a0',
    gradient: 'linear-gradient(135deg, #4527a0 0%, #6a1b9a 100%)',
    title: 'Gắn Kết CNH, HĐH Với Kinh Tế Tri Thức',
    subtitle: 'KH&CN là "quốc sách hàng đầu"',
    keyPoints: [
      'KH&CN không còn ở khẩu hiệu mà là "quốc sách hàng đầu"',
      'Từ "gia công" sang nghiên cứu, ứng dụng, tự đổi mới sáng tạo',
      'Lần đầu nhấn mạnh tinh thần "Quốc gia Khởi nghiệp" (Startup)',
    ],
    detail: 'Lần đầu tiên, khoa học công nghệ được khẳng định là lực lượng sản xuất hàng đầu. Hệ sinh thái khởi nghiệp đổi mới sáng tạo trở thành yêu cầu bắt buộc.',
  },
  {
    icon: Building2,
    number: '03',
    color: '#b71c1c',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #c62828 100%)',
    title: 'Quy Hoạch Lại Cơ Cấu Ngành',
    subtitle: 'Tập trung mũi nhọn, không dàn trải',
    keyPoints: [
      'Tập trung ngành công nghiệp công nghệ cao, giá trị gia tăng lớn',
      'Tái cơ cấu nông nghiệp → "Kinh tế nông nghiệp" thông minh',
      'Đẩy mạnh công nghiệp hỗ trợ, nâng tỷ lệ nội địa hóa',
    ],
    detail: 'Không đầu tư dàn trải. Tập trung có chọn lọc vào các ngành công nghiệp có hàm lượng công nghệ cao, đồng thời hiện đại hóa nông nghiệp bằng công nghệ.',
  },
  {
    icon: Leaf,
    number: '04',
    color: '#1b5e20',
    gradient: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
    title: 'Tăng Trưởng Xanh & Bền Vững',
    subtitle: 'Không đánh đổi môi trường',
    keyPoints: [
      'Kiên quyết từ chối dự án đánh đổi môi trường lấy kinh tế',
      'Ứng phó biến đổi khí hậu, đặc biệt vùng ĐBSCL',
      'Đặt nền móng cho tư duy kinh tế tuần hoàn',
    ],
    detail: 'CNH, HĐH phải song hành với trách nhiệm môi trường. Kinh tế tuần hoàn và phát triển bền vững trở thành nguyên tắc không thể tách rời trong mọi quyết sách.',
  },
  {
    icon: Scale,
    number: '05',
    color: '#e65100',
    gradient: 'linear-gradient(135deg, #e65100 0%, #bf360c 100%)',
    title: 'Thể Chế & Kinh Tế Tư Nhân',
    subtitle: 'Nhà nước kiến tạo, tư nhân dẫn dắt',
    keyPoints: [
      'Hoàn thiện thể chế kinh tế thị trường định hướng XHCN',
      'Kinh tế tư nhân là "động lực quan trọng" của nền kinh tế',
      'Nhà nước lùi về vai trò kiến tạo, tạo sân chơi bình đẳng',
    ],
    detail: 'Đại hội XII tạo bước ngoặt khi khẳng định mạnh mẽ vai trò của kinh tế tư nhân. Nhà nước chuyển từ người điều hành sang người kiến tạo môi trường.',
  },
];

function InnovationCard({ item, index, isActive, onClick }: {
  item: typeof INNOVATIONS[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onClick={onClick}
      style={{
        background: isActive ? item.gradient : '#FFFFFF',
        border: isActive ? 'none' : '1.5px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        boxShadow: isActive ? `0 16px 48px ${item.color}44` : 'var(--shadow-card)',
      }}
      whileHover={!isActive ? { y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' } : {}}
    >
      {/* Background glow when active */}
      {isActive && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Number watermark */}
      <div style={{
        position: 'absolute',
        bottom: -10,
        right: 10,
        fontFamily: 'var(--font-display)',
        fontSize: '5rem',
        fontWeight: 900,
        color: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        {item.number}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{
          width: 48, height: 48,
          borderRadius: 14,
          background: isActive ? 'rgba(255,255,255,0.2)' : item.gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={22} color="white" strokeWidth={1.8} />
        </div>
        <motion.div animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight size={18} color={isActive ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)'} />
        </motion.div>
      </div>

      <div style={{
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)',
        marginBottom: '0.3rem',
      }}>
        Điểm Mới {item.number}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: 700,
        color: isActive ? '#FFFFFF' : 'var(--gray-800)',
        lineHeight: 1.3,
        marginBottom: '0.3rem',
      }}>
        {item.title}
      </h3>

      <p style={{
        fontSize: '0.8rem',
        color: isActive ? 'rgba(255,255,255,0.75)' : 'var(--gray-500)',
        fontStyle: 'italic',
      }}>
        {item.subtitle}
      </p>

      {/* Expanded content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1rem' }}>
                {item.detail}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {item.keyPoints.map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.83rem', color: 'rgba(255,255,255,0.9)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', marginTop: 2, flexShrink: 0 }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InnovationsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="diem-moi" style={{ background: 'var(--gray-50)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Phần 2 – Phân Tích Chuyên Sâu</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            5 Điểm Mới Cốt Lõi Của Đại Hội XII
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 560, margin: '0 auto', fontSize: '0.97rem' }}>
            Nhấp vào từng thẻ để xem phân tích chi tiết về từng điểm đột phá trong tư duy chiến lược.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start',
        }}>
          {INNOVATIONS.map((item, i) => (
            <InnovationCard
              key={i}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
