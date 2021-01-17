let boyClub = ['Nikita', 'IGOR', 'MASHA', 'ARTEM', 'NASTYA']
let amongUs = boyClub.map(function (item, i){
    if (item == 'MASHA'){
        console.log(item + " не из нашего клуба!")
        item = 'VLADIMIR'
    }
    if (item == 'NASTYA'){
        console.log(item + " не из нашего клуба!")
        item = 'RUSLAN'
    }
    return item   
})
console.log(amongUs)