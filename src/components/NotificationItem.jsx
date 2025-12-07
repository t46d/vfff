export default function NotificationItem({ title, time, detail }) {
  return (
    <div className="glass" style={{ padding: 16, marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong className="title-gradient">{title}</strong>
        <small style={{ color: 'var(--muted)' }}>{time}</small>
      </div>
      <p style={{ marginTop: 8, color: 'var(--text)' }}>{detail}</p>
    </div>
  );
}
