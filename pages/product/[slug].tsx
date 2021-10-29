import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { IProduct } from "../../types/product";
import React from "react";

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  console.log(product);
  return <div></div>;
};

export default Product;

export async function getServerSideProps({
  query: { slug },
}: GetServerSidePropsContext<{ slug: string }>) {
  const res = await fetch(`${process.env.API_URL}/products?slug=${slug}`);
  const product = await res.json();

  return {
    props: {
      product: product,
    },
  };
}
