import NeonButton from '@/components/NeonButton';
import ThreeScene from '@/components/ThreeScene';
import GlassCard from '@/components/GlassCard';

export default function Home({ t, lang }) {
  return (
    <main className="container section" style={{ position: 'relative' }}>
      <ThreeScene />
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <a href="https://vexachat.world/">
          <img src="/assets/logo.svg" alt="VeXa" width={96} height={96} style={{ filter: 'drop-shadow(0 0 12px #00F0FF)' }} />
        </a>
        <h1 className="title-gradient" style={{ fontSize: 32, marginTop: 16 }}>{t.homeTag}</h1>
        <p style={{ color: 'var(--muted)' }}>
          {lang === 'ar'
            ? 'منصة تعارف ودردشة بواجهة زجاجية وتأثيرات نيون حديثة.'
            : 'Cyber-modern dating & chat with neon vibes and glass UI.'}
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <NeonButton href="/login">{t.signIn}</NeonButton>
          <NeonButton variant="alt" href="/profile">{t.createAccount}</NeonButton>
        </div>
        <div style={{ marginTop: 16, color: 'var(--muted)' }}>
          <a href="mailto:vexa@vexachat.world" className="badge-glass">{t.contactEmail}</a>
        </div>
      </div>

      <div className="grid-3" style={{ marginTop: 40, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3,1fr)' }}>
        <GlassCard>
          <strong className="title-gradient">{lang === 'ar' ? 'دردشة فورية' : 'Instant Chat'}</strong>
          <p style={{ color: 'var(--muted)' }}>{lang === 'ar' ? 'ابدأ محادثات خاصة بسرعة.' : 'Start private chats fast.'}</p>
        </GlassCard>
        <GlassCard>
          <strong className="title-gradient">{lang === 'ar' ? 'اكتشاف جماعي' : 'Group Discovery'}</strong>
          <p style={{ color: 'var(--muted)' }}>{lang === 'ar' ? 'تعرف على دوائر باهتمامات مشتركة.' : 'Meet circles with shared interests.'}</p>
        </GlassCard>
        <GlassCard>
          <strong className="title-gradient">{lang === 'ar' ? 'مساعد ذكي' : 'Smart Assistant'}</strong>
          <p style={{ color: 'var(--muted)' }}>{lang === 'ar' ? 'احصل على اقتراحات وتوجيهات.' : 'Get suggestions and guidance.'}</p>
        </GlassCard>
      </div>
    </main>
  );
}
