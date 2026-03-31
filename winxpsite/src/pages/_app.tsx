import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Provider, useSelector } from "react-redux";
import store, { persistor } from "@/redux/store";
import { Analytics } from "@vercel/analytics/react";
import { PersistGate } from "redux-persist/integration/react";
import { RootState } from "@/types";

const Tahoma = localFont({
  src: [
    {
      path: "../../fonts/Tahoma Bold V1.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../fonts/Tahoma V1.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

function ThemedApp({ Component, pageProps }: AppProps) {
  const theme = useSelector((state: RootState) => state.system?.theme ?? "luna-blue");
  return (
    <main className={`${Tahoma.className} theme-${theme}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div style={{ background: "#5a7fdc", width: "100vw", height: "100vh" }} />} persistor={persistor}>
        <ThemedApp {...props} />
      </PersistGate>
    </Provider>
  );
}
