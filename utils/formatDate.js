// lib/formatDate.ts
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("ka-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};