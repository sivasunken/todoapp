export const getDateOnly = (date) => {
  if (date) return new Date(getDateObject(date).toDateString());
  else return new Date(new Date().toDateString());
};

export const getDateObject = (date) => {
  return new Date(date + " ");
};

export default getDateOnly;
