import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';

export default function Review({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'التقييم والمراجعة' : 'Reviews'}</h2>
      <GlassCard style={{ maxWidth: 600, margin: '16px auto', padding: 24 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg,#FF00C8,#00F0FF)', boxShadow: 'var(--shadow-pink)' }} />
          ))}
        </div>
        <textarea className="input-glass" rows={4} placeholder={lang === 'ar' ? 'اكتب مراجعتك...' : 'Write your review...'} />
        <div style={{ marginTop: 12 }}>
          <NeonButton>{lang === 'ar' ? 'إرسال' : 'Submit'}</NeonButton>
        </div>
      </GlassCard>
    </main>
  );
}
