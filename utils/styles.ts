import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "hsl(var(--clr-dark))",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
    fontFamily: "Roboto",
  },
  footer: {
    textAlign: "center",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
});

export default useStyles;
