import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />

          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Serif+Pro"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />

          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/android-192x192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="/static/apple-touch-icon-180x180.png"
            sizes="180x180"
          />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />

          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/global-overrides.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
