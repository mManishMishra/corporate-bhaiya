import HeroBanner from "../components/HeroBanner";
import OurMission from "../assets/about-top.5dffc8b813bb.webp";
import ParagraphBlock from "../components/ParagraphBlock";
import ResponsiveVideo from "../components/Video";
const AboutUs = () => {
  return (
    <>
      <HeroBanner
        title="Our Mission"
        subtitle="To protect, educate, and empower children to rise above adversity using the power of play."
        image={OurMission}
      />
      <ParagraphBlock
        heading="Our Story"
        textAfter="For 25 years, Right To Play has worked in some of the most difficult and dangerous places on earth to help children to stay in school and graduate, resist exploitation and overcome prejudice, keep themselves safe from disease, and heal from the harsh realities of war and abuse."
      />
      <ResponsiveVideo
        src="https://apppack-app-righttoplay-publics3bucket-veclfraq9ykl.s3.amazonaws.com/media/Right_To_Play_20th_Anniversary_Feb_2022.mp4"
        title="20 years of Why To Play"
      />
      <ParagraphBlock
        heading=""
        textAfter="It all began with a boy in a long sleeve t-shirt...

In 1994, Norwegian speed skater Johann Olav Koss led a humanitarian trip to Eritrea. There, he came face-to-face with the realities of life in a country emerging from decades of war – and with the power of play. Amid burned-out tanks, children played together, kicking a shirtball back and forth. The children’s incredible resilience in the face of hopelessness inspired Koss to found Right To Play.

Twenty years on, Right To Play has grown to reach millions of children in 14 countries in Africa, Asia, the Middle East, and Indigenous communities in Canada. We create positive and safe environments where children can learn and succeed, and use play in all its forms to provide rich and engaged learning experiences both inside and outside the classroom.

Our vision is to support a generation of children to learn and develop through play so they can have a safe and joyful childhood and grow into thriving adults."
      />
      <ParagraphBlock
        heading="2001 - 2004"
        textAfter="Our early years are focused on humanitarian needs in Africa, and Asia and the Middle East. Programs launch in Uganda, Tanzania, Mozambique, Mali, Thailand, Rwanda, and the Palestinian Territories, helping 500,000 children to rise each week."
      />
    </>
  );
};

export default AboutUs;
