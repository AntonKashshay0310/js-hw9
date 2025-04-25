// 1
function logItems(array) {
  for (let i = 0; i < array.length; i++ ) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

  // 2

  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    return words.length * pricePerWord;
  }
  
  console.log(calculateEngravingPrice("Lovely ring for you", 10));
  

// 3
function findLongestWord(string) {
  const words = string.split(" ");
  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(findLongestWord("Я люблю JavaScript найбільше"));


// 4

function formatString(string) {
  if (string.length < 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}

console.log(formatString("Цей рядок дууууууууууууууууууууууууууууууже довге"));

// 5

function checkForSpam(message) {
  const lower = message.toLowerCase();
  return lower.includes("spam") || lower.includes("sale");
}

console.log(checkForSpam("Huge SALE now!"));
console.log(checkForSpam("Привіт, як справи?"));

// 6

const numbers = [];
let total = 0;

let input = prompt("Введи число або натисни Скасувати");

while (input != null) {
  let number = Number(input);

  if (isNaN(number) === true) {
    alert("Було введено не число, спробуйте ще раз");
  } else {
    numbers.push(number);
  }

  input = prompt("Введи число або натисни Скасувати");
}

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  alert("Загальна сума чисел дорівнює " + total);
}

// 7
const logins = ["user1", "admin", "guest"];

function isLoginValid(login) {
  if (login.length > 4 && login.length <  16) {
    return true;
  } else {
    return false;
  }
}

function isLoginUnique(logins, login) {
  if (logins.includes(login)) {
    return false;
  } else {
    return true;
  }
}

function addLogin(logins, login) {
  if (isLoginValid(login) === false) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (isLoginUnique(logins, login) === false) {
    return "Такий логін уже використовується!";
  }

  logins.push(login);
  return "Логін успішно доданий!";
}

let newLogin = prompt("Введи новий логін:");
let result = addLogin(logins, newLogin);
alert(result);