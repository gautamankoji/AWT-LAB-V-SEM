# React Environment Setup

## Setup Instructions

### Part 1: Manual Setup Using Webpack and Babel

#### Step 1: Create a New Project Directory

1. Open a terminal or command prompt.
2. Create a new directory for your project:

   ```bash
   mkdir react-webpack-babel-example
   cd react-webpack-babel-example
   ```

#### Step 2: Initialize a New Node.js Project

1. Initialize a new Node.js project using npm:

   ```bash
   npm init -y
   ```

#### Step 3: Install Dependencies

1. Install React, ReactDOM, Webpack, Babel, and necessary loaders:

   ```bash
   npm install react react-dom
   npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
   ```

#### Step 4: Configure Webpack

1. Create a file named `webpack.config.js`:

   ```javascript
   // webpack.config.js
   const path = require('path');
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
       entry: './src/index.js',
       output: {
           filename: 'bundle.js',
           path: path.resolve(__dirname, 'dist'),
           clean: true,
       },
       module: {
           rules: [
               {
                   test: /\.(js|jsx)$/,
                   exclude: /node_modules/,
                   use: {
                       loader: 'babel-loader',
                   },
               },
           ],
       },
       resolve: {
           extensions: ['.js', '.jsx'],
       },
       plugins: [
           new HtmlWebpackPlugin({
               template: './src/index.html',
           }),
       ],
       devServer: {
           static: './dist',
           port: 3000,
       },
   };
   ```

#### Step 5: Configure Babel

1. Create a file named `.babelrc`:

   ```json
   {
       "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```

#### Step 6: Create the Project Structure

1. Create the following directories and files:

   ```bash
   mkdir src
   touch src/index.js src/index.html
   ```

2. Add basic content to `src/index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>React Webpack Babel Example</title>
   </head>
   <body>
       <div id="root"></div>
   </body>
   </html>
   ```

3. Add basic React code to `src/index.js`:

   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom';

   const App = () => {
       return <h1>Hello, React with Webpack and Babel!</h1>;
   };

   ReactDOM.render(<App />, document.getElementById('root'));
   ```

#### Step 7: Add Scripts to `package.json`

1. Modify the `scripts` section of `package.json`:

   ```json
   "scripts": {
       "build": "webpack --mode production",
       "start": "webpack serve --mode development"
   }
   ```

#### Step 8: Run the Application

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to see the application running.

### Part 2: Using `create-react-app` Command

#### Step 1: Create a New React Application

1. In the terminal, navigate to the directory where you want to create the project.
2. Run the following command:

   ```bash
   npx create-react-app@latest my-app
   ```

   Replace `my-app` with your desired project name.

#### Step 2: Navigate to the Project Directory

1. Change into the new project directory:

   ```bash
   cd my-app 
   ```

#### Step 3: Start the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the default React application.
