let numbers = [3, 2651, 123, -5, 78, 16 , 22, 1]
numbers = numbers.filter((item, i)=>{
    return item %2;
});
numbers = numbers.map((item, i)=>{
    return item*10;
})
console.log(numbers)