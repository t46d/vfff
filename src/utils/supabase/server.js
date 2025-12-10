import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// تهيئة عميل Supabase لمكونات الخادم (Server Components)
export const createClient = (cookieStore) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // إصلاح: استخدام المفتاح الصحيح

  return createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch (e) {
            // يمكن تجاهل هذا في Server Components
          }
        },
      },
    },
  );
};
