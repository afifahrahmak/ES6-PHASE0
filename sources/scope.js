// 1
var name = 'Afifah' // Global
if (name.toLowerCase() === "afifah") {
    let kelas = "Brussel-Fox"; // scope if (Local)
    if (true) {
        let name = "Daniel";
        kelas = "Queen-Fox";
    }
    console.log(name); // Afifah
    console.log(kelas); // Queen-Fox
}



// 2
for (var i = 0; i < 2; i++) {

}
for (let j = 0; j < 2; j++) {

}
console.log(i);
console.log(j);




// 3
for (var i = 0; i < 1; i++) {
    if (i == 0) {
        // console.log(a) // error
        console.log(b) // undefined
    }
    while (i < 1) {
        // console.log(a) //error
        console.log(b) // undefined
        do {
            let a = 1
            var b = 2
            // console.log(a) // 1
            console.log(b) // 2
            i++
        } while (i < 1)
        i++
    }
    var b = 4
    var b = 6
    // console.log(a) // error
    console.log(b) // 2
}
b = 5
// console.log(a) // error
console.log(b) // 2
console.log(i)
