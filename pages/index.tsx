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
import { IProduct } from "../types/product";
import Image from "next/image";
import NextLink from "next/link";

export default function Home({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(products);

  <p>{products[0].name}</p>;

  return (
    <Layout>
      <div>
        <Typography component="h1">Latest Products</Typography>

        {products && (
          <Grid container spacing={3}>
            {products.map((product: IProduct) => {
              return (
                <Grid item xs={6} sm={4} md={3} key={product.id}>
                  <Card
                    style={{
                      position: "relative",
                      maxWidth: "290px",
                    }}
                  >
                    <NextLink href={`/product/${product.slug}`} passHref>
                      <CardActionArea>
                        <CardMedia title={product.name}>
                          <div
                            style={{
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            {product.image && (
                              <Image
                                src={product.image.formats.medium.url}
                                width={290}
                                height={435}
                                quality={75}
                              />
                            )}
                          </div>
                        </CardMedia>
                        <CardContent>
                          <Typography>{product.name}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </NextLink>
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
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API_URL}/products?_sort=created_at:ASC`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
