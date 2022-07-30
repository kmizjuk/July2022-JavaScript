// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 23;
if (x!=0) {
    console.log("Вірно");
}
else {
    console.log("Невірно");}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 30;
if (time>0 && time <= 15) {
    console.log("Перша чверть");
}
else if (time>15 && time <=30) {
    console.log("Друга чверть");
}
else if (time>30 && time <=45) {
    console.log("Третя чверть");
}
else if (time>45 && time <=59) {
    console.log("Четверта чверть");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 30 ;
if (day >0 && day<=10) {
    console.log("Перша декада");
}
 else if (day>10 && day <=20) {
     console.log( "Друга декада");
}
 else if ( day>20 && day<=30){
     console.log("Третя декада");
}

 switch ("Friday") {
     case "Monday":
         console.log("Plans for Monday");
         break;
     case "Tuesday":
            console.log("Pnals for Tuesday");
            break;
     case "Wednesday":
         console.log("Plans for Wednesday");
         break;
     case "Thurday":
         console.log("Plans for Thursday");
         break;
     case "Friday":
         console.log("Drink!!!");
         break;
     case "Saturday":
         console.log("To do house chorse");
         break;
     case "Sunday":
         console.log("Relaxxxx");
         break;
     default:
         console.log("Bullshit");
}
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let first = 12;
 let second  = 6;
 if (first>second) {
     console.log(first);
 }
 else if (first=second){
     console.log(first,second);
 }
 else if (first<second){
     console.log(second);
 }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let abc = NaN;
 let check = abc || "default";
 console.log(check);




