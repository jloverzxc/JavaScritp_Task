const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

const getNewId = (company) => {
maxId = 0;
company.forEach(el => {
  if(maxId < el.id) maxId = el.id
  if(el.departments) {
    el.departments.forEach(el => {
      if(maxId < el.id) maxId = el.id
    })
  }
})
return maxId + 1
}

const getEnterprise = (id) => {
  let enterprise = enterprises.find(el => el.id === id)
  return enterprise ? enterprise : false
}

const getDepartment = (id) => {
  let department
  enterprises.forEach(el => {
    const dep = el.departments.find(el => el.id === id)
    if(dep) department = dep
  })
  return department ? department : false
}

  //1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.
 
    const countInfo = (company) => {
      company.forEach(el => {
        let enterprisesCount = []
        let count = 0
       enterprisesCount.push(el.name)
       if(el.departments) {
      el.departments.forEach(el => {
        count += +el.employees_count
        enterprisesCount.push(`- ${el.name} (${el.employees_count})`)
      })
      enterprisesCount[0] += `(${count})`
       }
       console.log(enterprisesCount.join(`\n`))
      })
       }
       countInfo(enterprises)
       console.log('---------------------')

  //2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

const getEntByDept = (id) => {
  let enterprise
  enterprises.forEach(el => {
    let department
    if(el.departments){
      department = el.departments.find(el => el.id === id)
    }
    if(department) enterprise = el.name
  })
  if(enterprise) return enterprise 
}
   console.log(getEntByDept(7))
   console.log('---------------------')

//3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

const addEnterprise = (name) => {
enterprises.push({
  id: getNewId(enterprises),
  name,
  departments: []
})
}
addEnterprise('Предприятие 4')
  console.log(enterprises)
  console.log('---------------------')

//4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

const addDepartment = (entId, name, count = 0) => {
const enterprise = getEnterprise(entId)
if(enterprise) enterprise.departments.push({
  id: getNewId(enterprises),
  name,
  employees_count: count
})
}
  addDepartment(11,'Отдел маркетинга')
  console.log(enterprises[3])
  console.log('---------------------')

//5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

  const editEnterprise = (entId, entName) => {
 const enterprise = getEnterprise(entId)
 if(enterprise) enterprise.name = entName
  }
  editEnterprise(5,'Новое предприятие 2')
  console.log(enterprises[1])
  console.log('---------------------')

//6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

 const editDepartment = (id, depName) => {
const department = getDepartment(id)
if(department) department.name = depName
 }
 editDepartment(7,'Новый отдел')
 console.log(enterprises[1])
 console.log('---------------------')

//7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

 const deleteEnterprise = (entId) => {
  const index = enterprises.findIndex(el => el.id === entId)
  enterprises.splice(index,1)
 }
 deleteEnterprise(5)
 console.log(enterprises)
 console.log('---------------------')

//8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

const deleteDepartment = (depId) => {
  enterprises.forEach(el => {
    const index = el.departments.findIndex(el => el.id === depId && el.employees_count != 0)
    el.departments.splice(index,1)
  })
}

deleteDepartment(3)
console.log(enterprises[0])
console.log('---------------------')

//9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

const moveEmployees = (currentId,newId) => {
  const current = getDepartment(currentId)
  const newDep = getDepartment(newId)
  if(current && newDep && getEntByDept(currentId) === getEntByDept(newId)){
    newDep.employees_count += current.employees_count
    current.employees_count = 0
  }
}
moveEmployees(2,4)
console.log(enterprises[0])