import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <style>{`body { background-color: pink } /* custom! */`}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
