### To do list 

An app that connects back-end data via an API to a React front-end

## Scaffolding and set up

Webpack set up 
Add web pack 
1.  [npm init] (this initializes npm. The password & other prompts are invisible, hit return on all compilers).  

2.  [npm install webpack webpack-cli webpack-dev-server html-webpack-plugin –D] (installs webpack) 

Add loaders
3.  [npm install babel-loader style-loader css-loader sass-loader –D] (installs babel, css and sass pre-compilers or loaders)

Add babel and babel presets
4.  [npm install @babel/core @babel/preset-env –D] (installs the babel & env files - babel transpiles jsx into latest versions ES6-ES9
5. [npm install @babel/preset-env] for React library [npm install @babel/preset-react]

[touch .babelrc] (creates a babel file in project) this is out of the src folder
For react add this code in the .babelrc file
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

For other projects add
{
  "presets": ["@babel/preset-env"]
}

Add node-sass
1. [npm install node-sass –D] (installs sass - as a dev dependency as it is a complier)

Configure webpack
1. [touch webpack.config.js] (distribution files should be outside the code base folders src/ public files)

Set up this file with the entry point to the app in the folder structure - in this it is public, but you can create a separate src folder and connect webpack to the src folder

```
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './public/app.js', <or path name in your project if different>
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  devServer: {
    contentBase: path.resolve('public'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
```

If you are adding a source directory file - this holds source code versus compiler code change public to src
1.   [mkdir src] (makes directory called source)
2.   [touch src/index.html src/app.js src/style.scss] (makes files for html, css and vanilla js) 

CHANGE PACKAGE JSON SCRIPTS
```
"test": "echo \"Error: no test specified\" && exit 1",
    "serve": "webpack-dev-server --mode=development",
    "build": "webpack -p"
```

Add any other front end libraries you may want for styling

- [npm install bulma –S] installs bulma (as a project dependency not a compiler only a library)
-[npm install tachyons] (installs tachyons)

For the React library
1. [npm install react react-dom -S] (installs react and react dom)
2. [npm install react-router-dom –S] (installs the router component of react)
3. [npm install react-scripts –S] (installs the router component of react) 

If you do not want to set up the web pack you can - [npm install create react app] or install it globally and run [npx create react app app name]

Backend dependencies
1. [npm install nodemon] (adds hot loading of backend server with nodemon)
2. [npm install node -S]  (adds node.js)
3. [npm install express -S] (install express midware that runs data from server via axios to Postman/ Insomnia)
4.  [npm install axios -S] (installs axios runner from backend with JSON files to Insomnia or Postman Axios no need to install body-parser any more, it comes inbuilt)
5. [npm install request-promise -S] [npm install request] (sets up back end API to get methods of request-promise from ES-6)
6. [npm install cors] helps in cross-origin-settings
7. [npm install dotenv] installs the .env files to store keys and passwords

To connect backend and front end
[npm install npm-run-all]

Front-end:

Intially display hello world message in app.js
Think of the structure of your front end and set up your folder structure.
For this app there is a card file - that will display one to-do
There is a card list file that will map through the data and display all the to-dos
As the card list is the parent of card, create a card component first and display a simple message
Create the card list and pass the card component into it
Import the card list into App.js and ensure you have a simple single page app display on the front end.

Back-end:
Set up your node data and node module export

```
module.exports = function getTodos() {
	return [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
```

Test the express server with documentation recommendations from express

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

Set an api route with the get method and check the data is flowing

```
const express = require('express');
const app = express();
const port = 3000;

// get the file path of the data and assign it to a variable
const getTodos = require('./api-todos');
// get the data from the node files and set it to the api route
app.get('/api/todos', (req, res) => res.send(getTodos()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

Connect the backend and front-end routes - update package json, set up a proxy route but do not change the express file 

```
"scripts": {
		"start": "npm-run-all -s build start-backend",
		"start-frontend": "react-scripts start",
		"start-backend": "nodemon src/backend/server.js",
		"start-dev": "npm-run-all -p start-frontend start-backend",
		"build": "react-scripts build",
		"test": "react-scripts test",
		"eject": "react-scripts eject"
	},
	"proxy": "http://localhost:3001",
  ```

In the express file remove commented code and go to the front end files to check connectivity of data

```
const express = require('express');
const app = express();
const port = 3000;

const getTodos = require('./api-todos');
app.get('/api/todos', (req, res) => res.send(getTodos()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

```
In the front-end go to app.js and set up your componentDidMount and check that the data is flowing with a console log

```
	componentDidMount() {
		fetch('http://localhost:3000/api/todos')
			.then((res) => res.json())
			.then((todos) => {
				console.log(todos);
				// this.setState({ todos });
			})
			.catch((error) => console.log(error));
	}
```
Uncomment the console log when you see the data in the console and set state.

Work on the front-end to display the data.

Hard-code the card component to style - use tachyons to quickly see what it looks like

```
import React from 'react';
const Card = () => {
	return (
		<div className="dib pa5 ma1 tc ba bw1 bg-light-blue">
			<h2>Title</h2>
			<p>userId</p>
			<p>id</p>
			<p>completed</p>
		</div>
	);
};

export default Card;
```