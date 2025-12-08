// src/services/profile.js
// خدمة لجلب بيانات الملف الشخصي من جدول 'profiles' في Supabase

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

/**
 * جلب بيانات الملف الشخصي للمستخدم الحالي
 * @returns {Promise<{name: string, bio: string, interests: string[]}|null>}
 */
export async function getCurrentUserProfile() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  
  // 1. جلب المستخدم الموثق
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // 2. جلب البيانات من جدول 'profiles' باستخدام user_id
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('name, bio, interests, age')
    .eq('user_id', user.id) // يربط بين المستخدم في auth.users والملف الشخصي
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116: لا يوجد صف
    console.error('Error fetching profile:', error);
    return null;
  }
  
  // إذا لم يتم العثور على ملف شخصي، نرجع بيانات المستخدم الأساسية
  return profile || { name: user.email.split('@')[0], bio: 'User profile not set up yet.', interests: [] };
}
