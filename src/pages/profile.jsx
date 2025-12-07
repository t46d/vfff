import ProfileCard from '@/components/ProfileCard';
import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';

export default function Profile({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'الملف الشخصي' : 'My profile'}</h2>
      <ProfileCard
        name={lang === 'ar' ? 'أليكس كارتر' : 'Alex Carter'}
        status={lang === 'ar' ? 'مستشار واثق من نفسه' : 'Confident consultant'}
        interests={lang === 'ar' ? ['سايبربانك', 'ذكاء اصطناعي', 'ألعاب', 'سفر'] : ['Cyberpunk', 'AI', 'Gaming', 'Travel']}
      />
      <GlassCard style={{ marginTop: 16, padding: 20 }}>
        <h3 className="title-gradient">{lang === 'ar' ? 'إحصائيات' : 'Stats'}</h3>
        <div className="grid-3" style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(3,1fr)' }}>
          <div className="glass" style={{ padding: 10 }}>{lang === 'ar' ? 'أصدقاء:' : 'Friends:'} <strong>42</strong></div>
          <div className="glass" style={{ padding: 10 }}>{lang === 'ar' ? 'جلسات:' : 'Sessions:'} <strong>18</strong></div>
          <div className="glass" style={{ padding: 10 }}>{lang === 'ar' ? 'تقييم:' : 'Rating:'} <strong>4.8</strong></div>
        </div>
        <div style={{ marginTop: 16 }}>
          <NeonButton variant="alt">{lang === 'ar' ? 'تعديل الملف' : 'Edit profile'}</NeonButton>
        </div>
      </GlassCard>
    </main>
  );
}
