// Завдання 1
// Отримати масив імен всіх користувачів (поле name).

// const users = [
//   { userName: "Moore Hensley", isActive: true },
//   { userName: "Sharlene Bush", isActive: false},
//   { userName: "Ross Vazquez", isActive: true },
//   { userName: "Elma Head", isActive: false },
//   { userName: "Carey Barr", isActive: false },
//   { userName: "Blackburn Dotson", isActive: true },
//   { userName: "Sheree Anthony", isActive: false },
// ];

// const getUserNames = users.map((user) => user.userName);
// console.log(getUserNames);

// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

// const users = [
//   { userName: "Mango", eyeColor: "blue" },
//   { userName: "Gektor", eyeColor: "green" },
//   { userName: "Mangust", eyeColor: "brown" },
//   { userName: "Arni", eyeColor: "blue" },
//   { userName: "Poly", eyeColor: "brown" },
//   { userName: "Dima", eyeColor: "green" },
// ];

// const filteredEyeColors = users.filter((value) => value.eyeColor === "green")
// console.log(filteredEyeColors);

// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

// const users = [
//   { userName: "Nikita", gender: "male" },
//   { userName: "Emma", gender: "female" },
//   { userName: "Dima", gender: "male" },
// ];

// const filteredGenders = users.filter((value) => value.gender === "female")
// console.log(filteredGenders);

//console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

// const users = [
//   { userName: "Mango", isActive: true },
//   { userName: "Gektor", isActive: false },
//   { userName: "Mangust", isActive: false },
//   { userName: "Arni", isActive: true },
//   { userName: "Poly", isActive: false },
//   { userName: "Dima", isActive: true },
// ];

// const filteredStates = users.filter((value) => value.isActive === false)
// console.log(filteredStates);

//console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

// const users = [
//   { userName: "Sheree Anthony", email: "shereeanthony@kog.com" },
//   { userName: "Elma Head", email: "elmahead@omatom.com" }
// ];

// const filteredByEmail = (users, email) => users.find((value) => value.email === email);
// console.log(filteredByEmail(users, "shereeanthony@kog.com").userName);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
