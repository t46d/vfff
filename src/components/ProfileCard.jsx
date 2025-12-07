export default function ProfileCard({ name, status, interests = [] }) {
  return (
    <div className="glass card-shadow-neo" style={{ padding: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 72, height: 72,
            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
            backgroundImage: 'linear-gradient(135deg,#00F0FF,#B500FF)',
            boxShadow: 'var(--shadow-violet)',
            filter: 'saturate(1.2)'
          }}
        />
        <div>
          <h3 className="title-gradient" style={{ margin: 0 }}>{name}</h3>
          <small style={{ color: 'var(--muted)' }}>{status}</small>
        </div>
      </div>
      <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {interests.map((i) => (<span key={i} className="badge-glass">{i}</span>))}
      </div>
    </div>
  );
}
