
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-restaurant-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-playfair text-2xl mb-4">
              <span className="text-restaurant-primary">Dine</span> & <span className="text-restaurant-accent">Delight</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Experience extraordinary food and ambience in the heart of the city. Our passionate chefs craft delicious memories.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-restaurant-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-restaurant-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-restaurant-accent" />
                <span className="text-gray-300">123 Gourmet Street, Foodie District, City</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-restaurant-accent" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-restaurant-accent" />
                <span className="text-gray-300">info@dinedelight.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-restaurant-accent" />
                <div className="text-gray-300">
                  <p>Mon-Thu: 11am - 10pm</p>
                  <p>Fri-Sun: 11am - 11pm</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-restaurant-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-restaurant-primary transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-restaurant-primary transition-colors">Book a Table</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-restaurant-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-restaurant-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-restaurant-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest offers and culinary events.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary"
              />
              <button
                type="submit"
                className="w-full bg-restaurant-primary hover:bg-restaurant-secondary text-white py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Dine & Delight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
