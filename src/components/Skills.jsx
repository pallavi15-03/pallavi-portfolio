import React from 'react';
import { 
  Code2, 
  Cpu, 
  Brain, 
  Sparkles, 
  Globe, 
  FileCode, 
  GitBranch, 
  Layers, 
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const getSkillIcon = (name) => {
    switch (name) {
      case 'Python':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'C++':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Artificial Intelligence':
        return <Brain className="w-6 h-6 text-indigo-400" />;
      case 'Machine Learning':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'HTML':
        return <Globe className="w-6 h-6 text-amber-400" />;
      case 'JavaScript':
        return <FileCode className="w-6 h-6 text-yellow-400" />;
      case 'Git & GitHub':
        return <GitBranch className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090d19]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-4"></div>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            Core programming languages, AI/ML domains, web technologies, and developer tooling studied and utilized in projects and coursework.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    {skill.badge}
                  </span>
                </div>

                <div className="text-xs text-cyan-400 font-medium mb-1">
                  {skill.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Skill
                </span>
                <span className="font-mono text-slate-400">B.Tech AIML</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Focus Summary Strip */}
        <div className="mt-14 glass-card p-6 sm:p-8 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">AI & Machine Learning</h4>
              <p className="text-xs text-slate-300">Document intelligence, anomaly identification, and predictive modeling</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                <Terminal className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">Core Programming</h4>
              <p className="text-xs text-slate-300">Problem-solving, algorithmic thinking, and clean code in Python and C++</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <GitBranch className="w-6 h-6" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">Version Control & Web</h4>
              <p className="text-xs text-slate-300">Interactive web UIs with HTML/JavaScript and collaborative Git workflows</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
