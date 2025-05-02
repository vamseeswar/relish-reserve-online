
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const dishes: Dish[] = [
  {
    id: 1,
    name: "Herb-Crusted Rack of Lamb",
    description: "Tender lamb rack with aromatic herb crust, served with roasted vegetables and mint jus",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    category: "Main"
  },
  {
    id: 2,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice cooked with wild mushrooms and finished with truffle oil",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1673507553582-61b14fccc124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    category: "Main"
  },
  {
    id: 3,
    name: "Pan-Seared Scallops",
    description: "Fresh sea scallops seared to perfection, served with cauliflower puree and crispy pancetta",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1560717845-968823efbee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    category: "Starter"
  },
  {
    id: 4,
    name: "Dark Chocolate Soufflé",
    description: "Light and airy chocolate soufflé with a molten center, served with vanilla bean ice cream",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80",
    category: "Dessert"
  }
];

const FeaturedDishes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? dishes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === dishes.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading">Our Signature Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in our chef's carefully crafted signature dishes, prepared with the finest ingredients and innovative techniques.
          </p>
        </div>

        <div className="lg:flex items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={dishes[activeIndex].image}
                alt={dishes[activeIndex].name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block bg-restaurant-primary text-white px-3 py-1 rounded-full text-sm mb-2">
                  {dishes[activeIndex].category}
                </span>
                <h3 className="text-white text-2xl font-playfair font-bold">{dishes[activeIndex].name}</h3>
                <p className="text-gray-200 mt-1">${dishes[activeIndex].price.toFixed(2)}</p>
              </div>
            </div>

            {/* Dish Navigation */}
            <div className="flex justify-between mt-4">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-restaurant-primary hover:text-white hover:border-restaurant-primary transition-colors"
              >
                &#8592;
              </button>
              <div className="flex space-x-2">
                {dishes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index ? 'bg-restaurant-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-restaurant-primary hover:text-white hover:border-restaurant-primary transition-colors"
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <span className="inline-block bg-restaurant-soft-purple text-restaurant-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Chef's Special
            </span>
            <h3 className="text-3xl font-playfair font-bold mb-4">{dishes[activeIndex].name}</h3>
            <div className="w-20 h-1 bg-restaurant-accent mb-6"></div>
            <p className="text-gray-700 mb-6 text-lg">
              {dishes[activeIndex].description}
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-restaurant-soft-peach flex items-center justify-center text-restaurant-accent mr-3">✓</div>
                <span className="text-gray-700">Made with locally-sourced ingredients</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded-full bg-restaurant-soft-peach flex items-center justify-center text-restaurant-accent mr-3">✓</div>
                <span className="text-gray-700">Prepared by award-winning chefs</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-restaurant-soft-peach flex items-center justify-center text-restaurant-accent mr-3">✓</div>
                <span className="text-gray-700">Perfect balance of flavors and textures</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-restaurant-primary hover:bg-restaurant-secondary">
                <Link to="/menu">
                  View Full Menu
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white">
                <Link to="/book">
                  Book a Table
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
