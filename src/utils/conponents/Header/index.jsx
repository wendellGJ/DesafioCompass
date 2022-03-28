import { Grid } from '@mui/material';
import images from '../../assets/images';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.bg}>
      <Grid item>
        <img src={images.iconFooter} alt="logo" className={classes.img} />
      </Grid>
    </Grid>
  );
}
