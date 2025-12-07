import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';

export default function GroupDiscovery({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'التعارف الجماعي' : 'Group discovery'}</h2>
      <GlassCard style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong className="title-gradient">{lang === 'ar' ? 'تبدأ الجلسة بعد' : 'Session starts in'}</strong>
          <div className="badge-glass" style={{ boxShadow: 'var(--shadow-neon)' }}>00:09:32</div>
        </div>
      </GlassCard>
      <div style={{ marginTop: 16, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3,1fr)' }} className="grid-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass" style={{ padding: 16, textAlign: 'center', borderRadius: '50%', height: 150 }}>
            <div style={{ marginTop: 40 }} className="title-gradient">{lang === 'ar' ? `ملف ${i + 1}` : `Profile ${i + 1}`}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <NeonButton variant="alt">{lang === 'ar' ? 'بدء الدردشة' : 'Start group chat'}</NeonButton>
      </div>
    </main>
  );
}
