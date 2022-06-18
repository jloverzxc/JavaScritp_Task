// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

 for (i=1; i <= 10; i++){
     console.log(Math.pow(2, i))
 }
 console.log('--------------')
// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

 const exponentiate = (i) => {
     console.log(Math.pow(2, i))
 }
 exponentiate(1)
 exponentiate(2)
 exponentiate(10)
 exponentiate(14)
 console.log('--------------')

//  2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//  Пример в консоли:
//  :)
//  :):)
//  :):):)
//  :):):):)
//  :):):):):)

 let smile = ''
 for (let i = 0; i <= 4; i++){
     smile += ':)'
     console.log(smile)
 }
  console.log('--------------')
  
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

 const printString = (string, numberOfRows) =>{
     let newString = ''
     for(let i = 1; i <= numberOfRows; i++){
     newString += string
     console.log(newString)
     }
 }
 printString('Hi!',2)
 printString('Everyone', 6)
 console.log('--------------')

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

  const getWordStructure = (word) => {
      const vowels = 'aeiouAEIOU'
      const consonants = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM'
      let vCount = 0
      let cCount = 0
      for (let i = 0; i < word.length; i++){
          if (vowels.indexOf(word[i]) !== -1) vCount += 1
      }
      for (let x = 0; x < word.length; x++){
          if (consonants.indexOf(word[x]) !== -1) cCount += 1
      }
      console.log('Слово',word,'cостоит из',vCount,'гласных и',cCount,'согласных букв')
  }
  getWordStructure('case')
  getWordStructure('Case')
  getWordStructure('Check-list')
  console.log('--------------')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

 const isPalindrom = (word) => {
     word = word.toLowerCase()
     let flag = true
     for (let i = 0, j = word.length - 1; i < word.length; i++, j--){
      if(word[i] != word[j]) flag = false
      break;
     }
     if (flag) console.log('Ялвяется палиндромом')
     else console.log('Не является палиндромом')
 }
 isPalindrom('abba')
 isPalindrom('Abba')
 

