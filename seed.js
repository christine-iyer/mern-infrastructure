// export const assets = [
//      { symbol: "GOOGL", purchasePrice: 143.49,  shares: 100 },
//      { symbol: "TSLA", purchasePrice: 242.54, shares: 45 },
//      { symbol: "AMZN", purchasePrice: 160.00, shares: 80 },
//      { symbol: "BA", purchasePrice: 188.59, shares: 25},
//      { symbol: "COIN", purchasePrice: 257.31, shares:50 },
//      { symbol: "AAPL", purchasePrice: 114.56, shares:200},
//      { symbol: "CVS", purchasePrice: 89.83, shares: 25 },
//      { symbol: "GS", purchasePrice: 342.94, shares: 10 },
//      { symbol: "MS", purchasePrice: 98.39, shares: 25 },
//      { symbol: "NVDA", purchasePrice: 293.75, shares: 5 },
//      { symbol: "PYPL", purchasePrice: 191.57, shares: 10 },
//      { symbol: "PFE", purchasePrice: 47.45, shares: 100 },
//      { symbol: "CRM", purchasePrice: 160.38, shares: 20 },
//      { symbol: "SBUX", purchasePrice: 102.99, shares: 25 },
//      { symbol: "DIS", purchasePrice: 151.93, shares: 10 },
//      { symbol: "VTI", purchasePrice: 239.05, shares: 10 },
//      { symbol: "LI", purchasePrice: 32.53, shares: 225 }
     
//    ];

require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Sativas', sortOrder: 10},
    {name: 'Indicas', sortOrder: 20},
    {name: 'Hybrids', sortOrder: 30},
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95},
    {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    {name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95},
    {name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95},
    {name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95},
    {name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    {name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95},
    {name: 'Yellow-3', emoji: '🇲🇾 ', category: categories[2], price: 3.95},
    {name: 'Yellow-4', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
    {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 2.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    {name: 'Orange-4', emoji: '🇲🇾 ', category: categories[1], price: 1.95},
    {name: 'Orange-5', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    {name: 'Orange-6', emoji: '🇲🇾 ', category: categories[1], price: 2.95},
    {name: 'Orange-7', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 0.95},
    {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 8.95},
    {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
   