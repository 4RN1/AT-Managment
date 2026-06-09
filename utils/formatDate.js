export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("ka", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};