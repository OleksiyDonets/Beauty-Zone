// MODYL 5

// 1 ZAVDANNYA
// const userInfo = {
//     name: "Марія",
//     specialty: "Стоматолог",
//     gpa: 180,
//     missedClass: 1,
//     logInfo: function () {
//         console.group(`${name} info:`);
//         console.log(`Ім'я : ${this.name}`);
//         console.log(`Спеціальність : ${this.specialty}`);
//         console.log(`Середній бал : ${this.gpa}`);
//         console.log(`Кількість пропущених занять : ${this.missedClass}`);
//         console.groupEnd();
//     },
// };
// userInfo.logInfo();


// const userInfo = {
//     name: "name",
//     logInfo: function (missedClass) {
//         console.group(`${name} info:`);
//         console.log(`Ім'я:${this.name}`);
//         console.log(`Спеціальність:${this.specialty}`);
//         console.log(`Середній бал:${this.gpa}`);
//         console.log(`Кількість пропущених занять:${missedClass}`);
//         console.groupEnd();
//     },
// };
// const Vano = {
//     name: "Іван",
//     specialty: "Юрист",
//     gpa: "150",
// }
// userInfo.logInfo.call(Vano, "3");


// const userInfo = {
//     name: "name",
//     logInfo: function (gpa, missedClass) {
//         console.group(`${name} info:`);
//         console.log(`Ім'я:${this.name}`);
//         console.log(`Спеціальність:${this.specialty}`);
//         console.log(`Середній бал:${gpa}`);
//         console.log(`Кількість пропущених занять:${missedClass}`);
//         console.groupEnd();
//     },
// };
// const Oleksiy = {
//     name: "Олексій",
//     specialty: "Економіст",
// }
// userInfo.logInfo.apply(Oleksiy, ["160", "1"]);


// const userInfo = {
//     name: "Марія",
//     specialty: "Стоматолог",
//     gpa: 180,
//     missedClass: 1,
//     logInfo: function () {
//         console.group(`${name} info:`);
//         console.log(`Ім'я : ${this.name}`);
//         console.log(`Спеціальність : ${this.specialty}`);
//         console.log(`Середній бал : ${this.gpa}`);
//         console.log(`Кількість пропущених занять : ${this.missedClass}`);
//         console.groupEnd();
//     },
// };
// const Ann = {
//     name: "Анна",
//     specialty: "Терапевт",
//     gpa: 140,
//     missedClass: 5,
// };
// userInfo.logInfo.bind(Ann)();


// 2 ZAVDANNYA
// Функція для кнопки HTML
// function showHTMLDefinition() {
//     alert("HTML (Hypertext Markup Language) - це мова розмітки, використовується для створення та структурування веб-сторінок.");
//     console.log(showHTMLDefinition);
// };

// Функція для кнопки CSS
// function showCSSDefinition() {
//     alert("CSS (Cascading Style Sheets) - це мова стилів, використовується для стилізації зовнішнього вигляду веб-сторінок.");
//     console.log(showCSSDefinition);
// };
// document.getElementById("htmlBtn").addEventListener("click", showHTMLDefinition);
// document.getElementById("cssBtn").addEventListener("click", showCSSDefinition);

// 3 ZAVDANNYA
// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;
// let goods = "кількість товару";
// let number;

// switch (value) {
//     case "банан":
//         cost = 30;
//         number = 4;
//         alert(`${value} коштує ${cost} гривень за кг , ${goods} ${number}`);
//         break;
//     case "вишня":
//         cost = 58;
//         number = 1;
//         alert(`${value} коштує ${cost} гривень за кг , ${goods} ${number}`);
//         break;
//     case "апельсин":
//         cost = 89;
//         number = 3;
//         alert(`${value} коштує ${cost} гривень за кг , ${goods} ${number}`);
//         break;
//     default:
//         alert(`Товару ${value}, немає в наявності`);
// };