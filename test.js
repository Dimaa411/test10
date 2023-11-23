let currentDate = new Date();

let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

let tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);
tomorrow.setHours(7, 0, 0, 0);

console.log("Поточний час:", currentDate.toLocaleTimeString());
console.log("Ви вийдете на роботу о", tomorrow.toLocaleTimeString());
