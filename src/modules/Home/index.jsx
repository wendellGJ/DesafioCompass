import { CircularProgress, Divider, Grid, Typography } from '@mui/material';
import Footer from '../../utils/conponents/Footer';
import Sidebar from '../../utils/conponents/SideBar/idex';
import Header from '../../utils/conponents/Header/index';
import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container wrap="nowrap">
        <Grid item xs={2} className={classes.sidebarContainer}>
          <Sidebar />
        </Grid>
        <Grid item container direction="column" justifyContent="space-between" alignItems="stretch" xs={10}>
          <h1>conteudo</h1>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
