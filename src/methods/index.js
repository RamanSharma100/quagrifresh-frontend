export const sum = (array) => {
  return array.reduce((a, b) => a + b, 0);
};

export const numberWithCommas = (number) => {
  return number.toString().length > 3
    ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : number.toString();
};
