import { useRouter } from "next/router";

const Page = () => {
  const { query } = useRouter();
  if (query.slug === "page-a") return <div>This page works</div>;
  return <div>This page may not work</div>;
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
