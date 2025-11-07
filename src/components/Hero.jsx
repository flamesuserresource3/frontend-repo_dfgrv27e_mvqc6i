import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onLogin, onSignup }) {
  return (
    <section className="relative pt-28 pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-sky-500/30 blur-3xl" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Connect. Collaborate. Conquer Campus.
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-6 text-lg text-white/90 max-w-xl">
              AI-powered platform to find teammates, mentors & opportunities.
            </motion.p>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={onLogin} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl px-6 py-3 shadow-lg shadow-indigo-500/30 hover:shadow-purple-600/30 transition">
                Login
              </button>
              <button onClick={onSignup} className="bg-white/10 text-white rounded-xl px-6 py-3 backdrop-blur border border-white/20 hover:bg-white/20 transition">
                Sign Up
              </button>
            </motion.div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {title:'Find Teammates',desc:'Discover peers with complementary skills.'},
                {title:'Get Mentorship',desc:'Connect with seniors and alumni.'},
                {title:'Join Events',desc:'Never miss hackathons and workshops.'},
              ].map((f)=> (
                <div key={f.title} className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur hover:bg-white/15 transition">
                  <div className="text-base font-semibold">{f.title}</div>
                  <div className="mt-1 text-sm text-white/80">{f.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-sky-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
