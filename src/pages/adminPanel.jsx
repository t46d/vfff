import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';

export default function AdminPanel({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'لوحة الإدارة' : 'Admin panel'}</h2>
      <GlassCard style={{ padding: 20 }}>
        <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(3,1fr)' }} className="grid-3">
          <NeonButton>{lang === 'ar' ? 'المحتوى' : 'Content'}</NeonButton>
          <NeonButton>{lang === 'ar' ? 'المستخدمون' : 'Users'}</NeonButton>
          <NeonButton>{lang === 'ar' ? 'الجلسات' : 'Sessions'}</NeonButton>
        </div>
      </GlassCard>
    </main>
  );
}
