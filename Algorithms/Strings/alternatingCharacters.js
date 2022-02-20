// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
    const array = s.split('');
    const size = array.length;

    let deletionCount = 0;

    for (let i = 0; i < size; i++) {
        if (array[i] === array[i+1]) {
            deletionCount++;
        }
    }

    return deletionCount;
}