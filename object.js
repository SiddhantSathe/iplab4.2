const name = "Siddhant"
const email = "siddhant@gmail.com"
const dob = "12/3/2004"

class Person {
    constructor(name, email, dob, phone, address) {
        this.name = name;
        this.email = email;
        this.dob = dob;
    }
    getDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Date of Birth: ${this.dob}`;
    }
}

const person = new Person(name, email, dob);
console.log(person.getDetails());

function personDetails(name, email, dob) {
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.getDetails = function() {
        console.log("Name: ${this.name}, Email: ${this.email}, Date of Birth: ${this.dob}");
    }
}

const person1 = new personDetails(name, email, dob);
person1.getDetails();

const person2 = {
    name: "Siddhant",
    email: "siddhant@gmail.com",
    dob: "12/3/2004",
    getDetails: function() {
        console.log("Name: ${this.name}, Email: ${this.email}, Date of Birth: ${this.dob}");
    }
}
person2.getDetails();

const person3 = new Object();
person3.name = "Siddhant";
person3.email = "siddhant@gmail.com";
person3.dob = "12/3/2004";
person3.getDetails = function() {
    return `Name: ${this.name}, Email: ${this.email}, Date of Birth: ${this.dob}`;
}
console.log(person3.getDetails());

const nonMember = (name, email, dob) => {
    return {
        name: name,
        email: email,
        dob: dob
    }
}