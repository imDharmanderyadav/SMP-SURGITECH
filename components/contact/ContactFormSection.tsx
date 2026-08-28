"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, User, Mail, Phone, MessageSquare, Building, Stethoscope } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hospital: "",
    productInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      hospital: "",
      productInterest: "",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 border border-green-100 p-12 text-center h-full min-h-[500px]">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-900">Enquiry Sent Successfully!</h3>
        <p className="text-green-700 mt-3 max-w-sm leading-relaxed">
          Thank you for reaching out to SMP Surgitech. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 rounded-xl bg-green-700 px-6 py-3 text-sm font-bold text-white hover:bg-green-800 transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900">Send Us an Enquiry</h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill in the details below and we will get back to you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. John Doe"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="doctor@hospital.com"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Hospital / Clinic Name
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                placeholder="City Hospital"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">
              Product Interest
            </label>
            <div className="relative">
              <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all appearance-none"
              >
                <option value="">Select a category</option>
                <option value="stents">Stents</option>
                <option value="balloons">Balloons</option>
                <option value="catheters">Catheters</option>
                <option value="guidewires">Guidewires</option>
                <option value="interventional">Interventional Products</option>
                <option value="pacemakers">Pacemakers</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            Message / Order Details *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirements, quantities needed, preferred brand, etc..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/25 hover:shadow-blue-700/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending Enquiry...
            </>
          ) : (
            <>
              Send Enquiry
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}