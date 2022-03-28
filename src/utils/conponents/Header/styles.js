import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  bg: {
    height: theme.spacing(9),
    background: 'linear-gradient(110.23deg, #E71D73 0%, #29235C 98.26%)',
  },
  img: {
    height: theme.spacing(9),
    paddingLeft: 20,
  },
  power: {
    color: '#FFFFFF',
    paddingRight: 20,
    cursor: 'pointer',
  },
}));
