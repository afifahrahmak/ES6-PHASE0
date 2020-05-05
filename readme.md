## Table of Content
1. [Execution Context, Hoisting, Scope](#ExecutionContext-Hoisting-Scope)
1. [var, const, dan let](#var-const-dan-let)
    * [var (Old School Javascript - ES5)](#var-old-school-javascript)
    * [const and let (ES6)](#const-and-let-es6)
    * [use strict](#use-strict)
1. [Data Structures](#data-structures)
    * [Passed by Value and Reference](#passed-by-value-and-reference)
1. [Template Literal](#template-literal)
1. [Referensi](#referensi)

## ExecutionContext, Hoisting, Scope
2 phase of Execution Context : 
1. Creation ==> Hoisting
1. Execution

```javascript
console.log(name) // error => reference error
```
```javascript
console.log(name) // undefined = tidak error
var name = ‘Afifah’ 
```
```javascript
var name = ‘Afifah’
console.log(name) // Afifah
```

[https://pythontutor.com/javascript.html#mode=display]

# SCOPE
if, switch, for, while, do-while, function, class, etc..

```javascript
if(name.toLowerCase() === "afifah"){
  let kelas = "Amsterdam-Fox"; // scope if
    if(true){
        let name = "Sofyan";
        kelas = "Dynamic-Fox";
    }
    console.log(name); // Afifah
    console.log(kelas); // Dynamic-Fox
}
```
```javascript
for (var i = 0; i < 1; i++) {
    if (i == 0) {
        console.log(a) // error
        console.log(b) // undefined
    }
    while (i < 1) {
        console.log(a) //error
        console.log(b) // undefined
        do {
            let a = 1
            let a = 3 // error
            var b = 2
            console.log(a) // 1
            console.log(b) // 2
            i++
        } while (i < 1)
        i++
    }
    console.log(a) // error
    console.log(b) // 2
}
console.log(a) // error
console.log(b) // 2 
```

## var, const, dan let

### var (Old School Javascript)
Permasalahan yang ada pada `var`
1. Re-declare variable diperbolehkan di mana saja.
1. Variable seolah *diangkat* ke atas kapan pun (*hoisting*)
1. Scope bermasalah
1. Lupa declare variable itu *dimaafkan*

Code:

Problem 1
```javascript
var variablePertama = 'hello1';
var variablePertama = 'hello2';

var pi = 3.14;
pi = 4.13;
```

Problem 2
```javascript
variableKedua = 'ini adalah value yang diassign ke variable';
var variableKedua;

console.log(variableKedua);
```

Problem 3
```javascript
var variableKetiga = 'angka 3';

if (true) {
  var variableKetiga = 'angka empat';
}

console.log(variableKetiga);
```

Problem 4
```javascript
(function fungsi () {
  variableKeempat = 3;
})();

console.log(variableKeempat);
```

### const and let (ES6)
Please welcome `const` dan `let` untuk menyelesaikan masalah di atas

Solusi 1
```javascript
let variablePertama = 'hello1';
let variablePertama = 'hello2';

const pi = 3.14;
pi = 3.21;
```

Solusi 2
```javascript
variableKedua = 'ini adalah value yang diassign ke variable';
let variableKedua;

console.log(variableKedua);
```

Solusi 3
```javascript
let variableKetiga = 'angka 3';

if (true) {
  let variableKetiga = 'angka empat';
}

console.log(variableKetiga);
```

Solusi 4
```javascript
(function fungsi () {
  let variableKeempat = 3;
})();

console.log(variableKeempat);
```

### use strict
Sebuah kata kunci yang digunakan untuk membuat hidup koding dalam javascript   
menjadi lebih `susah` namun menjadi lebih `aman` seperti:
1. Variable wajib declare (termasuk object)
1. Beberapa kata kunci tidak boleh digunakan menjadi variable
1. Tidak boleh ada nama variable yang sama dalam object / function parameter

Contoh:
```javascript
"use strict"

// Dosa 1
pi = 3.14;
console.log(pi);

// Dosa 2
var static = 5;

// Dosa 3
function fungsiJejadian(param1, param1) { 
  // logic program di sini
}
```

### Passed by Value and Reference
**Warning**   
Tipe data primitif dalam javascript (`Boolean`, `null`, `undefined`, `String`, `number`)   
umumnya bersifat *passed by value*, yaitu value dalam tipe data tersebut akan dikirimkan  
apa adanya.

Code:
```javascript
let paramInt = 5;
let paramString = 'Tulisan';

let copyParamInt = paramInt;
let copyParamString = 'Copyan';

paramInt = 10;
paramString = 'Ubah Tulisan';

console.log(paramInt, paramString, copyParamInt, copyParamString);
```

Kode di atas bila direpresentasikan dalam memori:
| Parameter | Value |
| :-------- | ----: |
| paramInt  | 10     |
| paramString | 'Ubah Tulisan' |
| copyParamInt | 5 |
| copyParamString | 'Copyan' |

Berbeda dengan tipe data Object, yang meliputi `Array`, `Function`, dan `Object` itu  
sendiri bersifat *passed by reference*, yaitu value dalam tipe data tersebut akan dikirimkan  
berupa alamat.


## Template Literal
Membuat `simpel` penulisan output yang `sulit` dibaca dengan banyaknya lambang `+`

Code:
```javascript
let var1 = 'a';
let var2 = 'b';
let var3 = 'c';

console.log('Hasil Outputnya adalah: ' + var1 + ' ' + var2 + ' ' + var3);
console.log(`Hasil Outputnya adalah: ${var1} ${var2} ${var3}`);
```

## Referensi
* [Perbedaan var, const, let - Medium](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)
* [Use Strict - W3Schools](https://www.w3schools.com/js/js_strict.asp)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Value vs Reference - Codeburst](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)