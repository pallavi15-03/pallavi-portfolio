import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MessageSquare,
  Sparkles,
  Copy,
  Check,
  Building,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    purpose: 'Academic Collaboration',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        purpose: 'Academic Collaboration',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090d19]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full mt-4"></div>
          <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg">
            Feel free to reach out for hackathon collaborations, technical discussions, project inquiries, or mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Student Status Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-sm font-semibold text-white">Academic Status & Availability</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Currently pursuing B.Tech in Artificial Intelligence & Machine Learning (2024–2028). Open to learning opportunities, technical hackathons, and student internships.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs text-cyan-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Quick Response: Usually within 24 hours</span>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-5">
              
              {/* Email with editable indicator */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 font-medium">Email Address</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                        Editable Placeholder
                      </span>
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* College / Institution */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">College</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {personal.college}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-white">
                    {personal.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Buttons (GitHub & LinkedIn) */}
            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Connect on GitHub & LinkedIn
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all hover:border-cyan-400/40"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all hover:border-cyan-400/40"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 relative shadow-2xl">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Have a question or want to collaborate? Fill out the message form below.
              </p>

              {/* Success Alert */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-300">Message Transmitted!</h4>
                    <p className="text-xs text-emerald-200 mt-1">
                      Thank you for contacting me. Your message has been simulated successfully and I'll respond as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-cyan-400 underline mt-2 hover:text-cyan-300 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <p className="text-xs sm:text-sm text-rose-300 font-medium">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-2">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#070b15] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-2">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#070b15] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Purpose */}
                  <div>
                    <label htmlFor="purpose" className="block text-xs font-medium text-slate-300 mb-2">
                      Purpose of Contact
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#070b15] border border-white/10 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors cursor-pointer"
                    >
                      <option value="Academic Collaboration">Academic Collaboration</option>
                      <option value="Hackathon Team Building">Hackathon Team Building</option>
                      <option value="Project Feedback / Discussion">Project Feedback / Discussion</option>
                      <option value="Internship / Learning Opportunity">Internship / Learning Opportunity</option>
                      <option value="General Networking">General Networking</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. AI Project Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-[#070b15] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-2">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070b15] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
