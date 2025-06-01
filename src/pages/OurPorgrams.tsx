import MockImg from "../assets/mock_interview.jpg";
import MentorImg from "../assets/mentorship.jpg";
import ResumeImg from "../assets/5052521.jpg";
import CoursesImg from "../assets/online_course.jpg";
const cards = [
  {
    // title: "1:1 Mock Interview In Just ₹299",
    // text: "",
    image: MockImg,
    route: "/mock-interview",
    buttonText: "1:1 Mock Interview In Just ₹299",
  },
  {
    image: MentorImg,
    route: "/mentor-program",
    buttonText: "1:1 Mentorship In Just ₹299",
  },
  {
    image: ResumeImg,
    route: "/resume-building",
    buttonText: "1:1 Resume Building In Just ₹299",
  },
  {
    image: CoursesImg,
    route: "/online-courses",
    buttonText: "Online Courses Starting from ₹999",
  },
];

import GodHeader from "../components/GodHeader";
import { FeatureCards } from "../components/TiltCard";

const OurPorgrams = () => {
  return (
    <>
      <GodHeader title="Our Programs" />
      <FeatureCards cards={cards} />
    </>
  );
};

export default OurPorgrams;
