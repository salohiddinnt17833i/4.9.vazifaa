
//MASALALAR
//1 Masala
// let numArr = [1, 3, 5, 7, 4, 9]
// numArr.sort(function(a, b){
//     return a - b
// })
// console.log(numArr[0]);

// 2 Masala

// let numArr2 = [2, 4, 5, 6, 7, 8, 9, 10];


//3 masala
let numArr = [1, 42, 7, 63, 63,]
let counter = 0;

for (let i = 0; i < numArr.length; i++) {   
    if (numArr[i] % i == 0) {
        counter++   
    }
    if (counter == 2) {
        console.log(numArr[i]);
    }
}

//4 masala
// let numArr2 = [2, 4, 5, 6, 7, 8, 9, 10, 21];
// let counter = 0;
// for (const iterator of numArr2) {
//     if (iterator % 3 == 0) {
//         counter++
//     }
// }
// console.log(counter);