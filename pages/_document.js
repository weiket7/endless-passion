/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          id="googleFonts"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light%7CPlayfair+Display:400&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <script src="vendor/modernizr/modernizr.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
