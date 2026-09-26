import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Get in Touch
              </span>
              <h3 className="font-display text-3xl font-bold text-white leading-tight">
                Quran Education Academy
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have questions about our syllabus, tutors, or class timings? Our team is available to assist you.
              </p>

              <div className="space-y-4 pt-4 text-xs">
                <a
                  href="https://wa.me/923187779954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block font-semibold">WhatsApp &amp; Call</span>
                    <span className="text-xs text-emerald-300">03187779954 (24/7 Available)</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10">
                  <Phone className="w-5 h-5 text-emerald-300 shrink-0" />
                  <div>
                    <span className="block font-semibold">Contact No</span>
                    <span className="text-xs text-slate-200">03187779954</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10">
                  <Mail className="w-5 h-5 text-emerald-300 shrink-0" />
                  <div>
                    <span className="block font-semibold">Email</span>
                    <span className="text-xs text-slate-200">quraaneducationacademy@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10">
                  <Clock className="w-5 h-5 text-emerald-300 shrink-0" />
                  <div>
                    <span className="block font-semibold">Class Scheduling</span>
                    <span className="text-xs text-slate-300">Flexible 24/7 Worldwide Timezones</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
              Personalized 1-on-1 Quran Lessons For All Ages
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Send an Inquiry Message
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill out the form below and we will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-emerald-950 text-sm">Message Sent Successfully!</h5>
                <p className="text-xs text-emerald-800">
                  JazakAllah Khair for contacting us. We will get back to you very soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Khan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="03187779954"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="quraaneducationacademy@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you regarding Quran classes or schedule?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
