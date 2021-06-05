// [] array
// {} object

console.log(typeof []) // index = value
console.log(typeof {}) // key = value

const johnArr = ['John', 'Doe', 18]
const johnObj = { fName: 'John', lName: 'Doe', age: 18 }

console.log(johnArr[0], johnArr[1])
console.log(johnObj['fName'], johnObj['lName'])
console.log(johnObj.fName, johnObj.lName)

const field = prompt('Please input field name')
console.log(johnObj[field])
console.log(johnObj.field)
