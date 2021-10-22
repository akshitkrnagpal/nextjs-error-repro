import { useRouter } from "next/router";

const Page = () => {
  const { asPath } = useRouter();
  const url = new URL(asPath, "https://example.com");
  return (
    <Head>
      <link rel="canonical" href={url.href} />
    </Head>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      revalidate: 60,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: "page-a" } }],
    fallback: "blocking",
  };
};

export default Page;
