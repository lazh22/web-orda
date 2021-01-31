// let numbers = [240, 26, 420, 343, 997, 536, 268, 950, 457, 341, 912, 923, 883, 14, 253, 79, 264, 55, 510, 790, 330, 321, 764, 252, 30, 626, 983, 261, 617, 18]
// let odd = numbers.filter((item, i)=>{
//     return item %2;
// });
// let even = numbers.filter((item, i)=>{
//     return item %2 == 0;
// });
// odd = odd.map((item, i)=>{
//     return item **3;
// });
// even = even.map((item, i)=>{
//     return item/((i+1)**2)
// });
// let newNubmers = [];
// even = even.forEach((item, i)=>{
//     newNubmers.push(i)
// });
// odd = odd.forEach((item, i)=>{
//     newNubmers.push(i)
// });
// let serverData = [25, "Hello", 15321, 'a', '2', true, -43.3] 
// let number = serverData.filter((item, i)=>{
//     return typeof item == "number";
// });
// let string = serverData.filter((item, i)=>{
//     return typeof item == "string";
// });
// let boolean = serverData.filter((item, i)=>{
//     return typeof item == "boolean";
// });


let serverData = [24, "User", false, 85, -5, 0, 45, "google.com"]
let [userInfo, digits, url] = [     serverData.filter((item)=>{if (typeof item == "string" && item.includes("com") == false){return item}})  , serverData.filter((item, i)=>{return typeof item == "number"})   , serverData.filter((item)=>{if (typeof item == "string" && item.includes("com") == true){return item}}) ]
console.log(userInfo, digits, url)