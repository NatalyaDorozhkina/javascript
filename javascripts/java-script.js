// ОПЕРАТОРЫ СРАВНЕНИЯ

let result = 5 > 4; // результат сравнения присваивается переменной result
alert( result ); // true

alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1

alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

alert( 0 === false ); // false, так как сравниваются разные типы

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
// Причина в том, что нестрогое равенство и сравнения `> < >= <=` работают по-разному. 
// Сравнения преобразуют `null` в число, рассматривая его как `0`. 
// Поэтому выражение (3) `null >= 0` истинно, а `null > 0` ложно

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
// Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN, а NaN – 
// это специальное числовое значение, которое возвращает false при любых сравнениях.


let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// Несколько условий
if (year < 2015) {
  alert( 'Это слишком рано...' );
}
else if (year > 2015) {
  alert( 'Это поздновато' );
}
else {
  alert( 'Верно!' );
}

let age = prompt('Возраст?', 18);
// Оператор ?
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

// alert( message );

let company = prompt('Какая компания создала JavaScript?', '');
// Несмотря на то, что такая запись короче, чем эквивалентная инструкция if, она менее читабельна.
(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// ИЛИ
alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

// И
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// НЕ
alert( !true ); // false
alert( !0 ); // true

// ОБЪЕКТЫ
let user1 = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30,        // под ключом "age" хранится значение 30
  "likes birds": true  
};

// СВОЙСТВО ИЗ ПЕРЕМЕННОЙ
function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...другие свойства
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// РАБОТА С IF ELSE
let userInput = prompt("Введите число:");
let number3 = 42;

if (userInput == number3) {
  console.log("Вы ввели число 42 или строку '42'.");
} else {
  console.log("Вы ввели другое значение.");
}

let value = "5";
let number4 = 5;

if (value === number4) {
  console.log("Значения и типы идентичны.");
} else {
  console.log("Значения могут быть равны, но типы разные.");
}
