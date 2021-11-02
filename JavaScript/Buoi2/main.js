// bài 1
function checkElementExist(arr, a) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == a) {
            return true;
        }
    }
    return false;
}
console.log(checkElementExist([1,2,3,4], 4));

// bài 2
function max2Numbers(arr) {
    let n = arr.length;
    if(n == 1) {
        return arr[0];
    }else {
        let arr1 = arr.sort(function(a, b){return (a - b)});
        for(let i = n - 1; i > 0; i--) {
            if(arr1[i] != arr1[i - 1]) {
                return arr1[i - 1]
            }
        }
    }
}
console.log(max2Numbers([1,3,5,2,4,4,6,5,6,5]));
console.log(max2Numbers([10]));

// bài 3
function findMaxLengthElement(arr) {
    let max = arr[0].length;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length >= max) {
            max = arr[i].length;
        }
    }
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length == max) {
         result.push(arr[i])
        }
    }
    return result;
}
console.log(findMaxLengthElement(["aba", "aa", "ad", "c", "vcd", "fsd"]));

// bài 4
function capitalizeString(str) {
    let arr1 = str.split(" ");
    let result = "";
    for(let i = 0; i < arr1.length; i++) {
       result += arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1).toLowerCase() + " ";
    }
    return result.trim();
}
console.log(capitalizeString("chÀo MừnG đẾn với techMaster"));

// bài 5
    function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello world"))

// bài 6
function checkSymmetricString(str) {
    str = str.toLocaleLowerCase().split(" ").join("");
    let arr1 = str.split("").reverse();
        let arr2 = str.split("");
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }
   return true;
}
console.log(checkSymmetricString("Race car"))

