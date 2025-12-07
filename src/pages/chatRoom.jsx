import ChatBubble from '@/components/ChatBubble';
import NeonButton from '@/components/NeonButton';

export default function ChatRoom({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'دردشة خاصة' : 'Private chat'}</h2>
      <div className="glass" style={{ padding: 16, minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundImage: 'url(/assets/neon-lines.svg)', backgroundSize: 'cover' }}>
        <ChatBubble text={lang === 'ar' ? 'مرحبًا! جاهز للدردشة؟' : 'Hey! Ready to talk?'} />
        <ChatBubble text={lang === 'ar' ? 'أكيد — لنبدأ.' : 'Absolutely — let’s start.'} me />
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <input className="input-glass" placeholder={lang === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'} />
        <NeonButton>{lang === 'ar' ? 'إرسال' : 'Send'}</NeonButton>
      </div>
    </main>
  );
}
