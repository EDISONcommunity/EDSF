# Short Round-up 
React is a Javascript (UI) library which is a tool for building UI components. All files for development are under the `edsf-website` directory. In the `src` folder, you find all React development files. In the `public` folder, all compiled files are contained that can be moved to a server for rendering the website. 

# Short React introduction

React allows to build components that are Javascript functions and return HTML code. Components can come as a function or a class, which can also be transferred into one another. Inside a component, you can embed HTML and Javascript as well. 

Example of a Welcome component:

```
function Welcome() {
    return <h1>Hello React!</h1>;
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
``` 

### Properties
React has a top-down architecture where you can pass properties **down** to a component where they are accessible. From within a component, it must not be declared beforehand which properties it has: the parent level determines which properties are passed on.  

```
function Welcome(props) {
    return <h1>Hello {props.text}!</h1>;
}
ReactDOM.render(<Welcome text="React!" altText="Some unused text" />, document.getElementById('root'));
``` 

### States
React components can have internal states that re-render the website whenever a state change occurs. Usually, states are used to process user input that invokes a re-rendering of the website. 

Depending on whether you use functions or classes for your components, you can use a State Hook to modify a state or initialise a state in the class constructor.

Example with class:
``` 
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```
Equivalent example with function:

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
### More

For a more extensive and detailed introduction, see https://www.w3schools.com/react/default.asp. 

# Compiling and deployment
The build is contained in the `public` folder. To compile the build run `npm run build` within the `edsf-website` directory. To build AND automatically deploy the website to the github server run `npm run deploy`. 

## Deployment to GitHub



# Start website development
This branch hosts the React website development code under the `edsf-website` directory.
In the `edsf-website` directory, head to `src`. 
The file index.js is the top node of development. It is built around to the root node in the index.html file located in the `public` directory. 

## Dependencies
Install React packages: `npm i`

## Running localhost
Run `npm start` to start the local server.

## Deploying GitHub Page 
Run `npm run deploy` from the `website` branch to deploy the website build to the `gh-pages` branch. GitHub fetches the content from there (see Settings -> Pages).

The settings for the automatic deployment to the GitHub Repository can be changed in the package.json file in the `edsf-website` directory by two steps. 
1. You can change the branch where the build will be deployed to by replacing the `gh-pages` branch by another branch (do not forget to change the branch as well on the server; for github, head to the Github Pages section and indicate which branch to use): 
   
`"deploy": "gh-pages -d build"`

1. Change the website url:

`"homepage": "https://edisoncommunity.github.io/EDSF/"`

## Basic Structure

There are the following folders for development:

* Folders holding React components
  * Components
  * EDSFComponents 
* Folders holding files (pdf and image data)
  * files 
  * img
* Folder holding submodule data
  * EDSF.wiki
  
## Deploying GitHub Page to custom domain
[Instruction for Windows](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)

* Admin has to do it
* In GitHub repository:
	* Head to `Settings` -> Custom domain -> Type custom domain and hit `Save`
* Head to DNS provider:
	* Create `CNAME` record that points `http://edison-project.net/` to subdomain `https://EDISONcommunity.github.io` (`CNAME` record should always point to `<organization>.github.io` excluding repository name)
	* Takes up to 24 hours
* Open Git Bash
* Confirm that DNS record configured correctly with `dig` command (replace `WWW.EXAMPLE.COM` by subdomain): 
`dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd` 
* Optionally select **Enforce HTTPS** for securing GitHub page with HTTPS (takes up to 24 hours)

## Using Wiki as submodule
We make use of the EDSF Wiki and load markdown content  into our React components to display it (can be removed in future if unnecessary). Therefore, Wiki is added as a git submodule:
`git submodule add https://github.com/EDISONcommunity/EDSF.wiki.git`

The added `.gitmodules` file keeps track between Wiki submodule and superrepository EDSF. 
Check for updates in submodule via `git fetch`. Use `git merge` to merge upstream branch into remote.

The handling and display of the Markdown files is done in `ReactComponents/Markdown.js` and `ReactComponents/MarkDownComponent.js`.

Example how Wiki files are loaded from the submodule `EDSF.wiki` into the website in the `App.js` file:

```
import MarkDownComponent from "../ReactComponents/MarkDownComponent";
import about from "../EDSF.wiki/EDSFhome.md";

<Route path="/edison-community">
<MarkDownComponent markdown={about} key={0} />
</Route>
```

