import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark-bg)',
      borderTop: '1px solid rgba(212,175,55,0.15)',
      padding: '2.5rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={18} color="var(--gold)" strokeWidth={1.8} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.97rem', color: 'var(--gold)', fontWeight: 700 }}>
            Đại Hội XII – CNH, HĐH & Kinh Tế Tri Thức
          </span>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          Lịch Sử Đảng Cộng Sản Việt Nam · Học phần VNR202
        </div>
      </div>
    </footer>
  );
}
