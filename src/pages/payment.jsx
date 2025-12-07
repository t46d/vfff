import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';

export default function Payment({ t, lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'الدفع والتحصيل' : 'Payment'}</h2>
      <GlassCard style={{ maxWidth: 540, margin: '16px auto', padding: 24 }}>
        <div style={{ display: 'grid', gap: 12 }}>
          <input className="input-glass" placeholder={lang === 'ar' ? 'رقم البطاقة (Visa/Mastercard)' : 'Card number (Visa/Mastercard)'} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <input className="input-glass" placeholder={lang === 'ar' ? 'MM/YY' : 'MM/YY'} />
            <input className="input-glass" placeholder={lang === 'ar' ? 'CVC' : 'CVC'} />
          </div>
          <NeonButton variant="alt">{t.payNow}</NeonButton>
        </div>
      </GlassCard>
    </main>
  );
}
