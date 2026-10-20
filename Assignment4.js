/*class TestResult {
    constructor(testName, status) {
        this.testName = testName;
        this.status = status;
    }

    showResult() {
        console.log("Test Name:", this.testName);
        console.log("Status:", this.status);
        console.log("");
    }
}

// Create two objects with different test results
const loginTest = new TestResult("Login Test", "Passed");
const checkoutTest = new TestResult("Checkout Test", "Failed");

// Display the results
loginTest.showResult();
checkoutTest.showResult();*/


/////////////////////////////


/*class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog says: Woof Woof");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat says: Meow Meow");
    }
}

// Create objects
const dog = new Dog();
const cat = new Cat();

// Call the overridden methods
dog.makeSound();
cat.makeSound();*/

//////////////////////////////


/*class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.#salary = salary;
    }

    #salary;

    displaySalary() {
        console.log("Salary:", this.#salary);
    }
}

// Create an Employee object
const employee = new Employee("Arun", "Automation", 45000);

// Display employee details
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
employee.displaySalary();*/

//////////////////////////////


class LoginTest {
    constructor(username) {
        this.userName = username;
    }

    displayUser() {
        console.log("Login User:", this.userName);
    }
}

const test = new LoginTest("admin");

test.displayUser();


