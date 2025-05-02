
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

type MenuCategory = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';
type DietaryFilter = 'all' | 'vegetarian' | 'vegan' | 'gluten-free';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  featured?: boolean;
  dietary?: string[];
};

const allMenuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Pan-Seared Scallops",
    description: "Fresh sea scallops seared to perfection, served with cauliflower puree and crispy pancetta",
    price: 28.99,
    category: "starters",
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    featured: true
  },
  {
    id: 2,
    name: "Mediterranean Salad",
    description: "Fresh mixed greens with feta cheese, olives, cucumber, and cherry tomatoes in a lemon vinaigrette",
    price: 14.99,
    category: "starters",
    dietary: ["vegetarian"]
  },
  {
    id: 3,
    name: "Wild Mushroom Soup",
    description: "Creamy soup made with a blend of wild mushrooms, finished with truffle oil and chives",
    price: 12.99,
    category: "starters",
    dietary: ["vegetarian", "gluten-free"]
  },
  {
    id: 4,
    name: "Tuna Tartare",
    description: "Fresh diced tuna with avocado, cucumber, and citrus dressing, served with wonton crisps",
    price: 19.99,
    category: "starters"
  },

  // Mains
  {
    id: 5,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice cooked with wild mushrooms and finished with truffle oil",
    price: 24.99,
    category: "mains",
    image: "https://images.unsplash.com/photo-1673507553582-61b14fccc124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    featured: true,
    dietary: ["vegetarian"]
  },
  {
    id: 6,
    name: "Beef Wellington",
    description: "Tender beef fillet wrapped in mushroom duxelles and flaky puff pastry, served with red wine jus",
    price: 36.99,
    category: "mains",
    featured: true
  },
  {
    id: 7,
    name: "Herb-Crusted Rack of Lamb",
    description: "Tender lamb rack with aromatic herb crust, served with roasted vegetables and mint jus",
    price: 32.99,
    category: "mains",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 8,
    name: "Grilled Sea Bass",
    description: "Fresh sea bass fillet grilled with lemon and herbs, served with sautéed spinach and champagne sauce",
    price: 29.99,
    category: "mains",
    dietary: ["gluten-free"]
  },
  {
    id: 9,
    name: "Eggplant Parmesan",
    description: "Layers of eggplant, tomato sauce, and cheese, baked to perfection and served with fresh basil",
    price: 22.99,
    category: "mains",
    dietary: ["vegetarian"]
  },

  // Desserts
  {
    id: 10,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream",
    price: 12.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    featured: true,
    dietary: ["vegetarian"]
  },
  {
    id: 11,
    name: "Berry Panna Cotta",
    description: "Creamy vanilla bean panna cotta topped with fresh seasonal berries and mint",
    price: 11.99,
    category: "desserts",
    dietary: ["vegetarian", "gluten-free"]
  },
  {
    id: 12,
    name: "Tiramisu",
    description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream",
    price: 10.99,
    category: "desserts",
    dietary: ["vegetarian"]
  },
  {
    id: 13,
    name: "Crème Brûlée",
    description: "Silky vanilla custard with a caramelized sugar crust, served with fresh berries",
    price: 10.99,
    category: "desserts",
    dietary: ["vegetarian", "gluten-free"]
  },

  // Drinks
  {
    id: 14,
    name: "Signature House Wine",
    description: "Our exclusive house wine with rich flavors and smooth finish (Red or White)",
    price: 12.99,
    category: "drinks",
    dietary: ["vegan", "gluten-free"]
  },
  {
    id: 15,
    name: "Artisanal Cocktails",
    description: "Handcrafted seasonal cocktails made with premium spirits and fresh ingredients",
    price: 14.99,
    category: "drinks"
  },
  {
    id: 16,
    name: "Sparkling Water",
    description: "Premium sparkling mineral water",
    price: 5.99,
    category: "drinks",
    dietary: ["vegan", "gluten-free"]
  },
  {
    id: 17,
    name: "Fresh Fruit Smoothie",
    description: "Blend of seasonal fruits with yogurt or plant-based milk",
    price: 7.99,
    category: "drinks",
    dietary: ["vegetarian", "gluten-free"]
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<DietaryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = allMenuItems.filter(item => {
    // Category filter
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    
    // Dietary filter
    const dietaryMatch = 
      selectedDietary === 'all' || 
      (item.dietary && item.dietary.includes(selectedDietary));
    
    // Search filter
    const searchMatch = 
      searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && (selectedDietary === 'all' || dietaryMatch) && searchMatch;
  });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-20 pb-24 bg-restaurant-dark">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80"
              alt="Restaurant ambiance"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container-custom relative z-10 mt-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
              Our Menu
            </h1>
            <div className="w-20 h-1 bg-restaurant-accent mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore our carefully crafted menu featuring the finest seasonal ingredients and innovative culinary techniques.
            </p>
          </div>
        </section>

        {/* Menu Filters and Items */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            {/* Search and Filters */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Search our menu..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                  />
                </div>
                <div className="w-full md:w-1/2 flex gap-4">
                  <select 
                    value={selectedDietary}
                    onChange={(e) => setSelectedDietary(e.target.value as DietaryFilter)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
                  >
                    <option value="all">All Dietary Options</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                  </select>
                </div>
              </div>
              
              {/* Category Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setSelectedCategory('all')}
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  className={selectedCategory === 'all' ? 'bg-restaurant-primary hover:bg-restaurant-secondary' : 'border-gray-300 hover:border-restaurant-primary'}
                >
                  All
                </Button>
                <Button
                  onClick={() => setSelectedCategory('starters')}
                  variant={selectedCategory === 'starters' ? 'default' : 'outline'}
                  className={selectedCategory === 'starters' ? 'bg-restaurant-primary hover:bg-restaurant-secondary' : 'border-gray-300 hover:border-restaurant-primary'}
                >
                  Starters
                </Button>
                <Button
                  onClick={() => setSelectedCategory('mains')}
                  variant={selectedCategory === 'mains' ? 'default' : 'outline'}
                  className={selectedCategory === 'mains' ? 'bg-restaurant-primary hover:bg-restaurant-secondary' : 'border-gray-300 hover:border-restaurant-primary'}
                >
                  Mains
                </Button>
                <Button
                  onClick={() => setSelectedCategory('desserts')}
                  variant={selectedCategory === 'desserts' ? 'default' : 'outline'}
                  className={selectedCategory === 'desserts' ? 'bg-restaurant-primary hover:bg-restaurant-secondary' : 'border-gray-300 hover:border-restaurant-primary'}
                >
                  Desserts
                </Button>
                <Button
                  onClick={() => setSelectedCategory('drinks')}
                  variant={selectedCategory === 'drinks' ? 'default' : 'outline'}
                  className={selectedCategory === 'drinks' ? 'bg-restaurant-primary hover:bg-restaurant-secondary' : 'border-gray-300 hover:border-restaurant-primary'}
                >
                  Drinks
                </Button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex">
                      {item.image && (
                        <div className="w-1/3 mr-4">
                          <div className="aspect-square rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div className={item.image ? "w-2/3" : "w-full"}>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair font-bold text-xl">{item.name}</h3>
                          <span className="font-playfair font-bold text-lg text-restaurant-accent">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.featured && (
                            <span className="bg-restaurant-soft-purple text-restaurant-secondary text-xs px-2 py-0.5 rounded-full">
                              Chef's Choice
                            </span>
                          )}
                          {item.dietary?.includes('vegetarian') && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                              Vegetarian
                            </span>
                          )}
                          {item.dietary?.includes('vegan') && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                              Vegan
                            </span>
                          )}
                          {item.dietary?.includes('gluten-free') && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                              Gluten-Free
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <h3 className="text-xl font-medium text-gray-600 mb-2">No menu items match your criteria</h3>
                  <p className="text-gray-500">Try adjusting your filters or search query</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-restaurant-dark text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Experience Our Culinary Delights?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join us for an unforgettable dining experience with our exquisite menu and impeccable service.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-restaurant-accent hover:bg-restaurant-accent/90">
                <a href="/book">Book a Table</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-dark">
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Menu;
