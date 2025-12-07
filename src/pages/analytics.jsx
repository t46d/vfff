import GlassCard from '@/components/GlassCard';

export default function Analytics({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'التحليلات' : 'Analytics'}</h2>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3,1fr)' }} className="grid-3">
        <GlassCard style={{ padding: 20 }}>
          <strong className="title-gradient">{lang === 'ar' ? 'الجلسات' : 'Sessions'}</strong>
          <p style={{ color: 'var(--muted)' }}>{lang === 'ar' ? 'آخر 7 أيام: 182' : 'Last 7 days: 182'}</p>
        </GlassCard>
        <GlassCard style={{ padding: 20 }}>
          <strong className="title-gradient">{lang === 'ar' ? 'المدفوعات' : 'Payments'}</strong>
          <p style={{ color: 'var(--muted)' }}>{lang === 'ar' ? '$1,240' : '$1,240'}</p>
        </GlassCard>
        <GlassCard style={{ padding: 20 }}>
          <strong className="title-gradient">{lang === 'ar' ? 'الرضا' : 'Satisfaction'}</strong>
          <p style={{ color: 'var(--muted)' }}>{lang === 'ar' ? '4.7 / 5' : '4.7 / 5'}</p>
        </GlassCard>
      </div>
    </main>
  );
}
