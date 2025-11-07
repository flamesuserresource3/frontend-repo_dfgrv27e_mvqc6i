import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Profile({ user, onUpdate, onMatches }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    college: user?.college || '',
    skills: user?.skills || '',
    interests: user?.interests || '',
  });

  const handleSave = () => {
    onUpdate?.(form);
    setOpen(false);
  };

  return (
    <div className="pt-28 pb-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-white">
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
        <div className="flex items-center gap-4">
          <img src={`https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(form.name || 'student')}`} alt="avatar" className="h-20 w-20 rounded-xl border border-white/20 bg-white/20" />
          <div>
            <div className="text-xl font-semibold">{form.name || 'Student'}</div>
            <div className="text-white/80">{form.college || 'Your College'}</div>
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/10 p-4 border border-white/20"><div className="text-white/70 text-sm">Skills</div><div className="mt-1">{form.skills || '—'}</div></div>
          <div className="rounded-xl bg-white/10 p-4 border border-white/20"><div className="text-white/70 text-sm">Interests</div><div className="mt-1">{form.interests || '—'}</div></div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={()=>setOpen(true)} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl px-6 py-3">Edit Profile</button>
          <button onClick={onMatches} className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 hover:bg-white/20">View My Matches</button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <motion.div initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.95,opacity:0}} className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur text-white">
              <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
              <div className="space-y-3">
                <input value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 ring-purple-500" />
                <input value={form.college} onChange={(e)=>setForm({...form,college:e.target.value})} placeholder="College" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 ring-purple-500" />
                <input value={form.skills} onChange={(e)=>setForm({...form,skills:e.target.value})} placeholder="Skills" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 ring-purple-500" />
                <input value={form.interests} onChange={(e)=>setForm({...form,interests:e.target.value})} placeholder="Interests" className="w-full rounded-xl bg-white/10 px-4 py-3 placeholder-white/60 outline-none focus:ring-2 ring-purple-500" />
              </div>
              <div className="mt-5 flex justify-end gap-2">
                <button onClick={()=>setOpen(false)} className="rounded-xl px-4 py-2 bg-white/10 border border-white/20">Cancel</button>
                <button onClick={handleSave} className="rounded-xl px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600">Save</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
