//------------------------------ ASSIGNMENT 01----------------------------------
//==============================Buliding your friend list========================
// TASK : Create a program that manages a simple friend list.
var friend1 = {
    firstName: "Vaniza",
    lastName: "Choudry",
    id: 408,
};
var friend2 = {
    firstName: "Zunaira",
    lastName: "Khan",
    id: 566,
};
var friend3 = {
    firstName: "Anas",
    lastName: "Kaleem",
    id: 352,
};
var people = {
    friends: [friend1, friend2, friend3]
};
console.log(people);
//----------------------------- ASSIGNMENT 02--------------------
//===========================Manipulating an Array: Rearranging Words.
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
for (var i = 0; i < scrambledArray.length; i++) {
    if (typeof scrambledArray[i] !== "string") {
    }
}
scrambledArray.splice(2, 3);
scrambledArray.unshift(" i ");
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.pop();
scrambledArray.splice(5, 1);
console.log(scrambledArray);
var joinstring = scrambledArray.join(' ');
console.log(joinstring);
//----------------------------ASSIGNMENT 03------------------------------
//===========================Company Product catalog================================
var inventory = [];
var product = {
    name: "corolla",
    model: "2020",
    price: 500000,
    quantity: 1,
};
var product2 = {
    name: "oppo",
    model: "2017",
    price: 19000,
    quantity: 3,
};
var product3 = {
    name: "lenovo",
    model: "2019",
    price: 3000,
    quantity: 5
};
inventory.push(product, product2, product3);
console.log(inventory);
console.log(inventory[2].quantity);
console.log(inventory[0].price);
console.log(inventory[1].name);
// // 2. Student List:
var students = [
    { name: "Amna", seniorStatus: true, completeAssignments: true },
    { name: "Sara", seniorStatus: false, completeAssignments: false },
    { name: "Asad", seniorStatus: false, completeAssignments: true },
    { name: "Laiba", seniorStatus: true, completeAssignments: true },
    { name: "Ali", seniorStatus: false, completeAssignments: false }
];
console.log(students);
// // 3. Find Senior Students with Assignments 
function seniorStudents(students) {
    return students.filter(function (student) { return student.seniorStatus && student.completeAssignments === true; });
}
console.log(seniorStudents(students));
// // 4. Class List Update and removes students who haven't completed their assignments
function removeStudents(student) {
    return students.filter(function (student) { return student.completeAssignments === false; });
}
console.log(removeStudents(students));
