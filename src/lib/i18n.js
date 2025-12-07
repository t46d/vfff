export const locales = {
  en: {
    common: {
      home: "Home",
      discover: "Discover",
      notifications: "Notifications",
      profile: "Profile",
      signIn: "Sign in",
      createAccount: "Create account",
      homeTag: "Discover. Connect. Chat — VeXa",
      contactEmail: "Contact: vexa@vexachat.world",
      payNow: "Pay now",
      admin: "Admin",
      analytics: "Analytics",
      security: "Security"
    }
  },
  ar: {
    common: {
      home: "الرئيسية",
      discover: "التعارف الجماعي",
      notifications: "الإشعارات",
      profile: "الملف الشخصي",
      signIn: "تسجيل الدخول",
      createAccount: "إنشاء حساب",
      homeTag: "اكتشف. تعارف. دردشة — VeXa",
      contactEmail: "للتواصل: vexa@vexachat.world",
      payNow: "ادفع الآن",
      admin: "الإدارة",
      analytics: "التحليلات",
      security: "الحماية"
    }
  }
};

export function getDir(lang) {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
