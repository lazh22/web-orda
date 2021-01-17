let fruits = ["Apple", "Pineapple", "Banana", "Tomato"];
for (let i = 0; i < fruits.length; i+=2){
    console.log(fruits[i]);
}
for (let i in fruits){
    console.log(fruits[i])
}
let fruirsRevesed = fruits.reverse();
for (let i in fruits.reverse){
    console.log(fruirsRevesed[i])
}