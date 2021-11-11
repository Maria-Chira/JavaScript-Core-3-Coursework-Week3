# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x); 
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
Line 5 prints in the console 2 because x (line 4) is declared inside the function and can only be accessed inside that block of code (local variable).
Line 7 prints in the console 1 because x (line 1) is a global variable and can be accessed anywhere. 
## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
The first console log (line33) will print 10 because x has global scope and can be accessed anywhere inside the program.
The second console log (line 34) will return undefined because y is defined inside the function (local variable) so it can be accessed only inside that block of code. 
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
The first console log (line 53) will print 9 because we are using the value of x as an argument, so the global variable value will not going  to change. On the other hand the f1 function will return 10. 
The second console log (line 63) will print an object {x: 10}. Const y is an object, x is the key and 9 is the value. When we call the function f2, we are reassigning a new value  to the key. The f2 function will return {x: 10} as well. 