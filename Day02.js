
// duplicated the array in the java 


let a = [1, 1, 2, 3, 3, 4, 4, 5, 5, 5];

function duplicated(a) {

    let size = a.length;
    let slow = 0;
    for (let fast = 1; fast < size; fast++) {
        if (a[slow] !== a[fast]) {
            slow++;
            a[slow] = a[fast];
        }
    }

    // print unique elements
    for (let i = 0; i <= slow; i++) {
        console.log(a[i]);
    }
}

//duplicated(a);



// Pair with given sum (sorted array)

let pair = [2, 4, 5, 6, 7, 8]; let target = 10;

let size = pair.length;
let check = function pairSum(pair, target, size) {

    let left = 0;
    let right = size;


    while (left < right) {

        let sum = pair[left] + pair[right];
        if (target === sum) return true;
        else if (sum < target) left++;
        else right--;
    }

    return false;
}

console.log(check(pair, target, size))



//7️⃣ Merge two sorted arrays


function mergeSort() {
    let a1 = [2, 4, 6];
    let b1 = [1, 3, 5];
    let temp = [];

    let i = 0, j = 0;

    while (i < a1.length && j < b1.length) {
        if (a1[i] < b1[j]) {
            temp.push(a1[i]);
            i++;
        } else {
            temp.push(b1[j]);
            j++;
        }
    }
    while (i < a1.length) {
        temp.push(a1[i]);
        i++;
    }

    while (j < b1.length) {
        temp.push(b1[i]);
        j++;
    }

    return temp;
}

console.log(mergeSort([1, 3, 5], [2, 4, 6]));


//  sortZeroOne


function sortZeroOne(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        if (arr[left] === 0) {
            left++;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        }
    }
    return arr;
}

console.log(sortZeroOne([0, 1, 1, 0, 1, 0]));



// 3 sum with the array elements 


function sumThrea(arr) {

    let target = 0;
    let size = arr.length;
    let temp = [];
    for (let a = 0; a < size; a++) {

        for (let b = a + 1; b < size; b++) {

            for (let c = b + 1; b < size; c++) {

                if (arr[a] + arr[b] + arr[c] === target) {

                    temp.push(arr[a], arr[b], arr[c]);
                }

            }
        }
    }

    return temp;
}

console.log(sumThrea([-1, 0, 1, 2, -1, -4]));


// three Sum questions 

function sumThree() {
    arr.sort((a, b) => (a - b));
    let result = [];

    for (let i = 0; i < arr.length - 2; i++) {


        // Why length - 2?
        // Because we need 3 numbers:
        // arr[i]      
        // arr[left]      
        // arr[right]
        

        // skip duplicate first elements
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {

            let sum = arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);

                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left--;
                right++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}


