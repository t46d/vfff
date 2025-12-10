// src/app/page.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold text-green-400 mb-6">مرحباً بك في VeXa</h1>
      <p className="text-xl mb-8">نظام المصادقة جاهز.</p>
      
      <Link href="/login" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors">
        انتقل لتسجيل الدخول
      </Link>
    </div>
  );
}
