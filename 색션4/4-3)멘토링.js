function countMentorPairs(tests) {
  let count = 0;
  let M = tests[0].length
  let N = tests.length
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) continue;
      let isMentor = true;
      for (let k = 0; k < M; k++) {
        let mentorRank = tests[k].indexOf(i);
        let menteeRank = tests[k].indexOf(j);
        if (mentorRank >= menteeRank) {
          isMentor = false;
          break;
        }
      }
      if (isMentor) count++;
    }
  }
  return count;
}

const tests = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2]
];

const result = countMentorPairs(tests);
console.log(result);
