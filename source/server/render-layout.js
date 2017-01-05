export default ({ settings, html, css, initialState }) =>
  `
    <!doctype html>
    <html>
      <head>
        <title>${settings.TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="theme-color" content="#ffffff">
        <style>
          html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0;font:16px/1 Dosis, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}blockquote,figure,h1,h2,h3,h4,ol,p,ul{margin:0;padding:0}li,main{display:block}h1,h2,h3,h4{font-size:inherit}strong{font-weight:700}a,button{color:inherit;transition:.3s}a{text-decoration:none}button{overflow:visible;border:0;font:inherit;-webkit-font-smoothing:inherit;letter-spacing:inherit;background:0 0;cursor:pointer}::-moz-focus-inner{padding:0;border:0}:focus{outline:0}img{max-width:100%;height:auto;border:0}button{outline: 0}
        </style>
        <style data-aphrodite>${css.content}</style>
      </head>
      <body>
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
        <script>
         WebFont.load({
            google: {
              families: ['Dosis:400,500,700']
            }
          });
        </script>
        <div id='root'>${html}</div>
        <script>
          window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
          window.BOOTSTRAP_CLASSNAMES = ${JSON.stringify(css.renderedClassNames)};
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
