import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextCommerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>NextCommerce</Typography>
        </Toolbar>
      </AppBar>
      <Container> {children} </Container>
      <footer>
        <Typography>All rights reserved. NextCommerce</Typography>
      </footer>
    </>
  );
};
