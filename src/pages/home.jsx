import HeroSection from "../component/home/Hero_section";
import CategorySection from "../component/home/category_section";
import SubscribeSection from "../component/home/subscribe_section";
import WhatsAppSection from "../component/home/whatsapp_section";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <CategorySection />
      {/* Right side */}
      <div className="absolute right-12 -bottom-[66px] z-50">
        <WhatsAppSection />
      </div>
      {/* Left side */}
      <div className="absolute -bottom-16 left-0 z-50">
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
