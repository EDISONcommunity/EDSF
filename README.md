# Short Introduction
React is a Javascript (UI) library which is a tool for building UI components. All files for development are under the `edsf-website` directory. 
* In the `src` folder, you find all React development files. 
* In the `public` folder, you find basic html (related) files that the React development builds around. 
* In the `build` folder, all compiled files are contained that can be moved to a server for rendering the website. 

## Short React introduction

React allows to build components that are Javascript functions and return HTML code. Components can come as a function or a class, which can also be transferred into one another. Inside a component, you can embed HTML and Javascript as well. 

Example of a `<Welcome/>` component:

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


# Start website development
The `website` branch hosts the React website development code under the `edsf-website` directory.

For most development, head to the `src` directory in the `edsf-website` directory. 
The file `index.js` is the top node of development. It is built around the root node in the `index.html` file located in the `public` directory. 

## Dependencies
Install React packages: `npm i`

## Running localhost
Run `npm start` to start the local server.

## Deploying GitHub Page 
Run `npm run deploy` from the `website` branch to deploy the website build to the `gh-pages` branch. GitHub fetches the content from there (see Settings ... Pages).

The settings for the automatic deployment to the GitHub Repository can be changed in the `package.json` file in the `edsf-website` directory by two steps. 

1. You can change the branch where the build will be deployed to by replacing the `gh-pages` branch by another branch (do not forget to change the branch as well on the server; for github, head to the Github Pages section and indicate which branch to use): 
   
`"deploy": "gh-pages -d build"`

2. Change the website url:

`"homepage": "https://edisoncommunity.github.io/EDSF/"`

## Basic Structure

There are the following folders for development:

* Folders holding **React components**
  * `Components` (holding content of more general nature; contact or privacy policy section)
  * `EDSFComponents` (holding content specific to EDSF; CFDS page or EDSF Resources)
  * `ReactComponents` (components independent of specific content; Markdown or PDFPage components)
* Folders holding **files**
  * `files` (pdf data)
  * `img`
* Folder holding **Wiki submodule** data (markdown files)
  * `EDSF.wiki`

Other important files that are not in a folder:

* `index.js` (the root file that connects Google Analytics and sets up Routing)
* `Theme.js` (for styling using Material UI)

The most important component for development is `App.js` in `Components.` It holds the basic set-up of the website. Here you can include or remove components. 

### How to create a new page or component?

For creating a new page or component, create a .js file in a folder that suits its particular function (is it a ReactComponent without specific content? Or a EDSFComponent with particular EDSF content?). Export it as a React function or class that holds the content and design you need. 

Move to the suitable parent level where you want to include your component. For example, if you want to include a new type of Button in the NavigationBar, you would create a `NewButton.js` component in `ReactComponents` and import it into the `Components/Navbar.js` component. 

#### Web page with URL
If you want to create a new web page you have to declare a new Route with an url in `App.js`. You create your new page in a suitable folder as a .js file and import it to `App.js`.

Example:

``` 
import MyNewPage from "./Components/MyNewPage";

<Route path="/my-new-page">
    <MyNewPage />
 </Route>
```

Whenever the url `/my-new-page` is visited, the component gets rendered where it is embedded in `App.js`.

## Routing (URL Handling)
We use React's BrowserRouter package for handling routing. The Router is initialized in `index.js` and wraps the `App.js` component. The current **basename** of the router, where urls are concatenated to, is `/EDSF` and can be changed in `index.js`. 

```
const basename="/EDSF";

<Router basename={basename} history={history}>
	<MyApp />
</Router> 
```

Within the `Components/App.js` file you can declare the specific Routes that are rendering a React Component for a given path.

## Styling and Material UI 

`Theme.js` determines some basic template colours throughout the whole website after [Material UI Guidelines](https://material-ui.com/).

Material UI Components are prestyled React Components that you can import. 

### CSS

There are [multiple ways](https://www.sitepoint.com/react-components-styling-options/) for styling components with CSS for React. For this project, we mainly use JSS that uses a styles hook to pass to components. This might be changed in future for preferences of coding style.

## Google Analytics

This website connects to Google Analytics if users agree to the use of cookies. The whole set-up for this is in `index.js`. 

For changing the Google Analytics account, create one and retrieve the UA Tracking ID ([explanation in detail](https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b)). 
Create or change the environment variable `REACT_APP_GA_MEASUREMENT_ID` that holds the Tracking ID in (more: [how to set up environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)). The `index.js`  loads the environment variable and connects the account to the website on users' consent. 

### How to get the data?
Within the code, you can create Google Analytic hooks to determine which user events should be logged. If users give cookie consent, the `App` component is wrapped by an `Analytics` component that connects the GA account  throughout the website. This component also tracks the visited URLs of a user. 

For creating logging of specific user interaction events, you can access the established connection from anywhere in the code. 

For example, the `ReactComponents/MaterialLink.js` component loggs when a user clicks a link that redirects to a specific EDSF material source:

```
import ReactGA from "react-ga";

export default function MaterialLink(props) {
  function handleClick(e) {
    if (props.cookiesEnabled) {
      ReactGA.event({
        category: "Links",
        action: props.action,
        label: props.label,
        value: 1,
      });
    }
  }
}
```


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

