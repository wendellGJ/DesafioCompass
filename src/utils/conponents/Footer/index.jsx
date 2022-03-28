import { Grid } from '@mui/material';
import images from '../../assets/images';
import { useStyles } from './styles';

function Footer() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justifyContent="flex-end" alignItems="center" className={classes.bg}>
      <img src={images.iconFooter} alt="logo" className={classes.img} />
    </Grid>
  );
}

export default Footer;
