// function countHoursAndMinutes(hours) {
//   const countHours = parseInt(hours / 60);
//   const countMinutes = hours % 60;
//   return `hours: ${countHours}, minutes: ${countMinutes}`;
// }

// console.log(countHoursAndMinutes(145));

// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("hello"));

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(2));

// function reverseString(string) {
//   const reversed = string.split("").reverse().join("");
//   return reversed;
// }

// function fn(a) {
//   if (a === 10) {
//     return "Вірно";
//   } else {
//     return "Невірно";
//   }
// }

// console.log(fn(10));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

// function checkWeather(num) {
//   let result;
//   switch (num) {
//     case 1:
//       result = "зима";
//       break;
//     case 2:
//       result = "весна";
//       break;
//     case 3:
//       result = "літо";
//       break;
//     case 4:
//       result = "осінь";
//       break;
//     default:
//       result = "Введіть число від 1 до 4";
//   }
//   return result;
// }

// console.log(checkWeather(4));

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

// function formatTime(a) {
//   const hours = a / 60;
//   const minutes = a % 60;

// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   ownerName: "Henry",
//   ownerPhone: "982-126-1588",
//   ownerEmail: "henry.carter@aptmail.com",
// };

// const ownerName = apartment.ownerName;
// const ownerPhone = apartment.ownerPhone;
// const ownerEmail = apartment.ownerEmail;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[2];
// console.log(lastTag);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const tags = [];
// const value = [];

// for (const key in book) {

//   const tag = key.split(",").join("");
//   tags.push(tag);

//   const value = book[key];
//   console.log(value);
// }

// console.log(tags);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// function countProps(object) {
//   // first step value
//   const names = {
//     name: object.name,
//     age: object.age,
//     mail: object.mail,
//     isOnline: object.isOnline,
//     score: object.score,
//   };
//   let propCount = 0;
//   const keys = Object.keys(names);

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// function countTotalSalary(salaries) {
//   const salary = {
//     mango: Object.mango(salaries),
//     poly: Object.poly(salaries),
//     alfred: Object.alfred(salaries),
//     kiwi: Object.kiwi(salaries),
//     ajax: Object.ajax(salaries),
//   };
//   const amountOfSalary = Object.value(salary);
//   let totalSalary = 0;
//   for (const key of salaries) {
//     totalSalary.push(key);
//   }
//   return amountOfSalary;
// }

// function countTotalSalary(salaries) {
//   const salary = {
//     mango: salaries["mango"],
//     poly: salaries["poly"],
//     alfred: salaries["alfred"],
//     kiwi: salaries["kiwi"],
//     ajax: salaries["ajax"],
//   };

//   const amountOfSalary = Object.values(salary);

//   let totalSalary = 0;
//   for (const key of amountOfSalary) {
//     totalSalary += key;
//   }

//   return totalSalary;
// }

// const salaries = {
//   mango: 1000,
//   poly: 1500,
//   alfred: 2000,
//   kiwi: 2500,
//   ajax: 3000,
// };

// console.log(countTotalSalary(salaries));

// function countTotalSalary(salaries) {
//   const amountOfSalary = Object.values(salaries);

//   let totalSalary = 0;
//   for (const salary of amountOfSalary) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = Object.value[colors.hex];
// const rgbColors = Object.value[colors.rgb];
// for (const color of colors) {
//   hexColors.push(color);
// }
// return hexColors;

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.rating);
//   }
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
// }

// const productPrice = Object.values(products.price);

// for (const value of products) {
//   if (products.name === productPrice) {
//     console.log(products.price);
//   }
// }

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//     { name: "Invisibility", price: 620 },
//     { name: "Power potion", price: 270 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     return this.potions.price;
//   },
// };

// atTheOldToad.getTotalPrice();

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// function abbrevName(name) {
//   const [firstName, lastName] = name.split(" ");
//   const abbreviatedFirstName = firstName.charAt(0).toUpperCase();
//   const abbreviatedLastName = lastName.charAt(0).toUpperCase();
//   return `${abbreviatedFirstName}.${abbreviatedLastName}`;
// }

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {},
// };

