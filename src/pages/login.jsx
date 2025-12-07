import NeonButton from '@/components/NeonButton';
import GlassCard from '@/components/GlassCard';

export default function Login({ t, lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'تسجيل الدخول' : 'Sign in'}</h2>
      <GlassCard style={{ maxWidth: 520, margin: '16px auto', padding: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input className="input-glass" type="email" placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} />
          <input className="input-glass" type="password" placeholder={lang === 'ar' ? 'كلمة المرور' : 'Password'} />
          <NeonButton>{t.signIn}</NeonButton>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <NeonButton variant="alt">{lang === 'ar' ? 'المتابعة بواسطة Google' : 'Continue with Google'}</NeonButton>
            <NeonButton variant="alt">{lang === 'ar' ? 'المتابعة بواسطة Microsoft' : 'Continue with Microsoft'}</NeonButton>
          </div>
        </div>
      </GlassCard>
    </main>
  );
}
