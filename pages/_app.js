import { subtract } from "lodash";

const MyApp = ({ Component, pageProps }) => {
  console.log(subtract(4, 2));
  return <Component {...pageProps} />;
};

export default MyApp;
