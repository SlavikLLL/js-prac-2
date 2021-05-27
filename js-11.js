//11. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество) и вывести результат в консоль

const arr = [1, 2, 3, 7, 6, 9];
let midNumber= 0;
let sum=0;
for(let i=1;i<=arr.length-1;i++){
 sum += arr[i];
 midNumber = sum/arr.length
}
console.log(sum,"сумма");
console.log(arr.length,"количество элементов")
console.log(midNumber,"среднее арифметическое")
