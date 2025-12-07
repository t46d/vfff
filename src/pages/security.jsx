import GlassCard from '@/components/GlassCard';

export default function Security({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'الحماية والتحري' : 'Security & safety'}</h2>
      <GlassCard style={{ padding: 24 }}>
        <h3 className="title-gradient">{lang === 'ar' ? 'سجل الأنشطة المشبوهة' : 'Suspicious activity log'}</h3>
        <ul style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: 0, listStyle: 'none' }}>
          <li className="badge-glass">{lang === 'ar' ? 'تم اكتشاف تغيير IP' : 'IP change detected'}</li>
          <li className="badge-glass">{lang === 'ar' ? 'محاولات دخول متعددة' : 'Multiple login attempts'}</li>
        </ul>
        <div style={{ marginTop: 12 }}>
          <button className="neon-btn" style={{ backgroundImage: 'linear-gradient(135deg,#ff6a00,#ff00c8)' }}>
            {lang === 'ar' ? 'إبلاغ' : 'Report'}
          </button>
        </div>
      </GlassCard>
    </main>
  );
}
