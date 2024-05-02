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

// const createButton = document.querySelector("[data-create]");
// const destroyButton = document.querySelector("[data-destroy]");
// const boxesContainer = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   // Make array of elements
//   const arrayOfBoxes = [];
//   let newWidth = 30;
//   let newHeight = 30;

//   if (amount >= 1 && amount <= 100) {
//     for (let i = 0; i < amount; i++) {
//       const randomColor = getRandomHexColor();
//       newWidth += 10;
//       newHeight += 10;

//       const markup = `<div class="box" style="background-color: ${randomColor}; width:${newWidth}px; height:${newHeight}px;"></div>`;
//       arrayOfBoxes.push(markup);
//     }

//     // Render elemnts to DOM
//     boxesContainer.innerHTML = arrayOfBoxes.join("");
//   }
// }
// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }

// // Execution...
// createButton.addEventListener("click", () => {
//   const amountElementsUser = document.querySelector("input").value;
//   createBoxes(amountElementsUser);
//   document.querySelector("input").value = null;
// });
// destroyButton.addEventListener("click", destroyBoxes);

// Перший приклад

// task 1

// const sumOfSmallestNum = (...nums) => {
//   const sortedNumbers = nums.toSorted((a, b) => a - b);
//   return sortedNumbers[0] + sortedNumbers[1];
// };

// console.log(sumOfSmallestNum(5, 3, 2, 1, 4));

// task 2
// const isPalindrome = (...strings) => {
//   const reversedStrings = strings.map((str) =>
//     str.split("").reverse().join("")
//   );

//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i] !== reversedStrings[i]) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(isPalindrome("racecar", "level"));

// task 3
// function anagramsString(str1, str2) {
//   if (str1.lenght !== str2.lenght) {
//     return "Not an anagram";
//   }

//   const stringNumber1 = str1.split("").sort().join("");
//   const stringNumber2 = str2.split("").sort().join("");

//   if (stringNumber1 === stringNumber2) {
//     return "Annagram";
//   } else {
//     return "Not an anagram";
//   }
// }
// console.log(anagramsString("part", "trap"));

// task 4

// function FibonacciSequence(num) {
//   let sequence = [];
//   for (let i = 0; i < num; i++) {
//     if (i === 0 || i === 1) {
//       sequence.push(i);
//     } else {
//       sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//   }
//   return sequence;
// }

// console.log(FibonacciSequence(4));

// function minAndMaxNum(num) {
//   const min = num.reduce((a, b) => Math.min(a, b));
//   const max = num.reduce((a, b) => Math.max(a, b));
//   return `Min number ${min}. Max number ${max}`;
// }

// console.log(minAndMaxNum([1, 2, 3, 4, 5]));
// console.log(minAndMaxNum([5, 6, 7, 8, 9]));

// task 1

// const button = document.querySelector(".buttonCreate");

// function buttonMath() {
//   const randomCount = Math.floor(Math.random() * 10) + 1;
//   const randomNumbers = [];

//   for (let i = 0; i < randomCount; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100) + 1);
//   }

//   const text = document.createElement("p");
//   text.textContent = `Випадкові числа: ${randomNumbers}`;
//   document.body.appendChild(text);

//   const min = randomNumbers.reduce((a, b) => Math.min(a, b));
//   const max = randomNumbers.reduce((a, b) => Math.max(a, b));
//   const createNum = document.createElement("p");
//   createNum.textContent = `Мінімальне число: ${min}. Максимальне число: ${max}`;
//   document.body.appendChild(createNum);
// }

// button.addEventListener("click", function () {
//   buttonMath();
// });

// ?
// const ulElement = document.querySelector(".ul_class");

// data.forEach((user) => {
//   const liElement = document.createElement("li");
//   liElement.textContent = `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`;
//   ulElement.appendChild(liElement);
// });

// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const refs = {
//   swapButton: document.querySelector("#swapButton"),
//   leftSwapInput: document.querySelector("#leftSwapInput"),
//   rightSwapInput: document.querySelector("#rightSwapInput"),
// };

// refs.swapButton.addEventListener("click", onSwapButtonClick);

// function onSwapButtonClick(event) {
//   const rightValue = refs.rightSwapInput.value;
//   refs.rightSwapInput.value = refs.leftSwapInput.value;
//   refs.leftSwapInput.value = rightValue;
// }

// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.
// п

// const refs = {
//   passwordInput: document.querySelector("#passwordInput"),
//   passwordButton: document.querySelector("#passwordButton"),
// };

// refs.passwordButton.addEventListener("click", onSwapButtonClick);

// function onSwapButtonClick(event) {
//   if (refs.passwordInput.style.display === "none") {
//     refs.passwordInput.style.display = "block";
//     refs.passwordButton.textContent = "Сховати";
//   } else {
//     refs.passwordInput.style.display = "none";
//     refs.passwordButton.textContent = "Розкрити";
//   }
// }

// При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
// За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
// інформацією про те, яка кнопка була натиснута скільки разів.

// const refs = {
//   button: document.querySelector(".calcButton"),
//   resultButton: document.querySelector(".resultButton"),
//   resultSection: document.querySelector(".resultSection"),
// };

// refs.button.addEventListener("click", onButtonClick);

// let sum = 0;
// const buttonClick = {};

// function onButtonClick(event) {
//   const number = parseInt(event.target.dataset.number);
//   sum += number;
//   buttonClick[event.target.textContent] = event.target.textConten || +1;
//   console.log("Поточна сума:", sum);
// }
// ?????????///

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage); // Storage {ui-theme: "light", length: 1}

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
// Глобальна змінна
// const value = "I'm a global variable";

