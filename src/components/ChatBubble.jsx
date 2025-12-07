export default function ChatBubble({ text, me }) {
  return (
    <div className={`max-w-[70%] mb-3 ${me ? 'ml-auto' : ''}`} style={{ display: 'flex' }}>
      <div
        className="glass"
        style={{
          padding: '12px 14px',
          fontSize: 14,
          lineHeight: 1.6,
          boxShadow: me
            ? '0 0 14px rgba(181,0,255,.6), 0 0 10px rgba(0,240,255,.5)'
            : '0 0 10px rgba(255,255,255,.15)',
          backgroundImage: me ? 'linear-gradient(135deg,rgba(181,0,255,.15),rgba(0,240,255,.12))' : 'none'
        }}
      >
        {text}
      </div>
    </div>
  );
}
