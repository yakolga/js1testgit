"use strict"; 

let number = 4.8;

console.log(-4/0);
console.log('string' * 9);

const person = "Alex"; 

const bool = true;


let und; 
console.log(und);

const obj = {
  name: 'Olga', 
  age: 19, 
  isMarried: false
};

// console.log(obj.isMarried);
console.log(obj.isMarried);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[3]);

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

const answers = []; 

// answers[0] = prompt('Как вас зовут?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));

// const user = 'Ivan'; 

// alert(`Hello, ${user}`);

let incr = 20, 
    decr = 12; 
// incr++; 
// decr--;

console.log(incr++); 
console.log(decr--);


const check = true, 
      naxtCheck = false; 

console.log(check && !naxtCheck);