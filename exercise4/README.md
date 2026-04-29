# Exercise 4

_To preview the file in VSCodium press CMD + Shift + V_

It's time you learn how to setup a project.

The tool I used so far to setup these exercises is called [Vite](https://vitejs.dev/).
It takes care of running our dev-server and _bundling_ our dependencies.

Now you should learn how to setup a project yourself!s

First navigate to this folder in your terminal:

```sh
cd exercise4
```

Once you are in this folder you can run the following command:

```sh
npm create vite@latest .
```

(Don't forget the dot at the end. It means: create the project in the current folder.)

Then you will be asked a few questions. You can use the arrow keys to select an answer and hit enter to confirm.

```
◆  Current directory is not empty. Please choose how to proceed:
│  ○ Cancel operation
│  ○ Remove existing files and continue
│  ● Ignore files and continue
└
```

Choose "ignore files and continue".

```
◆  Select a framework:
│  ● Vanilla
│  ○ Vue
│  ○ React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Ember
│  ...
└
```

Choose "Vanilla". Vite supports many different so-called frameworks, but we don't care about this. Vanilla just means _regular old JavaScript_.

```
◆  Select a variant:
│  ○ TypeScript
│  ● JavaScript
└
```

Choose "JavaScript".

```
◆  Install with npm and start now?
│  ○ Yes / ● No
└
```

For now let's choose "No". Later, you choose "yes", but for now we go step by step.

If you look at the folder now you will see that it generated some files:

.
├── index.html
├── package.json
├── public
│   ├── favicon.svg
│   └── icons.svg
├── README.md
└── src
    ├── assets
    ├── counter.js
    ├── main.js
    └── style.css

Go ahead and open the `package.json` file. This file describes our project. You can see `vite` as a dependency there. And you can also see the `scripts`, these are `npm` commands that we can use. Go ahead and enter into your terminal

```sh
npm install
```

This will look at `package.json` and install the necessary dependencies.

Then go ahead and run:

```sh
npm run dev
```

This starts the development server using `vite`. Now you can go to http://localhost:5173 and take a look at your page.

You will see that `vite` creates a kind of example page. But we don't really want that, we want to start from a blank slate. So go ahead and delete everything that you see crossed out here:

.
├── index.html
├── package-lock.json
├── package.json
├── ~~public~~
│   ├── ~~favicon.svg~~
│   └── ~~icons.svg~~
├── README.md
└── src
    ├── assets
    │   ├── ~~hero.png~~
    │   ├── ~~javascript.svg~~
    │   └── ~~vite.svg~~
    ├── ~~counter.js~~
    ├── main.js
    └── ~~style.css~~

Then go ahead and open `main.js`, select everything and delete it.

Now you are ready to go with a nice setup.

If at any point you want to stop the development server, go into the terminal where it's running and hit Ctrl + C.