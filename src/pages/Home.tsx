import Slider from "../components/Slider";
// import FeaturedStory from "./FeaturedStory";
import SignUp from "./Signup";
import OurPorgrams from "./OurPorgrams";
import FlashCard from "../components/FlashCard";
import OfferMarquee from "../components/OfferMarquee";
import { useLimitedTimeOffer } from "../hooks/useLimitedTimeOffer";
import OurMentor from "./OurMentor";

const Home = () => {
  const { OfferMarquee, OfferCard, OfferModal } = useLimitedTimeOffer();

  return (
    <>
      <Slider />
      <OurPorgrams />
      {/* <WhatsNew /> */}

      {/* <OurImpact /> */}
      {/* <FlashCard /> */}
      {/* <OfferMarquee /> */}
      <OurMentor />
      <SignUp />
      {/* <OfferMarquee /> */}
      {/* <OfferModal /> */}
      <main className="mt-20">{/* <OfferCard /> */}</main>
      {/* <HeroSection /> */}
      {/* <FeaturedStory /> */}
    </>
  );
};

export default Home;
