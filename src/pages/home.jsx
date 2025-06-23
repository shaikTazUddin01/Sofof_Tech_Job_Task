import HeroArea from "../component/home/hero";
import Category from "../component/home/category";
import Subscribe from "../component/home/subscribe";
import WhatsAppSection from "../component/home/whatsapp-message";

const Home = () => {
  return (
    <div className="relative">
      <HeroArea />
      <Category />
      {/* Right side */}
      <div className="absolute right-12 -bottom-[66px] z-10">
        <WhatsAppSection />
      </div>
      {/* Left side */}
      <div className="absolute -bottom-16 left-0 z-10">
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
