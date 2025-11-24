import React, { useState } from 'react';
import { Wine, Send, Loader2, Sparkles } from 'lucide-react';
import { getSommelierRecommendation } from '../services/geminiService';

export const Sommelier: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await getSommelierRecommendation(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-1">
      <div className="relative bg-stone-900 border border-gold-600/30 rounded-xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
        
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center md:text-left space-y-4">
            <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center border border-gold-500/50">
               <Wine className="w-8 h-8 text-gold-400" />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-gold-100 mb-2">Henri, the AI Sommelier</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Unsure what to pair with the Duck Confit? Ask Henri for a personalized recommendation tailored to our menu.
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div className="bg-stone-950/50 rounded-lg p-6 min-h-[120px] border border-stone-800 flex items-center justify-center text-stone-300 italic">
               {loading ? (
                 <div className="flex items-center space-x-2 text-gold-400">
                   <Loader2 className="animate-spin h-5 w-5" />
                   <span>Consulting the cellar...</span>
                 </div>
               ) : response ? (
                 <p className="animate-fade-in text-lg font-serif leading-relaxed text-stone-200">"{response}"</p>
               ) : (
                 <p className="text-stone-500">"What are you in the mood for this evening?"</p>
               )}
            </div>

            <form onSubmit={handleAsk} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="E.g., I love bold reds, what goes with the Ribeye?"
                className="w-full bg-stone-800 text-stone-100 placeholder-stone-500 border border-stone-700 rounded-lg py-4 pl-4 pr-12 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="absolute right-2 top-2 bottom-2 bg-gold-600 hover:bg-gold-500 text-stone-950 p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Sparkles className="h-5 w-5 animate-pulse" /> : <Send className="h-5 w-5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
