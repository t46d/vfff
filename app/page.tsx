"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type LangCode = "en" | "ar";
type SectionId = "landing" | "chat" | "voice" | "video" | "anon" | "match" | "profile" | "notify";

type User = { id:number; name:string; age:number; status:string; last:string; initial:string };

const STRINGS = {
  en:{
    brand:"VeXa",
    heroTitle:"VeXa — AI social chat & matchmaking. Launching soon on vexachat.world.",
    heroSub:"Preview text, voice, video, anonymous chat, and AI matchmaking. No sign‑up needed.",
    chats:"Chats", listFilter:"All",
    anonOn:"Anonymous: ON", anonOff:"Anonymous: OFF",
    notifyTitle:"Opening soon",
    notifySub:"Leave your email and we’ll ping you when VeXa opens on vexachat.world.",
    notifyBtn:"Notify me", notifyThanks:"Thanks! We will email you at launch.", notifyEnter:"Please enter a valid email.",
    authTitle:"Sign in", authSub:"Preview only — no real accounts yet.", emailLabel:"Email", passLabel:"Password",
    login:"Sign in", guest:"Preview as guest",
    menuMain:"Main", menuInfo:"Info",
    openingSoon:"Opening soon",
    voiceStudio:"Voice studio",
    videoSession:"Video session",
    anonymousMode:"Anonymous mode",
    matchmaking:"AI matchmaking",
    profilePreview:"Profile preview"
  },
  ar:{
    brand:"VeXa",
    heroTitle:"VeXa — دردشة اجتماعية ومواءمة بالذكاء الاصطناعي. الافتتاح قريبًا على vexachat.world.",
    heroSub:"معاينة النص والصوت والفيديو والدردشة بلا هوية والمواءمة الذكية. لا حاجة للتسجيل.",
    chats:"المحادثات", listFilter:"الكل",
    anonOn:"وضع بلا هوية: مُفعل", anonOff:"وضع بلا هوية: مُغلق",
    notifyTitle:"الافتتاح قريبًا",
    notifySub:"اكتب بريدك وسنخبرك عند افتتاح VeXa على vexachat.world.",
    notifyBtn:"نبّهني", notifyThanks:"شكرًا! سنرسل لك رسالة عند الافتتاح.", notifyEnter:"يرجى إدخال بريد صالح.",
    authTitle:"تسجيل الدخول", authSub:"هذه معاينة فقط — لا توجد حسابات حقيقية الآن.", emailLabel:"البريد الإلكتروني", passLabel:"كلمة المرور",
    login:"تسجيل الدخول", guest:"معاينة كضيف",
    menuMain:"الرئيسية", menuInfo:"معلومات",
    openingSoon:"الافتتاح قريبًا",
    voiceStudio:"استوديو الصوت",
    videoSession:"جلسة فيديو",
    anonymousMode:"وضع بلا هوية",
    matchmaking:"مواءمة ذكية",
    profilePreview:"معاينة الملف الشخصي"
  }
};

const MOCK_USERS: User[] = [
  {id:1, name:"Aya",     age:23, status:"online",    last:"Neon vibes are amazing ✨",               initial:"A"},
  {id:2, name:"Sara",    age:25, status:"typing...", last:"Can’t wait for launch 🚀",               initial:"S"},
  {id:3, name:"Aeny",    age:22, status:"offline",   last:"See you soon!",                          initial:"A"},
  {id:4, name:"Joy",     age:24, status:"online",    last:"Voice notes are fun 🎙️",                initial:"J"},
  {id:5, name:"Shaivat", age:26, status:"online",    last:"Anonymous chat feels safe 🕶️",          initial:"S"},
  {id:6, name:"Lina",    age:21, status:"offline",   last:"Matchmaking preview looks cool 🤖",      initial:"L"},
  {id:7, name:"Noor",    age:27, status:"online",    last:"Video chat mock is smooth 🎥",           initial:"N"}
];

