import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.appColors.primaryColor,
    color: theme.appColors.white,
  },
  img: {
    color: theme.appColors.white,
  },
  none: {},
  text: {
    fontWeight: 'bold',
    opacity: 0.65,
    fontSize: 20,
    lineHeight: '160%',
    margin: theme.spacing(2, 0, 0, 2),
  },
}));
