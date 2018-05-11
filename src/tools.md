# Welcome to the How To Build a Website Wiki!

### We are going to build a static web site using GO, HTML5, CSS3, Polymer 3.0, TypeScript, and Webpack on GitHub.
I am using Windows 10 Professional so if you are using Mac or Linux, you may have to adapt a bit.

[What is GitHub Pages?](https://help.github.com/articles/what-is-github-pages/)
GitHub can serve static pages from personal, organizational, or project repos. Mark down files can be processed automatically by GitHub using Jeckal to apply a template and create a static web site. Hugo is a GO program that can create static files from mark down but we will not be using it today. 

What we will be doing is to use the advanced templating capabilities in GO to create the source html files that Polymer will encapsulate in a static app. 

## Install Tools
### Install GO
[Getting Started with The Go Programming Language](https://golang.org/doc/install)

### Polymer dependencies.
[Node.JS](https://nodejs.org/en/download/)
```
node --version
```

Update npn
```
npm install npm@latest -g
```

Ensure that Git is installed.
```
git --version
```
If it isn't, you can find it on the [Git downloads page](https://git-scm.com/downloads).

Install the latest version of Bower.
```
npm install -g bower
```

### Remove old Polymer, install new Polymer.
[Polymer 3.0 Tools Update](https://www.polymer-project.org/blog/2018-04-12-polymer-3-tools-update.html)
```
npm uninstall -g polymer-cli
npm install -g polymer-cli@next
```
## Create Repository
### Create a GitHub repository

### Configuring publishing source
* Create a /docs/index.html file in the repository containing the one line `Hello World!`.
* Create a /docs/CNAME file containing your custom domain.

[Configuring a publishing source for GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
You can now go to your project settings tab and go to GitHub pages and select /docs, enter your custom domain, do not enforce https.

### Configure Cloudflare to enforce https
[www.cloudflare.com](https://www.cloudflare.com)
Once every thing is set up properly and propagated, you can go back to GitHub settings and enforce https.

You should now be able to browse your custom domain securely and see **Hello World!**

### Clone repository
You will now need to clone the repository as a GO project in your **%gopath%/src** path. I cloned mine in **go/src/davsk.net** resulting in a **go/src/davsk.net/website/** directory.

### Init Polymer
In your project directory, you will now init Polymer.
```
polymer init
```
Select the starting template. For this project, I am using Starter-Kit.