import "../styles/app.scss";
import { PageLayout } from "../components/PageLayout";
import {StateContext} from "../context/StateContext";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(()=>{},[Component])
  return (
    <StateContext>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </StateContext>
  );
}

export default MyApp;
