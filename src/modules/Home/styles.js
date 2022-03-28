import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    minHeight: '100vh',
    minWidth: 220,
    backgroundColor: '#EEEEEE',
  },

  root: {
    backgroundColor: '#FAFAFA',
  },
  page: {
    padding: '32px !important',
  },
  titlePage: {
    fontSize: 24,
    color: '#DB3F7A',
  },
  img: {
    color: '#DB3F7A',
    paddingTop: theme.spacing(1),
    fontSize: 24,
    marginRight: theme.spacing(2),
  },
  Divider: {
    width: 'inherit',
    margin: theme.spacing(2, 0, 2, 0),
  },
}));
