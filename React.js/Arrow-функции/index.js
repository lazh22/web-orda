// let umbers = [3, 2651, 123, -5, 78, 16 , 22, 1]
// umbers = umbers.filter((item, i)=>{
//     return item %2;
// });
// umbers = umbers.map((item, i)=>{
//     return item*10;
// })
// console.log(umbers)


// let arr = ["zxczczxc", "zczxcs"] 
// let [a, b] = arr;
// console.log(a, b)
// arr = [1, 2, 3, 4];
// let [c] = arr;
// let array = [7, 10, 14, 17, 17, 6, 14, 12, 3, 14, 15, 4, 16, 4, 19];
// let [o, e] = [array.filter((item, i)=>{return !item%2}) , array.filter((item, i)=>{return !item%2==0})]
// console.log(o, e)


// let serverData = [25, "Hello", 15321, 'a', '2', true, -43.3] 
// let [boolean, digit, str] = [serverData.filter((item, i)=>{return typeof item == "boolean"}) , serverData.filter((item, i)=>{return typeof item == "number"}) , serverData.filter((item, i)=>{return typeof item == "string"})]
// console.log(boolean,digit,str)

// 1)    Дан массив numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18]
// a.    На основе этого массива создать массивы odd и even в котором будут находится чётный и нечётные числа этого массива (odd – нечетный, even – четный)
// b.    У нечётных чисел, возвести числа в третью степень
// c.    У чётных чисел, разделить число на порядковый номер в массиве в квадрате (например 24 / 3^2 ), порядковый номер считаем с 1, ибо на 0 делить нельзя
// d.    ** Полученные результаты объединить в новый массив newNumbers
let numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18];
let [odd, even] = [numbers.filter((item, i)=>{return (item%2)}).map((item, i)=>{return item**3})    ,      numbers.filter((item, i)=>{return item%2 == 0})].map((item, i)=>{return item/((i+1)**2)})
console.log(odd,even)