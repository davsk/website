/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1 id="welcome-to-the-how-to-build-a-website-wiki-">Welcome to the How To Build a Website Wiki!</h1>
<h3 id="we-are-going-to-build-a-static-web-site-using-go-html5-css3-polymer-3-0-typescript-and-webpack-on-github-">We are going to build a static web site using GO, HTML5, CSS3, Polymer 3.0, TypeScript, and Webpack on GitHub.</h3>
<p>I am using Windows 10 Professional so if you are using Mac or Linux, you may have to adapt a bit.</p>
<p><a href="https://help.github.com/articles/what-is-github-pages/">What is GitHub Pages?</a>
GitHub can serve static pages from personal, organizational, or project repos. Mark down files can be processed automatically by GitHub using Jeckal to apply a template and create a static web site. Hugo is a GO program that can create static files from mark down but we will not be using it today. </p>
<p>What we will be doing is to use the advanced templating capabilities in GO to create the source html files that Polymer will encapsulate in a static app. </p>
<h2 id="install-tools">Install Tools</h2>
<h3 id="install-go">Install GO</h3>
<p><a href="https://golang.org/doc/install">Getting Started with The Go Programming Language</a></p>
<h3 id="polymer-dependencies-">Polymer dependencies.</h3>
<p><a href="https://nodejs.org/en/download/">Node.JS</a></p>
<pre><code>node --version
</code></pre><p>Update npn</p>
<pre><code>npm install npm@latest -g
</code></pre><p>Ensure that Git is installed.</p>
<pre><code>git --version
</code></pre><p>If it isn&#39;t, you can find it on the <a href="https://git-scm.com/downloads">Git downloads page</a>.</p>
<p>Install the latest version of Bower.</p>
<pre><code>npm install -g bower
</code></pre><h3 id="remove-old-polymer-install-new-polymer-">Remove old Polymer, install new Polymer.</h3>
<p><a href="https://www.polymer-project.org/blog/2018-04-12-polymer-3-tools-update.html">Polymer 3.0 Tools Update</a></p>
<pre><code>npm uninstall -g polymer-cli
npm install -g polymer-cli@next
</code></pre><h2 id="create-repository">Create Repository</h2>
<h3 id="create-a-github-repository">Create a GitHub repository</h3>
<h3 id="configuring-publishing-source">Configuring publishing source</h3>
<ul>
<li>Create a /docs/index.html file in the repository containing the one line <code>Hello World!</code>.</li>
<li>Create a /docs/CNAME file containing your custom domain.</li>
</ul>
<p><a href="https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/">Configuring a publishing source for GitHub Pages</a>
You can now go to your project settings tab and go to GitHub pages and select /docs, enter your custom domain, do not enforce https.</p>
<h3 id="configure-cloudflare-to-enforce-https">Configure Cloudflare to enforce https</h3>
<p><a href="https://www.cloudflare.com">www.cloudflare.com</a>
Once every thing is set up properly and propagated, you can go back to GitHub settings and enforce https.</p>
<p>You should now be able to browse your custom domain securely and see <strong>Hello World!</strong></p>
<h3 id="clone-repository">Clone repository</h3>
<p>You will now need to clone the repository as a GO project in your <strong>%gopath%/src</strong> path. I cloned mine in <strong>go/src/davsk.net</strong> resulting in a <strong>go/src/davsk.net/website/</strong> directory.</p>
<h3 id="init-polymer">Init Polymer</h3>
<p>In your project directory, you will now init Polymer.</p>
<pre><code>polymer init
</code></pre><p>Select the starting template. For this project, I am using Starter-Kit.</p>

      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
