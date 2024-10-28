# Lab Record: Implement States and Props in React

## Setup Instructions

### Step 1: Create a React Application

1. Open a terminal or command prompt.
2. Use `create-react-app` to create a new React application:

   ```bash
   npx create-react-app@latest my-app
   ```

3. Navigate to the project directory:

   ```bash
   cd my-app
   ```

### Step 2: Start the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the app.

### Step 3: Implement `State` in a Component

1. Open `src/App.js` in your text editor.
2. Replace the content of `App.js` with the following code to create a counter component:

   ```javascript
   import React, { useState } from 'react';

   function App() {
       // Declare a state variable 'count' and a function 'setCount' to update it
       const [count, setCount] = useState(0);

       // Function to increment the count
       const increment = () => {
           setCount(count + 1);
       };

       return (
           <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <h1>React Counter</h1>
               <p>Count: {count}</p>
               <button onClick={increment}>Increment</button>
           </div>
       );
   }

   export default App;
   ```

3. Save and check the browser. Click the "Increment" button to see the `count` state update.

### Step 4: Implement `Props` by Creating a New Component

1. Create a new file in the `src` directory named `Greeting.js`.
2. In `Greeting.js`, define a component that accepts `props`:

   ```javascript
   // Greeting.js
   import React from 'react';

   function Greeting(props) {
       return <h2>Hello, {props.name}!</h2>;
   }

   export default Greeting;
   ```

3. Modify `App.js` to import and use the `Greeting` component, passing `name` as a prop:

   ```javascript
   import React, { useState } from 'react';
   import Greeting from './Greeting';

   function App() {
       const [count, setCount] = useState(0);

       const increment = () => {
           setCount(count + 1);
       };

       return (
           <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <h1>React Counter with Greeting</h1>
               <Greeting name="Student" />
               <p>Count: {count}</p>
               <button onClick={increment}>Increment</button>
           </div>
       );
   }

   export default App;
   ```

4. Save and check the browser. You should see the greeting message "Hello, Student!" along with the counter.

### Step 5: Add Dynamic Props

1. Modify `App.js` to make `name` dynamic, based on user input:

   ```javascript
   import React, { useState } from 'react';
   import Greeting from './Greeting';

   function App() {
       const [name, setName] = useState('Student');
       const [count, setCount] = useState(0);

       const increment = () => {
           setCount(count + 1);
       };

       return (
           <div style={{ textAlign: 'center', marginTop: '50px' }}>
               <h1>React Counter with Dynamic Greeting</h1>
               <input
                   type="text"
                   placeholder="Enter your name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   style={{ marginBottom: '20px', padding: '5px' }}
               />
               <Greeting name={name} />
               <p>Count: {count}</p>
               <button onClick={increment}>Increment</button>
           </div>
       );
   }

   export default App;
   ```

2. Save and check the browser. Now, you can enter a name, and the greeting will update dynamically based on the input.
