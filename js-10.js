//10. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

const arr = [1, 2, 3, 4, 5];
let sum=0;
for(let i=1;i<=arr.length-1;i++){
    sum += arr[i] * arr[i];
}
console.log(sum);