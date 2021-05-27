//7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
let arr = [];
for(let i=1;i<=10;i++){
    arr.push(Math.random().toFixed(1)*10);
}
console.log(arr);