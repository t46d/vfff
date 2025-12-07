import NeonButton from './NeonButton';

export default function Header({ lang, setLang, t }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(10,10,10,.6)', backdropFilter: 'blur(8px)' }}>
      <div className="container" style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="https://vexachat.world/" aria-label="VeXa Home">
            <img src="/assets/logo.svg" alt="VeXa" width={36} height={36} style={{ filter: 'drop-shadow(0 0 8px #00F0FF)' }} />
          </a>
          <span className="title-gradient" style={{ fontWeight: 700 }}>VeXa</span>
        </div>
        <nav style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" className="badge-glass">{t.home}</a>
          <a href="/groupDiscovery" className="badge-glass">{t.discover}</a>
          <a href="/notifications" className="badge-glass">{t.notifications}</a>
          <a href="/profile" className="badge-glass">{t.profile}</a>
          <NeonButton href="/login">{t.signIn}</NeonButton>
          <select
            aria-label="Language"
            className="badge-glass"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{ padding: '8px 12px' }}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
