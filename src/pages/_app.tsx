import type { AppProps } from "next/app";
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "@/styles/global.scss"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
