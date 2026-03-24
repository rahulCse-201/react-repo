# 📌 Project Overview

A simple React project where clicking buttons changes the background color using useState hook.

This project focuses on understanding:
**React Hooks**  
**State-driven UI**   
**Re-rendering**
**Declarative programming**

**State-driven UI**  means ui does not change manually, instead it automatically updates when state change of dependent hook

## 🔹Imperative vs Declarative (Very Important)
1️⃣ 🛠 Imperative (Normal JavaScript)
In vanilla JS, we manually tell the browser how to update UI.

Example thinking
Find the element -> Change its style -> Update DOM directly

document.getElementById("box").style.backgroundColor = "red";
Here, we control every step.

2️⃣ Declarative (React)

In React, we describe what UI should look like based on state. We don’t manually touch the DOM.

Instead of saying: “Change background to red”
We say: “Background depends on color state.”

When state changes → React updates UI automatically.
UI = function(state)

This is declarative programming.





# How UI Is Handled in JavaScript vs React

## 🔹 In Vanilla JavaScript (Imperative Approach)

Developer controls every UI change manually. We must access the DOM element directly.
We update styles, text, or attributes step by step.
The developer is responsible for tracking what changed and updating the correct element.

Example thinking:

“Find this element and change it.”
If the app becomes large, managing UI manually becomes complex and error-prone.

document.getElementById("box").innerText = "Hello";


### The Problem With Manual DOM Updates

Imagine a large app:
20 buttons
50 state values
100 UI elements
If every state change requires manual DOM updates:
You might forget to update something
UI becomes inconsistent
Bugs increase
Code becomes hard to maintain
Imperative UI does not scale well.



## 🔹 In React (Declarative Approach)

UI depends on state and props.
We do not manually update the DOM.
We update the state, and React handles the rest.

When state changes → React re-runs the component → compares old and new UI → updates only the necessary parts.

Example thinking:

“UI should look like this when state is this.”

React links UI updates directly to state changes, making applications more predictable and scalable.

## 🔥 Core Difference

JavaScript → You control the DOM.
React → You control the state, React controls the DOM.

 This shift from manual DOM manipulation to state-driven UI is the most important learning from this project.