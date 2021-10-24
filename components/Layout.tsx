import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../utils/styles";

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>NextCommerce</title>
      </Head>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>NextCommerce</Typography>
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
