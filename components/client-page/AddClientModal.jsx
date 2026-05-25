// components/client-page/AddClientModal.jsx
"use client";
import { addClient } from "@/action/ClientActions";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const fields = [
  { name: "name", label: "სახელი", type: "text" },
  { name: "company", label: "კომპანია", type: "text" },
  { name: "industry", label: "ინდუსტრია", type: "text" },
  { name: "project", label: "პროექტი", type: "text" },
  { name: "email", label: "ელფოსტა", type: "email" },
  { name: "notes", label: "პროექტის აღწერა", type: "text" },
];

const AddClientModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addClient(new FormData(e.target));
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">კლიენტის დამატება</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-black">
            <IoClose size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                required
                className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          ))}

          {/* Status select */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">სტატუსი</label>
            <select
              name="status"
              required
              className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-emerald-500 text-white font-medium py-2 rounded-lg hover:opacity-85 disabled:opacity-50"
          >
            {loading ? "იტვირთება..." : "დამატება"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClientModal;
