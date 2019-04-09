import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

	render() {
		return (
			<html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
					<link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet" />
					<link rel="stylesheet" href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css"/>
					<link rel="stylesheet" href="/static/css/global-overrides.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}