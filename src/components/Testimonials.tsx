
import { useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    position: "Food Critic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    quote: "Dine & Delight surpassed all my expectations. The attention to detail in each dish was remarkable, and the service was impeccable. A truly unforgettable dining experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Robert Chen",
    position: "Regular Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
    quote: "We celebrated our anniversary here and it was perfect. The chef's tasting menu with wine pairings was a culinary journey we won't forget. We'll definitely be back!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    position: "Food Blogger",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3271&q=80",
    quote: "The ambiance, the flavors, the presentation - everything at Dine & Delight creates a perfect harmony. It's clear why they've earned their reputation as the city's finest.",
    rating: 5,
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-restaurant-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-heading text-white">What Our Guests Say</h2>
          <div className="w-20 h-1 bg-restaurant-accent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their dining experience with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-restaurant-dark/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-restaurant-primary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-restaurant-accent text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 3a1 1 0 0 1 2 0l.5 1.5 1.5.5a1 1 0 0 1 0 2l-1.5.5-.5 1.5a1 1 0 0 1-2 0L10.5 7 9 6.5a1 1 0 0 1 0-2l1.5-.5L11 3"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-playfair text-xl font-bold">{testimonials[activeIndex].name}</h3>
                  <p className="text-restaurant-primary">{testimonials[activeIndex].position}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < testimonials[activeIndex].rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={i < testimonials[activeIndex].rating ? "text-restaurant-accent" : "text-gray-400"}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <svg className="text-restaurant-primary w-10 h-10 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391C14.017 10.387 16.318 8 19.642 8c.592 0 1.158.087 1.696.246V21l-7.321-8.452v-7.94A10.93 10.93 0 0025 4.062V3c-3.64 0-7.14 1.892-7.321 5.188V21h-3.662z"></path>
                  <path d="M0 21v-7.391C0 10.387 2.301 8 5.625 8c.592 0 1.158.087 1.696.246V21L0 12.548v-7.94A10.93 10.93 0 0010.982 4.062V3c-3.64 0-7.14 1.892-7.321 5.188V21H0z"></path>
                </svg>
                <p className="text-lg md:text-xl text-gray-200 italic mb-6">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-restaurant-primary hover:text-white hover:border-restaurant-primary transition-colors"
              >
                &#8592;
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index ? 'bg-restaurant-primary' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-restaurant-primary hover:text-white hover:border-restaurant-primary transition-colors"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