export default function Page() {
  const [lang, setLang] = useState<LangCode>("en");
  const S = useMemo(()=> STRINGS[lang], [lang]);

  useEffect(()=>{ document.documentElement.dir = lang==="ar" ? "rtl" : "ltr"; document.documentElement.lang = lang; },[lang]);

  const [section, setSection] = useState<SectionId>("landing");
  const [anon, setAnon] = useState(false);

  // Drawer (mobile)
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Chat state
  const [users] = useState<User[]>(MOCK_USERS);
  const [current, setCurrent] = useState<User>(MOCK_USERS[0]);
  const [messages, setMessages] = useState<{initial:string; meta:string; text?:string; voice?:string}[]>([
    {initial: current.initial, meta: `${current.name} • 2m`, text: current.last}
  ]);
  useEffect(()=>{ // load thread when user changes
    setMessages([
      {initial: current.initial, meta: `${current.name} • 2m`, text: current.last},
      {initial: "Y", meta: `${lang==="ar"?"أنت":"You"} • 1m`, text: lang==="ar" ? "متحمس للتجربة!" : "Looks exciting!"},
      {initial: current.initial, meta: `${current.name} • 1m`, voice: "0:10"}
    ]);
  },[current, lang]);

  // Notify form
  const emailRef = useRef<HTMLInputElement>(null);
  const [notifyMsg, setNotifyMsg] = useState("");

  // Matchmaking
  const [goal, setGoal] = useState<"chat"|"friendship"|"dating">("chat");
  const [vibe, setVibe] = useState<"chill"|"creative"|"deep">("chill");
  const [matchText, setMatchText] = useState("—");

  return (
    <div className="app">
      {/* Topbar */}
      <header className="topbar">
        <button className="btn ghost drawerToggle" onClick={()=> setDrawerOpen(v=>!v)}>☰ Menu</button>
        <div className="brand" onClick={()=> setSection("landing")}>
          <div className="mark"></div>
          <span>{S.brand}</span>
        </div>
        <div className="grow"></div>
        <select className="lang" value={lang} onChange={e=> setLang(e.target.value as LangCode)}>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
        <button className="btn icon" onClick={()=> alert(lang==="ar"?"هذه معاينة فقط":"Preview only")}>🔐 {lang==="ar"?"تسجيل الدخول":"Sign in"}</button>
        <a className="btn" href="#notify" onClick={(e)=>{e.preventDefault(); setSection("notify");}}>Notify</a>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="nav-group">
          <div className="nav-title">{S.menuMain}</div>
          {[
            {id:"landing", label:"🏠 Home"},
            {id:"chat",    label:"💬 Chat"},
            {id:"voice",   label:"🎙️ Voice"},
            {id:"video",   label:"🎥 Video"},
            {id:"anon",    label:"🕶️ Anonymous"},
            {id:"match",   label:"🤖 Matchmaking"},
            {id:"profile", label:"👤 Profile"}
          ].map(i=>(
            <div key={i.id} className={`nav-item ${section===i.id ? "active":""}`} onClick={()=> setSection(i.id as SectionId)}>
              {i.label}
            </div>
          ))}
        </div>
        <div className="nav-group">
          <div className="nav-title">{S.menuInfo}</div>
          <div className={`nav-item ${section==="notify"?"active":""}`} onClick={()=> setSection("notify")}>
            🚀 {S.openingSoon}
          </div>
        </div>
      </aside>

      {/* Drawer (mobile) */}
      <div className={`drawer ${drawerOpen?"open":""}`}>
        <div className="nav-title">{lang==="ar"?"التنقل":"Navigate"}</div>
        {[
          {id:"landing", label:"🏠 Home"},
          {id:"chat",    label:"💬 Chat"},
          {id:"voice",   label:"🎙️ Voice"},
          {id:"video",   label:"🎥 Video"},
          {id:"anon",    label:"🕶️ Anonymous"},
          {id:"match",   label:"🤖 Matchmaking"},
          {id:"profile", label:"👤 Profile"},
          {id:"notify",  label:"🚀 Opening soon"}
        ].map(i=>(
          <div key={i.id} className={`nav-item ${section===i.id ? "active":""}`} onClick={()=> {setSection(i.id as SectionId); setDrawerOpen(false);}}>
            {i.label}
          </div>
        ))}
      </div>

      {/* Content */}
      <main className="content">
        {/* Landing */}
        {section==="landing" && (
          <section className="card" id="landing">
            <h1 className="title">{S.heroTitle}</h1>
            <p className="subtitle">{S.heroSub}</p>
            <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:12}}>
              <button className="btn" onClick={()=> setSection("chat")}>{lang==="ar"?"معاينة الدردشة":"Preview chat"}</button>
              <button className="btn ghost" onClick={()=> alert(lang==="ar"?"وضع الضيف":"Guest mode")}>{lang==="ar"?"معاينة كضيف":"Preview as guest"}</button>
            </div>
            <div className="tiles" style={{marginTop:14}}>
              <div className="tile">💬 {lang==="ar"?"دردشة نصية":"Text chat"} — {lang==="ar"?"رسائل لحظية":"real-time messages"}</div>
              <div className="tile">🎙️ {lang==="ar"?"رسائل صوتية":"Voice notes"} — {lang==="ar"?"مشاركة سريعة":"quick sharing"}</div>
              <div className="tile">🎥 {lang==="ar"?"فيديو":"Video"} — {lang==="ar"?"واجهة بسيطة":"minimal UI"}</div>
              <div className="tile">🕶️ {lang==="ar"?"بلا هوية":"Anonymous"} — {lang==="ar"?"اخفِ الاسم":"hide your name"}</div>
              <div className="tile">🤖 {lang==="ar"?"مواءمة ذكية":"AI matchmaking"} — {lang==="ar"?"ترشيحات ذكية":"smart suggestions"}</div>
              <div className="tile">💎 {lang==="ar"?"جلسات مدفوعة":"Premium"} — {lang==="ar"?"فواتير آمنة":"secure billing"}</div>
            </div>
          </section>
        )}

        {/* Chat */}
        {section==="chat" && (
          <section className="card" id="chat">
            <div className="chat-layout">
              {/* Chat list */}
              <div className="card" style={{padding:12}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                  <strong>{S.chats}</strong>
                  <span className="chip"><span>{S.listFilter}</span> • {users.length}</span>
                </div>
                <div className="chat-list">
                  {users.map(u=>(
                    <div key={u.id} className="chat-item" onClick={()=> setCurrent(u)}>
                      <div className="avatar">{u.initial}</div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:700}}>
                          {u.name} <span style={{color:u.status==="online"?"#00e5ff":"#a0a9bd", fontSize:12}}>• {u.status}</span>
                        </div>
                        <div className="status">{u.last}</div>
                      </div>
                      <span className="chip">{u.age}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thread */}
              <div className="card">
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                  <div style={{display:"flex", gap:8, alignItems:"center"}}>
                    <div className="avatar">{current.initial}</div>
                    <div>
                      <div>{current.name}</div>
                      <div className="status">{current.status}</div>
                    </div>
                  </div>
                  <div style={{display:"flex", gap:8}}>
                    <button className="btn ghost" onClick={()=> setAnon(a=>!a)}>{anon ? S.anonOn : S.anonOff}</button>
                    <button className="btn ghost" onClick={()=> setSection("video")}>{lang==="ar"?"بدء فيديو":"Start video"}</button>
                  </div>
                </div>

                <div className="thread">
                  <div className="messages">
                    {messages.map((m, idx)=>(
                      <div key={idx} className="msg">
                        <div className="avatar">{m.initial}</div>
                        <div className="bubble">
                          <div className="meta">{m.meta}</div>
                          {m.text && <div>{m.text}</div>}
                          {m.voice && (
                            <div className="voice">
                              <div className="wave"></div>
                              <span className="chip">{m.voice}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="composer">
                    <input className="input" placeholder={lang==="ar"?"اكتب رسالة...":"Type a message..."} id="msgInputEl"/>
                    <button className="btn" onClick={()=>{
                      const el = document.getElementById("msgInputEl") as HTMLInputElement;
                      const txt = el.value.trim(); if(!txt) return;
                      const meLabel = lang==="ar" ? (anon?"مجهول":"أنت") : (anon?"Anonymous":"You");
                      const meInitial = anon ? "?" : "Y";
                      setMessages(prev=> [...prev, {initial: meInitial, meta: `${meLabel} • now`, text: txt} ]);
                      el.value = "";
                      setTimeout(()=>{
                        setMessages(prev=> [...prev, {initial: current.initial, meta: `${current.name} • now`, text: lang==="ar"?"تم تسجيل رسالتك في المعاينة. جرّب الصوت أو الفيديو أيضاً.":"Preview logged. Try voice or video too."} ]);
                      }, 700);
                    }}>{lang==="ar"?"إرسال":"Send"}</button>
                    <button className="btn ghost" onClick={()=> setMessages(prev=> [...prev, {initial: anon?"?":"Y", meta:`${lang==="ar"?(anon?"مجهول":"أنت"):"You"} • now`, voice:"0:06"} ])}>
                      {lang==="ar"?"تسجيل صوت":"Record voice"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Voice */}
        {section==="voice" && (
          <section className="card" id="voice">
            <h2>{S.voiceStudio}</h2>
            <p className="subtitle">{lang==="ar"?"سجّل ملاحظة صوتية سريعة":"Record a quick voice note preview"}</p>
            <div className="card">
              <div className="voice" style={{marginBottom:10}}>
                <span className="chip">REC</span>
                <div className="wave"></div>
                <span className="chip">00:12</span>
              </div>
              <div style={{display:"flex", gap:8}}>
                <button className="btn">{lang==="ar"?"بدء":"Start"}</button>
                <button className="btn ghost">{lang==="ar"?"إيقاف":"Stop"}</button>
                <button className="btn">{lang==="ar"?"إرسال":"Send"}</button>
              </div>
            </div>
          </section>
        )}

        {/* Video */}
        {section==="video" && (
          <section className="card" id="video">
            <h2>{S.videoSession}</h2>
            <p className="subtitle">{lang==="ar"?"بطاقات فيديو وجهًا لوجه":"Face-to-face preview tiles"}</p>
            <div className="tiles">
              <div className="video">{lang==="ar"?"الكاميرا مغلقة — أنت":"Camera OFF — You"}</div>
              <div className="video">{lang==="ar"?"الكاميرا مغلقة — "+current.name:"Camera OFF — "+current.name}</div>
            </div>
            <div style={{display:"flex", gap:8, marginTop:10}}>
              <button className="btn ghost">{lang==="ar"?"كتم الصوت":"Mute"}</button>
              <button className="btn ghost">{lang==="ar"?"الكاميرا":"Camera"}</button>
              <button className="btn ghost" onClick={()=> setSection("chat")}>{lang==="ar"?"إنهاء":"End"}</button>
            </div>
          </section>
        )}

        {/* Anonymous */}
        {section==="anon" && (
          <section className="card" id="anon">
            <h2>{S.anonymousMode}</h2>
            <p className="subtitle">{lang==="ar"?"اخفِ اسمك وأظهر حضورك فقط":"Hide your name. Show presence only"}</p>
            <div className="tiles">
              <div className="tile">{lang==="ar"?"الاسم → مجهول":"Name → Anonymous"}</div>
              <div className="tile">{lang==="ar"?"الصورة الرمزية → “?”":"Avatar → “?”"}</div>
              <div className="tile">{lang==="ar"?"الرسائل → مؤقتة":"Messages → ephemeral"}</div>
            </div>
          </section>
        )}

        {/* Matchmaking */}
        {section==="match" && (
          <section className="card" id="match">
            <h2>{S.matchmaking}</h2>
            <p className="subtitle">{lang==="ar"?"اختر هدفك وأجواءك":"Select your goal & vibe"}</p>
            <div className="tiles" style={{alignItems:"flex-start"}}>
              <div className="tile" style={{minWidth:260}}>
                <div style={{display:"grid", gap:6, marginBottom:10}}>
                  <label className="subtitle">{lang==="ar"?"الهدف":"Goal"}</label>
                  <select className="input" value={goal} onChange={e=> setGoal(e.target.value as any)}>
                    <option value="chat">{lang==="ar"?"دردشة":"Chat"}</option>
                    <option value="friendship">{lang==="ar"?"صداقة":"Friendship"}</option>
                    <option value="dating">{lang==="ar"?"مواعدة":"Dating"}</option>
                  </select>
                </div>
                <div style={{display:"grid", gap:6, marginBottom:10}}>
                  <label className="subtitle">{lang==="ar"?"الأجواء":"Vibe"}</label>
                  <select className="input" value={vibe} onChange={e=> setVibe(e.target.value as any)}>
                    <option value="chill">{lang==="ar"?"هادئ":"Chill"}</option>
                    <option value="creative">{lang==="ar"?"إبداعي":"Creative"}</option>
                    <option value="deep">{lang==="ar"?"حديث عميق":"Deep talk"}</option>
                  </select>
                </div>
                <button className="btn" onClick={()=>{
                  const pool = {
                    chat:{chill:["Aya","Joy"], creative:["Sara","Lina"], deep:["Noor","Shaivat"]},
                    friendship:{chill:["Lina","Sara"], creative:["Aya","Noor"], deep:["Joy","Aeny"]},
                    dating:{chill:["Joy","Aya"], creative:["Shaivat","Lina"], deep:["Sara","Noor"]}
                  } as const;
                  const picks = pool[goal][vibe];
                  setMatchText(
                    lang==="ar"
                      ? `مطابقة معاينة: ${picks[0]} • ${picks[1]} — وفقًا للهدف "${goal}" والأجواء "${vibe}".`
                      : `Preview match: ${picks[0]} • ${picks[1]} — based on "${goal}" & "${vibe}".`
                  );
                }}>{lang==="ar"?"معاينة مطابقة":"Preview match"}</button>
              </div>
              <div className="tile" style={{minHeight:140, display:"grid", alignContent:"start"}}>
                <strong>{lang==="ar"?"مقترح":"Suggested"}</strong>
                <div className="subtitle" style={{marginTop:8}}>{matchText}</div>
              </div>
            </div>
          </section>
        )}

        {/* Profile */}
        {section==="profile" && (
          <section className="card" id="profile">
            <h2>{S.profilePreview}</h2>
            <div className="tiles">
              <div className="tile">
                <div style={{display:"flex", gap:12, alignItems:"center"}}>
                  <div className="avatar">U</div>
                  <div>
                    <strong>Guest</strong>
                    <div className="status">{lang==="ar"?"اللغة":"Language"}: {lang.toUpperCase()}</div>
                  </div>
                </div>
              </div>
              <div className="tile">{lang==="ar"?"التفضيلات • التنبيهات • الفوترة (معاينة)":"Preferences • Notifications • Billing (preview)"}</div>
            </div>
          </section>
        )}

        {/* Notify */}
        {section==="notify" && (
          <section className="card" id="notify">
            <h2>{S.notifyTitle}</h2>
            <p className="subtitle">{S.notifySub}</p>
            <form onSubmit={(e)=>{e.preventDefault(); const v = emailRef.current?.value.trim(); if(!v){setNotifyMsg(S.notifyEnter); return;} setNotifyMsg(S.notifyThanks); if(emailRef.current) emailRef.current.value="";}} style={{display:"flex", gap:10, flexWrap:"wrap"}}>
              <input ref={emailRef} type="email" className="input" placeholder="you@example.com" required/>
              <button className="btn" type="submit">{S.notifyBtn}</button>
            </form>
            <p className="subtitle" style={{marginTop:10}}>{notifyMsg}</p>
          </section>
        )}
      </main>

      <footer>© {new Date().getFullYear()} VeXa — vexachat.world</footer>
    </div>
  );
}
