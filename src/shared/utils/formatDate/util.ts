export const formatDate = (date: string | Date): string => {
  const dateToFormat = new Date(date);

  if (isNaN(Number(dateToFormat.getTime()))) "Неверная дата";

  return dateToFormat.toISOString().split("T")[0];
};
