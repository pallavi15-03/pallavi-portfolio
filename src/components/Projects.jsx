import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Info,
  X,
  CheckCircle2,
  Brain,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getProjectIcon = (title) => {
    if (title.includes('NetraAI')) {
      return <Brain className="w-4 h-4 text-cyan-400" />;
    } else if (title.includes('Crypto')) {
      return <ShieldAlert className="w-4 h-4 text-indigo-400" />;
    } else {
      return <Compass className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070a13]">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Academic & Technical Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full mt-4"></div>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            Practical projects exploring artificial intelligence, machine learning anomaly detection, and multilingual educational guidance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-black/40"
            >
              <div>
                {/* Project Image & Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/50 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#070a13]/85 backdrop-blur-md text-cyan-300 border border-white/10 flex items-center gap-1.5">
                    {getProjectIcon(project.title)}
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-cyan-400 font-semibold mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Core Scope / Objective Tag (Genuine, no fake metrics) */}
                  <div className="mb-4 text-xs font-mono px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    <span className="text-cyan-400 font-semibold">Scope:</span> {project.focusArea}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors py-1.5 cursor-pointer"
                >
                  <Info className="w-4 h-4 text-cyan-400" />
                  <span>Project Overview</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View ${project.title} code repository`}
                  >
                    <GithubIcon className="w-4 h-4 text-indigo-400" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600/90 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#0b1120] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
                {activeModalProject.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-slate-400 text-sm mb-5">{activeModalProject.subtitle}</p>

              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-56 object-cover rounded-xl mb-6 border border-white/10"
              />

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Problem Addressed
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activeModalProject.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    Solution & Technical Concept
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activeModalProject.caseStudy.solution}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-sm">
                  <span className="text-cyan-400 font-semibold">Technologies Utilized:</span>{' '}
                  <span className="text-slate-200">{activeModalProject.caseStudy.techStack}</span>
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Key Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 text-xs font-mono border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
