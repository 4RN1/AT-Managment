export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("ka-GE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};