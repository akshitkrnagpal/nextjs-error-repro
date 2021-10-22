import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useNavigationLoading = () => {
  const [loading, setLoading] = useState(false);
  const timer = useRef();
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      timer.current = setTimeout(() => setLoading(true), 100);
    };
    const end = () => {
      if (timer.current) clearTimeout(timer.current);
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  return loading;
};

export default useNavigationLoading;
