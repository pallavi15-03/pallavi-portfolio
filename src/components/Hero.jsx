import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Brain, 
  Send,
  Building,
  Calendar,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

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
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / College Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>{personal.college}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm <span className="text-gradient-primary">{personal.name}</span>.
            </h1>

            {/* Subtitle */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                {personal.role}
              </span>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Undergraduate Computer Science student specializing in Artificial Intelligence and Machine Learning (2024–2028). Passionate about software development, intelligent algorithms, and logical problem-solving. Constantly learning modern frameworks and engineering projects with measurable real-world utility.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Social Connect Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Social Profiles:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/30 transition-all text-xs font-medium"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400/30 transition-all text-xs font-medium"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Student Code & Academic Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-white/10">
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    student.profile.json
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">B.Tech AIML</div>
                </div>

                {/* Code Snapshot */}
                <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed bg-[#070b15] p-4 rounded-xl border border-white/5">
                  <p className="text-slate-500">{"// Academic & Technical Profile"}</p>
                  <p>
                    <span className="text-indigo-400 font-semibold">const</span>{" "}
                    <span className="text-cyan-300">student</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">"{personal.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">specialization:</span>{" "}
                    <span className="text-emerald-300">"Artificial Intelligence & ML"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">college:</span>{" "}
                    <span className="text-cyan-300">"GGITS, Jabalpur"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">batch:</span>{" "}
                    <span className="text-amber-300">"2024 – 2028"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">skills:</span>{" "}
                    <span className="text-indigo-300">["Python", "C++", "AI", "ML", "Web"]</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">mindset:</span>{" "}
                    <span className="text-emerald-300">"Continuous learning & teamwork"</span>
                  </p>
                  <p>{"};"}</p>
                  <p className="text-cyan-400 pt-2 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Focus:{" "}
                    <span className="text-slate-200 font-medium">Software Dev & Intelligent Systems</span>
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">AI & Machine Learning</div>
                      <div className="text-[11px] text-slate-400">Core Specialization</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition-colors">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Problem Solving</div>
                      <div className="text-[11px] text-slate-400">C++ & Python</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Decorative Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0e172a] border border-cyan-500/40 rounded-xl px-4 py-3 shadow-xl items-center gap-3 animate-float">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                <div className="text-xs font-medium text-slate-200">
                  <span className="font-bold text-white">B.Tech AIML</span> • 2024–2028
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Academic & Profile Highlights Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              B.Tech (AIML)
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Undergraduate Degree</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
              2024 – 2028
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Academic Duration</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 tracking-tight">
              GGITS
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Jabalpur, Madhya Pradesh</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
              3 Projects
            </span>
            <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">AI, ML & Web Solutions</span>
          </div>
        </div>

      </div>
    </section>
  );
}
