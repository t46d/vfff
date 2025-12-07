import NotificationItem from '@/components/NotificationItem';

export default function Notifications({ lang }) {
  return (
    <main className="container section">
      <h2 className="title-gradient">{lang === 'ar' ? 'الإشعارات' : 'Notifications'}</h2>
      <NotificationItem
        title={lang === 'ar' ? 'رسالة جديدة' : 'New message'}
        time={lang === 'ar' ? 'منذ 2 دقيقة' : '2m ago'}
        detail={lang === 'ar' ? 'وصلتك رسالة من أليكس.' : 'You received a message from Alex.'}
      />
      <NotificationItem
        title={lang === 'ar' ? 'تذكير جلسة' : 'Session reminder'}
        time={lang === 'ar' ? 'منذ 10 دقائق' : '10m ago'}
        detail={lang === 'ar' ? 'تبدأ الدردشة الجماعية خلال 10 دقائق.' : 'Group chat starts in 10 minutes.'}
      />
    </main>
  );
}
