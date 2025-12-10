import { createBrowserClient } from "@supabase/ssr";

// تهيئة عميل Supabase لمكونات العميل (Client Components)
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY,
  );
