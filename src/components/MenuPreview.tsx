
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice cooked with wild mushrooms and finished with truffle oil",
    price: 24.99,
    category: "mains",
    image: "https://images.unsplash.com/photo-1673507553582-61b14fccc124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    featured: true,
    dietary: ["vegetarian"]
  },
  {
    id: 2,
    name: "Pan-Seared Scallops",
    description: "Fresh sea scallops seared to perfection, served with cauliflower puree and crispy pancetta",
    price: 28.99,
    category: "starters",
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Beef Wellington",
    description: "Tender beef fillet wrapped in mushroom duxelles and flaky puff pastry, served with red wine jus",
    price: 36.99,
    category: "mains",
    featured: true
  },
  {
    id: 4,
    name: "Mediterranean Salad",
    description: "Fresh mixed greens with feta cheese, olives, cucumber, and cherry tomatoes in a lemon vinaigrette",
    price: 14.99,
    category: "starters",
    dietary: ["vegetarian"]
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream",
    price: 12.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    featured: true,
    dietary: ["vegetarian"]
  },
  {
    id: 6,
    name: "Berry Panna Cotta",
    description: "Creamy vanilla bean panna cotta topped with fresh seasonal berries and mint",
    price: 11.99,
    category: "desserts",
    dietary: ["vegetarian"]
  }
];

const MenuPreview = () => {
  const starters = menuItems.filter(item => item.category === 'starters');
  const mains = menuItems.filter(item => item.category === 'mains');
  const desserts = menuItems.filter(item => item.category === 'desserts');

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Explore Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in our carefully crafted menu featuring the finest ingredients and innovative culinary techniques.
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="starters" className="text-lg">Starters</TabsTrigger>
            <TabsTrigger value="mains" className="text-lg">Mains</TabsTrigger>
            <TabsTrigger value="desserts" className="text-lg">Desserts</TabsTrigger>
          </TabsList>

          <TabsContent value="starters" className="space-y-6">
            {starters.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </TabsContent>

          <TabsContent value="mains" className="space-y-6">
            {mains.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </TabsContent>

          <TabsContent value="desserts" className="space-y-6">
            {desserts.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-restaurant-primary hover:bg-restaurant-secondary">
            <Link to="/menu">
              View Full Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
      {item.image && (
        <div className="md:w-1/4 h-24 md:h-auto overflow-hidden rounded-lg">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={`${item.image ? 'md:w-3/4' : 'w-full'} flex justify-between`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-playfair font-bold text-xl">{item.name}</h3>
            {item.featured && (
              <span className="bg-restaurant-soft-purple text-restaurant-secondary text-xs px-2 py-0.5 rounded-full">Chef's Choice</span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
          {item.dietary && item.dietary.length > 0 && (
            <div className="flex gap-2">
              {item.dietary.includes('vegetarian') && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Vegetarian</span>
              )}
              {item.dietary.includes('vegan') && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Vegan</span>
              )}
              {item.dietary.includes('gluten-free') && (
                <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full">Gluten-Free</span>
              )}
            </div>
          )}
        </div>
        <div className="font-playfair font-bold text-lg text-restaurant-accent">
          ${item.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;
