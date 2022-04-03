# temperature-data

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

To build app for production add configuration below

  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: 'index.html'

For github pages you need to change public path like this

  publicPath: process.env.NODE_ENV === 'production'
    ? '/name-of-your-app/'
    : '/',