# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





#  Focused on React Hooks 
React runs the component function and builds a UI snapshot.
If any UI-level change happens, React will not track it unless we use hooks.

React does not track normal variables.
It only re-renders when: State changes, Props change

React watches state updates only through its own system.

When we define a hook (like useState), it tells React:
If state changes → re-run component function → compare old UI with new UI → update DOM efficiently.



## Why Multiple Same Updates Sometimes Don’t Work
React batches updates inside the same event. If same  updates  all use the same old value than at the end result will same as by one 

### this not work =>  
in this all use same value, so at the end result will be as by one 
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

### this will work => in thi all use different value
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);




## Here used useState hook
useState is a React Hook that allows a function component to:

-> Store data
-> Update that data
-> Tell React: “UI needs to re-render”

That third point is the real reason it exists.














