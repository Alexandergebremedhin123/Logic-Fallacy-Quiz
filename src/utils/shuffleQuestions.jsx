export function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export function getQuestionsByLevel( data,level, count = 10) {
  const shuffled = shuffleArray(data);
  return shuffled.slice(0, count);
}