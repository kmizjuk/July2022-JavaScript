// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let one = "hello world";
// console.log(one.length);
// let second = 'lorem ipsum';
// console.log(second.length);
// let third =  'javascript is cool';
// console.log(third.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let one = "hello world";
// console.log(one.toUpperCase());
// let second = 'lorem ipsum';
// console.log(second.toUpperCase());
// let third =  'javascript is cool';
// console.log(third.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let one = 'HELLO WORLD';
// console.log(one.toLowerCase());
// let second = 'LOREM IPSUM';
// console.log(second.toLowerCase());
// let third = 'JAVASCRIPT IS COOL';
// console.log(third.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//     let str = ' dirty string   ';
// console.log(str.indexOf("d"));
// console.log(str.indexOf("g"));
// console.log(str.substring(1, 13));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(" ");
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arrOfNumbers = [10,8,-7,55,987,-1011,0,1050,0];
// let arrOfStrings = arrOfNumbers.map(value => value + " ");
// console.log(arrOfStrings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// sortNumbs = nums.sort((n1,n2) => {return n1 - n2})
// console.log(sortNumbs);
// sortNumbs = nums.sort((n1,n2) => {return n2 - n1})
// console.log(sortNumbs);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let sortarr = coursesAndDurationArray.sort((cour1, cour2)=> {
//     return cour1.monthDuration - cour2.monthDuration
// });
// console.log(sortarr);

// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {   cardSuit: "spade",
        value: 6,
        color: "black"},
    {   cardSuit: "spade",
        value: 7,
        color: "black"},
    {   cardSuit: "spade",
        value: 8,
        color: "black"},
    {   cardSuit: "spade",
        value: 9,
        color: "black"},
    {   cardSuit: "spade",
        value: 10,
        color: "black"},
    {   cardSuit: "spade",
        value: "ace",
        color: "black"},
    {   cardSuit: "spade",
        value: "jack",
        color: "black"},
    {   cardSuit: "spade",
        value: "queen",
        color: "black"},
    {   cardSuit: "spade",
        value: "king",
        color: "black"},
    {   cardSuit: "diamond",
        value: 6,
        color: "red"},
    {   cardSuit: "diamond",
        value: 7,
        color: "red"},
    {   cardSuit: "diamond",
        value: 8,
        color: "red"},
    {   cardSuit: "diamond",
        value: 9,
        color: "red"},
    {   cardSuit: "diamond",
        value: 10,
        color: "red"},
    {   cardSuit: "diamond",
        value: "ace",
        color: "red"},
    {   cardSuit: "diamond",
        value: "jack",
        color: "red"},
    {   cardSuit: "diamond",
        value: "queen",
        color: "red"},
    {   cardSuit: "diamond",
        value: "king",
        color: "red"},
    {   cardSuit: "clubs",
        value: 6,
        color: "black"},
    {   cardSuit: "clubs",
        value: 7,
        color: "black"},
    {   cardSuit: "clubs",
        value: 8,
        color: "black"},
    {   cardSuit: "clubs",
        value: 9,
        color: "black"},
    {   cardSuit: "clubs",
        value: 10,
        color: "black"},
    {   cardSuit: "clubs",
        value: "ace",
        color: "black"},
    {   cardSuit: "clubs",
        value: "jack",
        color: "black"},
    {   cardSuit: "clubs",
        value: "queen",
        color: "black"},
    {   cardSuit: "clubs",
        value: "king",
        color: "black"},
    {   cardSuit: "heart",
        value: 6,
        color: "red"},
    {   cardSuit: "heart",
        value: 7,
        color: "red"},
    {   cardSuit: "heart",
        value: 8,
        color: "red"},
    {   cardSuit: "heart",
        value: 9,
        color: "red"},
    {   cardSuit: "heart",
        value: 10,
        color: "red"},
    {   cardSuit: "heart",
        value: "ace",
        color: "red"},
    {   cardSuit: "heart",
        value: "jack",
        color: "red"},
    {   cardSuit: "heart",
        value: "queen",
        color: "red"},
    {   cardSuit: "heart",
        value: "king",
        color: "red"},
    {   value: "joker",
        color: "red"},
    {   value: "joker",
        color: "black"},
]
// знайти піковий туз
// let spadeAce = cards.filter(value => {return value.cardSuit === "spade"});
// let ace = spadeAce.filter(value => {return value.value === "ace"});
// console.log(ace);

// всі шістки
// let value6 = cards.filter(value => {return value.value === 6})
// console.log(value6);

// всі червоні карти
// let redCards = cards.filter(value => {return value.color === "red"})
// console.log(redCards);

// всі буби
// let diamond = cards.filter(value => {return value.cardSuit === "diamond"})
// console.log(diamond);

    // - всі трефи від 9 та більше
//  let clubs = cards.filter((value,) => {
//      return value.cardSuit === "clubs"
//  })
//   let splice  = clubs.splice(3,8)
// console.log(splice);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//
// let reduce = cards.reduce((accuumulator, card) => {
//     if (card.cardSuit === "spade") {
//         accuumulator.spades.push(card);
//     }
//     else if (card.cardSuit === "diamond") {
//         accuumulator.diamonds.push(card);
//     }
//     else if (card.cardSuit === "heart") {
//         accuumulator.hearts.push(card);
//     }
//     else if (card.cardSuit === "clubs") {
//         accuumulator.clubs.push(card);
//     }
// return accuumulator},
//
//     {spades:[], diamonds:[], hearts:[], clubs:[] }
// );
// console.log(reduce);