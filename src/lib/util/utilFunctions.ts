export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = dayNames[date.getDay()];

  return `${year}.${month}.${day}.(${dayName})`;
};

export const getKeywordsInSentence = (sentence: string) => {
  const regex = /\*\(([^)]+)\)\*/g;
  const words = [];
  let match;

  while ((match = regex.exec(sentence)) !== null) {
    const word = match[1];
    words.push(word);
  }

  return words;
};
