import React, { useState } from 'react';
import { BookOpen, CheckCircle, ShieldCheck, MessageCircle, Mail } from 'lucide-react';
import { COURSES_DATA } from '../data/academyData';

export const AdmissionPage: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('noorani-qaida');
  const [tutorGender, setTutorGender] = useState<'female' | 'male' | 'any'>('any');
  const [preferredTime, setPreferredTime] = useState('evening');
  const [timezone, setTimezone] = useState('PKT (Pakistan Standard Time)');
  const [notes, setNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [admissionId, setAdmissionId] = useState('');
  const [submissionMethod, setSubmissionMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  const saveAdmission = () => {
    const id = `QEA-${Math.floor(10000 + Math.random() * 90000)}`;
    setAdmissionId(id);

    const admissionData = {
      id,
      studentName,
      studentAge,
      parentName,
      phone,
      email,
      course: selectedCourse,
      tutorGender,
      preferredTime,
      timezone,
      notes,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('qea_admissions') || '[]');
      existing.push(admissionData);
      localStorage.setItem('qea_admissions', JSON.stringify(existing));
    } catch (err) {
      console.error('Storage error:', err);
    }

    return id;
  };

  const getWhatsAppUrl = (refId: string) => {
    const courseObj = COURSES_DATA.find(c => c.id === selectedCourse);
    const courseTitle = courseObj ? courseObj.title : selectedCourse;
    const message = encodeURIComponent(
      `Assalamu Alaikum Quran Education Academy!\n\n` +
      `*New Admission Form Submission*\n` +
      `Ref ID: ${refId}\n` +
      `Student Name: ${studentName}\n` +
      `Age: ${studentAge}\n` +
      (parentName ? `Parent Name: ${parentName}\n` : '') +
      `Contact Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Course: ${courseTitle}\n` +
      `Tutor Preference: ${tutorGender.toUpperCase()}\n` +
      `Timezone: ${timezone}\n` +
      `Preferred Slot: ${preferredTime}\n` +
      (notes ? `Notes: ${notes}\n` : '') +
      `\nPlease confirm admission schedule. JazakAllah Khair!`
    );
    return `https://wa.me/923187779954?text=${message}`;
  };

  const getMailtoUrl = (refId: string) => {
    const courseObj = COURSES_DATA.find(c => c.id === selectedCourse);
    const courseTitle = courseObj ? courseObj.title : selectedCourse;
    const subject = encodeURIComponent(`Online Admission Form - ${studentName} (${refId})`);
    const body = encodeURIComponent(
      `Assalamu Alaikum Quran Education Academy,\n\n` +
      `I have submitted an online admission form on the website.\n\n` +
      `Admission Ref ID: ${refId}\n` +
      `Student Name: ${studentName}\n` +
      `Student Age: ${studentAge}\n` +
      (parentName ? `Parent/Guardian: ${parentName}\n` : '') +
      `Contact No / WhatsApp: ${phone}\n` +
      `Student Email: ${email}\n` +
      `Selected Course: ${courseTitle}\n` +
      `Tutor Preference: ${tutorGender}\n` +
      `Preferred Timing: ${preferredTime}\n` +
      `Timezone: ${timezone}\n` +
      (notes ? `Additional Notes: ${notes}\n\n` : '\n') +
      `Please contact us to finalize class schedule.\n\n` +
      `Thank you,\n${studentName}`
    );
    return `mailto:quraaneducationacademy@gmail.com?subject=${subject}&body=${body}`;
  };

  // Submit and open in WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = saveAdmission();
    setSubmissionMethod('whatsapp');
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Open WhatsApp in a new tab
    const url = getWhatsAppUrl(id);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Send via Email
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = saveAdmission();
    setSubmissionMethod('email');
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger user's mail client
    const mailto = getMailtoUrl(id);
    window.location.href = mailto;
  };

  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Heading: Dark Green requested by user */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Al-Azhar & Wifaq Certified Faculty</span>
          </div>
          
          {/* Heading with prominent dark green color */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#064e3b] tracking-tight">
            Online Admission Form
          </h1>

          <p className="text-sm text-slate-600">
            Register yourself or your child for 1-on-1 personalized Quran learning. Our academic coordinator will contact you promptly.
          </p>
        </div>

        {/* Admission Form Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          {!isSubmitted ? (
            <form className="space-y-6 text-xs sm:text-sm">
              
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-800" />
                  <span>Student &amp; Parent Information</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Please enter authentic details for class scheduling and tutor assignment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Zayd Khan"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none transition-all bg-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Student Age / Level *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentAge}
                    onChange={(e) => setStudentAge(e.target.value)}
                    placeholder="e.g. 8 years / Adult"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none transition-all bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Parent / Guardian Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    WhatsApp / Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 03187779954 or +92 318 7779954"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. quraaneducationacademy@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white text-xs sm:text-sm"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Desired Course *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white text-xs sm:text-sm"
                >
                  {COURSES_DATA.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Teacher Gender Preference */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Tutor Preference *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setTutorGender('female')}
                    className={`py-2.5 px-3 rounded-xl border text-center font-medium transition-all text-xs sm:text-sm ${
                      tutorGender === 'female'
                        ? 'border-emerald-900 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Female Tutor
                  </button>
                  <button
                    type="button"
                    onClick={() => setTutorGender('male')}
                    className={`py-2.5 px-3 rounded-xl border text-center font-medium transition-all text-xs sm:text-sm ${
                      tutorGender === 'male'
                        ? 'border-emerald-900 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Male Tutor
                  </button>
                  <button
                    type="button"
                    onClick={() => setTutorGender('any')}
                    className={`py-2.5 px-3 rounded-xl border text-center font-medium transition-all text-xs sm:text-sm ${
                      tutorGender === 'any'
                        ? 'border-emerald-900 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Any Tutor
                  </button>
                </div>
              </div>

              {/* Timing & Timezone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none bg-white text-xs sm:text-sm"
                  >
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="night">Night (8:00 PM - 11:00 PM)</option>
                    <option value="weekend">Weekends Only</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    Your Timezone *
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none bg-white text-xs sm:text-sm"
                  >
                    <option value="PKT (Pakistan Standard Time)">PKT (Pakistan Standard Time)</option>
                    <option value="GMT (United Kingdom)">GMT / BST (United Kingdom)</option>
                    <option value="EST (US Eastern - New York)">EST (US Eastern - New York)</option>
                    <option value="CST (US Central - Chicago/Texas)">CST (US Central - Chicago/Texas)</option>
                    <option value="PST (US Pacific - California)">PST (US Pacific - California)</option>
                    <option value="EST (Canada - Toronto/Montreal)">EST (Canada - Toronto/Montreal)</option>
                    <option value="GST (UAE / Dubai / Saudi Arabia)">GST (UAE / Dubai / Saudi Arabia)</option>
                    <option value="AEST (Australia - Sydney/Melbourne)">AEST (Australia - Sydney/Melbourne)</option>
                    <option value="CET (Europe - Germany/France)">CET (Europe - Germany/France)</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Complete beginner, prefers Urdu/English instruction..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none bg-white text-xs sm:text-sm"
                />
              </div>

              {/* Two Requested Options at the bottom: Submit and open in WhatsApp & Send via Email */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <p className="font-semibold text-slate-800 text-xs">
                  Choose Submission Method:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Option 1: Submit and open in WhatsApp */}
                  <button
                    type="button"
                    onClick={(e) => {
                      if (!studentName || !studentAge || !phone || !email) {
                        alert('Please fill out student name, age, phone number, and email.');
                        return;
                      }
                      handleWhatsAppSubmit(e);
                    }}
                    className="py-3.5 px-5 font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>Submit &amp; Open in WhatsApp</span>
                  </button>

                  {/* Option 2: Send via Email */}
                  <button
                    type="button"
                    onClick={(e) => {
                      if (!studentName || !studentAge || !phone || !email) {
                        alert('Please fill out student name, age, phone number, and email.');
                        return;
                      }
                      handleEmailSubmit(e);
                    }}
                    className="py-3.5 px-5 font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <Mail className="w-5 h-5 text-emerald-300" />
                    <span>Send via Email</span>
                  </button>

                </div>

                <p className="text-[11px] text-center text-slate-500 pt-1">
                  🔒 Official WhatsApp: 03187779954 • Official Email: quraaneducationacademy@gmail.com
                </p>
              </div>

            </form>
          ) : (
            /* Confirmation Receipt */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle className="w-9 h-9 stroke-[2]" />
              </div>

              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#064e3b]">
                  Admission Application Submitted!
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {submissionMethod === 'whatsapp'
                    ? 'Your details have been saved and WhatsApp has been opened with your admission details.'
                    : 'Your details have been saved and email has been generated to our admissions department.'}
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500">Admission Reference</span>
                  <span className="font-mono text-sm font-bold text-emerald-900">{admissionId}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-xs">Student</span>
                    <span className="font-semibold text-slate-800">{studentName} ({studentAge})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Course</span>
                    <span className="font-semibold text-slate-800 truncate block">{selectedCourse}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Tutor Preference</span>
                    <span className="font-semibold text-slate-800 capitalize">{tutorGender} Tutor</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">Preferred Time</span>
                    <span className="font-semibold text-slate-800 capitalize">{preferredTime}</span>
                  </div>
                </div>
              </div>

              {/* Actions for resending if needed */}
              <div className="space-y-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppUrl(admissionId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Resend / Chat on WhatsApp (03187779954)</span>
                </a>

                <a
                  href={getMailtoUrl(admissionId)}
                  className="w-full py-3.5 px-4 bg-emerald-900 hover:bg-emerald-950 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Mail className="w-5 h-5 text-emerald-300" />
                  <span>Resend via Email (quraaneducationacademy@gmail.com)</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStudentName('');
                    setStudentAge('');
                    setPhone('');
                    setEmail('');
                  }}
                  className="w-full py-2.5 text-xs text-slate-600 hover:text-slate-900"
                >
                  Submit Another Admission Form
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
