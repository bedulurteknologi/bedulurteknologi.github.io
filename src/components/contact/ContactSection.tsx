import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { contactPeople } from '../../data/contact';
import { Mail, MessageSquare, Send, CheckCircle, ArrowUpRight, Clock } from 'lucide-react';

import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceCategory: 'Custom Business Application',
    message: '',
  });

  const [recipient, setRecipient] = useState(contactPeople[0].email);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare mailto link with structured details
    const subject = encodeURIComponent(
      `[BTI Project Inquiry] ${formData.serviceCategory} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Interested: ${formData.serviceCategory}\n\nProject Scope & Operational Challenge:\n${formData.message}`
    );

    window.open(`mailto:${recipient}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#050505] overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Direct Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono-tech text-cyan-300 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Project Inquiries & Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Have a challenge <br />
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                worth solving?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Tell us what you are trying to build, improve, or automate. We will review your
              requirements, discuss architectural options, and outline a pragmatic path forward.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {contactPeople.map(person => (
                <div key={person.email} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
                  <h3 className="text-base font-semibold text-white">{person.name}</h3>
                  <a href={`mailto:${person.email}`} className="flex items-start gap-2 text-sm text-slate-300 hover:text-cyan-300 break-all"><Mail className="w-4 h-4 shrink-0 mt-0.5" />{person.email}</a>
                  <a href={person.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-300 hover:text-white"><MessageSquare className="w-4 h-4 shrink-0" />{person.whatsapp}<ArrowUpRight className="w-3 h-3" /></a>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] flex items-center gap-4 text-xs text-slate-400">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                Typically responding within 24 business hours with initial technical observations.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-6 p-7 sm:p-10 rounded-2xl md:rounded-3xl bg-[#0B0D12] border border-white/[0.08] shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
              Start a Conversation
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out your project goals. We treat all project details with confidentiality.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Email Draft Prepared</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Continue in your email app and press Send to submit your inquiry. If no email app opens, contact us using the email address shown here.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-recipient" className="block text-xs font-mono-tech text-slate-300 mb-1.5 uppercase tracking-wider">Contact person</label>
                  <select id="inquiry-recipient" value={recipient} onChange={e => setRecipient(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-[#0E1015] border border-white/10 text-white text-sm">
                    {contactPeople.map(person => <option key={person.email} value={person.email}>{person.name}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-mono-tech text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name / Organization *
                  </label>
                  <input
                    id="inquiry-name" name="name" autoComplete="name" type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / PT Sukses Bersama"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-mono-tech text-slate-300 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="inquiry-email" name="email" autoComplete="email" type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-service" className="block text-xs font-mono-tech text-slate-300 mb-1.5 uppercase tracking-wider">
                    Primary Domain / Capability Needed
                  </label>
                  <select id="inquiry-service" name="service"
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0E1015] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Custom Business Application">Custom Business Application (POS / ERP / Inventory)</option>
                    <option value="Mobile Application">Mobile Application (Flutter / Android)</option>
                    <option value="Web Platform & Portal">Web Platform & Corporate Portal</option>
                    <option value="Workflow & Process Automation">Workflow & Process Automation (Power Platform)</option>
                    <option value="IoT & Industrial Telemetry">IoT & Industrial Telemetry</option>
                    <option value="API & Systems Integration">API & Systems Integration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-mono-tech text-slate-300 mb-1.5 uppercase tracking-wider">
                    Describe What You're Building *
                  </label>
                  <textarea id="inquiry-message" name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your operational challenge, current bottlenecks, desired timeline, or system goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 hover:text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.15)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Prepare Inquiry Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <span className="block text-[11px] font-mono-tech text-slate-400 text-center mt-2.5">
                    Opens your email app with a draft. You send it from there.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

