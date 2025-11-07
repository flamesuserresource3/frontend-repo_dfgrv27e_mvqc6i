import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Auth({ mode='login', onSubmit, switchMode }) {
  const [form, setForm] = useState({
    name: '', college: '', year: '', skills: '', interests: '', email: '', password: '',
  });

  const isSignup = mode === 'signup';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form, mode);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="w-full max-w-md">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl text-white shadow-xl">
          <h2 className="text-2xl font-semibold mb-1">{isSignup ? 'Create your account' : 'Welcome back'}</h2>
          <p className="text-white/80 mb-6">{isSignup ? 'Join Campus Connect' : 'Login to continue'}</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <AnimatePresence initial={false}>
              {isSignup && (
                <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="grid grid-cols-1 gap-3">
                  <input name="name" onChange={handleChange} placeholder="Name" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
                  <input name="college" onChange={handleChange} placeholder="College" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
                  <div className="grid grid-cols-2 gap-3">
                    <input name="year" onChange={handleChange} placeholder="Year" className="rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
                    <input name="skills" onChange={handleChange} placeholder="Skills (comma separated)" className="rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
                  </div>
                  <input name="interests" onChange={handleChange} placeholder="Interests" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
                </motion.div>
              )}
            </AnimatePresence>
            <input type="email" name="email" onChange={handleChange} placeholder="Email" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 text-white outline-none focus:ring-2 ring-purple-500" />
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl px-6 py-3 shadow-lg shadow-indigo-500/30 hover:shadow-purple-600/30 transition">
              {isSignup ? 'Sign Up' : 'Login'}
            </button>
          </form>
          <div className="mt-4 text-sm">
            {isSignup ? (
              <button onClick={() => switchMode('login')} className="text-white/80 hover:text-white underline">Already have an account? Login</button>
            ) : (
              <button onClick={() => switchMode('signup')} className="text-white/80 hover:text-white underline">New here? Create an account</button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
