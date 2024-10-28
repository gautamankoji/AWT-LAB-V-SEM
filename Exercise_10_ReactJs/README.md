# Lab Record: Create Different Types of Forms Using React

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

---

## Types of Forms in React

### 1. Controlled Component Form

In a controlled component, form data is handled by the component’s `state`.

#### Implementation

1. Open `src/App.js` and replace its content with the following code:

   ```javascript
   import React, { useState } from 'react';

   function ControlledForm() {
       const [name, setName] = useState('');
       const [email, setEmail] = useState('');

       const handleSubmit = (e) => {
           e.preventDefault();
           console.log(`Name: ${name}, Email: ${email}`);
       };

       return (
           <form onSubmit={handleSubmit}>
               <h2>Controlled Form</h2>
               <label>
                   Name:
                   <input
                       type="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                   />
               </label>
               <br />
               <label>
                   Email:
                   <input
                       type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                   />
               </label>
               <br />
               <button type="submit">Submit</button>
           </form>
       );
   }

   function App() {
       return (
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
               <ControlledForm />
           </div>
       );
   }

   export default App;
   ```

2. Save the file and check the browser. This form manages its data through `state` and displays the input in the console on submission.

### 2. Uncontrolled Component Form

In an uncontrolled component, form data is handled by the DOM itself. React provides a `ref` to access input values.

**Implementation**:

1. Add an uncontrolled form component in `App.js`:

   ```javascript
   import React, { useRef } from 'react';

   function UncontrolledForm() {
       const nameRef = useRef(null);
       const emailRef = useRef(null);

       const handleSubmit = (e) => {
           e.preventDefault();
           console.log(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
       };

       return (
           <form onSubmit={handleSubmit}>
               <h2>Uncontrolled Form</h2>
               <label>
                   Name:
                   <input type="text" ref={nameRef} />
               </label>
               <br />
               <label>
                   Email:
                   <input type="email" ref={emailRef} />
               </label>
               <br />
               <button type="submit">Submit</button>
           </form>
       );
   }

   function App() {
       return (
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
               <ControlledForm />
               <UncontrolledForm />
           </div>
       );
   }

   export default App;
   ```

2. Save the file and check the browser. This form captures data via `refs`, which is logged to the console on submission.

### 3. Form with Validation

This form will include validation checks to ensure data is correctly entered before submission.

**Implementation**:

1. Add a form with validation to `App.js`:

   ```javascript
   import React, { useState } from 'react';

   function ValidatedForm() {
       const [username, setUsername] = useState('');
       const [password, setPassword] = useState('');
       const [errors, setErrors] = useState({});

       const validateForm = () => {
           const errors = {};
           if (!username) errors.username = "Username is required.";
           if (password.length < 6) errors.password = "Password must be at least 6 characters.";
           return errors;
       };

       const handleSubmit = (e) => {
           e.preventDefault();
           const errors = validateForm();
           if (Object.keys(errors).length > 0) {
               setErrors(errors);
           } else {
               console.log(`Username: ${username}, Password: ${password}`);
               setErrors({});
           }
       };

       return (
           <form onSubmit={handleSubmit}>
               <h2>Validated Form</h2>
               <label>
                   Username:
                   <input
                       type="text"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                   />
               </label>
               {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
               <br />
               <label>
                   Password:
                   <input
                       type="password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                   />
               </label>
               {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
               <br />
               <button type="submit">Submit</button>
           </form>
       );
   }

   function App() {
       return (
           <div style={{ textAlign: 'center', marginTop: '20px' }}>
               <ControlledForm />
               <UncontrolledForm />
               <ValidatedForm />
           </div>
       );
   }

   export default App;
   ```

2. Save the file and check the browser. This form provides real-time validation feedback. Error messages appear if the form data doesn’t meet the validation requirements.
