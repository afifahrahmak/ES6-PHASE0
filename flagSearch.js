/**
 * Diberikan sebuah input string. Buatlah sebuah kode program yang akan menghitung berapa banyak huruf konsonan pada input tersebut.
 */

let input = 'namaku adalah acong';
const kamus = 'aeiou';
let count = 0;

for (let i = 0; i < input.length; i++){
    let isVokal = true

    for (let j = 0; j < kamus.length; j++){
        if (input[i] == kamus[j]) {
            isVokal = false
        }
    }

    if (!isVokal) {
        count++
    } 
}

console.log(count);

//another flagging example to stop loop-while instead break
let notFinish = false
let step = 0
while (!notFinish) {
    step++
    if (step === 100) {
        notFinish = true
        //break
        console.log("finish")
    }
}