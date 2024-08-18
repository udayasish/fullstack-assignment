## React Assignment

1. How can you implement shared functionality across a component tree?

Solution: 

You can implement shared functionality across a component tree using several React patterns:

1. Props drilling: Passing props down through multiple levels of components.
2. Context API: Creating a context to share data without explicitly passing props.
3. Custom Hooks: Extracting reusable logic into custom hooks that can be used by multiple components.
4. Render Props: Passing a function as a prop to share code between components.


2. Why is the `useState` hook appropriate for handling state in a complex component?

Solution: 

The useState hook is appropriate for handling state in complex components for several reasons:

1. It allows for local state management within functional components.
2. Automatically triggers re-renders when state changes, ensuring UI consistency
3. It's simple to use and understand, making code more readable.
4. It can be used multiple times in a single component for different pieces of state.
5. It integrates well with other hooks like useEffect for side effects.
6. It can handle both simple and complex state structures.



3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
