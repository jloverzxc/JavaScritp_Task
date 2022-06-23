// Дан массив объектов. Каждый объект является идентификационной карточкой человека. 
// Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

const fs = require('fs')
let jsonData = fs.readFileSync('task2.json')
let idCards = JSON.parse(jsonData)
   const uniqueCards = () => {
    const unique = []
    const map = new Map()
    for (const uniqueData of idCards){
        if(!map.has(uniqueData.name)){
            map.set(uniqueData.name)
            unique.push({
           ...uniqueData 
            })
        }
    }
    console.log(unique)
   }
   uniqueCards()
