import ContentPage from "../components/Content";
import heroImg from "../assets/banner4.jpg";

const HeroesGala = () => {
  return (
    <ContentPage
      bannerImage={heroImg}
      title="The Heroes Gala"
      sub-title="JUNE 11 2025 TORONTO"
      description-heading="Celebrating Impact"
      description="
The Heroes Gala is Right To Play’s annual must-attend signature fundraising event, celebrating the global work of the organization to help children and youth rise above adversity. Headquartered in Toronto, Right To Play operates in 13 countries reaching over 5.6 million children and youth through play-based learning programs.

The Heroes Gala is an impactful evening of inspiration and hope, where we bring together Heroes of our movement to celebrate, engage and raise critical funds for the children and youth we support. The event has been awarded numerous awards over the years. Most recently, the Heroes Gala was recognized in 2022 as one of the top 10 benefit events in the U.S. and Canada by BizBash Magazine.

Join us, be inspired and leave feeling like a hero yourself!

Click the link below to purchase a table or ticket to the 2025 Heroes Gala!"
      buttonText="Purchase tickets to the 2025 Heroes Gala"
      buttonLink="/get-ticket"
    />
  );
};

export default HeroesGala;
