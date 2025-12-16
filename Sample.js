let ar = [3, 4, 5, 7, 3, 6, 7];


// reverse array in the java
function check(ar) {
    let size = ar.length;
    let right = size - 1;
    for (let left = 0; left < size; left++) {
        if (left < right) {
            let temp = ar[left];
            ar[left] = ar[right];
            ar[right] = temp;
            right--;
        }
    }

    for (let a = 0; a < size; a++) {
        console.log(ar[a]);
    }
}

//check(ar);
// palidrome number
let ar1 = [1, 2, 1, 2, 1, 2];

function isPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (ar1[left] !== ar1[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

//console.log("Is palindrome:", isPalindrome(ar1));
// move to zero 
let a2 = [0, 1, 0, 3, 12];
let size = a2.length;

function moveToEnd(a2, size) {
    let slow = 0;
    for (let fast = 0; fast < size; fast++) {
        if (a2[fast] != 0) {
            a2[slow] = a2[fast];
            slow++;
        }

    }


    while (slow < size) {
        a2[slow] = 0;
        slow++;
    }

    for (let a = 0; a < size; a++) {
        console.log(a2[a]);
    }
}

//moveToEnd(a2, size);

// remove duplicates from the array 

function duplicatedNumber() {
    let arr = [1, 1, 1, 2, 2, 3, 5, 5, 4, 4];
    let slow = 0;
    let size = arr.length;

    for (let fast = 1; fast < size; fast++) {

        if (arr[slow] !== arr[fast]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    // print unique elements
    for (let i = 0; i <= slow; i++) {
        console.log(arr[i]);
    }
}

//duplicatedNumber();

// Pair with given sum (sorted array)

let pair = [2, 4, 5, 6, 7, 8]; let target =10;

function PairTwoSum(pair, target) {

    let left = 0;
    let right = pair.length - 1;

    while(left < right){
        let sum = pair[left] + pair[right];
        if(sum === target) return true;
        if(sum < target) left++;
        else right--;

    }
    return false;
}

let checkPair = PairTwoSum(pair, target);
console.log(checkPair, "This is the change in the code");


//