import { Html, Head, Main, NextScript } from "next/document";

import { nextConf } from "@/config/next.conf";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src={`${nextConf.basePath}/js/jquery.min.js`} defer />
      </body>
    </Html>
  );
}
