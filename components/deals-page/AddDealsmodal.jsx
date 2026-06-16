"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { add } from "@/action/ClientActions";

const typeValues = [
  { value: "income", label: "შემოსავალი" },
  { value: "expense", label: "ხარჯი" },
];

const paymentMethods = [
  { value: "cash", label: "ნაღდი" },
  { value: "card", label: "ბარათი" },
  { value: "bank_transfer", label: "საბანკო გადარიცხვა" },
];

const statusValues = [
  { value: "pending", label: "მუშავდება", default: true },
  { value: "paid", label: "გადახდილი", default: false },
  { value: "cancelled", label: "გაუქმებული", default: false },
];

const AddDealsModal = ({ clients = [], onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = {
        client_id: e.target.client_id.value, // ← was "company"
        title: e.target.service.value, // ← was "service", column is "title"
        type: e.target.type.value,
        payment_method: e.target.payment_method.value,
        status: e.target.status.value,
        amount: e.target.amount.value,
      };
      await add("deals", formData, "/deals");
        onClose()
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-10 mt-5">
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold">ტრანზაქციის დამატება</h2>
            <button
              onClick={() => onClose()}
              className="text-zinc-400 hover:text-black"
            >
              <IoClose size={22} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">კლიენტი</label>

              <select
                name="client_id"
                className="border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
              >
                {clients.map((clients) => (
                  <option key={clients.id} value={clients.id}>
                    {clients.company}
                  </option>
                ))}
              </select>
            </div>
            {/* Title */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">სერვისი</label>
              <input
                name="service"
                type="text"
                required
                className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">ოპერაციის ტიპი</label>
              <select
                name="type"
                className="border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-emerald-500"
              >
                {typeValues.map((type, index) => (
                  <option key={index} value={type.value}>
                    {type?.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">გადახდის ტიპი</label>
              <select
                name="payment_method"
                className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
              >
                {paymentMethods.map((type, index) => (
                  <option key={index} value={type.value}>
                    {type?.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">სტატუსი</label>
              <select
                name="status"
                className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
              >
                {statusValues.map((type, index) => (
                  <option
                    key={index}
                    value={type.value}
                    defaultValue={type?.default}
                  >
                    {type?.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-zinc-500">თანხა</label>
              <input
                name="amount"
                type="number"
                step="0.01"
                min="0"
                required
                className="border border-zinc-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500"
              />
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
    </div>
  );
};

export default AddDealsModal;
