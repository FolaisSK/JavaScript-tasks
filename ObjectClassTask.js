const person = {

	firstName: "Folajimi",
	lastName: "Lawal",
	age: 10

};

person.email = "abc123@gmail.com";

console.log(person);

person.age = 20

console.log(person);

delete person.lastName;

console.log(person);

console.log(person.firstName)
console.log(person["firstName"])





const student = {

	firstName: "Folajimi",
	lastName: "Lawal",
	age: 10

};

student.school = "Semicolon";
student.age = 20
console.log(student)

delete student.age;
console.log(student)
console.log()

console.log(Object.keys(student))
console.log(Object.values(student))
