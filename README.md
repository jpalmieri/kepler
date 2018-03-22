## (former) Kepler452b.org website

A slightly modified [Victor-Hugo](https://github.com/netlify/victor-hugo) build setup, opting for Sass instead of PostCSS.

### Local Development

[Hugo](https://gohugo.io/) and [Node](https://nodejs.org/en/) are dependencies. If you're developing on a Mac, you can install both with [Homebrew](https://brew.sh/):

`brew install hugo node`

Then clone the repo, install the packages, and start the dev server:

```
git clone https://github.com/keplerites/kepler.git`
npm install
npm start
```

🚀 [http://localhost:3000](http://localhost:3000)

Gulp will watch for any changes to local files, and will reload your page automatically (using Browsersync) when a change is noticed.

You may want to check out the [Victor-Hugo](https://github.com/netlify/victor-hugo) and [Hugo](https://gohugo.io/documentation/) docs for more info on the build process.

### Deploy

This site is no longer live, so no deploy is needed at this time.

However, dev branches will be deployed to [Netlify](https://www.netlify.com/). The build of the master branch is at https://kepler.netlify.com, while the dev branches are deployed to https://<branch>--kepler.netlify.com (e.g., https://cool-new-feature--kepler.netlify.com).

[Create an issue](https://github.com/keplerites/kepler/issues/new) if you need access to the admin.
