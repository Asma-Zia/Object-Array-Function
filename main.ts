//------------------------------ ASSIGNMENT 01----------------------------------
//==============================Buliding your friend list========================
// TASK : Create a program that manages a simple friend list.

let friend1={
    firstName: "Vaniza",
    lastName: "Choudry",
    id: 408,
}

let friend2= {
    firstName: "Zunaira",
    lastName: "Khan",
    id: 566,
}

let friend3= {
    firstName: "Anas",
    lastName: "Kaleem",
    id: 352,
}
 let people={
    friends: [friend1, friend2, friend3]
 }

 console.log(people);


 //----------------------------- ASSIGNMENT 02--------------------
 //===========================Manipulating an Array: Rearranging Words.
 
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

for (let i = 0; i < scrambledArray.length; i++) {
    if (typeof scrambledArray[i] !== "string") {

    }
}

scrambledArray.splice(2, 3);
scrambledArray.unshift(" i ");
scrambledArray.splice( 1, 0, "am", "a");
scrambledArray.pop();
scrambledArray.splice( 5, 1 );
console.log(scrambledArray)

const joinstring = scrambledArray.join(' ');
console.log(joinstring)


//----------------------------ASSIGNMENT 03------------------------------
//===========================Company Product catalog================================

let inventory:Product[]=[];

type Product={
    name:string,
    model:string,
    price:number,
    quantity:number,
}

let product:Product={
    name:"corolla",
    model:"2020",
    price:500000,
    quantity:1,
};

let product2:Product={
    name:"oppo",
    model:"2017",
    price:19000,
    quantity:3,
};

let product3:Product={
    name:"lenovo",
    model:"2019",
    price:3000,
    quantity:5
};

inventory.push(product,product2,product3)
console.log(inventory);
console.log(inventory[2].quantity);
console.log(inventory[0].price);
console.log(inventory[1].name);


//---------------------------Asignment 04-----------------------------------
//============================== Student List Organizer===========================

interface Student{
    name:string,
    seniorStatus:boolean,
    completeAssignments:boolean,
}


let students: Student[] = [
    {name: "Amna", seniorStatus: true, completeAssignments: true},
    {name: "Vaniza", seniorStatus: false, completeAssignments: false},
    {name: "Asma", seniorStatus: false, completeAssignments: true},
    {name: "Amaar", seniorStatus: true, completeAssignments: true},
    {name: "Ali", seniorStatus: false, completeAssignments:false}
];
console.log(students);


function seniorStudents(students:Student[]) {
    return students.filter(student=>student.seniorStatus && student.completeAssignments===true)    
}
console.log(seniorStudents(students));


function removeStudents(student:Student[]) {
    return students.filter(student=>student.completeAssignments===false)
}
console.log(removeStudents(students));





















