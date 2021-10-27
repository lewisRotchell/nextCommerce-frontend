import {
  CardActionArea,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import type {
  InferGetStaticPropsType,
  InferGetServerSidePropsType,
} from "next";
import { Layout } from "../components/Layout";
import { Product } from "../types/product";

export default function Home({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(products);

  <p>{products[0].name}</p>;

  return (
    <Layout>
      <div>
        <h1>Latest Products</h1>

        <Grid container spacing={3}>
          {products.map((product: Product) => {
            return (
              <Grid item md={4} key={product.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image.formats.medium.url}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography>£{product.price}</Typography>
                    <Button size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API_URL}/products?_sort=created_at:ASC&_limit=6`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
