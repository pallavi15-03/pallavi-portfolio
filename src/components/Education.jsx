import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#090d19]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full mt-4"></div>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            Undergraduate academic journey in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 mb-2">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {education.degree}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-indigo-400 mt-1">
                    Specialization: {education.specialization}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 text-sm mt-2">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{education.college}</span>
                  </div>
                </div>
              </div>

              {/* Badges / Duration */}
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-slate-200">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{education.batch}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Expected Graduation: 2028</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Academic Highlights & Coursework */}
            <div className="pt-8">
              <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Academic Focus & Coursework Highlights</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {education.highlights.map((point, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Subjects Tag Strip */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold mr-2">Key Subjects:</span>
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Structures & Algorithms",
                "Object-Oriented Programming (C++)",
                "Python Programming",
                "Web Technologies"
              ].map((subject) => (
                <span
                  key={subject}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                >
                  {subject}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
