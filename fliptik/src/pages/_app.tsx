import { type AppType } from "next/app";

import { api } from "lib/utils/api";

import "lib/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
