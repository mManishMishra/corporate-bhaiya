// src/components/EditProfileForm.tsx
import { useState, useRef, ChangeEvent } from "react";

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "student", // or "mentor"
    experience: "",
    techStack: "",
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Next step: Dispatch Redux action or send to API
    console.log({ ...formData, profilePic });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Edit Profile
      </h2>

      <div className="flex items-center gap-6">
        <div className="relative w-24 h-24">
          <img
            src={preview || "/placeholder-avatar.png"}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-orange-500 text-white px-2 py-1 text-xs rounded-full shadow hover:bg-orange-600"
          >
            Change
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="input-fx"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input-fx"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="input-fx"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="input-fx"
        >
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>

        {formData.role === "mentor" && (
          <>
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={handleChange}
              className="input-fx"
            />
            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack (comma separated)"
              value={formData.techStack}
              onChange={handleChange}
              className="input-fx"
            />
          </>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
