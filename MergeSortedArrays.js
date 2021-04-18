function mergeSortedArrays(arr1, arr2) {

    if ((arr1 && arr1.length > 0) || (arr2 && arr2.length > 0)) {
        let newArray = arr1.concat(arr2);
        return newArray.sort(compareNumbers);
    }
    return 'not arrays'
}

function compareNumbers(a, b) {
    return a - b;
}

function mergeTwo(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a, b) => a - b);
}

function merge(arr1, arr2) {
    const mergeArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 0;
    let j = 0;

    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergeArray.push(array1Item);
            ++i;
            array1Item = arr1[i];
        }
        else {
            mergeArray.push(array2Item);
            ++j;
            array2Item = arr2[j];
        }
    }

    return mergeArray;
}

//mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); [0, 3, 4, 4, 6, 30, 31]
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))
// console.log(mergeTwo([0, 3, 4, 31, 40], [4, 6, 30, 39]))
console.log(merge([0, 3, 4, 31, 40], [4, 6, 30, 39]))