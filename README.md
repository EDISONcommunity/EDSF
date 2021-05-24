# EDSF Website
This website is developed with React. 

## Dependencies
Install React packages: `npm i`

## Adding Wiki as submodule
We make use of the EDSF Wiki and load markdown content automatically into webpages. Therefore, add Wiki as a git submodule:
`git submodule add https://github.com/EDISONcommunity/EDSF.wiki.git`
The added `.gitmodules` file keeps track between Wiki submodule and superrepository EDSF. 
Check for updates in submodule via `git fetch`. Use `git merge` to merge upstream branch into remote.

## Deploying GitHub Page 
Run `npm run deploy` from the `website` branch to deploy the running website on the `gh-pages` branch. This branch hosts the website build for EDSF.

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
