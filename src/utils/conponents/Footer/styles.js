import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  bg: {
    height: theme.spacing(8),
    width: 'inherit',
    backgroundColor: '#FFFFFF',
  },
  img: { paddingRight: theme.spacing(2) },
}));
