define(["./my-app.js"],function(_myApp){"use strict";var _templateObject_0c3038a0553311e881dd8f868b28736e=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: block;\n\n          padding: 10px;\n        }\n      </style>\n\n      <div class=\"card\">\n        <div class=\"circle\">1</div>\n        <h1 id=\"welcome-to-the-how-to-build-a-website-wiki-\">Welcome to the How To Build a Website Wiki!</h1>\n<h3 id=\"we-are-going-to-build-a-static-web-site-using-go-html5-css3-polymer-3-0-typescript-and-webpack-on-github-\">We are going to build a static web site using GO, HTML5, CSS3, Polymer 3.0, TypeScript, and Webpack on GitHub.</h3>\n<p>I am using Windows 10 Professional so if you are using Mac or Linux, you may have to adapt a bit.</p>\n<p><a href=\"https://help.github.com/articles/what-is-github-pages/\">What is GitHub Pages?</a>\nGitHub can serve static pages from personal, organizational, or project repos. Mark down files can be processed automatically by GitHub using Jeckal to apply a template and create a static web site. Hugo is a GO program that can create static files from mark down but we will not be using it today. </p>\n<p>What we will be doing is to use the advanced templating capabilities in GO to create the source html files that Polymer will encapsulate in a static app. </p>\n<h2 id=\"install-tools\">Install Tools</h2>\n<h3 id=\"install-go\">Install GO</h3>\n<p><a href=\"https://golang.org/doc/install\">Getting Started with The Go Programming Language</a></p>\n<h3 id=\"polymer-dependencies-\">Polymer dependencies.</h3>\n<p><a href=\"https://nodejs.org/en/download/\">Node.JS</a></p>\n<pre><code>node --version\n</code></pre><p>Update npn</p>\n<pre><code>npm install npm@latest -g\n</code></pre><p>Ensure that Git is installed.</p>\n<pre><code>git --version\n</code></pre><p>If it isn&#39;t, you can find it on the <a href=\"https://git-scm.com/downloads\">Git downloads page</a>.</p>\n<p>Install the latest version of Bower.</p>\n<pre><code>npm install -g bower\n</code></pre><h3 id=\"remove-old-polymer-install-new-polymer-\">Remove old Polymer, install new Polymer.</h3>\n<p><a href=\"https://www.polymer-project.org/blog/2018-04-12-polymer-3-tools-update.html\">Polymer 3.0 Tools Update</a></p>\n<pre><code>npm uninstall -g polymer-cli\nnpm install -g polymer-cli@next\n</code></pre><h2 id=\"create-repository\">Create Repository</h2>\n<h3 id=\"create-a-github-repository\">Create a GitHub repository</h3>\n<h3 id=\"configuring-publishing-source\">Configuring publishing source</h3>\n<ul>\n<li>Create a /docs/index.html file in the repository containing the one line <code>Hello World!</code>.</li>\n<li>Create a /docs/CNAME file containing your custom domain.</li>\n</ul>\n<p><a href=\"https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/\">Configuring a publishing source for GitHub Pages</a>\nYou can now go to your project settings tab and go to GitHub pages and select /docs, enter your custom domain, do not enforce https.</p>\n<h3 id=\"configure-cloudflare-to-enforce-https\">Configure Cloudflare to enforce https</h3>\n<p><a href=\"https://www.cloudflare.com\">www.cloudflare.com</a>\nOnce every thing is set up properly and propagated, you can go back to GitHub settings and enforce https.</p>\n<p>You should now be able to browse your custom domain securely and see <strong>Hello World!</strong></p>\n<h3 id=\"clone-repository\">Clone repository</h3>\n<p>You will now need to clone the repository as a GO project in your <strong>%gopath%/src</strong> path. I cloned mine in <strong>go/src/davsk.net</strong> resulting in a <strong>go/src/davsk.net/website/</strong> directory.</p>\n<h3 id=\"init-polymer\">Init Polymer</h3>\n<p>In your project directory, you will now init Polymer.</p>\n<pre><code>polymer init\n</code></pre><p>Select the starting template. For this project, I am using Starter-Kit.</p>\n\n      </div>\n    "]),MyView1=function(_PolymerElement){babelHelpers.inherits(MyView1,_PolymerElement);function MyView1(){babelHelpers.classCallCheck(this,MyView1);return babelHelpers.possibleConstructorReturn(this,(MyView1.__proto__||Object.getPrototypeOf(MyView1)).apply(this,arguments))}babelHelpers.createClass(MyView1,null,[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_0c3038a0553311e881dd8f868b28736e)}}]);return MyView1}(_myApp.PolymerElement);window.customElements.define("my-view1",MyView1)});