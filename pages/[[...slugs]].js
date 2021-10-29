import { useRouter } from "next/router";
import Link from "next/link";

const Page = () => {
  const { route, asPath } = useRouter();
  return (
    <div>
      {JSON.stringify({ route, asPath }, null, 2)}
      <Link href={route} as={asPath} passHref>
        <a>Link</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Page;
