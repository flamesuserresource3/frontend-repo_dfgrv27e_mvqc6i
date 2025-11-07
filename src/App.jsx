import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Footer from './components/Footer';

function GradientBackground({ dark }) {
  return (
    <div className={`fixed inset-0 -z-0 transition-colors duration-500 ${dark ? 'bg-slate-950' : 'bg-slate-900'}`} aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-sky-600 opacity-60" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(ellipse at top left, rgba(255,255,255,0.12), transparent 40%), radial-gradient(ellipse at bottom right, rgba(0,0,0,0.3), transparent 40%)'
      }} />
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState('landing');
  const [dark, setDark] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const handleAuth = (data, mode) => {
    // Placeholder auth flow – in real app, call backend JWT endpoints
    if (mode === 'signup') {
      setUser({ name: data.name || 'Student', college: data.college, skills: data.skills, interests: data.interests });
    } else {
      setUser({ name: 'Student', college: 'Your College', skills: 'JS, React', interests: 'AI, Hackathons' });
    }
    setRoute('dashboard');
  };

  const page = useMemo(() => {
    switch (route) {
      case 'landing':
        return (
          <>
            <Hero onLogin={() => setRoute('login')} onSignup={() => setRoute('signup')} />
            <Footer />
          </>
        );
      case 'login':
        return <Auth mode="login" onSubmit={handleAuth} switchMode={setRoute} />;
      case 'signup':
        return <Auth mode="signup" onSubmit={handleAuth} switchMode={setRoute} />;
      case 'dashboard':
        return <Dashboard user={user} />;
      case 'profile':
        return <Profile user={user} onUpdate={(u)=>setUser(u)} onMatches={() => alert('Fetching AI matches...')} />;
      default:
        return null;
    }
  }, [route, user]);

  return (
    <div className="min-h-screen text-white selection:bg-purple-500/40">
      <GradientBackground dark={dark} />
      <Navbar
        isAuthed={!!user}
        current={route}
        onNav={setRoute}
        onLogout={() => { setUser(null); setRoute('landing'); }}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={route}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          {page}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
