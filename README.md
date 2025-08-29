
# 📘 Question and Answer

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- **`getElementById("id")`** → Returns **one element** that matches the given ID.  
- **`getElementsByClassName("class")`** → Returns **all elements** with that class as an **HTMLCollection**.  
- **`querySelector("selector")`** → Returns the **first matching element** (uses CSS selectors).  
- **`querySelectorAll("selector")`** → Returns **all matching elements** as a **NodeList**.  

---

## 2. How do you create and insert a new element into the DOM?

```js

It's a two-step process:
First, create an element in memory with document.createElement().
Second, select an existing parent element and add the new element to it using parent.appendChild().

// 1. Create the element
const newDiv = document.createElement('div');
newDiv.textContent = 'Mahedi Hasan';

// 2. Find parent and append
const container = document.getElementById('container');
container.appendChild(newDiv);

```


## 3. What is Event Bubbling and how does it work?


When an event occurs on an element, it propagates in the order:
child → parent → ancestor
```js
button click → div → body → document
```


## 4. What is Event Delegation in JavaScript? Why is it useful?


Event Delegation is a technique where instead of adding separate event listeners to each child element,
a single event listener is added to a common parent element.

### Benefits:

Performance: Saves memory and improves performance since only one listener is used instead of many.

Dynamic Elements: Even if new child elements are added to the DOM later, the parent’s listener can still handle their events.


## 5. What is the difference between preventDefault() and stopPropagation() methods?


### event.preventDefault(): 
Stops the browser's default behavior for an event. For example, it stops a link from navigating to a new page or a form from submitting.

### event.stopPropagation():
Stops an event from bubbling up to parent elements. The event is handled on the target element only and goes no further.




