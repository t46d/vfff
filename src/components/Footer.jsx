export default function Footer({ t, lang }) {
  return (
    <footer style={{ marginTop: 40, padding: '24px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <small style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} <a href="https://vexachat.world/" className="badge-glass">vexachat.world</a>
        </small>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="badge-glass" href="/security">{t.security}</a>
          <a className="badge-glass" href="/analytics">{t.analytics}</a>
          <a className="badge-glass" href="/adminPanel">{lang === 'ar' ? 'لوحة الإدارة' : 'Admin'}</a>
          <a className="badge-glass" href="mailto:vexa@vexachat.world">{t.contactEmail}</a>
        </div>
      </div>
    </footer>
  );
}