// function getExtremeScores(scores) {
//   const maxNum = Math.max(...scores);
//   const minNum = Math.min(...scores);
//   return `best: ${maxNum}, worst: ${minNum}.`;
// }

// const scores = [90, 85, 75, 95, 80];
// console.log(getExtremeScores(scores));

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   const pizzaPreparationMessage = makePizza(pizzaName);
//   const deliveryMessage = callback(pizzaName);
//   return `${pizzaPreparationMessage}\n${deliveryMessage}`;
// }

// const deliveryCallback = function (pizzaName) {
//   return deliverPizza(pizzaName);
// };

// console.log(makeMessage("Margherita", deliveryCallback));

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });

// function greetGuest(name) {
//   console.log(`Welcome, ${name}!`);
// }

// registerGuest("John", greetGuest);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// }

// makePizza("Ultracheese", deliverPizza);
// makePizza("Royal Grand", deliverPizza);

// function filterArray(numbers, value) {
//   let count = 0; // Ініціалізуємо лічильник

//   numbers.forEach((num) => {
//     if (numbers < value) {
//       count++;
//     }
//   });

//   return count;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function radiusCircle(radius) {
//   const sumRadiusCircle = Math.PI * radius ** 2;
//   return parseFloat(sumRadiusCircle.toFixed(3));
// }

// console.log(radiusCircle(6));

// const messengers = [`facebook`, `instagram`, `twitter`];

// const messenger = (localMessenger) => `https://${localMessenger}.com`;

// console.log(messenger(`facebook`));

// // https:facebook.com

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books
//   .filter((book) => book.rating > MIN_RATING)
//   .map((book) => book.title);
// const booksByAuthor = books;

// console.log(topRatedBooks);

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const colorEye = getUsersWithEyeColor(users, "blue");
// console.log(colorEye);

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users
//     .filter((user) => user.age >= minAge && user.age <= maxAge)
//     .map((user) => user.name);
// };

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// console.log(getUsersWithAge(allUsers, 20, 30));
// console.log(getUsersWithAge(allUsers, 30, 40));

// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive === `true`);
// };
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// const average = totalAveragePlaytimePerGame / players.length;

// return average;

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((a) => a.rating >= MIN_BOOK_RATING)
//   .toSorted((a, b) => a.rating - b.rating)
//   .map((a) => a.author);

// console.log(names);

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log("Invalid email format");
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes("@");
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail("newmail.com"); // "Invalid email format"
// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail("test"); // Помилка

// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     if (price <= this.#maxPrice) {
//       return "Success! Price is within acceptable limits";
//     } else {
//       return "Error! Price exceeds the maximum";
//     }
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// function isIsogram(str) {
//   let strIsogram = [];
//   for (const element of str) {
//     if (element !== strIsogram) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(isIsogram("Dermatoglyphics"));

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice",
// };

// greet.call(context, "Bob");

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// const letMeSeeYourName = (callback) => {
//   const userName = prompt("Введіть своє ім'я");
//   callback(userName);
// };

// const greet = (name) => {
//   console.log(`Привіт ${name}`);
// };

// letMeSeeYourName(greet);

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const usersNames = users.map((user) => user.name);
// console.log(usersNames);

// const getByEyeColors = (users, eyeColor) => {
//   return users.filter((user) => user.eyeColor === eyeColor);
// };

// console.log(getByEyeColors(users, "brown"));

// const getByGender = (users, gender) => {
//   return users.reduce((acc, user) => {
//     if (user.gender === gender) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// };

// console.log(getByGender(users, "male"));

// // Отримати користувача (не масив) по email (поле email, він унікальний).

// const getUserByEmail = (users, email) => users.find((user) => user.email);

