import "../public/vendor/bootstrap/css/bootstrap.min.css"
import "../public/vendor/fontawesome-free/css/all.min.css"
import "../public/vendor/animate/animate.compat.css"
import "../public/vendor/simple-line-icons/css/simple-line-icons.min.css"
import "../public/vendor/owl.carousel/assets/owl.carousel.min.css"
import "../public/vendor/owl.carousel/assets/owl.theme.default.min.css"
import "../public/vendor/magnific-popup/magnific-popup.min.css"
import "../public/vendor/bootstrap-star-rating/css/star-rating.min.css"
import "../public/vendor/bootstrap-star-rating/themes/krajee-fas/theme.min.css"

import "../public/css/theme.css";
import "../public/css/theme-elements.css";
import "../public/css/theme-blog.css";
import "../public/css/theme-shop.css";

import "../public/css/skins/default.css"

import "../public/css/custom.css"

{/* <script src="/vendor/modernizr/modernizr.min.js"></script> */}

import type { AppProps } from 'next/app'
import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout><Component {...pageProps} /></Layout>
}
