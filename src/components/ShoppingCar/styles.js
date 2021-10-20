import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  fab: {
    marginTop: theme.spacing(2),
    backgroundColor: "red",
  },
  // absolute: {
  //   position: "absolute",
  //   bottom: theme.spacing(2),
  //   right: theme.spacing(3),
  // },
}));
