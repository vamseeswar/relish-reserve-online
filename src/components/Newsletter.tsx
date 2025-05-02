
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing!", {
        description: "You're now signed up for our newsletter."
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-restaurant-soft-purple/30">
      <div className="container-custom max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-restaurant-soft-purple opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-restaurant-soft-peach opacity-40"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Content */}
            <div className="md:w-1/2">
              <span className="inline-block bg-restaurant-soft-purple text-restaurant-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Stay Updated
              </span>
              <h2 className="font-playfair text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <div className="w-16 h-1 bg-restaurant-accent mb-6"></div>
              <p className="text-gray-600 mb-6">
                Join our mailing list to receive the latest updates, exclusive offers, and culinary insights from our chef's table.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-restaurant-primary/20 rounded-full flex items-center justify-center text-restaurant-primary mr-2">✓</div>
                  <span className="text-sm text-gray-700">Seasonal specials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-restaurant-primary/20 rounded-full flex items-center justify-center text-restaurant-primary mr-2">✓</div>
                  <span className="text-sm text-gray-700">Event invitations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-restaurant-primary/20 rounded-full flex items-center justify-center text-restaurant-primary mr-2">✓</div>
                  <span className="text-sm text-gray-700">Chef's recipes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-restaurant-primary/20 rounded-full flex items-center justify-center text-restaurant-primary mr-2">✓</div>
                  <span className="text-sm text-gray-700">Exclusive discounts</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-restaurant-primary flex-grow"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-restaurant-primary hover:bg-restaurant-secondary text-white px-6 whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe anytime.
              </p>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1566935367576-41ebfbafce63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" 
                alt="Culinary creation" 
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
