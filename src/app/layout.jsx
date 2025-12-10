// src/app/layout.jsx
import '../globals.css';

export const metadata = {
  title: 'VeXa App - Secure Auth',
  description: 'Cyber-Modern Next.js & Supabase Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* سيتم وضع محتوى جميع الصفحات هنا */}
        {children}
      </body>
    </html>
  );
}
