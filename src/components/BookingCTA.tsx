
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BookingCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="section-heading text-white">Reserve Your Table</h2>
          <div className="w-20 h-1 bg-restaurant-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 mb-8">
            Whether it's a romantic dinner, family gathering, or special celebration, we're committed to making your dining experience memorable. Book your table now and savor the extraordinary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-restaurant-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-primary">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Choose Date & Time</h3>
              <p className="text-gray-300">
                Select your preferred date and time for dining with us.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-restaurant-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Specify Party Size</h3>
              <p className="text-gray-300">
                Let us know how many guests will be joining your party.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 bg-restaurant-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-restaurant-primary">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Instant Confirmation</h3>
              <p className="text-gray-300">
                Receive immediate confirmation of your reservation.
              </p>
            </div>
          </div>
          
          <Button asChild className="bg-restaurant-accent hover:bg-restaurant-accent/90 text-white px-10 py-6 text-lg">
            <Link to="/book">
              Book a Table Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
