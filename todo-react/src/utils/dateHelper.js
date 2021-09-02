export const getDateOnly = (date) => {
  if (date) return new Date(getDateObject(date).toDateString());
  else return new Date(new Date().toDateString());
};

export const getDateObject = (date) => {
  return new Date(date + " ");
};

export const dateCompare = (date1, date2) => {
  if (getDateObject(date1) < getDateObject(date2)) return -1;
  if (getDateObject(date1) > getDateObject(date2)) return 1;
  return 0;
};

export default getDateOnly;
