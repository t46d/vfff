import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

// مسار معالج إعادة التوجيه لـ Supabase Auth
export async function GET(request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = request.cookies
    const supabase = createClient(cookieStore)

    // تبادل الكود لإنشاء جلسة
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
        // إذا فشلت المصادقة
        return NextResponse.redirect(`${requestUrl.origin}/login?error=auth_error`)
    }
  }

  // التوجيه إلى لوحة التحكم
  return NextResponse.redirect(`${requestUrl.origin}/profile`)
}