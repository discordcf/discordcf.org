export const getLanguage = (url: string): string => {
  return (url.match(/(?<=\/)[a-z]{2}(?=\/)/g) ?? ["en"])[0];
};

export const getCurrentSection = (path: string): string => path.match(/(?<=\/)[^/]*/g)![0];

export const getCurrentSlug = (path: string): string => path.match(/(?<=(learn|reference)\/).*[^/]/g)![0];

export const flattenTopics = (topics: any): any => {
  const result = [];

  for (let i = 0; i < topics.length; i++) {
    for (let j = 0; j < topics[i].items.length; j++) {
      topics[i].items[j].section = topics[i].section;
    }
    result.push(...topics[i].items);
  }

  return result;
};

export function getPreviousNext(path: string, topics: any): any {
  const flattenedTopics = flattenTopics(topics);
  const currentSlug = getCurrentSlug(path);

  const currentTopicIndex = flattenedTopics.findIndex((t) => t.slug === currentSlug);
  const previous =
    currentTopicIndex > 0 &&
    flattenedTopics[currentTopicIndex - 1].section === flattenedTopics[currentTopicIndex].section
      ? flattenedTopics[currentTopicIndex - 1]
      : undefined;
  const next =
    currentTopicIndex < flattenedTopics.length - 1 &&
    flattenedTopics[currentTopicIndex + 1].section === flattenedTopics[currentTopicIndex].section
      ? flattenedTopics[currentTopicIndex + 1]
      : undefined;

  return [previous, next];
}