// console.log(getUserByEmail(users, "shereeanthony@kog.com"));

// function numbers(number) {
//   return number > 0
//     ? "позитивне"
//     : number < 0
//     ? "негативне"
//     : number == 0
//     ? "нуль"
//     : "";
// }

// console.log(numbers(-1));
// console.log(numbers(+1));
// console.log(numbers(0));

// //  "позитивне", "негативне" або "нуль"

// function aString(string) {
//   return string.match(/[aeiou]/gi).join("");
// }

// console.log(aString("lol"));
// function countLetters(string) {
//   let sumCountLetters = {
//     голосні: 0,
//     приголосні: 0,
//   };
//   for (let letter of string.toLowerCase()) {
//     if (/[a-z]/.test(letter)) {
//       // Виправлено регулярний вираз
//       if (/[aeiou]/i.test(letter)) {
//         // Перевірка, чи є літера голосною
//         sumCountLetters.голосні++;
//       } else {
//         sumCountLetters.приголосні++;
//       }
//     }
//   }
//   return sumCountLetters; // Повертаємо результат усередині функції
// }

// console.log(countLetters("hello")); // Повинно повернути { голосні: 2, приголосні: 3 }
// console.log(countLetters("JavaScript")); // Повинно повернути { голосні: 3, приголосні: 7 }
// ........
// Уявіть, що ви спостерігаєте за грою в волейбол. Вам потрібно написати програму, яка рахує кількість голів кожної команди за кількість подач. У волейболі кожна подача може призвести до забиття голу однією з команд.

// Вхідні дані: Кількість подач (ціле число).

// Вихідні дані: Кількість голів для кожної з двох команд.

// Алгоритм:

// Створіть змінні для кількості голів кожної команди, початково вони рівні нулю.
// Прийміть введення користувача - кількість подач.
// Використовуючи введені дані, обчисліть кількість голів кожної команди.
// Виведіть результат - кількість голів для кожної з команд.

// let teamAScore = 0;
// let teamBScore = 0;

// function calculateGoalsByServes(serves) {
//   for (let i = 0; i < serves; i++) {
//     if (i % 2 === 0) {
//       teamAScore++; // Гол для команди A
//     } else {
//       teamBScore++; // Гол для команди B
//     }
//   }
// }

// // Приклад використання
// const serves = 20; // Припустимо, що було 20 подач
// calculateGoalsByServes(serves);

// // Виведення результату
// console.log("Кількість голів для команди A:", teamAScore);
// console.log("Кількість голів для команди B:", teamBScore);

// let promptN = prompt("Введіть число");
// let promptNumber = parseInt(promptN);

// // Перевірка на те, чи вдалося коректно перетворити введене значення в число
// if (!isNaN(promptNumber)) {
//   let sum = 0;
//   for (let i = 1; i <= promptNumber; i++) {
//     sum += i;
//   }
//   console.log("Сума чисел від 1 до " + promptNumber + " дорівнює " + sum);
// } else {
//   console.log("Введено некоректне число!");
// }

// Задача 1: Обчислення суми чисел

// Завдання: Напишіть програму, яка обчислює суму чисел від 1 до N, де N - це введене користувачем число.
// Рівень складності: Простий.

// let countOfNum = 10;

// for (let i = 1; i <= 10; i++) {
//   console.log(countOfNum * i);
// }

// Задача 2: Таблиця множення

// Завдання: Виведіть таблицю множення від 1 до 10.
// Рівень складності: Простий.
// function isPrime(num) {
//   if (num <= 1) {
//     return "Not a simple num";
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return "Not a simple num";
//     }
//   }
//   return "Simple num";
// }

// console.log(isPrime(10));

// ????????????????????????????????????/

// Задача 3: Перевірка простих чисел

