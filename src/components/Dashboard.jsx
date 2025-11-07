import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, GraduationCap, Calendar } from 'lucide-react';

const Section = ({ title, children }) => (
  <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
);

const Card = ({ title, subtitle, actionLabel }) => (
  <motion.div whileHover={{y:-4, scale:1.02}} className="rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur hover:bg-white/15 transition">
    <div className="text-sm text-white/70">{subtitle}</div>
    <div className="mt-1 font-semibold">{title}</div>
    <button className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-2 text-sm">{actionLabel}</button>
  </motion.div>
);

export default function Dashboard({ user }) {
  const teammates = [
    {title:'Aarav – MERN Dev', subtitle:'CSE • 3rd Year'},
    {title:'Meera – UI/UX', subtitle:'Design • 2nd Year'},
    {title:'Rohit – ML', subtitle:'ECE • 4th Year'},
  ];
  const mentors = [
    {title:'Ananya – SDE @Startup', subtitle:'Alumni'},
    {title:'Vikram – GSoC', subtitle:'Final Year'},
  ];
  const events = [
    {title:'Campus Hack 2025', subtitle:'Apr 18 • 24h'},
    {title:'Figma Jam', subtitle:'May 02 • Workshop'},
    {title:'AI Study Group', subtitle:'Weekly • Wed'},
  ];

  return (
    <div className="pt-28 pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-2xl sm:text-3xl font-bold text-white mb-6">
        Hey {user?.name || 'there'}, let’s find your next project partner!
      </motion.h2>

      <div className="grid gap-6">
        <Section title={<span className="inline-flex items-center gap-2"><UserPlus size={18}/> Teammates</span>}>
          {teammates.map((t)=> (
            <Card key={t.title} title={t.title} subtitle={t.subtitle} actionLabel="Connect" />
          ))}
        </Section>
        <Section title={<span className="inline-flex items-center gap-2"><GraduationCap size={18}/> Mentors</span>}>
          {mentors.map((t)=> (
            <Card key={t.title} title={t.title} subtitle={t.subtitle} actionLabel="Request" />
          ))}
        </Section>
        <Section title={<span className="inline-flex items-center gap-2"><Calendar size={18}/> Events</span>}>
          {events.map((t)=> (
            <Card key={t.title} title={t.title} subtitle={t.subtitle} actionLabel="Join" />
          ))}
        </Section>
      </div>
    </div>
  );
}
