// Домашня робота

// MODYL 1
// 1 ZAVDANNYA
// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);


// 2 ZAVDANNYA
// let name = "Olga";

// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga


// 3 ZAVDANNYA
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип
// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));


// 4 ZAVDANNYA
// console.log((0.1 * 10 + 0.2 * 10) / 10);


// 5 ZAVDANNYA
// console.log(Math.max(20, 10, 50, 40))


// 6 ZAVDANNYA
// console.log(Math.random() * (4 - 2) + 2);


// 7 ZAVDANNYA
// const message = "Welcome to Bahamas!";
// console.log(message.length);


// 8 ZAVDANNYA
// console.log(message.toUpperCase());


// 9 ZAVDANNYA
// let user = {};
// user.name = "Oleksiy";
// user.age = 29;
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// user["like flowers"] = true;
// console.log(user);


// 10 ZAVDANNYA
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// };




// MODYL 2

// 1 ZAVDANNYA
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(-3)); // true


// 2 ZAVDANNYA
// console.log(Boolean("test"));     // true
// console.log(Boolean('test'));     // true
// console.log(Boolean("qwerty"));   // true
// console.log(Boolean(true));       // true


// 3 ZAVDANNYA
// console.log(10 - 5); // 5
// console.log(10 + 5);  // 15
// console.log(1 - 5); // -4
// console.log(1 + 5); // 6
// console.log(13 - 5); // 8
// console.log(13 + 5); // 18



// 4 ZAVDANNYA
// const value = prompt("Введіть число від 1 до 12").toLowerCase();

// switch (value) {
//     case "1":
//         console.log("Січень");
//         break;
//     case "2":
//         console.log("Лютий");
//         break;
//     case "3":
//         console.log("Березень");
//         break;
//     case "4":
//         console.log("Квітень");
//         break;
//     case "5":
//         console.log("Травень");
//         break;
//     case "6":
//         console.log("Червень");
//         break;
//     case "7":
//         console.log("Липень");
//         break;
//     case "8":
//         console.log("Серпень");
//         break;
//     case "9":
//         console.log("Вересень");
//         break;
//     case "10":
//         console.log("Жовтень");
//         break;
//     case "11":
//         console.log("Листопад");
//         break;
//     case "12":
//         console.log("Грудень");
//         break;

//     default:
//         console.log("Місяць введено неправильно! Введіть число від 1 до 12");
// }


// 5 ZAVDANNYA

// const number = prompt("Введіть число");
// let sum = 0;

// for (let index = 0; index < number.length; index++) {
//     sum += +number[index]
// };
// console.log(sum, 'Сума чисел');


// MODYL 3

// 1 ZAVDANNYA
// const fruts = [
//     { id: 0, name: "Apple" }, { id: 1, name: "Tomat" },
//     { id: 2, name: "Cherry" }, { id: 3, name: "Orange" },
// ]

// let frutsNames = [];

// fruts.map((frut) => frutsNames.push(frut.name));
// console.log(frutsNames);



// 2 ZAVDANNYA
// for (let i = 1; i < 10; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }


// 3 ZAVDANNYA
// let i = 0;
// do {
//     console.log(`цифра ${i}!`);
//     i++;
// } while (i < 5);


// 4 ZAVDANNYA
// let userPrompt = prompt("Введіть число");
// while (userPrompt <= 99) {
//     if (userPrompt !== null) {
//         alert("Введіть число більше 100");
//         userPrompt = prompt("Введіть число");
//     }
//     if (userPrompt == null || userPrompt == '') {
//         break;
//     };
// };


// 5 ZAVDANNYA
// Вирахуйте середній вік
// const girls = [
//     { age: 23, name: "Оля" },
//     { age: 29, name: "Аня" },
//     { age: 10, name: "Юля" },
//     { age: 20, name: "Катя" },
// ];
// console.log(girls);

// let arr = [23, 29, 10, 20];
// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ);


// MODYL 4

// 1 ZAVDANNYA
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили?');
// }


// 2 ZAVDANNYA
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }



// 3 ZAVDANNYA
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
// ask(
//     "Ви згодні?",
//     () => alert("Ви погодились."),
//     () => alert("Ви скасували виконання.")
// );

