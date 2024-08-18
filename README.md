# Help Center API Assignment

## Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/udayasish/fullstack-assignment.git
   cd fullstack-assignment
   ```

2. **Frontend Setup:**
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Run the frontend application:
     ```bash
     npm run dev
     ```
   - The app will run at [http://localhost:5173/](http://localhost:5173/).

3. **Backend Setup:**
   - Open another terminal and navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Create a `.env` file by copying the values from `.env.sample`:
     ```bash
     cp .env.sample .env
     ```
   - Install the dependencies:
     ```bash
     npm install
     ```
   - Run the backend server:
     ```bash
     npm run dev
     ```
   - The backend server will listen on `http://localhost:8000/`.

---

Now, both your frontend and backend applications should be running on separate ports, with the frontend at `http://localhost:5173/` and the backend server at `http://localhost:8000/`.

Make sure to check the respective `frontend.md` and `backend.md` files for more detailed instructions on completing each section of the assignment.

---

## React Assignment

### 1. How can you implement shared functionality across a component tree?

**Solution:**

You can implement shared functionality across a component tree using several React patterns:

1. **Props Drilling:** Passing props down through multiple levels of components.
2. **Context API:** Creating a context to share data without explicitly passing props at every level.
3. **Custom Hooks:** Extracting reusable logic into custom hooks that can be used by multiple components.
4. **Render Props:** Passing a function as a prop to share code between components.

### 2. Why is the `useState` hook appropriate for handling state in a complex component?

**Solution:**

The `useState` hook is appropriate for handling state in complex components for several reasons:

1. **Local State Management:** It allows for local state management within functional components.
2. **Automatic Re-Renders:** Automatically triggers re-renders when state changes, ensuring UI consistency.
3. **Simplicity:** It's simple to use and understand, making code more readable.
4. **Multiple State Management:** It can be used multiple times in a single component for different pieces of state.
5. **Integration with Other Hooks:** It integrates well with other hooks like `useEffect` for side effects.
6. **Flexible State Handling:** It can handle both simple and complex state structures.

---
