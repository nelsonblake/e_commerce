import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '100%',
    transition: 'transform 0.15s ease-in-out',
  },
  cardHovered: {
    transform: 'scale3d(1.05, 1.05, 1)',
  },
  media: {
    height: '0',
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
