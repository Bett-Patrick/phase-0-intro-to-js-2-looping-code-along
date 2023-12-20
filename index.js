// Code your solutions in this file

function writeCards(namesArray, occasion){
    let cards = []
    for (let i = 0; i < namesArray.length; i++) {
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`
        cards.push(message)
    }
    console.log(cards)
    return cards
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num){
    while(num>=0){
        console.log(num)
        num--
    }
    return num
}
countDown(10)



































        /**for loop example */
// for (let age = 30; age<40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

        /**Using for with Arrays example*/
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


