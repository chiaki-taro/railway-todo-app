const dateToString = (date) => {
  const stringDate = date.replace('T', ' ').replace(':00Z', '');
  return stringDate;
};

export default dateToString;