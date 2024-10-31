import Banner from "../components/home/Banner";
import Slider from "../components/home/Slider";
import Services from "../components/home/Services";
import ChooseUs from "../components/home/ChooseUs";
import Reviews from "../components/home/Reviews";

const Home = () => {
  return (
    <>
      <div className="min-w-[390px] mx-auto">
        <div className="max-w-screen-xl mx-auto ">
          <Banner />
        </div>
        <div className="w-full "> 
          <Slider />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <ChooseUs />
        </div>
        <div className="w-full bg-gray-100"> 
          {/* section /#servicios */}
          <div id="servicios" className="max-w-screen-xl mx-auto"> 
            <Services />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <Reviews />
        </div>
      </div>
    </>
  );
}

export default Home