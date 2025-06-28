import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

function add30Min(timeStr: string) {
  const [h, m] = timeStr.split(':').map(Number);
  const date = new Date(0, 0, 0, h, m + 30);
  return date.toTimeString().slice(0, 5);
}
function subtract30Min(timeStr: string) {
  const [h, m] = timeStr.split(':').map(Number);
  const date = new Date(0, 0, 0, h, m - 30);
  return date.toTimeString().slice(0, 5);
}

const ScheduleMeetingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 1. Check for existing meeting within 30 minutes
    const { data: existing, error: checkError } = await supabase
      .from('strategy_calls')
      .select('*')
      .eq('date', form.date)
      .gte('time', subtract30Min(form.time))
      .lte('time', add30Min(form.time));
    if (checkError) {
      alert('Error checking for existing meetings. Please try again.');
      setLoading(false);
      return;
    }
    if (existing && existing.length > 0) {
      alert('A call is already scheduled within 30 minutes of this time. Please choose another slot.');
      setLoading(false);
      return;
    }
    // 2. Insert new meeting
    const { error } = await supabase
      .from('strategy_calls')
      .insert([form]);
    if (error) {
      alert('There was an error scheduling your call. Please try again.');
      setLoading(false);
      return;
    }
    // 3. Send admin email
    await fetch('/api/send-admin-email', {
      method: 'POST',
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        date: form.date,
        time: form.time,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      date: '',
      time: '',
    });
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
        <p>Your strategy call is scheduled.</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
        Schedule a meeting
      </h2>
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="modal-name" className="block text-white/80 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="modal-name"
            placeholder="Enter your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="modal-email" className="block text-white/80 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="modal-email"
            placeholder="Anything@example.com"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50 backdrop-blur-sm"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="w-full md:w-1/2">
            <label htmlFor="modal-date" className="block text-white/80 text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              id="modal-date"
              value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white backdrop-blur-sm"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="modal-time" className="block text-white/80 text-sm font-medium mb-2">
              Time
            </label>
            <input
              type="time"
              id="modal-time"
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white backdrop-blur-sm"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="gradient-border py-3 px-8 md:px-12 rounded-lg transition-all duration-300 w-full md:w-auto hover:scale-105"
            disabled={loading}
          >
            <span className="relative z-10 text-white font-semibold">
              {loading ? 'Booking...' : 'Book a Free Strategy Call'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleMeetingForm; 