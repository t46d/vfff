// src/app/login/page.jsx
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import LoginForm from './LoginForm';

export default async function LoginPage() {
  const supabase = createClient();

  // التحقق مما إذا كان المستخدم مسجلاً دخوله بالفعل
  const { data: { user } } = await supabase.auth.getUser();

  // إذا كان المستخدم مسجلاً دخوله، يتم توجيهه إلى صفحة الملف الشخصي
  if (user) {
    redirect('/profile');
  }

  // إذا لم يكن مسجلاً دخوله، نعرض مكون تسجيل الدخول
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <LoginForm />
    </div>
  );
}
