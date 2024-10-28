import React, { useState, useRef } from 'react';

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