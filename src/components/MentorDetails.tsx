import { useParams, useNavigate } from "react-router-dom";
// import { mentorData } from "../dummyData/Mentor"; // Adjust path if needed
import { ArrowLeft } from "lucide-react"; // Optional
import { useEffect, useState } from "react";
import { MentorData } from "./TiltCard";

const MentorDetail = () => {
  // const { mentorEmail } = useParams();
  // const mentorUrl = `${import.meta.env.VITE_SERVER_URL}/mentor/:${mentorEmail}`;
  // const navigate = useNavigate();

  // const mentor = mentorData.find((m) =>
  //   m.route.toLowerCase().includes(mentorEmail || "")
  // );

  const { mentorId } = useParams();
  const navigate = useNavigate();
  const [mentor, setMentor] = useState<MentorData | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(mentorId, "Mentoremail");

  const mentorUrl = `${import.meta.env.VITE_SERVER_URL}/api/mentor/${mentorId}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMentor = async () => {
      try {
        const res = await fetch(mentorUrl);
        if (!res.ok) throw new Error("Mentor not found");

        const data = await res.json();
        setMentor(data);
      } catch (err) {
        console.error("Error fetching mentor:", err);
        setMentor(null);
      } finally {
        setLoading(false);
      }
    };

    if (mentorId) {
      fetchMentor();
    }
  }, [mentorId]);

  if (!mentor) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-red-600">
        <h2 className="text-3xl font-bold mb-4">Mentor Not Found 😵‍💫</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6 bg-[var(--brand-bg)] text-[var(--brand-text)]">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-orange-500 hover:underline flex items-center gap-1"
      >
        <ArrowLeft size={18} /> Back
      </button>
      {!loading && mentor && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Mentor Image */}
          <div className="max-w-md w-full mx-auto">
            <img
              src={mentor?.image}
              alt={mentor?.name}
              className="rounded-2xl shadow-lg border-2 border-orange-500"
            />
          </div>

          {/* Right: Mentor Details */}
          <div>
            <h1 className="text-4xl font-bold text-orange-500 mb-2">
              {mentor.name}
            </h1>
            <h2 className="text-xl mb-2">{mentor.role}</h2>
            <p className="text-sm  mb-4">
              {mentor.experience} at {mentor.company}
            </p>

            <p className="text-md mb-6 ">{mentor.bio}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                🧠 Technical Skills
              </h3>
              {/* <div className="flex flex-wrap gap-2">
                {mentor &&
                  mentor?.skills?.map((skill, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
              </div> */}
              <div className="flex flex-wrap gap-2">
                {mentor?.skills?.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm cursor-pointer bg-gray-100 dark:bg-slate-700 text-[var(--brand-text)] hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold  mb-2">
                📚 Courses Offered
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {mentor?.courses?.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>

            <a
              href={mentor?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-orange-500 hover:bg-orange-600  font-semibold py-2 px-4 rounded mt-4">
                Connect on LinkedIn
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorDetail;
