# Lab Record: Setup Node.js Development Environment and Running Sample Console Programs

## Setup Instructions

### Step 1: Install Node.js

1. Visit the [Node.js official website](https://nodejs.org/).
2. Download the latest LTS (Long Term Support) version for your operating system.
3. Run the installer and follow the on-screen instructions to complete the installation.

### Step 2: Verify Installation

1. Open a terminal or command prompt.
2. Type the following command to check the Node.js version:

   ```bash
   node -v
   ```

3. Type the following command to check the npm version:

   ```bash
   npm -v
   ```

4. Ensure that both commands return version numbers, confirming successful installation.

### Step 3: Create a Sample Console Program

1. Open your text editor/IDE.
2. Create a new file named `hello.js`.
3. Write the following code in `hello.js`:

   ```javascript
   console.log('Hello, World!');
   ```

### Step 4: Run the Sample Program

1. Open a terminal or command prompt.
2. Navigate to the directory where `hello.js` is located using the `cd` command.
3. Run the program with the following command:

   ```bash
   node hello.js
   ```

4. You should see the output:

   ```bash
   Hello, World!
   ```

## Sample Console Programs

You can try modifying the `hello.js` file or creating new JavaScript files with the following examples:

1. **Addition Program**:

   ```javascript
   const a = 5;
   const b = 10;
   console.log('The sum is: ' + (a + b));
   ```

2. **User Input Program** (using the `readline` module):

   ```javascript
   const readline = require('readline').createInterface({
       input: process.stdin,
       output: process.stdout
   });

   readline.question('What is your name? ', (name) => {
       console.log(`Hello, ${name}!`);
       readline.close();
   });
   ```

**Output**:

```bash
Hello, World!
The sum is: 15
What is your name? Gautam Ankoji
Hello, Gautam Ankoji!
```