// function foo() {
//   // Можна звернутися до глобальної змінної
//   console.log(value); // "I'm a global variable"
// }

// foo();
// // Можна звернутися до глобальної змінної
// console.log(value);
// // "I'm a global variable"

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function getShippingMessage(country, price, deliveryFee) {
//   return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// function getElementWidth(content, padding, border) {
//   return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function sumWithDiscount(product, discount) {
//   const sum =
//     parseFloat(product) - (parseFloat(product) * parseFloat(discount)) / 100;
//   return `Sum with discount ${sum.toFixed(2)}`;
// }

// console.log(sumWithDiscount(100, 50));
// console.log(sumWithDiscount(200, 2));

// function temperatureFahrenheit(temp) {
//   const celsius = parseInt(temp);
//   const fahrenheit = celsius * (9 / 5) + 32;
//   return `Temperature on the Celsius temperature scale is ${celsius}, Fahrenheit is ${fahrenheit.toFixed(
//     2
//   )}`;
// }

// console.log(temperatureFahrenheit(19));

// function sumOfStrings(str1, str2) {
//   return parseInt(str1) + parseInt(str2);
// }
// console.log(sumOfStrings("100", "5"));

// const date = new Date();

// console.log(date);

// const date = new Date();
// console.log(date.getTime());

// function doSomethingAsync(callback) {
//   setTimeout(() => {
//     console.log("Робимо щось асинхронно");
//     callback(); // Викликаємо колбек після завершення асинхронної операції
//   }, 1000);
// }

// function finish() {
//   console.log("Операція завершена");
// }

// doSomethingAsync(finish); // Передаємо функцію `finish` як колбек

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   (value) => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   (error) => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
//   .then((value) => console.log(value)) // 1
//   .catch((error) => console.log(error));

// if (null) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if (0) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if (5) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm) {
//   console.log("Mobile screen");
// } else if (screenWidth > sm && screenWidth <= md) {
//   console.log("Tablet screen");
// } else if (screenWidth > md && screenWidth <= lg) {
//   console.log("Desktop screen");
// } else {
//   console.log("Godzilla screen");
// }

// let username = ""; // Assuming username comes from some input field
// username = username || "Guest";
// console.log("Welcome, " + username); // Output: Welcome, Guest

// let count = 0;

// while (count < 20) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(10));

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5));

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   const totaPrice = quantity * pricePerDroid;
//   if (totaPrice < customerCredits) {
//     return `You ordered ${quantity} droids worth ${totaPrice} credits!`;
//   } else {
//     return "Insufficient funds!";
//   }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength) {
//   const sliceMessage = message.slice(0, maxLength);
//   if (sliceMessage.length < message.length) {
//     return sliceMessage + `...`;
//   } else {
//     return sliceMessage;
//   }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function massiveNumbers(massive) {
//   let sum = 0;
//   for (let i = 0; i < massive.length; i++) {
//     sum += massive[i];
//   }
//   return sum;
// }

// console.log(massiveNumbers([1, 2, 3, 4, 5]));

// function reverseString(str) {
//   return str.split("").toReversed().join("");
// }

// console.log(reverseString("lox"));

// function toUpper(array) {
//   const firstWord = array[0].toUpperCase();
//   return firstWord + array.slice(1);
// }

// console.log(toUpper("vlad"));

// function dubleNumeros(...nums) {
//   let massiveOfNum = [];
//   for (let i = 0; i < nums.length; i++) {
//     massiveOfNum.push(nums[i] * nums[i]);
//   }
//   return massiveOfNum;
// }

// console.log(dubleNumeros(1, 3, 4, 5, 6, 8, 9));

// function checkForSpam(message) {
//   const spamMessage = message.toLowerCase();
//   if (
//     spamMessage.includes("spam") ||
//     spamMessage.includes("sale") ||
//     spamMessage.includes("money")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
// function getShippingCost(country) {
//   switch (country) {
//     case "Australia":
//       return "Shipping to Australia will cost 170 credits";
//     case "China":
//       return "Shipping to China will cost 100 credits";
//     case "Chile":
//       return "Shipping to Chile will cost 250 credits";
//     case "Jamaica":
//       return "Shipping to Jamaica will cost 120 credits";
//     default:
//       return "Sorry, there is no delivery to your country";
//   }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// function cicle(...num) {
//   let number = 0;
//   for (let i = 0; i < num.length; i++) {
//     number += num[i];
//   }
//   return number;
// }

// console.log(cicle(1, 2, 3, 4, 5));

// function showStr(...str) {
//   str.forEach((item) => console.log(item));
// }

// showStr([1, 5, 10, 20, 25]);
// showStr(["apple", "banana", "orange", "grape", "kiwi"]);

// function dubbleNum(...num) {
//   let dubble = [];
//   for (let i = 0; i < num.length; i++) {
//     dubble.push(num[i] * num[i]);
//   }
//   return dubble;
// }

// console.log(dubbleNum(1, 2, 3, 4, 5));

// function sumOfNum(...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   return sum;
// }

// console.log(sumOfNum(1, 2, 3, 4, 5));

// function multiplicationMum(num) {
//   for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//       let result = i * j;
//       console.log(`${i} * ${j} = ${result}`);
//     }
//     console.log("\n"); // Порожній рядок між кожними рядками таблиці
//   }
// }

// console.log(multiplicationMum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
