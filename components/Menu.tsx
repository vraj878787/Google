import React, { useState } from 'react';
import { MenuItem, Category } from '../types';
import { Sommelier } from './Sommelier';

const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Wagyu Beef Carpaccio',
    description: 'Truffle aioli, parmesan crisps, caperberries, micro arugula.',
    price: '$28',
    category: 'Starters',
    image: 'https://picsum.photos/seed/carpaccio/600/400',
    popular: true
  },
  {
    id: 's2',
    name: 'Seared Scallops',
    description: 'Cauliflower purée, golden raisin chutney, pancetta dust.',
    price: '$24',
    category: 'Starters',
    image: 'https://picsum.photos/seed/scallops/600/400'
  },
  {
    id: 's3',
    name: 'Burrata & Heirloom',
    description: 'Basil pesto, balsamic glaze, toasted pine nuts, grilled focaccia.',
    price: '$21',
    category: 'Starters',
    image: 'https://picsum.photos/seed/burrata/600/400'
  },
  // Mains
  {
    id: 'm1',
    name: 'Duck Confit',
    description: 'Beluga lentils, roasted carrots, orange-thyme reduction.',
    price: '$38',
    category: 'Mains',
    image: 'https://picsum.photos/seed/duck/600/400',
    popular: true
  },
  {
    id: 'm2',
    name: 'Miso Glazed Black Cod',
    description: 'Bok choy, ginger dashi broth, shiitake mushrooms, sesame.',
    price: '$42',
    category: 'Mains',
    image: 'https://picsum.photos/seed/cod/600/400'
  },
  {
    id: 'm3',
    name: 'Herb-Crusted Lamb Rack',
    description: 'Fondant potatoes, ratatouille vegetables, rosemary jus.',
    price: '$48',
    category: 'Mains',
    image: 'https://picsum.photos/seed/lamb/600/400'
  },
  // Desserts
  {
    id: 'd1',
    name: 'Dark Chocolate Soufflé',
    description: 'Raspberry coulis, vanilla bean crème anglaise. (20 min wait)',
    price: '$18',
    category: 'Desserts',
    image: 'https://picsum.photos/seed/souffle/600/400',
    popular: true
  },
  {
    id: 'd2',
    name: 'Yuzu Lemon Tart',
    description: 'Toasted meringue, candied citrus peel, mint gel.',
    price: '$16',
    category: 'Desserts',
    image: 'https://picsum.photos/seed/tart/600/400'
  }
];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Mains');
  const categories: Category[] = ['Starters', 'Mains', 'Desserts', 'Drinks'];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-400 mb-4">Our Menu</h2>
          <p className="text-stone-400 max-w-2xl mx-auto font-light">
            A culinary journey blending classic technique with modern innovation.
          </p>
        </div>

        {/* Sommelier Integration */}
        <Sommelier />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-gold-600 border-gold-600 text-stone-900 font-bold shadow-lg shadow-gold-900/20'
                  : 'bg-transparent border-stone-800 text-stone-400 hover:border-gold-500/50 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="group relative flex gap-4 p-4 rounded-xl hover:bg-stone-900/50 transition-colors border border-transparent hover:border-stone-800">
                 <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                 </div>
                 <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-baseline mb-2">
                       <h3 className="text-xl font-serif text-stone-100 group-hover:text-gold-400 transition-colors">
                         {item.name}
                       </h3>
                       <span className="text-gold-500 font-semibold ml-4">{item.price}</span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">{item.description}</p>
                    {item.popular && (
                      <span className="mt-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-gold-400/80 rounded-sm w-fit">
                        Chef's Choice
                      </span>
                    )}
                 </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-stone-500 italic">
              Seasonal selections for this category are being updated by our chef.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
