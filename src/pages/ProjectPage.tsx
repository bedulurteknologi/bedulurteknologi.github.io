import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { Container } from '../components/ui/Container';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ArrowLeft, ArrowRight, CheckCircle2, Terminal, Layers, ShieldCheck } from 'lucide-react';

export const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();


  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          The requested case study could not be located in our portfolio index.
        </p>
        <Button variant="primary" href="/#work">
          Return to Portfolio
        </Button>
      </div>
    );
  }

  // Calculate next project
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32 bg-[#050505] min-h-screen">
      {/* Top back navigation */}
      <Container size="wide" className="mb-10">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-slate-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Selected Work</span>
        </Link>
      </Container>

      {/* Hero section */}
      <Container size="wide">
        <div className="max-w-4xl space-y-6 mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-semibold">
              {project.category}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono-tech text-slate-400">Deployed {project.year}</span>
            {project.clientType && (
              <>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono-tech text-slate-400">{project.clientType}</span>
              </>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            {project.name}
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-normal leading-relaxed">
            {project.headline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="cyan" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Large Hero Mockup in Browser Frame */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0A0C10] overflow-hidden shadow-2xl mb-20 sm:mb-28">
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0E1118] border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="text-xs font-mono-tech text-slate-400">
              bti://architecture/{project.slug}/primary-overview
            </div>
            <div className="w-12 text-right">
              <span className="text-[10px] font-mono-tech text-emerald-400">PORTFOLIO</span>
            </div>
          </div>
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full max-h-[760px] object-contain bg-[#101419]"
          />
        </div>

        <p className="text-xs text-slate-500 -mt-16 mb-16">{project.visualNote}</p>
        {/* Structured Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 sm:mb-28">
          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest font-semibold">
                <Terminal className="w-4 h-4" />
                <span>Executive Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                System Context & Objectives
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* The Challenge */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <span className="text-xs font-mono-tech text-red-400 uppercase tracking-widest block font-semibold">
                Operational Problem & Friction
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                The Challenge
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-7 sm:p-8 rounded-2xl bg-cyan-500/[0.03] border border-cyan-500/20 space-y-4">
              <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest block font-semibold">
                Engineered Solution
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                How We Designed & Built It
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Qualitative Result & Impact */}
            {project.impact && project.impact.length > 0 && (
              <div className="space-y-4">
                <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-widest block font-semibold">
                  Validated Impact
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Operational Results
                </h3>
                <ul className="space-y-3 pt-2">
                  {project.impact.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Features & Tech Breakdown */}
          <div className="lg:col-span-5 space-y-8">
            {/* Key Capabilities Grid */}
            <div className="p-7 rounded-2xl bg-[#090B10] border border-white/[0.08] space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Key Capabilities
                </h3>
              </div>
              <ul className="space-y-3">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Details */}
            <div className="p-7 rounded-2xl bg-[#090B10] border border-white/[0.08] space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Technology Specifications
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono-tech text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire about similar project CTA */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-indigo-950/20 border border-cyan-500/25 space-y-4">
              <h4 className="text-base font-bold text-white">Need a similar solution?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We can architect and deploy a custom system tailored to your specific organizational constraints.
              </p>
              <Button
                variant="primary"
                size="md"
                href="/#contact"
                className="w-full"
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-24 space-y-8">
            <div className="border-t border-white/[0.07] pt-12">
              <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest block mb-2 font-semibold">
                Visual Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Project Visuals
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((imgSrc, gIdx) => (
                <div
                  key={gIdx}
                  className="rounded-2xl border border-white/[0.08] bg-[#0A0C10] overflow-hidden shadow-xl"
                >
                  <div className="px-4 py-2.5 bg-[#0D1017] border-b border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono-tech text-slate-400">
                      Module View // 0{gIdx + 1}
                    </span>
                    <span className="text-[10px] font-mono-tech text-cyan-400">PROJECT VISUAL</span>
                  </div>
                  <a href={imgSrc} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} visual ${gIdx + 1} at full size`} className="block focus-visible:outline-2 focus-visible:outline-cyan-300">
                  <img
                    src={imgSrc}
                    alt={`${project.name} interface view ${gIdx + 1}`}
                    loading="lazy"
                    className="w-full max-h-[760px] object-contain bg-[#101419]"
                  />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Project Interactive Jump */}
        <div className="border-t border-white/[0.08] pt-16">
          <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 block mb-4">
            Next Case Study
          </span>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group block p-8 sm:p-12 rounded-3xl bg-[#090B10] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#0E1117] transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <span className="text-xs font-mono-tech uppercase text-cyan-400">
                  {nextProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {nextProject.name}
                </h3>
                <p className="text-sm text-slate-400 max-w-xl">
                  {nextProject.headline}
                </p>
              </div>

              <div className="flex items-center gap-3 text-cyan-400 font-semibold text-sm shrink-0">
                <span>View Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </article>
  );
};

