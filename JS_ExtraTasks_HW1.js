// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const checkAge = (age) => {
if(age < 18){
    console.log('You don’t have access cause your age is ' + age + ' It’s less then ' + 18)
}
else if(age >= 18 && age < 61){
    console.log('Welcome!')
}
else if(age > 61){
    console.log('Keep calm and look Culture channel')
} else console.log('Technical work')
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge(62)
console.log('----------------------')

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

 const checkAge2 = (age) => {
     if(typeof(age) != 'number'){
         console.log('NaN')
     }
    else if(age < 18){
        console.log('You don’t have access cause your age is ' + age + ' It’s less then ' + 18)
    }
    else if(age >= 18 && age < 61){
        console.log('Welcome!')
    }
    else if(age > 61){
        console.log('Keep calm and look Culture channel')
    } else console.log('Technical work')
    }
checkAge2(17)
checkAge2(18)
checkAge2(100)
checkAge2(61)
checkAge2('')
checkAge2(true)
checkAge2(-19)
checkAge2('qwe')
console.log('---------------------')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge3 = (age) => {
    if(isNaN(age) || age == true || age == false){
        console.log('NaN')
    }
   else if(age < 18){
       console.log('You don’t have access cause your age is ' + age + ' It’s less then ' + 18)
   }
   else if(age >= 18 && age < 61){
       console.log('Welcome!')
   }
   else if(age > 61){
       console.log('Keep calm and look Culture channel')
   } else console.log('Technical work')
   }
checkAge3('2')
checkAge3('18')
checkAge3(17)
checkAge3(18)
checkAge3(100)
checkAge3(61)
checkAge3('')
checkAge3(true)
checkAge3(-19)
checkAge3('qwe')

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

