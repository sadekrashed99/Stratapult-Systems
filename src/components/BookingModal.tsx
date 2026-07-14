import React, { useState } from "react";
import { X, CheckCircle, Calendar, Phone, Video, Loader2 } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function BookingModal({ isOpen, onClose, initialPlan = "" }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    trade: "Electrician",
    contactMethod: "Phone",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodSelect = (method: string) => {
    setFormData((prev) => ({ ...prev, contactMethod: method }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setLoading(true);
    // Simulate API registration delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      id="booking-modal-overlay"
    >
      {/* Modal Container */}
      <div
        className="bg-[#F5F2EC] dark:bg-[#1C1C1A] border border-[#E8E4DC] dark:border-neutral-800 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transition-all text-left"
        id="booking-modal-content"
      >
        {/* Header bar */}
        <div className="flex justify-between items-center p-6 border-b border-[#E8E4DC] dark:border-neutral-800">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-[#1C1C1A] dark:text-[#F5F2EC]">
              {success ? "Booking Confirmed" : "Book Your Strategy Call"}
            </h3>
            {!success && (
              <p className="text-xs md:text-sm text-[#6B6B68] dark:text-[#9CA3AF] font-sans mt-0.5">
                {initialPlan ? `Interested in: ${initialPlan}` : "Get a customized trade revenue audit"}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B6B68] dark:text-[#9CA3AF] hover:text-[#E8622A] dark:hover:text-[#E8622A] rounded-full hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
            aria-label="Close booking modal"
            id="close-booking-btn"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success Screen */}
        {success ? (
          <div className="p-8 text-center flex flex-col items-center" id="booking-success-state">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={36} className="text-emerald-600 dark:text-emerald-500" />
            </div>
            
            <h4 className="font-display font-bold text-2xl text-[#1C1C1A] dark:text-[#F5F2EC] mb-3">
              We're on it, {formData.name.split(" ")[0]}!
            </h4>
            
            <p className="font-sans text-base text-[#6B6B68] dark:text-[#9CA3AF] max-w-sm mb-6 leading-relaxed">
              We'll be in touch within 2 hours to finalize your free strategy call. Get ready to turn online searches into booked jobs.
            </p>

            <div className="bg-white dark:bg-[#2E2E2C] rounded-xl p-5 border border-[#E8E4DC] dark:border-neutral-800 w-full max-w-sm text-left mb-8 transition-colors-theme">
              <h5 className="font-display font-bold text-sm text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-3">
                Summary of details
              </h5>
              <div className="space-y-2 text-xs md:text-sm font-sans text-[#6B6B68] dark:text-[#9CA3AF]">
                <div><strong className="text-[#1C1C1A] dark:text-[#F5F2EC]">Trade:</strong> {formData.trade}</div>
                <div><strong className="text-[#1C1C1A] dark:text-[#F5F2EC]">Preferred Connection:</strong> {formData.contactMethod}</div>
                <div><strong className="text-[#1C1C1A] dark:text-[#F5F2EC]">Phone:</strong> {formData.phone}</div>
                <div><strong className="text-[#1C1C1A] dark:text-[#F5F2EC]">Email:</strong> {formData.email}</div>
              </div>
            </div>

            <MagneticButton
              as="button"
              onClick={onClose}
              className="bg-[#E8622A] hover:bg-[#ff763d] text-white font-display font-bold text-sm px-8 py-3.5 rounded-full cursor-none"
              id="success-close-btn"
            >
              Back to Stratapult
            </MagneticButton>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="p-6 space-y-5" id="booking-form">
            
            {/* Input grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-white dark:bg-[#2E2E2C] border border-[#E8E4DC] dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-[#1C1C1A] dark:text-[#F5F2EC] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#E8622A] transition-colors"
                  id="form-input-name"
                />
              </div>

              {/* Email address */}
              <div>
                <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@yourtrade.com.au"
                  className="w-full bg-white dark:bg-[#2E2E2C] border border-[#E8E4DC] dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-[#1C1C1A] dark:text-[#F5F2EC] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#E8622A] transition-colors"
                  id="form-input-email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone number */}
              <div>
                <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. 0412 345 678"
                  className="w-full bg-white dark:bg-[#2E2E2C] border border-[#E8E4DC] dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-[#1C1C1A] dark:text-[#F5F2EC] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#E8622A] transition-colors"
                  id="form-input-phone"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-1.5">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="e.g. Harrison Electrical"
                  className="w-full bg-white dark:bg-[#2E2E2C] border border-[#E8E4DC] dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-[#1C1C1A] dark:text-[#F5F2EC] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#E8622A] transition-colors"
                  id="form-input-business"
                />
              </div>
            </div>

            {/* Select Trade */}
            <div>
              <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-1.5">
                Your Primary Trade
              </label>
              <select
                name="trade"
                value={formData.trade}
                onChange={handleInputChange}
                className="w-full bg-white dark:bg-[#2E2E2C] border border-[#E8E4DC] dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-[#1C1C1A] dark:text-[#F5F2EC] focus:outline-none focus:border-[#E8622A] transition-colors cursor-pointer"
                id="form-input-trade"
              >
                <option value="Electrician">Electrician (Emergency / General)</option>
                <option value="Plumber">Plumber</option>
                <option value="Roofer">Roofer & restoration specialist</option>
                <option value="HVAC">HVAC / Air Conditioning</option>
                <option value="Builder">Builder / Home Renovator</option>
                <option value="Painter">Painter / Decorator</option>
                <option value="Landscaper">Landscaper / Gardener</option>
                <option value="Other">Other trade specialist</option>
              </select>
            </div>

            {/* Calling Connection Channel */}
            <div>
              <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-2.5">
                Preferred Connection Method
              </label>
              <div className="grid grid-cols-2 gap-3" id="form-input-method">
                <button
                  type="button"
                  onClick={() => handleMethodSelect("Phone")}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-sans font-medium transition-all cursor-pointer ${
                    formData.contactMethod === "Phone"
                      ? "bg-[#E8622A]/10 border-[#E8622A] text-[#E8622A]"
                      : "bg-white dark:bg-[#2E2E2C] border-[#E8E4DC] dark:border-neutral-800 text-[#6B6B68] dark:text-[#9CA3AF] hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                  id="method-phone-btn"
                >
                  <Phone size={15} />
                  <span>Standard Phone Call</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleMethodSelect("Meet")}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-sans font-medium transition-all cursor-pointer ${
                    formData.contactMethod === "Meet"
                      ? "bg-[#E8622A]/10 border-[#E8622A] text-[#E8622A]"
                      : "bg-white dark:bg-[#2E2E2C] border-[#E8E4DC] dark:border-neutral-800 text-[#6B6B68] dark:text-[#9CA3AF] hover:border-neutral-300 dark:hover:border-neutral-700"
                  }`}
                  id="method-meet-btn"
                >
                  <Video size={15} />
                  <span>Google Meet</span>
                </button>
              </div>
            </div>

            {/* Audit focus notes */}
            <div>
              <label className="block text-xs font-bold font-display text-[#1C1C1A] dark:text-[#F5F2EC] uppercase tracking-wider mb-1.5">
                Any specific issues with your current site?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="e.g. My site gets traffic but nobody calls, or I want to improve conversion on Google Ads..."
                className="w-full bg-white dark:bg-[#2E2E2C] border border-[#E8E4DC] dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-[#1C1C1A] dark:text-[#F5F2EC] placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#E8622A] transition-colors resize-none"
                id="form-input-message"
              />
            </div>

            {/* Submit Bar */}
            <div className="pt-3 border-t border-[#E8E4DC] dark:border-neutral-800 flex justify-end">
              <MagneticButton
                as="button"
                className="bg-[#E8622A] hover:bg-[#ff763d] text-white font-display font-bold text-sm px-7 py-3.5 rounded-full flex items-center justify-center gap-2 min-w-[180px] cursor-none"
                id="form-submit-btn"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={16} />
                    <span>Confirm Free Booking</span>
                  </>
                )}
              </MagneticButton>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
