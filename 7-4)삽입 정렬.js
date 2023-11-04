function insertionSort(array) {
    const length = array.length;
    for (let i = 1; i < length; i++) {
        let tmp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > tmp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = tmp;
    }
    return array;
}

// 사용 예시
const array = [5, 2, 4, 6, 1, 3];
const sortedArray = insertionSort(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]