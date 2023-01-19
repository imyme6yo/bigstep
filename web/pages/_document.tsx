import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Bigstep to Web3.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
};

export default Document;
