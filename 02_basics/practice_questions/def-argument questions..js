 1. Function with Default Arguments


function greet(name = "Guest", message = "Welcome!") {
    return `${name}, ${message}`;
}

console.log(greet("Alice"));
console.log(greet());


What will be the output of the above code?
Alice welcome will be the output


 2. Rest Operator in Function Arguments


function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10));


What will be the output of the above code?

6
15


 3. Positional vs Named Arguments


function displayInfo(firstName, lastName, age) {
    return `${firstName} ${lastName} is ${age} years old.`;
}

console.log(displayInfo("John", "Doe", 30));
console.log(displayInfo("Jane", "Smith", 25));

John Doe is years 30 old
Jane Smith is 25 years old

What will be the output of the above code?



 4. Object with Functions


const person = {
    name: "Alex",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet());


What will be the output of the above code?

Hello, my name is Alex

 5. Closures with Function Returning Function


function outerFunc(outerValue) {
    return function innerFunc(innerValue) {
        return outerValue + innerValue;
    };
}

const addFive = outerFunc(5);
console.log(addFive(10));
console.log(addFive(3));
5 * 10 = 50
3 *  5 = 15

What will be the output of the above code?



 6. Scope with Nested Functions


let outerVar = "I am outside";

function outer() {
    let outerVar = "I am inside";
    function inner() {
        return outerVar;
    }
    return inner();
}

console.log(outer());


What will be the output of the above code?

I am inside

 7. Default Arguments with Rest Operator


function multiply(factor = 2, ...numbers) {
    return numbers.map(num => num * factor);
}

console.log(multiply(3, 1, 2, 3));
console.log(multiply(undefined, 4, 5));


What will be the output of the above code?



 8. Rest Parameters with Positional Arguments


function combine(first, second, ...rest) {
    return [first, second, ...rest];
}

console.log(combine(1, 2, 3, 4, 5));
console.log(combine("a", "b", "c"));


What will be the output of the above code?
First = 1
Second = 2

Rest = 3 4 5


first = a
second = b

Rest = c;


 9. Object with Functions and Closures
const counter = {
    count: 0,
    increment() {
        return ++this.count;
    },
    reset() {
        return this.count = 0;
    }
};

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());

console.log(counter.increment());


What will be the output of the above code?

1
2
0
1

 10. Scope and Default Arguments


let x = 10;

function testScope(a, b = x) {
    let x = 20;
    return a + b;
}

console.log(testScope(5));
15//

What will be the output of the above code?


 11. Rest Operator with Arrow Functions


const joinStrings = (...strings) => strings.join(" ");

console.log(joinStrings("Hello", "World"));
console.log(joinStrings("", "is", "awesome"));


What will be the output of the above code?

Hello World
Hello World, is awesome


 12. Function with Multiple Default Arguments


function calculateArea(length = 5, width = 10) {
    return length * width;
}

console.log(calculateArea(7));
console.log(calculateArea());


What will be the output of the above code?

70
50

 13. Rest Operator with No Arguments


function logAll(...args) {
    return args.length;
}

console.log(logAll());
console.log(logAll(1, 2, 3));


What will be the output of the above code?

0
3

 14. Function Expression with Default Parameters


const multiply = function(a = 1, b = 2) {
    return a * b;
};

console.log(multiply(3, 4));
console.log(multiply(5));


What will be the output of the above code?


12
10
 15. Closure with Counter


function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


What will be the output of the above code?

1
2
3



 16. Scope of Variables in Nested Functions


let name = "Outside";

function outerFunction() {
    let name = "Inside";
    function innerFunction() {
        return name;
    }
    return innerFunction();
}

console.log(outerFunction());


What will be the output of the above code?


Inside

 17. Object Method and `this` Keyword


const car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    }
};

const getBrand = car.getBrand();
console.log(getBrand);


What will be the output of the above code?
Toyota


 18. Rest Operator with Mixed Parameters


function listColors(color1, color2, ...otherColors) {
    return otherColors;
}

console.log(listColors("Red", "Blue", "Green", "Yellow"));


What will be the output of the above code?

Green Yellow

 19. Default Arguments and Undefined


function displayMessage(message = "Hello") {
    return message;
}

console.log(displayMessage(undefined));
console.log(displayMessage("Hi"));


What will be the output of the above code?


Hello

Hi
 20. Closure with Outer Function Arguments


function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));



What will be the output of the above code?

15


 21. Scope of Variables in Function Expressions


let value = 10;

const calculate = function(a) {
    let value = 20;
    return a + value;
};

console.log(calculate(5));
console.log(value);


What will be the output of the above code?


25
10
 22. Rest Parameters with Spread Operator


