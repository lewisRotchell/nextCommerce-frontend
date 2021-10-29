import { GetServerSidePropsContext } from "next";
import { IProduct } from "../../types/product";
import React from "react";
import NextLink from "next/link";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import {
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
} from "@material-ui/core";
import useStyles from "../../utils/styles";

interface ProductProps {
  product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const classes = useStyles();
  console.log(product);

  if (!product) {
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Image
            src={product.image.formats.medium.url}
            width={436}
            height={654}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={4} xs={12}>
          <List>
            <ListItem>
              <Typography>{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: ({`${product.reviews.length} Reviews`})
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Price: £{product.price}</Typography>
            </ListItem>

            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Typography>Price: £{product.price}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Status:{" "}
                  {product.count_in_stock > 0 ? "In Stock" : "Out Of Stock"}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Qty:</Typography>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Product;

export async function getServerSideProps({
  query: { slug },
}: GetServerSidePropsContext<{ slug: string }>) {
  const res = await fetch(`${process.env.API_URL}/products?slug=${slug}`);
  const product = await res.json();

  return {
    props: {
      product: product[0] ?? null,
    },
  };
}
