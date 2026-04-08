import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, PhoneCall, Mail, 
  FileText, ShieldCheck, HelpCircle, Save,
  User, Users, GraduationCap
} from 'lucide-react';

const Admissions = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const StepIndicator = () => (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        {[
          { icon: User, label: "Student Details" },
          { icon: Users, label: "Parent/Guardian" },
          { icon: GraduationCap, label: "Academic History" }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 flex-1 relative">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors ${
              step > idx + 1 ? 'bg-secondary text-primary' : 
              step === idx + 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
            }`}>
              {step > idx + 1 ? <CheckCircle2 className="w-5 h-5" /> : <item.icon className="w-4 h-4" />}
            </div>
            <p className={`text-[10px] font-black uppercase tracking-tight text-center ${
              step >= idx + 1 ? 'text-primary' : 'text-gray-300'
            }`}>
              Step {idx + 1}:<br/>{item.label}
            </p>
            {idx < 2 && (
              <div className="absolute top-4 left-1/2 w-full h-[2px] bg-gray-100 -z-0">
                <div className={`h-full bg-secondary transition-all duration-500`} style={{ width: step > idx + 1 ? '100%' : '0%' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-secondary selection:text-primary">
      {/* Hero Header */}
      <section className="bg-primary pt-24 pb-16 text-white text-center rounded-b-[2rem]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-4"
          >
            Start Your Journey with <br/><span className="text-secondary italic">Gyan Vidya Peeth</span>
          </motion.h1>
          <p className="text-white/60 font-medium tracking-tight">
            Join our community of future-ready learners. Complete your application below.
          </p>
        </div>
      </section>

      {/* Main Portal Content */}
      <section className="py-12 relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#2d5a27 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left: Multistep Form (Span 2) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-8 md:p-12">
                <StepIndicator />

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-heading font-black text-primary italic">Student Details</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 space-y-2">
                          <label className="input-label">Full Name *</label>
                          <input type="text" className="compact-input" placeholder="Legal full name" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Date of Birth *</label>
                          <input type="date" className="compact-input" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Gender *</label>
                          <select className="compact-input">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="input-label">Applying for Grade *</label>
                          <select className="compact-input">
                            <option>Foundation Wing (Pre-Nur to II)</option>
                            <option>Middle Wing (III to VIII)</option>
                            <option>Senior Wing (IX to XII)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-heading font-black text-primary italic">Parent/Guardian Information</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                          <label className="input-label">Father's Full Name *</label>
                          <input type="text" className="compact-input" placeholder="Enter name" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Mother's Full Name *</label>
                          <input type="text" className="compact-input" placeholder="Enter name" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Primary Phone *</label>
                          <input type="tel" className="compact-input" placeholder="+91 XXXX XXXXX" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Alternative Phone</label>
                          <input type="tel" className="compact-input" placeholder="+91 XXXX XXXXX" />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="input-label">Email Address *</label>
                          <input type="email" className="compact-input" placeholder="example@email.com" />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="input-label">Residential Address *</label>
                          <textarea className="compact-input h-24 pt-4" placeholder="Full address" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-heading font-black text-primary italic">Academic History</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 space-y-2">
                          <label className="input-label">Previous School Name (if any)</label>
                          <input type="text" className="compact-input" placeholder="Enter school name" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Last Class Attended</label>
                          <input type="text" className="compact-input" placeholder="Grade level" />
                        </div>
                        <div className="space-y-2">
                          <label className="input-label">Transfer Certificate (TC) Available?</label>
                          <select className="compact-input">
                            <option>Yes</option>
                            <option>No, will provide later</option>
                            <option>Not applicable</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-secondary/10 rounded-2xl border border-secondary/20">
                        <div className="flex gap-4 items-start">
                          <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                          <div>
                            <p className="text-sm font-black text-primary uppercase tracking-tight">Parental Declaration</p>
                            <p className="text-xs text-primary/60 mt-1 italic leading-relaxed">
                              I hereby declare that all information provided is accurate. I understand that the admission is subject to merit and institutional compliance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Buttons */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                  {step > 1 ? (
                    <button 
                      onClick={prevStep}
                      className="text-primary font-black text-xs uppercase tracking-widest hover:text-secondary transition-colors"
                    >
                      Previous Step
                    </button>
                  ) : <div />}
                  
                  <div className="flex gap-4">
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-primary/10 rounded-xl text-primary font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
                      <Save className="w-4 h-4" /> Save Draft
                    </button>
                    <button 
                      onClick={step === totalSteps ? () => alert("Application Submitted!") : nextStep}
                      className="flex items-center gap-4 px-10 py-4 bg-primary text-white font-black text-sm rounded-xl shadow-xl hover:bg-emerald-950 active:scale-95 transition-all group"
                    >
                      {step === totalSteps ? "Submit Enrollment" : "Next Step"}
                      <ChevronRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sidebar Information (Span 1) */}
            <div className="space-y-8">
              {/* Help Card */}
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-heading font-black text-primary mb-6 italic tracking-tight">Help & Support</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-primary">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Call Desk</p>
                      <p className="text-sm font-black text-primary">+91 98XXX XXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Inquiry Email</p>
                      <p className="text-sm font-black text-primary">admission@gvpsonipat.ac.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Documents Card */}
              <div className="bg-slate-hero p-8 rounded-[2rem] border border-gray-100 shadow-xl relative group">
                <h3 className="text-xl font-heading font-black text-primary mb-6 italic tracking-tight underline decoration-secondary decoration-8 underline-offset-8">Required Documents</h3>
                <ul className="space-y-4">
                  {[
                    "Birth Certificate copy",
                    "Previous Year Report Cards",
                    "Passport Size Photographs (4)",
                    "Aadhar Card (Student & Parents)",
                    "Transfer Certificate (TC)"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-600 italic">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest leading-relaxed">
                    * Final verification will happen during campus visit.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <div className="py-12 bg-gray-50 text-center">
        <div className="flex items-center justify-center gap-4 opacity-30 text-primary mb-2">
          <HelpCircle className="w-4 h-4" />
          <p className="text-[10px] font-black uppercase tracking-[0.4em]">Integrated Admission Portal v2.0</p>
        </div>
      </div>

    </div>
  );
};

export default Admissions;
