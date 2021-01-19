import countWords from 'count-words';

const STOPWORDS = [
  'this',
  'that',
  'these',
  'those',
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
  'them',
  'me',
  'my',
  'about',
  'https',
  'http',
  'get',
  'there',
  'rt',
  't',
  'co',
  'it',
  'new',
  'vaccine',
  'but',
  'how',
  'got',
  'who',
  'all',
  'are',
  'fomr',
  'not',
  'yes',
  'no',
];

export default function getCounts(str) {
  const countMap = countWords(str, true);

  const words = [];

  for (let [text, value] of Object.entries(countMap)) {
    if (!STOPWORDS.includes(text)) {
      words.push({
        text,
        value,
      });
    }
  }

  return words;
}
