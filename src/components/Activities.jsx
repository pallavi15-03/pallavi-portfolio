import React from 'react';
import { 
  Users, 
  Trophy, 
  HeartHandshake, 
  Terminal, 
  Award, 
  Sparkles, 
  Calendar,
  CheckCircle2,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Activities() {
  const { activities } = portfolioData;

  const getActivityIcon = (category) => {
    switch (category) {
      case 'Technical Community':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Hackathons':
        return <Trophy className="w-5 h-5 text-indigo-400" />;
      case 'Volunteering':
        return <HeartHandshake className="w-5 h-5 text-blue-400" />;
      case 'Self-Development':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-[#070a13]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Extracurricular & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience & Activities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 rounded-full mt-4"></div>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            Active campus involvement spanning technical societies, team hackathons, college event volunteering, and collaborative development.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div>
                {/* Header row with icon and category badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    {getActivityIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs text-indigo-400 font-semibold mb-1">
                  {item.category}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-400 mb-3 font-medium">
                  {item.organization}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Active Student Engagement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
