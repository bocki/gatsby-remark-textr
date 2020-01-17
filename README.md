# gatsby-remark-textr

Processes text from Markdown files with [textr](https://github.com/A/textr)

## Configuring

gatsby-remark-textr needs to be added as a plugin in `gatsby-config.js`. This example will use textr to add typographic quotes as used in German language and replace ellipses: 

```
...

plugins: [
  {
    resolve: `gatsby-remark-textr`,
    options: {
      textrplugins: [`typographic-quotes`, `typographic-ellipses`],
      config: { locale: `de` },
    }
  },
]

...
```

Note that you will also need to `npm install` both `typographic-quotes` and `typographic-ellipses` for this example to work correctly.