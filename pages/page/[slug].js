const Page = () => {
  return <div>Something Wrong</div>;
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
