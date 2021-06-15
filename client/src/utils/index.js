export const isEmptyObject = (obj) => {
  if (obj) {
    return Object.keys(obj).length === 0;
  }
  return true; // object is undefined
};
