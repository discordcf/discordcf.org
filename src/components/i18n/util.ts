export const getLanguage = (url: string): string => {
  return (url.match(/(?<=\/)[a-z]{2}(?=\/)/g) ?? ["en"])[0];
};
