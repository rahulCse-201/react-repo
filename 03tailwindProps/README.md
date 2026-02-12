# Use of Props 
props are inputs to a component. When some code or a card appear again an again the we create a component for specific card use we pass props that are inputs 

 ## How To Handle Props
 props are pass in props named object by parent where we render that component 
1️⃣ Using props object

function Component(props) {
  return <h1>{props.name}</h1>;
}

2️⃣ Using Destructuring (Cleaner way)

function Component({ name, age }) {
  return <h1>{name}</h1>;
}



## Important Rules
Props are read-only.
Props flow from Parent → Child.
Child cannot directly modify props.
Props make components reusable and dynamic.

🔹 Why Props Are Read-Only

React follows one-way data flow.
If a child modifies props directly:
Parent and child data become inconsistent.
UI becomes unpredictable.
Debugging becomes difficult.
React keeps props immutable to maintain a single source of truth.

## How To Handle “Two-Way” Communication

React does not have true two-way binding.
Instead, we simulate it by:
Parent holds the state.
Parent passes state as props.
Parent passes a function to update state.
Child calls that function.

Example Concept:
Parent:
<Component value={value} setValue={setValue} />

Child:
setValue("New Value");

Now:
Parent state updates
React re-renders
Both stay synchronized

