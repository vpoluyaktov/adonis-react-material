# Adonis-React application

This is an unofficial boilerplate for [AdonisJs](https://adonisjs.com/) API with a [ReactJS](https://reactjs.org/) frontend and [Material-UI](https://material-ui.com) framework

## Setup

You can manually clone the repo and then run `npm install`, or you can do it the Adonis way:

First, install the cli tool globally:

```bash
npm i -g @adonisjs/cli
```

And then to create a project:

```bash
adonis new <name> --blueprint=vpoluyaktov/adonis-react-material
```

#### Development:
To start developing your app, do:

```js
cd <name>

# install React dependencies 
cd client; npm install; cd..

# run dev server
npm run start
```

This will concurrently serve AdonisJS API server on http://localhost:3333 and launch React dev server on http://localhost:3000 for rontend assets
