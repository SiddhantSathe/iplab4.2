let name = "Siddhant";
let email = "siddhant@gmail.com";
let dob = "12/3/2004";

class Person {
    constructor(name, age, dob) {
        this.name = name;
        this.email = email;
        this.dob = dob;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Email: ${this.email}, DOB: ${this.dob}`);
    }
}

const person1 = new Person(name, email, dob);
console.log(person1.printDetails());

class Student extends Person {
    constructor(name, email, dob, rollNo, course) {
        super(name, email, dob);

        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
        this.course = course;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Roll No: ${this.rollNo}, Course: ${this.course}`);
    }
}

try {
    const student1 = new Student(name, email, dob, 51, "Information Technology");
    student1.printDetails();  

    const student2 = new Student("stud2", "stud2@gmail.com", "21/03/2004", 0, "Computer Engineering");
    student2.printDetails(); 
} catch (error) {
    console.error("Error:", error.message); 
}