import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // add space so the navbar doesn't cover the products
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
