# Exercise 4

It's time you learn how to setup a project.

The tool we used so far to setup these exercises is called [Vite](https://vitejs.dev/).
It takes care of running our dev-server and _bundling_ our dependencies. So far we haven't used any dependencies, but we'll surely use some libraries like [Tone.js](https://tonejs.github.io/) in the very near future.

First create a file called `package.json` and paste the following content into it:

```json
{
  "name": "<your-project-name>",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.4.5"
  }
}
```

This file discribes our project and its dependencies. So far we're only using `vite`. In the `script` part we can define custom scripts, you are already familiar with the `npm run dev` command, here we define what this command actually does and - as you can see - it calls `vite`. This is all we need to know for now.

Now you can go ahead and run `npm install` to install the dependencies. This will also create a file called `package-lock.json` which records all the dependencies and their specific versions, we don't need to touch this file at all. It creates a folder called `node_modules` wich will include all of our dependencies and can get very large. Allthough we do not have to touch these files directly, if there is a problem with your project sometimes it's good to delete both the `package-lock.json` file and the `node_modules` folder and run `npm install` again.

As a next step we are going to create a folder called `src` where our source-code will live.

Inside the `src` folder create a file called `index.html` and `index.js`.

Copy the necessary boiler-plate into the `index.html` file and don't forget to add the `index.js` with a `<script>` tag.

The last thing that we need to do is tell `vite` where our files are. For this you can create a file called `vite.config.js` (inside the root folder where the `package.json` files is, **not** inside `src`).

Paste the following content into `vite.config.js`:

```js
export default {
  root: "src",
};
```

This will tell vite the the entry point to our page (`index.html`) lives in a folder called `src`.

Now go ahead and run `npm run dev` and you should be ready to go. If something is wrong read the instructions again carefully, if it still doesn't work feel free to write me an email but make sure to copy the specific error you get.

If it works, congratulations! Now you know how to setup a project, in the future we'll see how we can include more dependencies and eventually "bundle" our code for "release".
