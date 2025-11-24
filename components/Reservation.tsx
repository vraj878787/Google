import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

export const Reservation: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4">
        <div className="bg-stone-900 p-8 md:p-12 rounded-2xl border border-gold-500/20 text-center max-w-lg w-full shadow-2xl animate-fade-in-up">
          <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Table Reserved!</h2>
          <p className="text-stone-400 mb-8">
            Thank you for choosing Lumière & Sel. A confirmation email has been sent to you. We look forward to welcoming you.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-gold-400 hover:text-gold-300 font-medium underline underline-offset-4"
          >
            Make another reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 pt-24 pb-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="w-full max-w-5xl bg-stone-900/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-stone-800 flex flex-col md:flex-row">
        
        {/* Image Side */}
        <div className="w-full md:w-5/12 relative h-64 md:h-auto">
          <img 
            src="https://picsum.photos/seed/restaurant_interior/800/1200" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/40"></div>
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-serif italic mb-2">"Dining is an art form."</h3>
            <p className="text-sm text-stone-300">- Chef Antoine</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-7/12 p-8 md:p-12">
          <h2 className="text-3xl font-serif text-gold-400 mb-6">Book a Table</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                  <input 
                    type="date" 
                    required
                    className="w-full bg-stone-800 border border-stone-700 rounded-md py-3 pl-10 pr-4 text-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                  <select className="w-full bg-stone-800 border border-stone-700 rounded-md py-3 pl-10 pr-4 text-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all appearance-none cursor-pointer">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                <select className="w-full bg-stone-800 border border-stone-700 rounded-md py-3 pl-10 pr-4 text-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none transition-all appearance-none cursor-pointer">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5+ People (Call us)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Contact Details</label>
               <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full bg-stone-800 border border-stone-700 rounded-md py-3 px-4 text-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none mb-3"
                />
               <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="w-full bg-stone-800 border border-stone-700 rounded-md py-3 px-4 text-stone-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none"
                />
            </div>

            <button 
              type="submit"
              className="w-full bg-gold-600 hover:bg-gold-500 text-stone-900 font-bold py-4 rounded-md uppercase tracking-wider transition-colors shadow-lg shadow-gold-900/20 mt-4"
            >
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
