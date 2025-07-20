import CourseCard from "../components/CoursesCard";
// import DataAnalyst from "../assets/data_bootcamp.jpg";
// import BussinessAnalyst from "../assets/business_analst.jpeg";
// import PythonDeveloper from "../assets/fullstack.jpeg";
// import AIDeveloper from "../assets/ai2.jpg";
import { useEffect, useState } from "react";
// const courses = [
//   {
//     image: DataAnalyst,
//     title: "Data Analyst Mastery",
//     price: "₹2499",
//     startDate: "Aug 10, 2025",
//     duration: "3 months",
//     students: 20,
//     joinUrl: "https://superprofile.bio/vp/corporate-bhaiya-data-analyst",
//   },
//   {
//     image: BussinessAnalyst,
//     title: "Business Analyst Bootcamp",
//     price: "₹2799",
//     startDate: "Aug 15, 2025",
//     duration: "3 months",
//     students: 20,
//     joinUrl: "https://superprofile.bio/vp/corporate-bhaiya-business-analyst",
//   },
//   {
//     image: PythonDeveloper,
//     title: "Python Developer Track",
//     price: "₹1999",
//     startDate: "Aug 20, 2025",
//     duration: "4 months",
//     students: 20,
//     joinUrl: "https://superprofile.bio/vp/corporate-bhaiya-python-developer",
//   },
//   {
//     image: AIDeveloper,
//     title: "AI / ML Developer Program",
//     price: "₹3499",
//     startDate: "Aug 25, 2025",
//     duration: "6 months",
//     students: 20,
//     joinUrl: "https://superprofile.bio/vp/corporate-bhaiya-ai-developer",
//   },
// ];
const coursesUrl = `${import.meta.env.VITE_SERVER_URL}/api/courses`;
const OurCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(coursesUrl);
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();
        setCourses(data); // assuming API returns an array of course objects
      } catch (err) {
        setError("⚠️ Something went wrong while fetching courses.");
        console.error("API fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        🚀 Our Featured Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* {courses.map((course: any, index) => (
          <CourseCard key={index} {...course} />
        ))} */}

        {!loading &&
          !error &&
          courses.map((course: any, index) => (
            <CourseCard key={index} {...course} />
          ))}
      </div>
    </div>
  );
};

export default OurCourses;
