function sumEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0).reduce((a,b)=> a+b,0);
}
console.log(sumEventNumbers([2,3]));
// when i run my work, it adds all those numbers in the array and displays 5 as the answer.