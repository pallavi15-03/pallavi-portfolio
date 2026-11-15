import React from 'react';
import { 
  User, 
  Brain, 
  Code, 
  Sparkles, 
  Users, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  const valueIcons = [
    <Brain className="w-5 h-5 text-cyan-400" />,
    <Code className="w-5 h-5 text-indigo-400" />,
    <Sparkles className="w-5 h-5 text-blue-400" />,
    <Users className="w-5 h-5 text-emerald-400" />
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070a13]">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 rounded-full mt-4"></div>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            {about.headline}
          </p>
        </div>

        {/* Narrative & Focus Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl relative border border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>B.Tech AIML (2024–2028)</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Engineering Student Specializing in Artificial Intelligence & Machine Learning
              </h3>

              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400">Name:</span>{' '}
                  <span className="text-slate-200 font-semibold">{personal.name}</span>
                </div>
                <div>
                  <span className="text-slate-400">Institution:</span>{' '}
                  <span className="text-slate-200 font-semibold">GGITS, Jabalpur</span>
                </div>
                <div>
                  <span className="text-slate-400">Degree:</span>{' '}
                  <span className="text-slate-200 font-semibold">B.Tech (AIML)</span>
                </div>
                <div>
                  <span className="text-slate-400">Duration:</span>{' '}
                  <span className="text-cyan-400 font-semibold">2024 – 2028</span>
                </div>
              </div>

              <div className="mt-6 pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollTo('education')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/30 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Education Details</span>
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.highlights.map((item, index) => (
              <div 
                key={item.title}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between border border-white/10"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 mb-4">
                    {valueIcons[index % valueIcons.length]}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Core Interest Area</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
