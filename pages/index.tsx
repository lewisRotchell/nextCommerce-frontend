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
import Image from "next/image";

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
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <Card
                  style={{
                    position: "relative",
                    maxWidth: "290px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      // component="img"
                      // image={product.image.formats.small.url}
                      title={product.name}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        {product.image && (
                          <Image
                            src={product.image.formats.medium.url}
                            // layout="fill"
                            // objectFit="cover" // or objectFit="cover"
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
    `${process.env.API_URL}/products?_sort=created_at:ASC`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
