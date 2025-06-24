import HeroSection from "../component/home/Hero_section";
import CategorySection from "../component/home/category_section";
import WhatsAppSection from "../component/home/whatsapp_section";
import SubscribeSection from "../component/home/subscribe_section";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <CategorySection />
      {/* Left side */}
      <div className="flex justify-center md:justify-start xl:absolute -bottom-16 left-0 z-20">
        <SubscribeSection />
      </div>
      {/* Right side */}
      <div className="fixed right-[20px] lg:right-[48px] bottom-[120px] lg:bottom-[150px] z-50 ">
        <WhatsAppSection />
      </div>
    </div>
  );
};

export default Home;
