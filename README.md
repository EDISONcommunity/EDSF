# EDSF Website
This website is developed with React. 

## Dependencies
Install React packages: `npm i`

## Adding Wiki as submodule
We make use of the EDSF Wiki and load markdown content automatically into webpages. Therefore, add Wiki as a git submodule:
`git submodule add https://github.com/EDISONcommunity/EDSF.wiki.git`
The added `.gitmodules` file keeps track between Wiki submodule and superrepository EDSF. 
Check for updates in submodule via `git fetch`. Use `git merge` to merge upstream branch into remote.

## Deploy gh-page 
Run `npm run deploy` to deploy the website on the `gh-pages` branch. This branch hosts the website for EDSF.
