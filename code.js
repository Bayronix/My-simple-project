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

const messengers = [`facebook`, `instagram`, `twitter`];

const messenger = (localMessenger) => `https://${localMessenger}.com`;

console.log(messenger(`facebook`));

// https:facebook.com
