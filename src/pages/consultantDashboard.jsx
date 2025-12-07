import GlassCard from '@/components/GlassCard';
import NeonButton from '@/components/NeonButton';

export default function ConsultantDashboard({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'المستشارون' : 'Consultants'}</h2>
      <GlassCard style={{ padding: 20 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <NeonButton>{lang === 'ar' ? 'إدارة الجلسات' : 'Manage sessions'}</NeonButton>
          <NeonButton variant="alt">{lang === 'ar' ? 'تعديل البروفايل' : 'Edit profile'}</NeonButton>
          <NeonButton>{lang === 'ar' ? 'أسعار الجلسات' : 'Pricing'}</NeonButton>
        </div>
        <div style={{ marginTop: 16 }}>
          <div className="badge-glass">{lang === 'ar' ? 'تنبيهات قيد الانتظار' : 'Pending alerts'}</div>
        </div>
      </GlassCard>
    </main>
  );
}
