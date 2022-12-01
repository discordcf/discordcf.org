export const getLanguage = (url: string): string => {
  return (url.match(/(?<=\/)[a-z]{2}(?=\/)/g) ?? ["en"])[0];
};

export const getCurrentSection = (path: string) => path.match(/(?<=\/[a-z]{2}\/)[^/]*/g)![0];

export const getCurrentSlug = (path: string) => path.match(/(?<=(learn|reference)\/).*[^/]/g)![0];

export const flattenTopics = (topics: any) => {
  let result = [];

  for (let i = 0; i < topics.length; i++) {
    result.push(...topics[i].items);
  }

  return result;
}

export function getCurrentPrevious(path: string, topics: any) {
  const flattenedTopics = flattenTopics(topics);
  // TODO: complete
}