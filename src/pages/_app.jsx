import '@/styles/globals.css';
import '@/styles/theme.css';
import '@/styles/neon.css';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locales, getDir } from '@/lib/i18n';

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('en');

  // remember language selection
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    if (saved) setLang(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  }, [lang]);

  const t = useMemo(() => locales[lang].common, [lang]);
  const dir = getDir(lang);

  return (
    <div className="page" lang={lang} dir={dir}>
      <Head>
        <title>VeXa — vexachat.world</title>
        <meta name="description" content="VeXa: Cyber-modern dating & chat platform with neon and glass UI." />
        <link rel="canonical" href="https://vexachat.world/" />
      </Head>
      <div className="decor-lines" />
      <Header lang={lang} setLang={setLang} t={t} />
      <Component {...pageProps} t={t} lang={lang} />
      <Footer t={t} lang={lang} />
    </div>
  );
}
