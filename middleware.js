import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  // يجب استخدام @supabase/auth-helpers-nextjs في Middleware (إذا كان متوفراً)، وإلا نستخدم SSR
  const supabase = createMiddlewareClient({ req, res });

  // تحديث الجلسة (Refresh Session)
  await supabase.auth.getSession();
  
  // مثال على حماية المسارات
  const { data: { user } } = await supabase.auth.getUser();
  
  // حماية المسارات الهامة التي تتطلب مصادقة
  const protectedRoutes = ['/profile', '/chatRoom', '/consultantDashboard', '/payment'];
  
  if (!user && protectedRoutes.includes(req.nextUrl.pathname)) {
    // التوجيه إلى صفحة تسجيل الدخول إذا لم يكن المستخدم موثقاً
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

export const config = {
  // تطبق هذه الوظيفة على جميع المسارات باستثناء (static, api, _next)
  matcher: [
    '/',
    '/profile',
    '/chatRoom',
    '/login',
    '/notifications',
    '/adminPanel',
    '/consultantDashboard',
    '/payment'
  ],
};
