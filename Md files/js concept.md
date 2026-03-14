# Functions in javascript 

## function with no return value 


## function with return value 
if you use {} bracket then return require 

Arrow function with return 
```javascript
const add = (a, b) => {
  return a + b;
}
```

Arrow function without implicit return ( must in single expression )

```javascript
const add = (a, b)=>  a+b;
``` 
() → grouping the JSX expression
→ implicit return

# map()
- Map transform each element 
- Applies a callback function on each element of the array
- Returns a new array with the same length
- Whatever the callback returns becomes the new element
- A condition can be used inside the callback if needed

```javascript
array.map(callback)

[1,2,3].map(n => n > 1 ? n*2 : n)
```

# Filter ()

1. `map()` → not "give condition", but **callback that returns a value**.  
2. `filter()` → technically it uses a **callback**, not just a condition.  
3. Clarified **true → keep / false → remove** (this is important). 



# Spread Operator (...)

Used to **expand elements of an array or properties of an object**

---
Creates a shallow copy

## Array 
- copy array 
- merge two array 

```javascript
const arr = [1,2,3]

const newArr = [...arr]

```

## object 
- copy
- overwrite property { ...prev, age:21}
- also can add new property 

