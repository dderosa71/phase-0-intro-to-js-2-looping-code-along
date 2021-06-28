// Code your solutions in this file
for (let age = 30; age < 40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function writeCards(arr,event){
    let new_arr = []
    for (let counter = 0 ; counter < arr.length; counter++){
    new_arr.push(`Thank you, ${arr[counter]}, for the wonderful surprise gift!`)
    }
    return new_arr
}

function countDown(x){
    while (x >= 0){
        console.log(x--)
}
}
