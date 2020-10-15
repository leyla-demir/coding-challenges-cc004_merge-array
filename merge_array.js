const arr1 = [1, 3, 5, 6];
const arr2 = [2, 3, 4];

function mergeArray(arr1, arr2) {
    let result ;
        if (arr1===[]) {
            result = arr2;
        } else if (arr2===[]) {
            result = arr1;
        } else {result = new Array(...arr1, ...arr2) };
        // } else {result = [...arr1, ...arr2] };

        let uniqueResult = [...new Set(result)]

        return uniqueResult.sort((a, b) => a-b);
};

    const result = mergeArray(arr1, arr2);
    console.log(result);