function sumNumbers(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];
console.log(sumNumbers(...numbers));


What will be the output of the above code?


// 6 
 23. Positional and Named Parameters with Default Values


function displayUser(name = "Unknown", age = 18) {
    return `${name} is ${age} years old`;
}

console.log(displayUser("John", 25));
console.log(displayUser(undefined, 30));


What will be the output of the above code?


John is 25 years old 
Unknown is 30 years old

 24. Scope Chain with Function Inside Function


let number = 100;

function outerFunc() {
    let number = 50;
    function innerFunc() {
        return number;
    }
    return innerFunc();
}

console.log(outerFunc());


What will be the output of the above code?


50
 25. Object Methods and Rest Parameters


const calculator = {
    add(...nums) {
        return nums.reduce((a, b) => a + b, 0);
    }
};

console.log(calculator.add(5, 10, 15));


What will be the output of the above code?

30

 26. Function with Closure and Return


function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add10 = createAdder(10);
console.log(add10(5));
console.log(add10(20));


What will be the output of the above code?

15
30


 27. Default Arguments and Null Values


function displayInfo(name = "Anonymous", age = 18) {
    return `${name} is ${age} years old.`;
}

console.log(displayInfo(null, 25));
console.log(displayInfo(undefined, null));


What will be the output of the above code?

OUTPUT :

Null is 18 years old

Anonymous is null years old


 28. Rest Parameters and Returning Arrays


function createArray(...items) {
    return items;
}

console.log(createArray(1, 2, 3, 4));
console.log(createArray("a", "b", "c"));


What will be the output of the above code?


[1,2,3,4,5]
[a,b,c]
 29. Function with Outer and Inner Variables


let a = 1;

function outer() {
    let a = 2;
    function inner() {
        return a;
    }
    return inner();
}

console.log(outer());


What will be the output of the above code?

2



 30. Default Parameters with Expressions


function calculateTotal(price, tax = price * 0.05) {
    return price + tax;
}

console.log(calculateTotal(100)); 
console.log(calculateTotal(200, 30)); 


What will be the output of the above code?

105 
230

 31. Closure with Multiple Levels


function outer() {
    let outerVar = "Outer";
    return function middle() {
        let middleVar = "Middle";
        return function inner() {
            return `${outerVar} ${middleVar}`;
        };
    };
}

console.log(outer()()());


What will be the output of the above code?

Output = Outer Middle


 32. Rest Operator with Default Arguments


function listNumbers(first, second = 2, ...rest) {
    return rest;
}

console.log(listNumbers(1, 3, 4, 5, 6));
console.log(listNumbers(1));


What will be the output of the above code?

First = 1;
Second = 3 
Rest = 4 5 6;



 33. Function with Closure Capturing Arguments


function createCounter(start) {
    let count = start;
    return function() {
        return ++count;
    };
}

const counter1 = createCounter(0);
const counter2 = createCounter(5);

console.log(counter1());
console.log(counter2());


What will be the output of the above code?

OUTPUT 

1
6















 34. Object Method with `this` and Rest Parameters


const robot = {
    name: "Robo",
    greet(...messages) {
        return `${this.name}: ${messages.join(" ")}`;
    }
};

console.log(robot.greet("Hello", "World!"));


What will be the output of the above code?

OUTPUT : - Hello World



 35. Default Parameters and Logical OR


function getValue(value = 10) {
    return value || 20;
}

console.log(getValue(0));
console.log(getValue(15));


What will be the output of the above code?

20
15

 36. Closures with Functions and Scope


let globalValue = "Global";

function makeFunc() {
    let localValue = "Local";
    return function() {
        return localValue;
    };
}

const myFunc = makeFunc();
console.log(myFunc());


What will be the output of the above code?

OUTPUT
Local




 37. Rest Operator and Returning Length


function countItems(...items) {
    return items.length;
}

console.log(countItems(1, 2, 3, 4));
console.log(countItems("a", "b"));


What will be the output of the above code?

4
2


 38. Closures with Parameterized Outer Function


function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}`;
    };
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Alice"));


What will be the output of the above code?

Hello Alice

 39. Function with Default Arguments and Strings


function createSentence(subject = "Someone", verb = "does", object = "something") {
    return `${subject} ${verb} ${object}.`;
}

console.log(createSentence("The cat", "jumps", "high"));
console.log(createSentence("The dog"));


What will be the output of the above code?

OUTPUT
The cat jumps high
The dog does something

 40. Returning Arrays with Rest Parameters


function makeArray(...args) {
    return args;
}

console.log(makeArray(1, 2, 3, 4));


What will be the output of the above code?


OUTPUT

[1,2,3,4]
