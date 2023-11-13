// 1
function getDegree(num, degree) {
  if (degree == 1) {
      return num;
    } else {
      return num * getDegree(num, degree - 1);
    }
  }
let number = +prompt("Введіть число");
let deg = +prompt("Введіть ступінь числа");
alert(`Число ${number} в ступені ${deg} = ${getDegree(number, deg)}`);
document.write(`Завдання 1 <br> Число ${number} в ступені ${deg} = ${getDegree(number, deg)} "<br>"`);

// 2
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(`Завдання 2 <br> ${arr} <br>`);
alert(`Дано масив ${arr}`);
function removeElement(array, item) {
  return array.splice(array.indexOf(item, 0), 1);
}
item = +prompt("Який елемент видалити, якщо такого елемента не буде, то видалиться останній.");
removeElement(arr, item);
alert(`Масив після видалення елемента ${arr}`);
document.write(`${arr} <br>`);

// 3
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let length = +prompt("Введіть довжину строки");
function generateKey(lgt, characters) {
  let arr = characters.split("");
  let arr1 = [];
  for(let i = 0; i < lgt; i++) {
    arr1.push(arr[Math.round(Math.random() * arr.length)]);
  }
  return arr1.join("");
}
const key = generateKey(length, characters);
document.write(`Завдання 3 <br> ${key}`);