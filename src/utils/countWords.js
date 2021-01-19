import countWords from 'count-words';

const STOPWORDS = [
  'this',
  'that',
  'a',
  'an',
  'the',
  'his',
  'her',
  'hers',
  'I',
  'he',
  'she',
  'we',
  'they',
  'you',
  'and',
  'to',
  'in',
  'for',
  'will',
  'yours',
  'ours',
  'theirs',
  'can',
  'should',
  'could',
  'would',
  'at',
  'where',
  'was',
  'were',
  'is',
  'being',
  'has',
  'have',
  'had',
  'with',
  'of',
  'over',
  'by',
  'via',
  'on',
  'be',
  's',
  'as',
];

export default function getCounts(str) {
  const countMap = countWords(str, true);

  const words = [];

  for (const [text, value] of Object.entries(countMap)) {
    if (!STOPWORDS.includes(text)) {
      words.push({
        text,
        value,
      });
    }
  }

  return words;
}
