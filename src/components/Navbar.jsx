import React from 'react';
import { Moon, Sun, Home, Users, Calendar, User, LogOut, LogIn } from 'lucide-react';

function ToggleButton({ dark, onToggle }) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur hover:bg-white/20 transition"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:block">{dark ? 'Light' : 'Dark'}</span>
    </button>
  );
}

export default function Navbar({ isAuthed, onNav, current, onLogout, dark, onToggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 shadow ring-1 ring-white/40" />
            <span className="font-semibold text-white tracking-wide">Campus Connect</span>
          </div>
          <div className="flex items-center gap-2">
            {isAuthed ? (
              <div className="hidden md:flex items-center gap-1 mr-2">
                <button onClick={() => onNav('dashboard')} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition ${current==='dashboard' ? 'bg-white/10 text-white' : ''}`}>
                  <Home size={18}/> <span>Home</span>
                </button>
                <button onClick={() => onNav('connections')} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition ${current==='connections' ? 'bg-white/10 text-white' : ''}`}>
                  <Users size={18}/> <span>Connections</span>
                </button>
                <button onClick={() => onNav('events')} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition ${current==='events' ? 'bg-white/10 text-white' : ''}`}>
                  <Calendar size={18}/> <span>Events</span>
                </button>
                <button onClick={() => onNav('profile')} className={`flex items-center gap-2 rounded-xl px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition ${current==='profile' ? 'bg-white/10 text-white' : ''}`}>
                  <User size={18}/> <span>Profile</span>
                </button>
              </div>
            ) : null}
            <ToggleButton dark={dark} onToggle={onToggleTheme} />
            {isAuthed ? (
              <button onClick={onLogout} className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition">
                <LogOut size={18}/> Logout
              </button>
            ) : (
              <button onClick={() => onNav('login')} className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition">
                <LogIn size={18}/> Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
