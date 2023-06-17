const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];
let averageGrade = 0;

grades.forEach((grade, i) => {
  return (averageGrade = averageGrade + grades[i]);
});

console.log(`Średnia ocen ${grades} wynosi ${averageGrade / grades.length}`);

const moreThanFour = grades.filter((grade) => grade >= 4);
console.log(moreThanFour);
