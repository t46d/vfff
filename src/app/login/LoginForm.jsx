// src/app/login/LoginForm.jsx
"use client";

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();

  const supabase = createClient();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSigningIn(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
      // التوجيه إلى مسار رد النداء الذي كتبناه سابقاً
      redirectTo: `${window.location.origin}/auth/callback`, 
    });

    if (error) {
      setError(error.message);
      setIsSigningIn(false);
    } 
  };

  return (
    <div className="w-full max-w-sm p-8 space-y-6 bg-black/70 backdrop-blur-sm rounded-xl border-2 border-green-500/50 shadow-2xl transition-all duration-300 hover:shadow-green-400/50">
      <h2 className="text-3xl font-bold text-center text-green-400 font-mono tracking-wide">
        دخول النظام (LOGIN)
      </h2>

      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-indigo-300 mb-1">البريد الإلكتروني</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSigningIn}
            className="w-full px-4 py-2 border-2 border-indigo-500/50 bg-gray-800/80 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-indigo-300 mb-1">كلمة المرور</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isSigningIn}
            className="w-full px-4 py-2 border-2 border-indigo-500/50 bg-gray-800/80 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-900/40 p-2 rounded-md border border-red-500/50">{error}</p>
        )}

        <button
          type="submit"
          disabled={isSigningIn}
          className="w-full px-4 py-2 text-white font-bold rounded-lg shadow-lg transition-all duration-200"
          style={{ background: isSigningIn ? '#4C7C5A' : '#10B981', cursor: isSigningIn ? 'not-allowed' : 'pointer' }}
        >
          {isSigningIn ? 'جاري المصادقة...' : 'تسجيل الدخول'}
        </button>
        
        <div className="text-center text-sm">
          <a href="/signup" className="text-indigo-400 hover:text-cyan-400 transition-colors duration-200">
            ليس لديك حساب؟ إنشاء حساب جديد
          </a>
        </div>
      </form>
    </div>
  );
}
