
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import AboutSection from '@/components/AboutSection';
import MenuPreview from '@/components/MenuPreview';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';
import Newsletter from '@/components/Newsletter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <AboutSection />
        <MenuPreview />
        <Testimonials />
        <BookingCTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
