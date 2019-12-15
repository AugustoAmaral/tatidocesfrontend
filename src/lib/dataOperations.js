export const prepareEntryForAPI = entry => {
  const { temp, ...rest } = entry;
  return JSON.stringify(rest);
};
