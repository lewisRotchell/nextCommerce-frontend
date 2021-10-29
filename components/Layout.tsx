import React, { ReactNode } from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";

interface LayoutProps {
  title?: string;
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title ? `${title} - NextCommerce` : `NextCommerce`}</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              {" "}
              <Typography className={classes.brand}>NextCommerce</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>
                <Typography display="inline">Cart</Typography>
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>
                <Typography display="inline">Login</Typography>
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main} component="main">
        {" "}
        {children}{" "}
      </Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. NextCommerce</Typography>
      </footer>
    </>
  );
};
