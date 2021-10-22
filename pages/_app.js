import useNavigationLoading from "hooks/useNavigationLoading";

const MyApp = ({ Component, pageProps }) => {
  const loading = useNavigationLoading();

  return loading ? <div>Loading...</div> : <Component {...pageProps} />;
};

export default MyApp;
