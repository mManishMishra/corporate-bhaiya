// import { motion } from "framer-motion";
// import { useState } from "react";

// const SignUp = () => {
//   const [form, setForm] = useState({ name: "", email: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(
//       `Welcome, ${form.name}! We've sent a welcome pigeon to ${form.email} 🕊️`
//     );
//     setForm({ name: "", email: "" }); // Reset form
//   };

//   return (
//     <div className="min-h-[80vh] flex glow-card items-center justify-center bg-[var(--brand-bg)] px-4">
//       <motion.div
//         className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md w-full"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
//           Sign Up ✨
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
//               Name
//             </label>
//             <input
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Jane Doe"
//               className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
//               Email
//             </label>
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="jane@example.com"
//               className="w-full px-4 py-2 border rounded-lg dark:bg-zinc-800 dark:border-zinc-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-orange-600 transition"
//           >
//             Sign Up
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default SignUp;

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log("Logged");

    dispatch(
      login({ name: "Manish", email: "manish@example.com", role: "mentor" })
    );
    toast.success("Welcome back, legend!");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--brand-bg)] px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Create Account
        </h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
          />
          <input
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            inputMode="numeric"
            maxLength={10}
            placeholder="Contact Number"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
            onSubmit={handleLogin}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
