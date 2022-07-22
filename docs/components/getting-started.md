
# Getting Started

---

We are using Material UI as base for our library. Material-UI is available as an [npm package.](https://www.npmjs.com/package/@material-ui/core)

## npm

To install and save in your [package.json](package.json) dependencies, run:



Missing parser for block type Code

 

Please note that react >= 16.8.0 and react-dom >= 16.8.0 are peer dependencies.

## Roboto Font

Material-UI was designed with the Roboto font in mind. So be sure to follow these instructions. For instance, via Google Web Fonts:



Missing parser for block type Code

 

## Font Icons

In order to use the font Icon component, you must first add the Material icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:



Missing parser for block type Code

 

## SVG Icons

In order to use prebuilt SVG Material icons, such as those found in the icons demos you must first install the @material-ui/icons package:



Missing parser for block type Code

 

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

Of course, you can also show extended view, with all the addons:

Finally, if something breaks, for example, you provide incorrect URL or you are behind VPN, we will show and error which you can customize from the settings.