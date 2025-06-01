import HeroBanner from "../components/HeroBanner";
import ParagraphBlock from "../components/ParagraphBlock";
import { TiltCard } from "../components/TiltCard";
import { playPrograms } from "../services/playPrograms";
import CountryList from "../components/Countrylist";
import GodHeader from "../components/GodHeader";
import WhyWePlay from "../assets/rajesh-rajput-l311xjAVewI-unsplash.jpg";
import Noelie from "../assets/rashmi-bhatia-l2S599EOErE-unsplash.jpg";
const moreAboutWork = [
  {
    title: "Why Do We Play?",
    text: "Active, playful activities ignite a lifelong love of learning in children, motivating them to explore inside and outside of the classroom. These videos, develop",
    image: WhyWePlay,
    route: "",
    buttonText: "",
  },
  {
    title: "How Noelline Took Her Future Into Her Own Hands",
    text: "After finding her own way back to the classroom after being forced to drop out, Noelline is now a Junior Leader at the Girls’ Club, performing skits that challe",
    image: Noelie,
    route: "",
    buttonText: "",
  },
];

const OurWork = () => {
  return (
    <>
      <HeroBanner
        title="Our Work Is Play"
        subtitle=" It’s at the heart of everything we do"
        image="https://apppack-app-righttoplay-publics3bucket-veclfraq9ykl.s3.amazonaws.com/original_images/Our_Work_header.jpg"
      />
      <ParagraphBlock
        textBefore="Right To Play is a global leader in supporting children’s learning and well-being through play. We harness the power of play to transform children’s lives both inside and outside the classroom."
        heading="Why Play?"
        textAfter="Play is one of the most transformative forces in a child’s life. It’s how children explore and understand the world around them. It’s how they articulate their hopes and dreams, learn to communicate and interact with others, express their emotions, and grow into adulthood.

We believe play should be fun and enjoyable, socially interactive, actively engaging, meaningful, and imaginative.Through play, children learn:"
      />
      <div className="w-full max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 perspective-[1000px]">
        {playPrograms &&
          playPrograms.map((data, index) => (
            <TiltCard key={index} card={data} />
          ))}
      </div>
      <CountryList />
      <GodHeader title="MORE ABOUT OUR WORK" />
      <div className="w-full max-w-screen-xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-[1000px]">
        {moreAboutWork && moreAboutWork.map((data) => <TiltCard card={data} />)}
      </div>
    </>
  );
};

export default OurWork;
