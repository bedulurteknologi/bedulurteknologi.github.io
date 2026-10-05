import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { siteConfig } from '../../data/site';
import { contactConfig, contactPeople } from '../../data/contact';
import { ArrowUpRight, HeartHandshake, Shield } from 'lucide-react';


export const AboutBti: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#07080a] border-t border-white/[0.06]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Conceptual Bedulur Meaning */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="The Story Behind BTI"
              title="Technology with a"
              highlight="Human Approach."
              description="The name 'Bedulur' reflects an ethos of genuine partnership, brotherhood, and collective problem-solving."
            />

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-sans">
              <p>
                BTI was built together by Dwi Hardianto and Imam Novtiananda. We lead as one team,
                bringing our individual strengths to shared decisions and practical solutions.
                Our partnership is rooted in trust, collaboration, and an understanding of the
                people who use the systems we build.
              </p>
              <p>
                Bedulur Teknologi Indonesia combines hands-on software engineering, business
                information architecture, process automation, and hardware infrastructure
                expertise into a focused, highly agile digital engineering partner.
              </p>
              <p className="text-slate-400">
                Whether you need a dedicated business tool to replace spreadsheet fragility or an
                integrated mobile and IoT telemetry platform, we approach each system as an
                operational asset built to endure.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2 text-cyan-400">
                  <HeartHandshake className="w-5 h-5" />
                  <span className="font-semibold text-white text-sm">Consultative Partnership</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We engage deeply with your operational workflows rather than blindly building tickets.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2 text-sky-400">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold text-white text-sm">Engineered For Longevity</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Clean code, standard conventions, and robust documentation your business truly owns.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile & Links */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#0B0D12] border border-white/[0.08] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <span className="text-[11px] font-mono-tech uppercase tracking-widest text-cyan-400 block">
                ONE TEAM. SHARED LEADERSHIP.
              </span>

              <p className="text-sm text-slate-400 leading-relaxed">Two co-founders. Equal leadership. Complementary expertise, working together from the first conversation to delivery.</p>
              <div className="space-y-5">
                {siteConfig.founders.map(founder => (
                  <div key={founder.name} className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                    <h3 className="text-xl font-bold text-white tracking-tight">{founder.name}</h3>
                    <p className="text-xs font-mono-tech text-cyan-300 mt-2">{founder.role}</p>
                    <p className="text-sm text-slate-300 leading-relaxed mt-4">{founder.bio}</p>
                    <a href={`mailto:${contactPeople.find(person => person.name === founder.name)?.email}`} className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300 mt-4">Contact {founder.name.split(' ')[0]}<ArrowUpRight className="w-3.5 h-3.5" /></a>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono-tech uppercase text-slate-400 tracking-wider block mb-3">
                  Professional Channels
                </span>

                <div className="flex flex-col gap-2">
                  <a
                    href={contactConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all group"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href={contactConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all group"
                  >
                    <span>BTI on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href={contactConfig.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all group"
                  >
                    <span>Upwork</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
