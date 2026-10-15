const scores = [45, -1, 80, 95, 62, -1, 70];

const finalScores = scores
    .filter(score => score >= 0)
    .map(score => Math.min(score + 5, 100))
    .sort((a, b) => b - a);

console.log(finalScores);
// [100, 85, 75, 67, 50]

console.log(scores);
// [45, -1, 80, 95, 62, -1, 70]