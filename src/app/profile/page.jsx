// src/app/profile/page.jsx
// هذه الصفحة تستخدم مكونات الخادم (Server Component) لزيادة الأمان والأداء
import { getCurrentUserProfile } from '@/services/profile';
import { redirect } from 'next/navigation';

// مكون بسيط لعرض البطاقة بأسلوب Cyberpunk/Glassmorphism
const ProfileCard = ({ name, age, bio, interests }) => {
  const displayAge = (age && !isNaN(parseInt(age))) ? `${parseInt(age)} سنة` : 'لم يحدد العمر';
  
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-black/50 backdrop-blur-lg border-2 border-indigo-500/50 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-indigo-500/50">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-indigo-700/80 border-4 border-cyan-400 mb-4 flex items-center justify-center text-4xl text-white font-mono shadow-inner shadow-cyan-400/50">
          {name ? name[0].toUpperCase() : 'U'}
        </div>
        <h1 className="text-3xl font-bold text-cyan-400 font-mono tracking-wider">{name || 'مستخدم مجهول'}</h1>
        <p className="text-xl text-indigo-400 mt-1">{displayAge}</p>
      </div>

      <div className="mt-6 border-t border-indigo-500/30 pt-4">
        <h2 className="text-lg font-semibold text-indigo-300 mb-2 border-b border-indigo-600/50 pb-1">السيرة الذاتية (Bio)</h2>
        <p className="text-gray-200 italic">{bio || 'يبدو أن هذا المستخدم لم يكتب سيرته الذاتية بعد.'}</p>
      </div>

      {interests && interests.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-indigo-300 mb-2 border-b border-indigo-600/50 pb-1">الاهتمامات</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-600/50 text-cyan-300 text-sm font-medium rounded-full border border-cyan-400/30 shadow-md">
                #\{interest\}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default async function ProfilePage() {
  const profile = await getCurrentUserProfile();

  if (!profile) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-transparent text-white pt-10 pb-10">
      <h1 className="text-4xl text-center font-extrabold text-white mb-10 tracking-widest" style={{ textShadow: '0 0 5px #0ff, 0 0 10px #0ff' }}>
        لوحة التحكم الشخصية (ACCESS GRANTED)
      </h1>
      
      <ProfileCard {...profile} />
      
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-red-600/80 text-white font-bold rounded-lg shadow-lg hover:bg-red-700/90 transition-all duration-200">
          تسجيل الخروج (Logout)
        </button>
      </div>
    </div>
  );
}
