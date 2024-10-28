# Lab Record: Create Different Modules Using Node.js

## Setup Instructions

### Step 1: Create a New Project Directory

1. Open a terminal or command prompt.
2. Create a new directory for your project:

   ```bash
   mkdir node-modules-example
   cd node-modules-example
   ```

### Step 2: Initialize a New Node.js Project

1. Initialize a new Node.js project using npm:

   ```bash
   npm init -y
   ```

   This will create a `package.json` file with default settings.

### Step 3: Create a Module

1. Create a new file named `math.js` to define a module:

   ```javascript
   // math.js
   const add = (a, b) => a + b;
   const subtract = (a, b) => a - b;

   module.exports = { add, subtract };
   ```

### Step 4: Create the Main Application File

1. Create another file named `app.js` where we will use the created module:

   ```javascript
   // app.js
   const math = require('./math');

   const a = 10;
   const b = 5;

   console.log(`Addition of ${a} and ${b} is: ${math.add(a, b)}`);
   console.log(`Subtraction of ${a} and ${b} is: ${math.subtract(a, b)}`);
   ```

### Step 5: Run the Application

1. In the terminal, ensure you are in the project directory.
2. Execute the `app.js` file with Node.js:

   ```bash
   node app.js
   ```

3. You should see the following output:

   ```bash
   Addition of 10 and 5 is: 15
   Subtraction of 10 and 5 is: 5
   ```

## Additional Module Examples

You can create additional modules to explore more functionality. Here are a couple of examples:

1. **String Manipulation Module (`stringUtils.js`)**:

   ```javascript
   // stringUtils.js
   const toUpperCase = (str) => str.toUpperCase();
   const toLowerCase = (str) => str.toLowerCase();

   module.exports = { toUpperCase, toLowerCase };
   ```

2. **Date Formatting Module (`dateUtils.js`)**:

   ```javascript
   // dateUtils.js
   const formatDate = (date) => date.toISOString().split('T')[0];

   module.exports = { formatDate };
   ```

## Step 6: Using Third-Party Modules

1. **Install a Third-Party Module**
   - We will use the `lodash` library as an example. Install it by running:

     ```bash
     npm install lodash
     ```

2. **Create a New File to Use Lodash**
   - Create a file named `lodashExample.js`:

   ```javascript
   // lodashExample.js
   const _ = require('lodash');

   const array = [1, 2, 3, 4, 5];

   // Get the last element of the array
   const lastElement = _.last(array);
   console.log(`The last element of the array is: ${lastElement}`);

   // Create a new array with doubled values
   const doubledArray = _.map(array, (num) => num * 2);
   console.log(`Doubled array: ${doubledArray}`);
   ```

### Step 7: Run the Lodash Example

1. In the terminal, execute the `lodashExample.js` file with Node.js:

   ```bash
   node lodashExample.js
   ```

2. You should see the following output:

   ```bash
   The last element of the array is: 5
   Doubled array: [2, 4, 6, 8, 10]
   ```
