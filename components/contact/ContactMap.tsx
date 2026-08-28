import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="relative h-96 lg:h-[500px] bg-slate-200">
              {/* Embedded Google Maps iframe - replace with actual embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9988797476576!2d77.026638!3d28.459497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDEnMzUuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Location Cards */}
          <div className="space-y-6">
            {/* Head Office */}
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Head Office</h3>
                  <span className="text-xs text-slate-500">Gurugram, Haryana</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                123, Medical Hub, Sector 15, Gurugram, Haryana - 122001, India
              </p>
              <a
                href="https://maps.google.com/?q=28.459497,77.026638"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Branch Office */}
            <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Branch Office</h3>
                  <span className="text-xs text-slate-500">Bhopal, Madhya Pradesh</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Opp. Hamidia Hospital, Bhopal - 462001, Madhya Pradesh
              </p>
              <a
                href="https://maps.google.com/?q=23.259933,77.412615"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Coverage Area */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-600 p-6 text-white shadow-lg shadow-blue-700/25">
              <h3 className="text-base font-bold mb-3">Coverage Area</h3>
              <div className="flex flex-wrap gap-2">
                {["Madhya Pradesh", "Chhattisgarh", "Rajasthan", "Uttar Pradesh"].map(
                  (state) => (
                    <span
                      key={state}
                      className="rounded-lg bg-white/20 px-3 py-1 text-xs font-medium"
                    >
                      {state}
                    </span>
                  )
                )}
              </div>
              <p className="text-xs text-blue-100 mt-3">
                Serving 150+ hospitals directly across Central India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}