"use client";

import { edit, } from "@/action/ClientActions";
import {  useState } from "react";
import { IoClose } from "react-icons/io5";

const fields = [
  { name: "name", label: "სახელი", type: "text" },
  { name: "company", label: "კომპანია", type: "text" },
  { name: "industry", label: "ინდუსტრია", type: "text" },
  { name: "project", label: "პროექტი", type: "text" },
  { name: "email", label: "ელფოსტა", type: "email" },
  { name: "notes", label: "პროექტის აღწერა", type: "text" },
];

const EditClientModal = ({ client, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Single object for all field values instead of separate states
  const [formData, setFormData] = useState({
  id:       client?.id       ?? null,
  name:     client?.name     ?? "",
  company:  client?.company  ?? "",
  industry: client?.industry ?? "",
  project:  client?.project  ?? "",
  email:    client?.email    ?? "",
  notes:    client?.notes    ?? "",
  status:   client?.status   ?? "active",
});
  

  //  Generic change handler for all text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //  Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try {
      await edit("clients" , formData , "/clients");
      onClose();
      onSuccess();
    } catch (err) {
      setError(err.message ?? "Something went wrong");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">კლიენტის დამატება</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-black cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>

        {/* ✅ onSubmit added to form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">{field.label}</label>
              <input
                name={field.name}
                type={field.type}
                // ✅ This is what makes existing values appear in inputs
                value={formData[field.name]}
                onChange={handleChange} // ✅ updates state
                required
                className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">სტატუსი</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* ✅ Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md py-2 text-sm font-medium disabled:opacity-50"
          >
            {loading ? "იტვირთება..." : "შენახვა"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditClientModal;