// Завдання: Напишіть програму, яка перевіряє, чи є введене користувачем число простим.
// Рівень складності: Середній.
// console.log("Програма для визначення факторіалу");
// let notFactorial = prompt("Введіть число");
// let factorial = 1; // Ініціалізуємо змінну для збереження факторіалу
// if (!isNaN(notFactorial)) {
//   for (let i = 1; i <= notFactorial; i++) {
//     factorial *= i; // Знаходимо факторіал числа
//   }
//   console.log("Факторіал числа " + notFactorial + " дорівнює " + factorial);
// } else {
//   console.log("Це число а не буква");
// }

// Задача 4: Факторіал числа

// Завдання: Знайдіть факторіал введеного користувачем числа.
// Рівень складності: Середній.
// function isPrime(num) {
//   let primes = [];

//   for (let n of num) {
//     if (n <= 1) {
//       primes.push(n + " is not a prime number");
//       continue;
//     }
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       primes.push(n + " is a prime number");
//     } else {
//       primes.push(n + " is not a prime number");
//     }
//   }
//   return primes;
// }

// console.log(isPrime([5, 10, 15])); // [ '5 is a prime number', '10 is not a prime number', '15 is not a prime number' ]
// console.log(isPrime([6])); // [ '6 is not a prime number' ]

// Задача 5: Пошук простих чисел у діапазоні

// Завдання: Напишіть програму, яка знаходить всі прості числа у заданому діапазоні від A до B.
// Рівень складності: Складний.
//  for (let n of num) повторити

// function numbers(num1, num2) {
//   return num1 + num2;
// }
// console.log(numbers(4, 5));

// Проста:
// Напишіть функцію, яка приймає два числа в якості аргументів і повертає їх суму.

// const massiveOfNumbers = [1, 2, 3, 4, 5];
// let sumOfNumbers = 0;
// for (let i = 0; i < massiveOfNumbers.length; i++) {
//   sumOfNumbers += massiveOfNumbers[i];
// }
// console.log(sumOfNumbers);

// function newPalindrome(string) {
//   return string === string.split("").reverse().join("");
// }

// // Example usage:
// console.log(newPalindrome("racecar")); // true
// console.log(newPalindrome("hello")); // false

// Середня:
// Напишіть функцію, яка перевіряє, чи є задане слово паліндромом. Паліндром - це слово, яке читається однаково зліва направо та справа наліво.

// Легка:
// Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх додатних чисел у масиві.

// function ageOfPerson(age) {
//   const objectValue = {
//     Victor: 25,
//     Alice: 30,
//     Bob: 28,
//     Emily: 22,
//   };

//   const namesWithAge = [];

//   for (const name in objectValue) {
//     if (objectValue[name] === age) {
//       namesWithAge.push(name);
//     }
//   }

//   return namesWithAge;
// }

// // Example usage:
// console.log(ageOfPerson(25)); // Output: ["Victor"]
// console.log(ageOfPerson(30)); // Output: ["Alice"]
// console.log(ageOfPerson(28)); // Output: ["Bob"]
// console.log(ageOfPerson(22)); // Output: ["Emily"]

// Складна:
// Напишіть функцію, яка приймає масив об'єктів з властивістю "вік" і повертає середній вік об'єктів у масиві.

// const searchByClass = querySelectorAll(".ul-selector");
// searchByClass.classList("class");

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  // Make array of elements
  const arrayOfBoxes = [];
  let newWidth = 30;
  let newHeight = 30;

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const randomColor = getRandomHexColor();
      newWidth += 10;
      newHeight += 10;

      const markup = `<div class="box" style="background-color: ${randomColor}; width:${newWidth}px; height:${newHeight}px;"></div>`;
      arrayOfBoxes.push(markup);
    }

    // Render elemnts to DOM
    boxesContainer.innerHTML = arrayOfBoxes.join("");
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Execution...
createButton.addEventListener("click", () => {
  const amountElementsUser = document.querySelector("input").value;
  createBoxes(amountElementsUser);
  document.querySelector("input").value = null;
});
destroyButton.addEventListener("click", destroyBoxes);
