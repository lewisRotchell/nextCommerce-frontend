import type { InferGetStaticPropsType } from "next";
import { Layout } from "../components/Layout";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div>{products}</div>
    </Layout>
  );
}

export async function getStaticProps() {
  const products = [1, 2, 3];

  return {
    props: {
      products,
    },
    revalidate: 1,
  };
}
