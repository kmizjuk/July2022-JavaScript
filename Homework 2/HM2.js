// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let clothes = ["blazer", "coat", "dress", "jacket", "jeans", "pajamas", "overalls","skirt", "tuxedo", ["swimsuit","tank top","swim trunks"]];
console.log(clothes);
console.log(clothes[0]);
console.log(clothes[1]);
console.log(clothes[2]);
console.log(clothes[3]);
console.log(clothes[4]);
console.log(clothes[5]);
console.log(clothes[6]);
console.log(clothes[7]);
console.log(clothes[8]);
console.log(clothes[9]);
console.log(clothes[9][1]);

// clothes[9]= "tie";
// console.log(clothes);

// // Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Marry Poppins",
    pageCount: 345,
    genre: "novel"};
console.log(book1);
let book2 ={
    title: "The Hound of the Baskervilles",
    pageCount: 480,
    genre: "detective"};
console.log(book2);
let book3 = {
    title: "Persuasion",
    pageCount: 200,
    genre: "novel"};
console.log(book3);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: "Marry Poppins",
    pageCount: 345,
    genre: "novel",
    authors:[{name: "Sir Arthur Conan Doyle", age: 45} ,{name:"Pamela Lyndon Travers", age:40},{name:"Jane Austen", age:40}]};
console.log(book4);
let book5 ={
    title: "The Hound of the Baskervilles",
    pageCount: 480,
    genre: "detective",
    authors:[{name: "Sir Arthur Conan Doyle", age: 45} ,{name:"Pamela Lyndon Travers", age:40},{name:"Jane Austen", age:40}]};
console.log(book5);
let book6 = {
    title: "Persuasion",
    pageCount: 200,
    genre: "novel",
    authors:[{name: "Sir Arthur Conan Doyle", age: 45} ,{name:"Pamela Lyndon Travers", age:40},{name:"Jane Austen", age:40}]};
console.log(book6);

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {   name:"Ira",
        username: "miziuk",
        password: "miziuk01"},
    {   name: "Vira",
        username: "vira2",
        password: 12345},
    {   name: "Ivan",
        username: "ivan3",
        password: "privet"},
    {   name: "Dasha",
        username: "dashka",
        password: "passwor"},
    {   name:  "Masha",
        username: "Mashka",
        password: "123abc"},
    {   name: "Oleg",
        username: "oleg123",
        password: "parol"},
    {   name: "Misha",
        username: "mad000",
        password: 0123456789},
    {   name: "Olya",
        username: "olka",
        password: "olka22"},
    {   name: "Olena",
        username: "onenka2.0",
        password: "abcd0000"},
    {   name: "Inna",
        username: "inna23",
        password: "my.password"}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);







