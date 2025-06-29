import React from "react";
import ScheduleMeetingInfo from "./ScheduleMeetingInfo";

export default function ScheduleMeeting() {
  return (
    <section id="schedule-meeting" className="section-bg-gradient py-16 md:py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col justify-center mb-10 md:mb-0">
          <ScheduleMeetingInfo />
        </div>
        {/* Right: Form */}
        <div className="flex-1">
          <div className="glass-card p-8 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">Schedule a meeting</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-6">
                <label htmlFor="modal-name" className="block text-white/90 text-lg font-semibold mb-3">Name</label>
                <input
                  type="text"
                  id="modal-name"
                  placeholder="Enter your Name"
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm text-lg"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="modal-email" className="block text-white/90 text-lg font-semibold mb-3">Email</label>
                <input
                  type="email"
                  id="modal-email"
                  placeholder="Anything@example.com"
                  required
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm text-lg"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="w-full md:w-1/2">
                  <label htmlFor="modal-date" className="block text-white/90 text-lg font-semibold mb-3">Date</label>
                  <input
                    type="date"
                    id="modal-date"
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white backdrop-blur-sm text-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="modal-time" className="block text-white/90 text-lg font-semibold mb-3">Time</label>
                  <input
                    type="time"
                    id="modal-time"
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white backdrop-blur-sm text-lg"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="gradient-border py-4 px-8 md:px-12 rounded-lg transition-all duration-300 w-full md:w-auto hover:scale-105"
                >
                  <span className="relative z-10 text-white font-bold text-xl">Book a Free Strategy Call</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 