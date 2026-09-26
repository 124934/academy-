import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, MessageCircle } from 'lucide-react';
import { COURSES_DATA } from '../data/academyData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
  defaultTeacherName?: string;
  defaultGenderPref?: 'male' | 'female';
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId,
  defaultTeacherName,
  defaultGenderPref
}) => {
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(defaultCourseId || 'noorani-qaida');
  const [tutorGender, setTutorGender] = useState<'female' | 'male' | 'any'>(defaultGenderPref || 'any');
  const [preferredTime, setPreferredTime] = useState('evening');
  const [timezone, setTimezone] = useState('GMT (United Kingdom)');
  const [notes, setNotes] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [admissionId, setAdmissionId] = useState('');

  useEffect(() => {
    if (defaultCourseId) setSelectedCourse(defaultCourseId);
    if (defaultGenderPref) setTutorGender(defaultGenderPref);
  }, [defaultCourseId, defaultGenderPref]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      requestedTeacher: defaultTeacherName,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('qea_admissions') || '[]');
      existing.push(admissionData);
      localStorage.setItem('qea_admissions', JSON.stringify(existing));
    } catch (err) {
      console.error('Storage error:', err);
    }

    setIsSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Assalamu Alaikum Quran Education Academy! I submitted an admission request.\n\n` +
      `Admission Ref: ${admissionId}\n` +
      `Student: ${studentName} (Age: ${studentAge})\n` +
      `Course: ${selectedCourse}\n` +
      `Tutor: ${tutorGender.toUpperCase()}\n` +
      `Timezone: ${timezone}\n\n` +
      `Please provide further details to start classes. Thank you!`
    );
    return `https://wa.me/923000000000?text=${message}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            <div className="text-center pb-6 border-b border-slate-100 space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Certified Al-Azhar & Wifaq Faculty</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-2">
                Enroll in Quran Classes
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Fill in student details below and our academic team will coordinate your class schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Zayd Khan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Student Age / Level *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentAge}
                    onChange={(e) => setStudentAge(e.target.value)}
                    placeholder="e.g. 7 years / Adult"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none"
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
                    placeholder="+44 7911 123456 / +1 (555) 000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none"
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
                  placeholder="contact@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none"
                />
              </div>

              {/* Course Selection */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Select Desired Course *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-800 outline-none bg-white text-xs"
                >
                  {COURSES_DATA.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Teacher Gender Preference */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tutor Preference *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTutorGender('female')}
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
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
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
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
                    className={`py-2 px-3 rounded-xl border text-center font-medium transition-all ${
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
                  <label className="block font-semibold text-slate-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 outline-none bg-white text-xs"
                  >
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="evening">Evening (4pm - 8pm)</option>
                    <option value="night">Night (8pm - 11pm)</option>
                    <option value="weekend">Weekends Only</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Timezone *
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 outline-none bg-white text-xs"
                  >
                    <option value="GMT (United Kingdom)">GMT / BST (United Kingdom)</option>
                    <option value="EST (US Eastern)">EST (US Eastern - New York)</option>
                    <option value="CST (US Central)">CST (US Central - Chicago/Texas)</option>
                    <option value="PST (US Pacific)">PST (US Pacific - California)</option>
                    <option value="EST (Canada)">EST (Canada - Toronto/Montreal)</option>
                    <option value="GST (UAE / Dubai)">GST (UAE / Gulf / Saudi Arabia)</option>
                    <option value="AEST (Australia)">AEST (Australia - Sydney/Melbourne)</option>
                    <option value="PKT (Pakistan)">PKT (Pakistan Standard Time)</option>
                    <option value="CET (Europe)">CET (Europe - Germany/France)</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Has finished basic alphabet, wants focus on Tajweed"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-xl transition-all shadow-md active:scale-98 mt-2"
              >
                Submit Admission Form
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your privacy is fully protected. Instant confirmation.
              </p>
            </form>

          </div>
        ) : (
          /* Confirmation Slip */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle className="w-9 h-9 stroke-[2]" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Admission Request Submitted!
              </h3>
              <p className="text-xs text-slate-600">
                We have received your admission request.
              </p>
            </div>

            {/* Voucher Box */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="text-xs text-slate-500">Reference Number</span>
                <span className="font-mono text-xs font-bold text-emerald-900">{admissionId}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Student</span>
                  <span className="font-semibold text-slate-800">{studentName} ({studentAge})</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Course</span>
                  <span className="font-semibold text-slate-800 truncate block">{selectedCourse}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Tutor Preference</span>
                  <span className="font-semibold text-slate-800 capitalize">{tutorGender} Tutor</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Schedule</span>
                  <span className="font-semibold text-slate-800 capitalize">{preferredTime} ({timezone})</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect via WhatsApp for Instant Setup</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-3 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
              >
                Done / Close Window
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
