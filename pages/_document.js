import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    {/* sass編譯後的檔案位置需要引入 */}
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    {/* 這個權限最高 */}
                    {/* <style>{`body { background-color: blue }`}</style> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
