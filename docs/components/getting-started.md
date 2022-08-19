
# Getting Started

---

We are using Material UI as base for our library. Material-UI is available as an [npm package.](https://www.npmjs.com/package/@material-ui/core)

## npm

To install and save in your [package.json](package.json) dependencies, run:

```javascript  
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core  
```

Please note that react >= 16.8.0 and react-dom >= 16.8.0 are peer dependencies.

## Roboto Font

Material-UI was designed with the Roboto font in mind. So be sure to follow these instructions. For instance, via Google Web Fonts:

```javascript  
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />  
```

## Font Icons

In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:

```javascript  
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />  
```

## SVG Icons

In order to use prebuilt SVG Material icons, such as those found in the icons demos you must first install the @material-ui/icons package:

```javascript  
// with npm
npm install @material-ui/icons

// with yarn
yarn add @material-ui/icons  
```

## CDN

You can start using Material-UI with minimal Front-end infrastructure, which is great for prototyping.

Two Universal Module Definition (UMD) files are provided:

one for development: `https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js`

one for production: `https://unpkg.com/@material-ui/core@latest/umd/material-ui.production.min.js`

You can follow this CDN example to quickly get started.

⚠️ Using this approach in production is discouraged though - the client has to download the entire library, regardless of which components are actually used, affecting performance and bandwidth utilization.

⚠️ The UMD links are using the latest tag to point to the latest version of the library. This pointer is unstable, it shifts as we release new versions. You should consider pointing to a specific version, such as v4.4.0.

## Library Examples

We provide several examples inside this documentation. Look at them all, right now!

## Storybook

We are also using Storybook to maintain our components. Here you can see an example of embedded Storybook component, using just plain preview.

  
[Open Storybook Canvas](https://6131005534611f003a08a058-hakptbtnzg.chromatic.com/iframe.html?id=example-header--logged-in&viewMode=story&full=1&addons=0&stories=0&panel=false&nav=false)  


Of course, you can also show extended view, with all the addons:

  
[Open Storybook Canvas](https://6131005534611f003a08a058-hakptbtnzg.chromatic.com?addons=1&stories=0&panel=true&nav=false&path=%2Fstory%2Fexample-header--logged-in)  


Finally, if something breaks, for example, you provide incorrect URL or you are behind VPN, we will show and error which you can customize from the settings.

  
[Open Storybook Canvas](https://corrupted-url.somedomain.io)  
