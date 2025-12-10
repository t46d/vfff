import { createClient } from '@/utils/supabase/middleware'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  try {
    const { supabase, response } = createClient(request)

    const { data: { user } } = await supabase.auth.getUser()

    // 1. إذا كان المستخدم يحاول الوصول إلى /profile وليس لديه جلسة، أعد توجيهه إلى /login
    if (!user && request.nextUrl.pathname.startsWith('/profile')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // 2. إذا كان المستخدم لديه جلسة ويحاول الوصول إلى /login أو /signup، أعد توجيهه إلى /profile
    if (user && (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup'))) {
      return NextResponse.redirect(new URL('/profile', request.url))
    }
    
    return response
  } catch (e) {
    // يمكن أن يظهر خطأ إذا كان المفتاح السري (NEXTAUTH_SECRET) غير صحيح.
    return NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
  }
}

// قائمة المسارات التي يجب تطبيق الـ Middleware عليها
export const config = {
  matcher: [
    /*
     * قم بمطابقة جميع مسارات الطلبات باستثناء:
     * - ملفات API/backend (داخل /api)
     * - ملفات ثابتة (/_next/static, /_next/image)
     * - ملفات الأصول (favicon.ico)
     * - مسار رد النداء (auth/callback)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|auth/callback).*)',
  ],
}
