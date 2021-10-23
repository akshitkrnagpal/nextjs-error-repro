import useNavigationLoading from "../src/hooks/useNavigationLoading";

const MyApp = ({ Component, pageProps }) => {
  const loading = useNavigationLoading();

  return loading ? <div>Loading...</div> : <Component {...pageProps} />;
};

export default MyApp;
