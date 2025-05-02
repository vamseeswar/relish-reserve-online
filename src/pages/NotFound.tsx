
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <span className="font-playfair text-9xl font-bold text-restaurant-primary">404</span>
        </div>
        <h1 className="font-playfair text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-restaurant-primary hover:bg-restaurant-secondary">
            <Link to="/">
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white">
            <Link to="/menu">
              Browse Our Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
