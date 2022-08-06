// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square (a,b){
//     let s = a*b
//     return s
// };
// console.log(square(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squereOfCircle (π,r) {
//     return π * r**2
// };
// console.log(squereOfCircle(3.14,5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cylinderS = (π,h,r) =>{
//     return 2*π*h*r
// };
// console.log(cylinderS(3.14,5,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function arrayElement (array) {
//
// for (let i = 0; i < 11; i++){
//    console.log(array[i])}
// };
// arrayElement(users);

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = (t) => {
//     document.write(`<p>${t}</p>`)
// };
// paragraph("Hello, my name is Khrystyna");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list (l) {
//     document.write(`<ul>`)
//     document.write(`<li>${l}</li>
//                     <li>${l}</li>
//                     <li>${l}</li>`)
//     document.write(`</ul>`)
// }
//  list("Marysa")

 // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list (l,n) {
//     document.write(`<ul>`)
//    for (let g =0; g< n; g++)
//    {document.write(`<li>${l}</li>`)}
//     document.write(`</ul>`)
// }
// list("Marysa",3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arraylist = (array) =>{
//     document.write(`<ul>`)
//     for (let item of array)
//     {document.write(`<li>${item}</li>`)}
//     document.write(`</ul>`)
// };
//  arraylist([5,"Khrystya", true, false, 10, "Okten"]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [{ id: 240599, name: "Khrystyna", age: 23},
//            { id: 240598, name: "Ira", age: 22},
//            { id: 260798, name: "Diana", age: 20}];
//  let object = (array) => {
//      for (let elem of array) {
//          document.write(`<div>${elem.id} - ${elem.name} - ${elem.age}</div>`)
//      }
//  };
//  object(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arrayOfNumbers = [40,2,3,4,5];
// let minNumber = (array) => {
// let min = arrayOfNumbers[0];
// for (let number of arrayOfNumbers){
//     if (number < min){
//         min = number}
//     };
// console.log(min);
// };
// minNumber(arrayOfNumbers);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumOfElements (array) {
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum += arrayElement};
//     return sum;
// };
// console.log(sumOfElements([5, 5, 5]));

